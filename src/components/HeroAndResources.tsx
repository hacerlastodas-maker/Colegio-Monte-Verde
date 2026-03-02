"use client";

import Link from "next/link";
import { BookOpen, Video, Instagram, ExternalLink } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import type { HeroConfig } from "@/lib/noticias";

export default function HeroAndResources({
    heroConfig,
}: {
    heroConfig?: HeroConfig;
}) {
    const { themeData } = useTheme();
    const bannerSrc = heroConfig?.image || themeData.bannerSrc;
    const filterActive = heroConfig?.filterActive ?? true;
    const filterColor = heroConfig?.filterColor || "";

    return (
        <>
            {/* Hero Banner */}
            <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={bannerSrc}
                        className="w-full h-full object-cover"
                        alt="Banner Colegio Monte Verde"
                    />
                    {filterActive && (
                        <div
                            className="absolute inset-0 mix-blend-multiply opacity-70 transition-colors duration-500"
                            style={
                                filterColor
                                    ? { backgroundColor: filterColor }
                                    : undefined
                            }
                        >
                            {!filterColor && (
                                <div className="w-full h-full theme-bg-secondary" />
                            )}
                        </div>
                    )}
                </div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    {!themeData.decorationHidden && (
                        <div className="text-6xl mb-4 animate-bounce">
                            {themeData.decoration}
                        </div>
                    )}
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-md">
                        Colegio Monte Verde
                    </h1>
                    <p className="text-xl md:text-2xl font-light mb-10 opacity-95">
                        {themeData.greeting}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/admision"
                            className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg text-lg"
                        >
                            Admisión 2026
                        </Link>
                        <Link
                            href="/recursos"
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition shadow-lg backdrop-blur-sm flex items-center justify-center gap-2"
                        >
                            <BookOpen className="w-5 h-5" /> Zona de Recursos
                        </Link>
                    </div>
                </div>
            </div>

            {/* Recursos Digitales */}
            <div className="py-20 bg-gray-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="theme-text-accent font-semibold tracking-wider text-sm uppercase">
                            Plataforma Unificada
                        </span>
                        <h2 className="text-3xl font-bold mb-4 theme-text-accent">
                            Recursos Digitales
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Todo lo que necesitas en un solo lugar. Conectamos nuestra web
                            directamente con las herramientas que usas a diario.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Documentos */}
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100 flex flex-col items-center text-center group">
                            <div className="p-4 rounded-full bg-kombu text-white mb-4 group-hover:scale-110 transition-transform">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Biblioteca &amp; Documentos
                            </h3>
                            <p className="text-gray-600 text-sm mb-6 flex-grow">
                                Circulares, listas de útiles y reglamentos institucionales.
                            </p>
                            <Link
                                href="/recursos"
                                className="px-6 py-2 rounded-lg font-medium text-white bg-kombu hover:bg-kombu-dark transition inline-flex items-center"
                            >
                                Ver Recursos{" "}
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </Link>
                        </div>

                        {/* YouTube */}
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100 flex flex-col items-center text-center group">
                            <div className="p-4 rounded-full bg-fawn-dark text-white mb-4 group-hover:scale-110 transition-transform">
                                <Video className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Canal Monte Verde
                            </h3>
                            <p className="text-gray-600 text-sm mb-6 flex-grow">
                                Revive nuestros actos cívicos y charlas educativas.
                            </p>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-lg font-medium text-white bg-fawn-dark hover:bg-fawn transition inline-flex items-center"
                            >
                                Ver YouTube <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                        </div>

                        {/* Instagram */}
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100 flex flex-col items-center text-center group">
                            <div className="p-4 rounded-full bg-kombu-dark text-white mb-4 group-hover:scale-110 transition-transform">
                                <Instagram className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Galería al Día
                            </h3>
                            <p className="text-gray-600 text-sm mb-6 flex-grow">
                                La bitácora diaria de nuestro colegio en fotos.
                            </p>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-lg font-medium text-white bg-kombu-dark hover:bg-kombu transition inline-flex items-center"
                            >
                                Ver Instagram <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
