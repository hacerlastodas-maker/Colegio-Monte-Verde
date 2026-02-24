"use client";

import { X, Clock, MessageCircle, GraduationCap } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface WorkshopModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    schedule: string;
    levels: string;
    bgColor: string;
    textColor: string;
    iconName: string;
}

export default function WorkshopModal({
    isOpen,
    onClose,
    title,
    schedule,
    levels,
    bgColor,
    textColor,
    iconName,
}: WorkshopModalProps) {
    if (!isOpen) return null;

    // Dynamic icon lookup from lucide-react
    const iconKey = (iconName.charAt(0).toUpperCase() +
        iconName
            .slice(1)
            .replace(/-([a-z])/g, (_, c) =>
                c.toUpperCase()
            )) as keyof typeof LucideIcons;
    const IconComponent = (LucideIcons[iconKey] as LucideIcons.LucideIcon) || LucideIcons.Trophy;

    const whatsappMsg = encodeURIComponent(
        `Hola, quiero inscribir a mi pupilo en el taller de ${title}`
    );

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative animate-[fadeIn_0.3s]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-2 cursor-pointer z-10"
                    aria-label="Cerrar"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Header with icon */}
                <div
                    className={`h-24 flex items-center justify-center ${bgColor} ${textColor}`}
                >
                    <IconComponent className="w-12 h-12" />
                </div>

                {/* Content */}
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        {title}
                    </h3>
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3 text-gray-600">
                            <Clock className="theme-text-accent w-5 h-5 flex-shrink-0" />
                            <div>
                                <span className="text-xs font-bold uppercase text-gray-400 block">
                                    Horario
                                </span>
                                <span className="font-medium">{schedule}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                            <GraduationCap className="theme-text-accent w-5 h-5 flex-shrink-0" />
                            <div>
                                <span className="text-xs font-bold uppercase text-gray-400 block">
                                    Niveles
                                </span>
                                <span className="font-medium">{levels}</span>
                            </div>
                        </div>
                    </div>
                    <a
                        href={`https://wa.me/56912345678?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition shadow-lg hover:shadow-green-200"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Inscribir por WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
