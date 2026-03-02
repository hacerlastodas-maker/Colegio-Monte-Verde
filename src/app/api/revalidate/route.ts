import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/revalidate
 *
 * Endpoint para forzar la regeneración de las páginas de noticias bajo demanda.
 * Protegido por un token secreto que debe coincidir con REVALIDATION_SECRET.
 *
 * Uso:
 *   curl -X POST "https://tu-dominio.com/api/revalidate?secret=TU_TOKEN"
 *
 * Integración con Google Sheets:
 *   Configurar un Deploy Hook de Vercel o un Apps Script que llame a este endpoint
 *   cada vez que se actualice el Google Sheet.
 */
export async function POST(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get("secret");
    const envSecret = process.env.REVALIDATION_SECRET;

    // Validar que el token existe y coincide
    if (!envSecret || secret !== envSecret) {
        return NextResponse.json(
            { message: "Token inválido o no proporcionado." },
            { status: 401 }
        );
    }

    try {
        // Revalidar la homepage (sección Últimas Noticias + Hero dinámico)
        revalidatePath("/");
        // Revalidar el listado de noticias
        revalidatePath("/noticias");
        // Revalidar todas las páginas individuales de noticias
        revalidatePath("/noticias/[slug]", "page");

        return NextResponse.json({
            revalidated: true,
            timestamp: new Date().toISOString(),
            message: "Páginas de noticias revalidadas exitosamente.",
        });
    } catch (error) {
        console.error("[revalidate] Error al revalidar:", error);
        return NextResponse.json(
            { message: "Error al revalidar las páginas." },
            { status: 500 }
        );
    }
}
