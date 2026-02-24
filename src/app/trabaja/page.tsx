import { Briefcase } from "lucide-react";

export default function TrabajaPage() {
    return (
        <div className="py-16 px-4 max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4 theme-text-accent">
                Trabaja con Nosotros
            </h2>
            <p className="text-gray-600 mb-8">
                Únete a nuestro equipo educativo. Buscamos profesionales comprometidos
                con la formación integral.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p className="font-medium text-gray-800 mb-4">
                    Envía tu CV y antecedentes al correo:
                </p>
                <a
                    href="mailto:rrhh@colegiomonteverde.cl"
                    className="text-2xl font-bold theme-text-accent hover:underline break-all"
                >
                    rrhh@colegiomonteverde.cl
                </a>
                <p className="text-xs text-gray-500 mt-4">
                    Indica en el asunto el cargo al que postulas.
                </p>
            </div>
        </div>
    );
}
