import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://guiadepropinas.vercel.app"),
  title: {
    default: "Guía de Propinas",
    template: "%s | Guía de Propinas",
  },
  description: "Consejos rápidos para dejar propina en restaurantes, taxis y hoteles alrededor del mundo.",
  openGraph: {
    title: "Guía de Propinas",
    description: "Resumen práctico por país para saber cuándo y cuánto dejar.",
    url: "https://guiadepropinas.vercel.app",
    siteName: "Guía de Propinas",
  },
  alternates: {
    canonical: "https://guiadepropinas.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        <main className="container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
