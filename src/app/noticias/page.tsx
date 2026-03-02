import Link from "next/link";
import { fetchNoticias } from "@/lib/noticias";
import { Calendar, Newspaper, ArrowRight } from "lucide-react";

export const revalidate = 3600; // ISR: regenerar cada 1 hora

export const metadata = {
    title: "Noticias — Colegio Monte Verde",
    description:
        "Últimas noticias y novedades del Colegio Monte Verde, Castro, Chiloé.",
};

export default async function NoticiasPage() {
    const noticias = await fetchNoticias();

    return (
        <div className="min-h-screen">
            {/* Hero Banner */}
            <div className="bg-gradient-to-br from-[#283618] to-[#606c38] text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                        <Newspaper className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Noticias
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                        Mantente al día con las novedades y actividades de nuestra comunidad
                        educativa.
                    </p>
                </div>
            </div>

            {/* Contenido */}
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                {noticias.length === 0 ? (
                    /* Estado vacío elegante */
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                            <Newspaper className="w-10 h-10 text-gray-300" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-400 mb-2">
                            Próximamente
                        </h2>
                        <p className="text-gray-400 max-w-md mx-auto">
                            Estamos preparando noticias y novedades para compartir con nuestra
                            comunidad. ¡Vuelve pronto!
                        </p>
                    </div>
                ) : (
                    /* Grilla de tarjetas */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {noticias.map((noticia) => (
                            <Link
                                key={noticia.slug}
                                href={`/noticias/${noticia.slug}`}
                                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                {/* Imagen miniatura */}
                                {noticia.imagenInicio ? (
                                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                                        <img
                                            src={noticia.imagenInicio}
                                            alt={noticia.titulo}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ) : (
                                    <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                                        <Newspaper className="w-12 h-12 text-gray-200" />
                                    </div>
                                )}

                                {/* Contenido de la tarjeta */}
                                <div className="p-5 md:p-6 flex flex-col flex-grow">
                                    {/* Fecha */}
                                    {noticia.fecha && (
                                        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <time>{noticia.fecha}</time>
                                        </div>
                                    )}

                                    {/* Título */}
                                    <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[var(--accent)] transition-colors leading-snug line-clamp-2">
                                        {noticia.titulo}
                                    </h2>

                                    {/* Extracto */}
                                    {noticia.contenido && (
                                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-grow">
                                            {noticia.contenido}
                                        </p>
                                    )}

                                    {/* Link de leer más */}
                                    <div className="flex items-center gap-1 text-sm font-semibold text-[var(--accent)] mt-4 group-hover:gap-2 transition-all">
                                        Leer más
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
