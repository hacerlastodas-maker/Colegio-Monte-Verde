import {
    FileText,
    Download,
    BookOpen,
    Shield,
    Scale,
    ClipboardList,
    GraduationCap,
    ExternalLink,
} from "lucide-react";
import Link from "next/link";

const documentosInstitucionales = [
    {
        nombre: "Proyecto Educativo Institucional (PEI)",
        descripcion:
            "Identidad, misión, visión y principios que guían nuestro colegio.",
        url: "/documentos/proyecto-educativo.pdf",
        Icon: BookOpen,
        color: "bg-green-100 text-green-700",
    },
    {
        nombre: "Reglamento Interno y Manual de Convivencia 2025",
        descripcion:
            "Normas de funcionamiento, derechos y deberes de la comunidad escolar.",
        url: "/documentos/reglamento-interno-2025.pdf",
        Icon: Shield,
        color: "bg-blue-100 text-blue-700",
    },
    {
        nombre: "Reglamento de Convivencia Escolar",
        descripcion:
            "Protocolos y procedimientos para una sana convivencia.",
        url: "/documentos/reglamento-convivencia.pdf",
        Icon: Scale,
        color: "bg-purple-100 text-purple-700",
    },
    {
        nombre: "Reglamento de Evaluación",
        descripcion:
            "Criterios y procedimientos de evaluación académica.",
        url: "/documentos/reglamento-evaluacion.pdf",
        Icon: ClipboardList,
        color: "bg-amber-100 text-amber-700",
    },
    {
        nombre: "Reglamento de Evaluación y Promoción 2026",
        descripcion:
            "Normativa actualizada de evaluación y requisitos de promoción.",
        url: "/documentos/reglamento-evaluacion-promocion-2026.pdf",
        Icon: ClipboardList,
        color: "bg-orange-100 text-orange-700",
    },
    {
        nombre: "PISE (Plan Integral de Seguridad Escolar) 2025",
        descripcion:
            "Protocolos de seguridad, evacuación y emergencias.",
        url: "/documentos/pise-2025.pdf",
        Icon: Shield,
        color: "bg-red-100 text-red-700",
    },
];

const listasUtiles = [
    { curso: "Pre-Kinder", url: "/documentos/lista-utiles-pre-kinder-2026.pdf" },
    { curso: "Kinder", url: "/documentos/lista-utiles-kinder-2026.pdf" },
    { curso: "1º Básico", url: "/documentos/lista-utiles-1-basico-2026.pdf" },
    { curso: "2º Básico", url: "/documentos/lista-utiles-2-basico-2026.pdf" },
    { curso: "3º Básico", url: "/documentos/lista-utiles-3-basico-2026.pdf" },
    { curso: "4º Básico", url: "/documentos/lista-utiles-4-basico-2026.pdf" },
    { curso: "5º Básico", url: "/documentos/lista-utiles-5-basico-2026.pdf" },
    { curso: "6º Básico", url: "/documentos/lista-utiles-6-basico-2026.pdf" },
    { curso: "7º Básico", url: "/documentos/lista-utiles-7-basico-2026.pdf" },
    { curso: "8º Básico", url: "/documentos/lista-utiles-8-basico-2026.pdf" },
];

export default function RecursosPage() {
    return (
        <div className="py-16 px-4 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="theme-text-accent font-semibold tracking-wider text-sm uppercase">
                    Biblioteca Digital
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-text-accent">
                    Zona de Recursos
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Todos los documentos institucionales, reglamentos y listas
                    de útiles del Colegio Monte Verde en un solo lugar.
                </p>
            </div>

            {/* Documentos Institucionales */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <FileText className="theme-text-accent" />
                    Documentos Institucionales
                </h3>
                <p className="text-gray-500 text-sm mb-8">
                    Reglamentos, protocolos y el proyecto educativo que rige nuestro colegio.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    {documentosInstitucionales.map((doc) => (
                        <a
                            key={doc.nombre}
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-6 flex items-start gap-4 group"
                        >
                            <div
                                className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${doc.color} group-hover:scale-110 transition-transform`}
                            >
                                <doc.Icon className="w-6 h-6" />
                            </div>
                            <div className="flex-grow min-w-0">
                                <h4 className="font-bold text-gray-800 group-hover:text-[var(--accent)] transition-colors mb-1">
                                    {doc.nombre}
                                </h4>
                                <p className="text-sm text-gray-500">
                                    {doc.descripcion}
                                </p>
                            </div>
                            <Download className="w-5 h-5 text-gray-300 group-hover:text-[var(--accent)] flex-shrink-0 mt-1 transition-colors" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Listas de Útiles */}
            <div className="mb-16">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                            <GraduationCap className="theme-text-accent" />
                            Listas de Útiles 2026
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Descarga la lista oficial de materiales por curso.
                        </p>
                    </div>
                    <Link
                        href="/utiles"
                        className="text-sm font-medium theme-text-accent hover:underline flex items-center gap-1 self-start"
                    >
                        Ver detalle por curso{" "}
                        <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {listasUtiles.map((item) => (
                        <a
                            key={item.curso}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-5 text-center group"
                        >
                            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Download className="w-5 h-5" />
                            </div>
                            <h4 className="font-bold text-gray-800 text-sm group-hover:text-[var(--accent)] transition-colors">
                                {item.curso}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">PDF</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* Links Externos */}
            <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <ExternalLink className="theme-text-accent" />
                    Enlaces Útiles
                </h3>
                <p className="text-gray-500 text-sm mb-8">
                    Plataformas externas del sistema educativo chileno.
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <a
                        href="https://www.sistemadeadmisionescolar.cl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-50 border border-blue-200 rounded-xl p-5 hover:shadow-md transition group"
                    >
                        <h4 className="font-bold text-blue-800 mb-1 group-hover:underline">
                            Sistema de Admisión Escolar (SAE)
                        </h4>
                        <p className="text-sm text-blue-600">
                            Plataforma oficial del Ministerio de Educación.
                        </p>
                    </a>
                    <a
                        href="https://www.mineduc.cl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-50 border border-red-200 rounded-xl p-5 hover:shadow-md transition group"
                    >
                        <h4 className="font-bold text-red-800 mb-1 group-hover:underline">
                            Portal MINEDUC
                        </h4>
                        <p className="text-sm text-red-600">
                            Ministerio de Educación de Chile.
                        </p>
                    </a>
                    <a
                        href="https://www.agenciaeducacion.cl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-amber-50 border border-amber-200 rounded-xl p-5 hover:shadow-md transition group"
                    >
                        <h4 className="font-bold text-amber-800 mb-1 group-hover:underline">
                            Agencia de Calidad
                        </h4>
                        <p className="text-sm text-amber-600">
                            Agencia de Calidad de la Educación.
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}
