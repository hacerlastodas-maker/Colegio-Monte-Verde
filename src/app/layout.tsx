import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://monteverdechiloe.cl"),
  title: "Colegio Monte Verde - Castro, Chiloé",
  description:
    "Formando futuro desde el corazón de Chiloé. Colegio Monte Verde, Castro.",
  openGraph: {
    title: "Colegio Monte Verde - Castro, Chiloé",
    description: "Formando futuro desde el corazón de Chiloé. Colegio Monte Verde, Castro.",
    url: "https://monteverdechiloe.cl",
    siteName: "Colegio Monte Verde",
    locale: "es_CL",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans text-gray-800 bg-white flex flex-col min-h-screen">
        <ThemeProvider>
          <TopBar />
          <Navbar />
          <main className="flex-grow relative fade-in">{children}</main>
          <Footer />
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
