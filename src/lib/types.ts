/**
 * Tipos para el sistema de noticias del CMS (Google Sheets CSV).
 */
export interface Noticia {
    /** Slug generado a partir del título (URL-friendly) */
    slug: string;
    /** Título de la noticia */
    titulo: string;
    /** Fecha de publicación (formato legible, ej. "01/03/2026") */
    fecha: string;
    /** Cuerpo/contenido de la noticia */
    contenido: string;
    /** URL de la imagen principal (se muestra al inicio del artículo) */
    imagenInicio: string;
    /** URL de la imagen secundaria (se muestra al final del artículo) */
    imagenFinal: string;
    /** URL del botón de acción personalizado (opcional) */
    botonLink: string;
    /** Texto del botón de acción personalizado (opcional) */
    botonTexto: string;
}
