/**
 * Utilidades para detectar y transformar URLs de medios (imágenes vs videos embebibles).
 */

/** Patrones de URLs de video embebible conocidas */
const VIDEO_PATTERNS = [
    /player\.vimeo\.com\/video\//i,
    /vimeo\.com\/\d+/i,
    /youtube\.com\/embed\//i,
    /youtube\.com\/watch\?v=/i,
    /youtu\.be\//i,
    /youtube-nocookie\.com\/embed\//i,
];

/**
 * Determina si una URL corresponde a un video embebible.
 */
export function isVideoUrl(url: string): boolean {
    if (!url) return false;
    return VIDEO_PATTERNS.some((pattern) => pattern.test(url));
}

/**
 * Convierte una URL de video a su formato embed si es necesario.
 * - Vimeo: `vimeo.com/123456` → `player.vimeo.com/video/123456`
 * - YouTube watch: `youtube.com/watch?v=ID` → `youtube.com/embed/ID`
 * - YouTube short: `youtu.be/ID` → `youtube.com/embed/ID`
 * - Ya en formato embed: se devuelve sin cambios.
 */
export function toEmbedUrl(url: string): string {
    if (!url) return url;

    // Ya es un embed de Vimeo player
    if (/player\.vimeo\.com\/video\//i.test(url)) {
        return url;
    }

    // Vimeo normal → player embed
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/i);
    if (vimeoMatch) {
        return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }

    // Ya es un embed de YouTube
    if (/youtube\.com\/embed\//i.test(url) || /youtube-nocookie\.com\/embed\//i.test(url)) {
        return url;
    }

    // YouTube watch → embed
    const ytWatchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/i);
    if (ytWatchMatch) {
        return `https://www.youtube.com/embed/${ytWatchMatch[1]}`;
    }

    // YouTube short → embed
    const ytShortMatch = url.match(/youtu\.be\/([^?]+)/i);
    if (ytShortMatch) {
        return `https://www.youtube.com/embed/${ytShortMatch[1]}`;
    }

    return url;
}

/**
 * Extrae el ID del video de una URL de Vimeo o YouTube.
 */
function extractVideoId(url: string): { platform: "vimeo" | "youtube"; id: string } | null {
    if (!url) return null;

    // Vimeo player embed
    const vimeoPlayerMatch = url.match(/player\.vimeo\.com\/video\/(\d+)/i);
    if (vimeoPlayerMatch) return { platform: "vimeo", id: vimeoPlayerMatch[1] };

    // Vimeo normal
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/i);
    if (vimeoMatch) return { platform: "vimeo", id: vimeoMatch[1] };

    // YouTube embed
    const ytEmbedMatch = url.match(/youtube(?:-nocookie)?\.com\/embed\/([^?&/]+)/i);
    if (ytEmbedMatch) return { platform: "youtube", id: ytEmbedMatch[1] };

    // YouTube watch
    const ytWatchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/i);
    if (ytWatchMatch) return { platform: "youtube", id: ytWatchMatch[1] };

    // YouTube short
    const ytShortMatch = url.match(/youtu\.be\/([^?]+)/i);
    if (ytShortMatch) return { platform: "youtube", id: ytShortMatch[1] };

    return null;
}

/**
 * Genera una URL de miniatura para un video de Vimeo o YouTube.
 * - YouTube: usa `img.youtube.com/vi/{id}/hqdefault.jpg` (directo, sin API key)
 * - Vimeo: usa `vumbnail.com/{id}.jpg` (servicio gratuito de thumbnails)
 * Retorna null si la URL no es un video reconocido.
 */
export function getVideoThumbnailUrl(url: string): string | null {
    const info = extractVideoId(url);
    if (!info) return null;

    if (info.platform === "youtube") {
        return `https://img.youtube.com/vi/${info.id}/hqdefault.jpg`;
    }

    // Vimeo — usar vumbnail.com (no necesita API key)
    return `https://vumbnail.com/${info.id}.jpg`;
}
