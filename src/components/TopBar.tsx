import { Phone, Mail } from "lucide-react";

export default function TopBar() {
    return (
        <div className="bg-gray-900 text-gray-300 py-2 px-4 text-xs md:text-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3" /> +56 65 263 0000
                    </span>
                    <span className="hidden sm:flex items-center gap-1">
                        <Mail className="w-3 h-3" /> contacto@colegiomonteverde.cl
                    </span>
                </div>
                <div className="flex gap-4 opacity-50 text-xs">
                    <span className="hidden md:inline">
                        Horario de Atención: Lun - Vie, 08:30 - 17:00
                    </span>
                </div>
            </div>
        </div>
    );
}
