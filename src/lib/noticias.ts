import Papa from "papaparse";
import type { Noticia } from "./types";

/**
 * Genera un slug URL-friendly a partir de un texto.
 * Ejemplo: "Día del Estudiante 2026" → "dia-del-estudiante-2026"
 */
function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // eliminar acentos
        .replace(/[^a-z0-9\s-]/g, "") // solo alfanuméricos, espacios y guiones
        .trim()
        .replace(/\s+/g, "-") // espacios → guiones
        .replace(/-+/g, "-"); // múltiples guiones → uno
}

/**
 * Interfaz que representa una fila raw del CSV de Google Sheets.
 * Los nombres de columna deben coincidir con los encabezados del Sheet.
 */
interface SheetRow {
    Titulo?: string;
    Fecha?: string;
    Contenido?: string;
    Imagen_Inicio?: string;
    Imagen_Final?: string;
    Slug?: string;
    Imagen_Hero?: string;
    Boton_Link?: string;
    Boton_Texto?: string;
    Hero_Filtro_Color?: string;
    Hero_Filtro_Activo?: string;
}

/** Configuración del hero extraída del Sheet */
export interface HeroConfig {
    image: string;
    filterColor: string;
    filterActive: boolean;
}

/** Resultado de parsear el Sheet completo */
interface SheetData {
    noticias: Noticia[];
    heroConfig: HeroConfig;
}

/**
 * Función interna que hace fetch y parsea todo el Sheet.
 * Retorna tanto las noticias como la imagen hero.
 */
async function fetchSheetData(): Promise<SheetData> {
    const csvUrl = process.env.GOOGLE_SHEETS_CSV_URL;

    if (!csvUrl) {
        console.warn(
            "[noticias] GOOGLE_SHEETS_CSV_URL no está configurada en las variables de entorno."
        );
        return { noticias: [], heroConfig: { image: "", filterColor: "", filterActive: true } };
    }

    try {
        const response = await fetch(csvUrl, { next: { revalidate: 3600 } });

        if (!response.ok) {
            console.error(
                `[noticias] Error al obtener CSV: ${response.status} ${response.statusText}`
            );
            return { noticias: [], heroConfig: { image: "", filterColor: "", filterActive: true } };
        }

        const csvText = await response.text();

        const parsed = Papa.parse<SheetRow>(csvText, {
            header: true,
            skipEmptyLines: true,
            transformHeader: (header: string) => header.trim(),
        });

        if (parsed.errors.length > 0) {
            console.warn("[noticias] Errores de parseo CSV:", parsed.errors);
        }

        // Extraer configuración del hero (primer valor no vacío de cada columna)
        const heroRow = parsed.data.find(
            (row) => row.Imagen_Hero && row.Imagen_Hero.trim() !== ""
        );
        const heroImage = heroRow?.Imagen_Hero?.trim() || "";

        // Filtro del hero
        const filtroColorRow = parsed.data.find(
            (row) => row.Hero_Filtro_Color && row.Hero_Filtro_Color.trim() !== ""
        );
        const filterColor = filtroColorRow?.Hero_Filtro_Color?.trim() || "";

        const filtroActivoRow = parsed.data.find(
            (row) => row.Hero_Filtro_Activo && row.Hero_Filtro_Activo.trim() !== ""
        );
        const filtroActivoVal = filtroActivoRow?.Hero_Filtro_Activo?.trim().toLowerCase() || "";
        // Por defecto activo, solo se desactiva con "no" o "false"
        const filterActive = filtroActivoVal !== "no" && filtroActivoVal !== "false";

        const heroConfig: HeroConfig = { image: heroImage, filterColor, filterActive };

        // Extraer noticias
        const noticias: Noticia[] = parsed.data
            .filter((row) => row.Titulo && row.Titulo.trim() !== "")
            .map((row) => ({
                slug: row.Slug?.trim() || slugify(row.Titulo || ""),
                titulo: row.Titulo?.trim() || "",
                fecha: row.Fecha?.trim() || "",
                contenido: row.Contenido?.trim() || "",
                imagenInicio: row.Imagen_Inicio?.trim() || "",
                imagenFinal: row.Imagen_Final?.trim() || "",
                botonLink: row.Boton_Link?.trim() || "",
                botonTexto: row.Boton_Texto?.trim() || "",
            }));

        return { noticias, heroConfig };
    } catch (error) {
        console.error("[noticias] Error al obtener o parsear noticias:", error);
        return { noticias: [], heroConfig: { image: "", filterColor: "", filterActive: true } };
    }
}

/**
 * Obtiene todas las noticias del Google Sheet.
 */
export async function fetchNoticias(): Promise<Noticia[]> {
    const { noticias } = await fetchSheetData();
    return noticias;
}

/**
 * Obtiene una noticia individual por su slug.
 * Retorna undefined si no se encuentra.
 */
export async function getNoticiaBySlug(
    slug: string
): Promise<Noticia | undefined> {
    const noticias = await fetchNoticias();
    return noticias.find((n) => n.slug === slug);
}

/**
 * Obtiene la configuración del hero desde el Google Sheet.
 * Incluye imagen, color del filtro y estado activo/inactivo.
 */
export async function fetchHeroConfig(): Promise<HeroConfig> {
    const { heroConfig } = await fetchSheetData();
    return heroConfig;
}
