import { Heart, BookOpen, Puzzle, Check } from "lucide-react";

export default function NivelesPage() {
    return (
        <div className="py-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center theme-text-accent">
                Niveles Educativos
            </h2>
            <div className="space-y-16">
                {/* Educación Parvularia */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 relative">
                        <div className="absolute top-4 left-4 w-full h-full bg-institutional/20 rounded-2xl -z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800"
                            className="rounded-2xl shadow-xl w-full object-cover h-[350px]"
                            alt="Educación Parvularia"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <div className="flex items-center gap-3 mb-4">
                            <Heart className="w-8 h-8 text-institutional" />
                            <h3 className="text-3xl font-bold text-gray-800">
                                Educación Parvularia
                            </h3>
                        </div>
                        <p className="theme-text-accent font-bold mb-4 uppercase text-sm">
                            Pre-Kinder y Kinder
                        </p>
                        <p className="text-gray-600 mb-6">
                            El juego es la herramienta principal de aprendizaje. Trabajamos el
                            desarrollo socioemocional y la autonomía.
                        </p>
                    </div>
                </div>

                {/* Enseñanza Básica */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 md:order-2 relative">
                        <div className="absolute top-4 -right-4 w-full h-full bg-institutional/20 rounded-2xl -z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
                            className="rounded-2xl shadow-xl w-full object-cover h-[350px]"
                            alt="Enseñanza Básica"
                        />
                    </div>
                    <div className="md:w-1/2 md:order-1">
                        <div className="flex items-center gap-3 mb-4">
                            <BookOpen className="w-8 h-8 text-institutional" />
                            <h3 className="text-3xl font-bold text-gray-800">
                                Enseñanza Básica
                            </h3>
                        </div>
                        <p className="theme-text-accent font-bold mb-4 uppercase text-sm">
                            1º a 8º Básico
                        </p>
                        <p className="text-gray-600 mb-6">
                            Consolidamos los aprendizajes fundamentales y fomentamos valores
                            como la responsabilidad y el compañerismo.
                        </p>
                    </div>
                </div>

                {/* PIE */}
                <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200 shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-yellow-100 text-yellow-700 rounded-full flex-shrink-0">
                            <Puzzle className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Programa de Integración Escolar (PIE)
                            </h3>
                            <p className="text-sm text-gray-500 mb-3">
                                Coordinadora PIE:{" "}
                                <strong className="text-gray-700">
                                    Gabriela Chiguay Perez
                                </strong>
                            </p>
                            <p className="text-gray-700 mb-4">
                                Contamos con un equipo especializado —
                                Educadores Diferenciales, Psicólogos y
                                Fonoaudiólogo — para brindar apoyo a
                                estudiantes que presentan Necesidades Educativas
                                Especiales (NEE), garantizando la igualdad de
                                oportunidades y la participación en el proceso
                                de aprendizaje.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-kombu flex-shrink-0" />
                                    Apoyo en aula común y aula de recursos.
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-kombu flex-shrink-0" />
                                    Adaptaciones curriculares personalizadas.
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-kombu flex-shrink-0" />
                                    Educadores Diferenciales y Psicólogos.
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-kombu flex-shrink-0" />
                                    Fonoaudiólogo para desarrollo del lenguaje.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
