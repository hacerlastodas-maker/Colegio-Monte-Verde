import {
    Users,
    FileText,
    ExternalLink,
    GraduationCap,
    CheckCircle,
    CalendarDays,
    AlertCircle,
} from "lucide-react";
import Link from "next/link";

const becaRequisitos = [
    "Estar al día con pagos anteriores.",
    "Ser alumno regular.",
    "Acreditar Vulnerabilidad Social del grupo familiar.",
    "Entregar documentación en plazos estipulados.",
];

export default function AdmisionPage() {
    return (
        <div className="py-16 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center theme-text-accent">
                Admisión 2026
            </h2>

            {/* SAE */}
            <div className="bg-gradient-to-br from-cornsilk to-white shadow-md rounded-xl p-8 border border-cornsilk mb-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-institutional text-white p-4 rounded-full shadow-lg flex-shrink-0">
                        <Users className="w-8 h-8" />
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-institutional mb-2">
                            Sistema de Admisión Escolar (SAE)
                        </h3>
                        <p className="text-gray-600 mb-3">
                            Nuestro proceso se rige por las directrices del
                            Ministerio de Educación, garantizando{" "}
                            <strong>transparencia y equidad</strong> en cada
                            etapa.
                        </p>
                        <p className="text-gray-600 mb-4">
                            <strong>Requisito clave:</strong> Entrevista
                            personal con las familias antes de la matrícula para
                            alinear valores y proyecto educativo.
                        </p>
                        <a
                            href="https://www.sistemadeadmisionescolar.cl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-institutional font-bold hover:underline flex items-center justify-center md:justify-start gap-1"
                        >
                            Ir al sitio oficial SAE{" "}
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Programa de Becas */}
            <div className="bg-gradient-to-br from-cornsilk to-white shadow-md rounded-xl p-8 border border-cornsilk mb-8">
                <div className="flex items-start gap-4 mb-6">
                    <div className="bg-kombu text-white p-3 rounded-full shadow-lg flex-shrink-0">
                        <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-kombu-dark mb-2">
                            Programa de Becas de Financiamiento
                        </h3>
                        <p className="text-gray-600">
                            Consiste en la{" "}
                            <strong>
                                eximición total o parcial de la cuota mensual de
                                escolaridad
                            </strong>
                            . La vigencia es anual y requiere postulación y
                            evaluación cada año.
                        </p>
                    </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800">
                        <strong>Excepciones:</strong> La beca no cubre Centro de
                        Padres ni Casino.
                    </p>
                </div>

                <h4 className="font-bold text-gray-800 mb-3">Requisitos</h4>
                <ul className="space-y-2 mb-6">
                    {becaRequisitos.map((r, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700 text-sm"
                        >
                            <CheckCircle className="w-4 h-4 text-kombu flex-shrink-0 mt-0.5" />
                            {r}
                        </li>
                    ))}
                </ul>

                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                            <CalendarDays className="w-4 h-4 text-kombu" />
                            <span className="font-bold text-sm text-gray-800">
                                Periodo de Postulación
                            </span>
                        </div>
                        <p className="text-sm text-gray-600">
                            Mes de <strong>octubre</strong>, de forma presencial
                            en Secretaría.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                            <CalendarDays className="w-4 h-4 text-institutional" />
                            <span className="font-bold text-sm text-gray-800">
                                Plazos
                            </span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>
                                <strong>Antiguos:</strong> Según circular
                                informativa de aranceles.
                            </li>
                            <li>
                                <strong>Nuevos:</strong> Finalizado el segundo
                                periodo de matrícula (según disponibilidad de
                                fondos).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Documentación */}
            <div className="bg-white shadow-md rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <FileText className="theme-text-accent" /> Documentación
                    Institucional
                </h3>
                <div className="grid gap-3">
                    <a
                        href="/documentos/reglamento-interno-2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                        <span className="font-medium text-gray-700">
                            Reglamento Interno y Manual de Convivencia 2025
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </a>
                    <a
                        href="/documentos/reglamento-convivencia.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                        <span className="font-medium text-gray-700">
                            Reglamento de Convivencia Escolar
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </a>
                    <a
                        href="/documentos/reglamento-evaluacion.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                        <span className="font-medium text-gray-700">
                            Reglamento de Evaluación
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </a>
                    <a
                        href="/documentos/reglamento-evaluacion-promocion-2026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                        <span className="font-medium text-gray-700">
                            Reglamento de Evaluación y Promoción 2026
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </a>
                    <a
                        href="/documentos/pise-2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                        <span className="font-medium text-gray-700">
                            PISE (Plan Integral de Seguridad Escolar) 2025
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </a>
                    <a
                        href="/documentos/proyecto-educativo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                        <span className="font-medium text-gray-700">
                            Proyecto Educativo Institucional (PEI)
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </a>
                    <Link
                        href="/utiles"
                        className="flex justify-between items-center p-4 bg-cornsilk rounded-lg hover:bg-fawn/20 transition border border-fawn/30"
                    >
                        <span className="font-medium text-kombu-dark">
                            Listas de Útiles 2026 (por curso)
                        </span>
                        <ExternalLink className="w-4 h-4 text-kombu flex-shrink-0" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
