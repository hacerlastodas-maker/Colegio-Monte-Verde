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

// TODO: DEMO — Datos de ejemplo. Eliminar cuando el Google Sheet tenga datos reales.
const SAMPLE_NOTICIAS: Noticia[] = [
    {
        slug: "inicio-ano-escolar-2026",
        titulo: "Inicio Año Escolar 2026",
        fecha: "03/03/2026",
        contenido:
            "Damos la más cálida bienvenida a todos nuestros alumnos, familias y equipo docente al nuevo año escolar 2026. Este año viene cargado de proyectos innovadores, talleres medioambientales y nuevas experiencias de aprendizaje que fortalecerán el desarrollo integral de nuestros estudiantes.\n\nEl acto de inauguración se realizó en el patio central del colegio, con la participación de toda la comunidad educativa. La directora, Diva Arce Orellana, destacó los logros del año anterior y presentó los principales desafíos para este período.\n\nEntre las novedades de este año se encuentran nuevos talleres de robótica educativa, un programa de huerto escolar ampliado y la incorporación de actividades de educación emocional en todos los niveles.",
        imagenInicio:
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
        imagenFinal:
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
        botonLink: "https://colegiomonteverde.cl",
        botonTexto: "Ver Calendario Escolar",
    },
    {
        slug: "taller-medio-ambiente-chiloe",
        titulo: "Taller de Medio Ambiente: Descubriendo Chiloé",
        fecha: "15/03/2026",
        contenido:
            "Nuestros alumnos de 5° a 8° básico participaron en un enriquecedor taller de educación ambiental enfocado en los ecosistemas únicos de Chiloé. La actividad incluyó una salida pedagógica al humedal cercano al colegio, donde los estudiantes pudieron observar aves nativas y aprender sobre la importancia de la conservación.\n\nEl taller fue dirigido por la profesora de ciencias junto a un biólogo marino invitado, quien compartió su experiencia investigando la biodiversidad del archipiélago. Los alumnos realizaron registros fotográficos y elaboraron informes que serán presentados en la feria científica escolar del próximo mes.",
        imagenInicio:
            "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=800&q=80",
        imagenFinal:
            "https://images.unsplash.com/photo-1518173946687-a4c05826c9ec?auto=format&fit=crop&w=800&q=80",
        botonLink: "",
        botonTexto: "",
    },
    {
        slug: "dia-convivencia-escolar",
        titulo: "Día de la Convivencia Escolar",
        fecha: "20/03/2026",
        contenido:
            "En el marco del Día de la Convivencia Escolar, nuestro colegio organizó una jornada especial con actividades recreativas, dinámicas grupales y un conversatorio sobre respeto y tolerancia. Participaron alumnos de todos los niveles junto a sus profesores jefes.\n\nLa encargada de Convivencia Escolar, Virginia Serey Ampuero, lideró las actividades que incluyeron juegos cooperativos, creación de murales colectivos y la lectura del manifiesto de convivencia redactado por los propios estudiantes.\n\nLa jornada cerró con una presentación artística preparada por los alumnos de pre-kinder y kinder, quienes interpretaron canciones sobre la amistad y el compañerismo.",
        imagenInicio:
            "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=80",
        imagenFinal: "",
        botonLink: "",
        botonTexto: "",
    },
];


/**
 * Obtiene todas las noticias del Google Sheet.
 */
export async function fetchNoticias(): Promise<Noticia[]> {
    const { noticias } = await fetchSheetData();
    // TODO: DEMO — Usar datos de ejemplo si el Sheet está vacío. Eliminar cuando haya datos reales.
    return noticias.length > 0 ? noticias : SAMPLE_NOTICIAS;
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
