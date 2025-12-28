import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://guiadepropinas.com"),

  title: {
    default: "Guía de Propinas",
    template: "%s | Guía de Propinas",
  },

  description:
    "Guía clara y actualizada para saber cuánto dejar de propina en cada país. Restaurantes, taxis, hoteles y tours.",

  alternates: {
    canonical: "https://guiadepropinas.com",
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    url: "https://guiadepropinas.com",
    siteName: "Guía de Propinas",
    title: "Guía de Propinas",
    description:
      "Descubre cuándo y cuánto dejar de propina en cada país del mundo. Información clara para viajeros.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Guía de Propinas",
      },
    ],
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
