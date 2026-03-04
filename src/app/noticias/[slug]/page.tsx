import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchNoticias, getNoticiaBySlug } from "@/lib/noticias";
import {
    Calendar,
    ChevronRight,
    ArrowLeft,
    Facebook,
    Instagram,
    ExternalLink,
    Share2,
} from "lucide-react";
import MediaEmbed from "@/components/MediaEmbed";
import type { Metadata } from "next";

export const revalidate = 3600; // ISR: regenerar cada 1 hora
export const dynamicParams = true; // Permitir slugs no pre-renderizados (se generan on-demand)

/* ---------- Generación estática de parámetros ---------- */

export async function generateStaticParams() {
    const noticias = await fetchNoticias();
    return noticias.map((n) => ({ slug: n.slug }));
}

/* ---------- SEO dinámico ---------- */

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const noticia = await getNoticiaBySlug(slug);

    if (!noticia) {
        return { title: "Noticia no encontrada — Colegio Monte Verde" };
    }

    return {
        title: `${noticia.titulo} — Colegio Monte Verde`,
        description: noticia.contenido?.slice(0, 160) || "",
    };
}

/* ---------- Página ---------- */

export default async function NoticiaDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const noticia = await getNoticiaBySlug(slug);

    if (!noticia) {
        notFound();
    }

    // URL de la noticia para compartir en redes sociales
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://colegiomonteverde.cl";
    const noticiaUrl = `${siteUrl}/noticias/${noticia.slug}`;

    return (
        <div className="min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-100">
                <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-1.5 text-sm text-gray-500 overflow-x-auto">
                    <Link
                        href="/"
                        className="hover:text-[var(--accent)] transition whitespace-nowrap"
                    >
                        Inicio
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                    <Link
                        href="/noticias"
                        className="hover:text-[var(--accent)] transition whitespace-nowrap"
                    >
                        Noticias
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium truncate">
                        {noticia.titulo}
                    </span>
                </nav>
            </div>

            {/* Artículo */}
            <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
                {/* Encabezado */}
                <header className="mb-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                        {noticia.titulo}
                    </h1>
                    {noticia.fecha && (
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <time>{noticia.fecha}</time>
                        </div>
                    )}
                </header>

                {/* Imagen o Video de inicio */}
                {noticia.imagenInicio && (
                    <MediaEmbed
                        src={noticia.imagenInicio}
                        alt={noticia.titulo}
                        variant="detail"
                        loading="eager"
                    />
                )}

                {/* Cuerpo del artículo */}
                <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose whitespace-pre-line mb-10 md:mb-12">
                    {noticia.contenido}
                </div>

                {/* Imagen o Video final */}
                {noticia.imagenFinal && (
                    <MediaEmbed
                        src={noticia.imagenFinal}
                        alt={`${noticia.titulo} - imagen adicional`}
                        variant="detail"
                    />
                )}

                {/* Botón de acción personalizado (desde el Sheet) */}
                {noticia.botonLink && noticia.botonTexto && (
                    <div className="mb-10 md:mb-12 flex justify-center">
                        <a
                            href={noticia.botonLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all theme-btn text-base"
                        >
                            <ExternalLink className="w-5 h-5" />
                            {noticia.botonTexto}
                        </a>
                    </div>
                )}

                {/* Compartir en redes sociales */}
                <div className="mb-8 py-6 border-t border-b border-gray-100">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Share2 className="w-4 h-4" />
                            <span className="font-medium">Compartir esta noticia:</span>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(noticiaUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1877F2] text-white text-sm font-medium hover:bg-[#166FE5] transition shadow-sm"
                                aria-label="Compartir en Facebook"
                            >
                                <Facebook className="w-4 h-4" />
                                Facebook
                            </a>
                            <a
                                href="https://www.instagram.com/colegiomonteverdechiloe/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-sm font-medium hover:opacity-90 transition shadow-sm"
                                aria-label="Visitar Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>

                {/* Botón volver */}
                <div>
                    <Link
                        href="/noticias"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:gap-3 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver a Noticias
                    </Link>
                </div>
            </article>
        </div>
    );
}
