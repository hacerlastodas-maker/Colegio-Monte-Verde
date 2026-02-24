import Link from "next/link";
import GoogleMapsWidget from "@/components/GoogleMapsWidget";
import { School, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t border-gray-800 mt-auto">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4 text-white">
                        <School className="w-5 h-5" />
                        <span className="font-bold text-lg uppercase">Monte Verde</span>
                    </div>
                    <p className="mb-6">
                        Una comunidad educativa comprometida con el aprendizaje y los
                        valores en el corazón de Chiloé.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="https://www.instagram.com/colegiomonteverdechiloe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition cursor-pointer"
                        >
                            <Instagram className="w-4 h-4 text-white" />
                        </a>
                        <a
                            href="https://www.facebook.com/colegiomonteverdechiloe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer"
                        >
                            <Facebook className="w-4 h-4 text-white" />
                        </a>
                    </div>
                </div>

                {/* Navegación */}
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">
                        Navegación
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/nosotros" className="hover:text-white transition">
                                Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link href="/niveles" className="hover:text-white transition">
                                Niveles
                            </Link>
                        </li>
                        <li>
                            <Link href="/vida-escolar" className="hover:text-white transition">
                                Vida Escolar
                            </Link>
                        </li>
                        <li>
                            <Link href="/recursos" className="hover:text-white transition">
                                Zona de Recursos
                            </Link>
                        </li>
                        <li>
                            <Link href="/admision" className="hover:text-white transition">
                                Admisión
                            </Link>
                        </li>
                        <li>
                            <Link href="/trabaja" className="hover:text-white transition">
                                Trabaja con Nosotros
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contacto y Ubicación */}
                <div className="col-span-1 md:col-span-2">
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">
                        Contacto y Ubicación
                    </h4>
                    <div className="flex flex-col md:flex-row gap-4">
                        <ul className="space-y-3 flex-shrink-0">
                            <li className="flex items-start gap-2">
                                <MapPin className="theme-text-accent w-4 h-4 mt-1 flex-shrink-0" />
                                <span>
                                    Panamericana Sur Km 1182,
                                    <br />
                                    Castro, Chiloé.
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="theme-text-accent w-4 h-4 flex-shrink-0" />
                                <a href="tel:+56652630000" className="hover:text-white transition">
                                    +56 65 263 0000
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="theme-text-accent w-4 h-4 flex-shrink-0" />
                                <a
                                    href="mailto:contacto@colegiomonteverde.cl"
                                    className="hover:text-white transition"
                                >
                                    contacto@colegiomonteverde.cl
                                </a>
                            </li>
                        </ul>
                        <div className="w-full h-32 bg-gray-800 rounded-lg flex items-center justify-center text-xs text-gray-500 border border-gray-700 overflow-hidden">
                            <GoogleMapsWidget />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-xs space-y-2">
                <p>© {new Date().getFullYear()} Colegio Monte Verde. Todos los derechos reservados.</p>
                <p>
                    Desarrollado por{" "}
                    <a
                        href="https://hacerlastodas.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition font-medium"
                    >
                        hacerlastodas.com
                    </a>
                </p>
            </div>
        </footer>
    );
}
