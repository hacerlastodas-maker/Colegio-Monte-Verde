"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/niveles", label: "Niveles" },
    { href: "/vida-escolar", label: "Vida Escolar" },
    { href: "/noticias", label: "Noticias" },
    { href: "/recursos", label: "Recursos" },
    { href: "/admision", label: "Admisión" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 group"
                    >
                        <Image
                            src="/monteverde.png"
                            width={50}
                            height={50}
                            alt="Logo Colegio Monte Verde"
                            className="object-contain group-hover:scale-105 transition"
                        />
                        <div className="leading-tight">
                            <h1 className="font-bold text-gray-900 text-lg uppercase tracking-wide">
                                Monte Verde
                            </h1>
                            <p className="text-xs text-gray-500">Castro, Chiloé</p>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex gap-1">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 text-sm font-medium transition-colors ${pathname === link.href
                                    ? "active-nav"
                                    : "text-gray-600 hover:text-[var(--accent)]"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/56963943314?text=Hola,%20consulta%20general"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 px-5 py-2 rounded-full text-white text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 theme-btn"
                        >
                            Contacto
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="lg:hidden p-2 text-gray-600"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Abrir menú"
                    >
                        {mobileOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl z-50">
                    <div className="flex flex-col p-4 gap-2">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`text-left py-3 px-4 rounded-lg transition ${pathname === link.href
                                    ? "bg-gray-100 font-bold text-[var(--accent)]"
                                    : "text-gray-700 hover:bg-gray-50"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
