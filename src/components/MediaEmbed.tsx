import { isVideoUrl, toEmbedUrl, getVideoThumbnailUrl } from "@/lib/mediaUtils";
import { Newspaper, Play } from "lucide-react";

interface MediaEmbedProps {
    /** URL de la imagen o video */
    src: string;
    /** Texto alternativo para imágenes */
    alt: string;
    /** Variante de presentación */
    variant: "card" | "detail";
    /** Prioridad de carga (eager para above-the-fold) */
    loading?: "lazy" | "eager";
    /** Clases extra para el contenedor */
    className?: string;
}

/**
 * Componente reutilizable que renderiza una imagen o un video embed
 * según la URL proporcionada. Detecta automáticamente URLs de Vimeo/YouTube.
 *
 * - variant="card": muestra una miniatura estática con ícono de play (para tarjetas)
 * - variant="detail": muestra el iframe embed completo (para página de detalle)
 */
export default function MediaEmbed({
    src,
    alt,
    variant,
    loading = "lazy",
    className = "",
}: MediaEmbedProps) {
    // Sin fuente → placeholder
    if (!src) {
        return (
            <div
                className={`${variant === "card" ? "aspect-[16/10]" : "aspect-video"
                    } bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center ${className}`}
            >
                <Newspaper className="w-12 h-12 text-gray-200" />
            </div>
        );
    }

    // Video
    if (isVideoUrl(src)) {
        // Card variant → miniatura estática + ícono de play
        if (variant === "card") {
            const thumbnailUrl = getVideoThumbnailUrl(src);

            return (
                <div className={`relative aspect-[16/10] overflow-hidden bg-gray-900 ${className}`}>
                    {thumbnailUrl && (
                        <img
                            src={thumbnailUrl}
                            alt={alt}
                            loading={loading}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        />
                    )}
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                            <Play className="w-6 h-6 text-gray-800 ml-0.5" fill="currentColor" />
                        </div>
                    </div>
                </div>
            );
        }

        // Detail variant → iframe embed completo
        const embedUrl = toEmbedUrl(src);
        return (
            <div className={`mb-8 md:mb-10 rounded-2xl overflow-hidden shadow-lg ${className}`}>
                <div className="relative aspect-video bg-black">
                    <iframe
                        src={embedUrl}
                        title={alt}
                        className="w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        loading={loading}
                    />
                </div>
            </div>
        );
    }

    // Imagen card
    if (variant === "card") {
        return (
            <div className={`relative aspect-[16/10] overflow-hidden bg-gray-100 ${className}`}>
                <img
                    src={src}
                    alt={alt}
                    loading={loading}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
        );
    }

    // Imagen detail
    return (
        <div className={`mb-8 md:mb-10 rounded-2xl overflow-hidden shadow-lg ${className}`}>
            <img
                src={src}
                alt={alt}
                loading={loading}
                className="w-full h-auto max-h-[500px] object-cover"
            />
        </div>
    );
}

