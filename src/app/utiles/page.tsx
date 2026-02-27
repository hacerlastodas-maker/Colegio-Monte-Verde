"use client";

import { Printer, CheckCircle, ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { schoolSupplies } from "@/data/utiles";

export default function UtilesPage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="py-16 px-4 max-w-4xl mx-auto min-h-screen">
            {/* Header (No-Print) */}
            <div className="flex justify-between items-center mb-8 print:hidden">
                <Link
                    href="/admision"
                    className="flex items-center text-gray-600 hover:text-kombu transition"
                >
                    <ArrowLeft className="w-5 h-5 mr-1" /> Volver a Admisión
                </Link>
                <button
                    onClick={handlePrint}
                    className="bg-kombu text-white px-6 py-2 rounded-lg font-bold hover:bg-kombu-dark transition flex items-center gap-2 shadow-md"
                >
                    <Printer className="w-5 h-5" /> Imprimir Lista
                </button>
            </div>

            {/* Print Header (Only visible when printing) */}
            <div className="hidden print:block text-center mb-8 border-b-2 border-kombu pb-4">
                <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-widest">
                    Colegio Monte Verde
                </h1>
                <p className="text-sm text-gray-500">Castro, Chiloé</p>
            </div>

            <h1 className="text-3xl font-bold mb-2 text-center text-gray-800 print:text-2xl">
                Listas de Útiles Escolares 2026
            </h1>
            <p className="text-center text-gray-600 mb-12 print:mb-6">
                Materiales solicitados para el año académico en curso. Descarga
                la lista oficial en PDF de cada curso.
            </p>

            {/* Lists */}
            <div className="space-y-8">
                {schoolSupplies.map((list) => (
                    <div
                        key={list.grade}
                        className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 print:shadow-none print:border print:border-gray-300 print:p-4 break-inside-avoid"
                    >
                        <div className="flex items-center justify-between mb-6 border-b border-fawn/30 pb-2">
                            <h2 className="text-2xl font-bold text-kombu print:text-xl print:text-black">
                                {list.grade}
                            </h2>
                            {list.pdfUrl && (
                                <a
                                    href={list.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="print:hidden flex items-center gap-2 bg-kombu text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-kombu-dark transition shadow-sm"
                                >
                                    <Download className="w-4 h-4" />
                                    Descargar PDF
                                </a>
                            )}
                        </div>
                        <ul className="grid md:grid-cols-2 gap-3 print:grid-cols-2">
                            {list.items.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-2 text-gray-700"
                                >
                                    <CheckCircle className="w-5 h-5 text-kombu flex-shrink-0 mt-0.5 print:text-black" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Print Footer */}
            <div className="hidden print:block mt-12 text-center text-xs text-gray-400 border-t pt-4">
                <p>
                    Generado automáticamente desde www.colegiomonteverde.cl el{" "}
                    {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
