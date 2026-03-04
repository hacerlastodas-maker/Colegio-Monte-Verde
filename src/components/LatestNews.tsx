import Link from "next/link";
import { fetchNoticias } from "@/lib/noticias";
import { Calendar, ArrowRight } from "lucide-react";
import MediaEmbed from "@/components/MediaEmbed";

/**
 * Server component that fetches and displays the latest 3 news articles.
 * Designed to be embedded in the homepage.
 */
export default async function LatestNews() {
    const noticias = await fetchNoticias();
    const latest = noticias.slice(0, 3);

    if (latest.length === 0) return null;

    return (
        <section className="py-16 md:py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Encabezado */}
                <div className="text-center mb-12">
                    <span className="theme-text-accent font-semibold tracking-wider text-sm uppercase">
                        Comunidad al Día
                    </span>
                    <h2 className="text-3xl font-bold mb-4 theme-text-accent">
                        Últimas Noticias
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Entérate de las novedades y actividades más recientes de nuestro
                        colegio.
                    </p>
                </div>

                {/* Grilla de noticias */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {latest.map((noticia) => (
                        <Link
                            key={noticia.slug}
                            href={`/noticias/${noticia.slug}`}
                            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            {/* Imagen o Video */}
                            <MediaEmbed
                                src={noticia.imagenInicio}
                                alt={noticia.titulo}
                                variant="card"
                            />

                            {/* Contenido */}
                            <div className="p-5 md:p-6 flex flex-col flex-grow">
                                {noticia.fecha && (
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <time>{noticia.fecha}</time>
                                    </div>
                                )}

                                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[var(--accent)] transition-colors leading-snug line-clamp-2">
                                    {noticia.titulo}
                                </h3>

                                {noticia.contenido && (
                                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-grow">
                                        {noticia.contenido}
                                    </p>
                                )}

                                <div className="flex items-center gap-1 text-sm font-semibold text-[var(--accent)] mt-4 group-hover:gap-2 transition-all">
                                    Leer más
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Botón ver todas */}
                {noticias.length > 3 && (
                    <div className="text-center mt-10">
                        <Link
                            href="/noticias"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all theme-btn"
                        >
                            Ver Todas las Noticias
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
