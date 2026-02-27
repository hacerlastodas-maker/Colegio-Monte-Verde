"use client";

import { useState } from "react";
import { MessageCircle, UserPlus, MessageSquare, Book } from "lucide-react";

const contacts = [
    {
        label: "Encargado SAE",
        sublabel: "Consultar Matrícula",
        href: "https://wa.me/56963943314?text=Hola,%20tengo%20una%20consulta%20sobre%20matrículas",
        icon: UserPlus,
        bgColor: "bg-blue-100",
        textColor: "text-blue-600",
        hoverColor: "group-hover:text-blue-600",
    },
    {
        label: "Secretaría",
        sublabel: "Consulta General",
        href: "https://wa.me/56963943314?text=Hola,%20consulta%20general",
        icon: MessageSquare,
        bgColor: "bg-cornsilk",
        textColor: "text-kombu-dark",
        hoverColor: "group-hover:text-kombu-dark",
    },
    {
        label: "UTP",
        sublabel: "Consulta Académica",
        href: "https://wa.me/56963943314?text=Hola,%20consulta%20académica",
        icon: Book,
        bgColor: "bg-orange-100",
        textColor: "text-orange-600",
        hoverColor: "group-hover:text-orange-600",
    },
];

export default function WhatsAppWidget() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Menu */}
            <div
                className={`whatsapp-menu ${open ? "open" : "closed"
                    } bg-white rounded-xl shadow-2xl p-2 flex flex-col gap-1 border border-gray-100 min-w-[200px]`}
            >
                {contacts.map((c) => (
                    <a
                        key={c.label}
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition group"
                    >
                        <div
                            className={`w-8 h-8 rounded-full ${c.bgColor} ${c.textColor} flex items-center justify-center`}
                        >
                            <c.icon className="w-4 h-4" />
                        </div>
                        <div>
                            <span
                                className={`text-xs font-bold text-gray-400 block ${c.hoverColor}`}
                            >
                                {c.label}
                            </span>
                            <span className="text-sm font-medium text-gray-700">
                                {c.sublabel}
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            {/* FAB button */}
            <button
                onClick={() => setOpen(!open)}
                className="w-14 h-14 bg-kombu hover:bg-kombu-dark text-white rounded-full shadow-lg flex items-center justify-center transition hover:scale-110"
                aria-label="Abrir WhatsApp"
            >
                <MessageCircle className="w-8 h-8" />
            </button>
        </div>
    );
}
