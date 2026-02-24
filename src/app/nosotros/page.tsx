import {
    Award,
    Eye,
    Users,
    CheckCircle,
    BrainCircuit,
    Ear,
    HeartHandshake,
    GraduationCap,
    BookOpen,
    HandHelping,
} from "lucide-react";

const equipo = [
    { cargo: "Directora", nombre: "Diva Arce Orellana" },
    {
        cargo: "Encargada Convivencia Escolar",
        nombre: "Virginia Serey Ampuero",
    },
    { cargo: "Coordinadora PIE", nombre: "Gabriela Chiguay Perez" },
    {
        cargo: "Coordinadora Académica (3° a 8° Básico)",
        nombre: "Alejandra Guerrero Carcamo",
    },
    {
        cargo: "Coordinadora Académica (Pre-kinder a 2° Básico)",
        nombre: "Ma. Elba Moya Karuse",
    },
    { cargo: "Secretaria", nombre: "Bernardita Velásquez" },
];

export default function NosotrosPage() {
    return (
        <div className="py-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center theme-text-accent">
                Nuestro Colegio
            </h2>

            {/* Misión y Visión */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-700 mb-6">
                        <Award className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Nuestra Misión
                    </h3>
                    <div className="text-gray-700 space-y-3 text-sm leading-relaxed">
                        <p>
                            Desarrollar integralmente a los niños y niñas, en un
                            Modelo de Aprendizaje Ambientalista y Social
                            Diversificado, desde sus primeros años de educación
                            formal, desarrollando en ellos capacidades y
                            destrezas, en contacto con la naturaleza en donde
                            propiciamos la motivación por el descubrimiento de
                            los distintos procesos de vida, el equilibrio
                            natural de esta y cómo ser agentes activos y
                            positivos en la relación con el medio ambiente.
                        </p>
                        <p>
                            Nuestro desafío es entregar una opción educativa,
                            acorde con las exigencias de un mundo globalizado,
                            en armonía con el desarrollo personal de nuestros
                            niños y niñas, en un modelo de aprendizaje en donde
                            ellos sean los principales actores, tanto en el
                            logro de lo cognitivo como de lo valórico.
                        </p>
                        <p>
                            Nos rigen Principios y Valores que garantizan el
                            respeto a la diversidad, la integración, los
                            distintos ritmos de aprendizaje y necesidades
                            educativas, la libertad de credo y la defensa del
                            equilibrio ecológico de nuestro planeta.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-700 mb-6">
                        <Eye className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Nuestra Visión
                    </h3>
                    <div className="text-gray-700 space-y-3 text-sm leading-relaxed">
                        <p>
                            Formar un colegio que responda a los tiempos
                            modernos dando énfasis a los procesos educativos
                            vivenciados en contacto con la naturaleza.
                        </p>
                        <p>
                            Desarrollar en nuestros alumnos los valores y
                            principios que les permitan ser personas íntegras,
                            seguras de sí mismas, inclusivas y respetuosas de
                            los demás. Desarrollen conciencia, sentido de
                            pertenencia, valoración y preservación de los
                            diversos ecosistemas.
                        </p>
                        <p>
                            Queremos formar un establecimiento educacional con
                            infraestructura cálida, armónica con su entorno
                            natural, adecuada para la concreción de
                            aprendizajes significativos que posibiliten el
                            desarrollo integral de nuestros alumnos.
                        </p>
                        <p>
                            Nuestro propósito es crear una comunidad educativa
                            en donde todos los estamentos se comprometan y
                            participen activamente. Un colegio abierto al
                            conocimiento, la relación con las personas y el
                            medio ambiente. Un colegio dinámico, creativo y
                            vanguardista.
                        </p>
                    </div>
                </div>
            </div>

            {/* Equipo Directivo */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                    Equipo Directivo y de Gestión
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {equipo.map((m) => (
                        <div
                            key={m.nombre}
                            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition text-center"
                        >
                            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Users className="w-7 h-7 text-gray-400" />
                            </div>
                            <h4 className="font-bold text-gray-800">
                                {m.nombre}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                                {m.cargo}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Infraestructura Inclusiva */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16 border-l-4 border-green-500">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Infraestructura Inclusiva
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Creemos en una educación sin barreras. Nuestro
                            establecimiento cuenta con:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                Rampas de acceso universal en todos los niveles.
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                Baños adaptados con normativa vigente.
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                Salas amplias, iluminadas y con calefacción
                                eficiente.
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                Patios techados para recreo en invierno.
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-2">
                        <img
                            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400"
                            className="rounded-lg shadow-sm h-32 w-full object-cover"
                            alt="Infraestructura 1"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1592931136423-f323c21c78bb?auto=format&fit=crop&q=80&w=400"
                            className="rounded-lg shadow-sm h-32 w-full object-cover"
                            alt="Infraestructura 2"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=400"
                            className="rounded-lg shadow-sm h-32 w-full object-cover col-span-2"
                            alt="Infraestructura 3"
                        />
                    </div>
                </div>
            </div>

            {/* Equipo Multidisciplinario */}
            <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Equipo Multidisciplinario
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm">
                    El colegio atiende desde Pre-kinder hasta Octavo Básico y
                    cuenta con un equipo multidisciplinario compuesto por:
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-xl hover:shadow-md transition">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <GraduationCap className="w-10 h-10 text-gray-400" />
                        </div>
                        <h4 className="font-bold">Educadoras de Párvulos</h4>
                        <p className="text-sm text-gray-500">
                            Educación inicial
                        </p>
                    </div>
                    <div className="p-4 border rounded-xl hover:shadow-md transition">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <BookOpen className="w-10 h-10 text-gray-400" />
                        </div>
                        <h4 className="font-bold">
                            Profesores de Enseñanza Básica
                        </h4>
                        <p className="text-sm text-gray-500">
                            Formación académica
                        </p>
                    </div>
                    <div className="p-4 border rounded-xl hover:shadow-md transition">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <HandHelping className="w-10 h-10 text-gray-400" />
                        </div>
                        <h4 className="font-bold">
                            Asistentes de la Educación
                        </h4>
                        <p className="text-sm text-gray-500">
                            Apoyo pedagógico
                        </p>
                    </div>
                    <div className="p-4 border rounded-xl hover:shadow-md transition">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <HeartHandshake className="w-10 h-10 text-gray-400" />
                        </div>
                        <h4 className="font-bold">Educadores Diferenciales</h4>
                        <p className="text-sm text-gray-500">
                            Integración escolar
                        </p>
                    </div>
                    <div className="p-4 border rounded-xl hover:shadow-md transition">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <BrainCircuit className="w-10 h-10 text-gray-400" />
                        </div>
                        <h4 className="font-bold">Psicólogos</h4>
                        <p className="text-sm text-gray-500">
                            PIE y Convivencia Escolar
                        </p>
                    </div>
                    <div className="p-4 border rounded-xl hover:shadow-md transition">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <Ear className="w-10 h-10 text-gray-400" />
                        </div>
                        <h4 className="font-bold">Fonoaudiólogo</h4>
                        <p className="text-sm text-gray-500">
                            Desarrollo del lenguaje
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
