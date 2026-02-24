export default function GoogleMapsWidget() {
    return (
        <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden border border-gray-300 relative">
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Colegio+Monte+Verde,+Panamericana+Sur+Km+1182,+Castro,+Chiloé&t=&z=14&ie=UTF8&iwloc=&output=embed"
                title="Ubicación Colegio Monte Verde"
                className="w-full h-full absolute inset-0"
            ></iframe>
            <a
                href="https://www.google.com/maps/search/?api=1&query=Colegio+Monte+Verde,+Panamericana+Sur+Km+1182,+Castro,+Chiloé"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 bg-white text-xs px-2 py-1 rounded shadow text-blue-600 hover:underline z-10 opacity-90 hover:opacity-100"
            >
                Ver mapa ampliado
            </a>
        </div>
    );
}
