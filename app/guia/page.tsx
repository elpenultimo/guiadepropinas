import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://guiadepropinas.vercel.app";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

const guides = [
  {
    href: "/guia/propina-restaurantes",
    title: "Propina en restaurantes",
    description: "Cuándo revisar el servicio incluido y cuánto dejar en la cuenta.",
  },
  {
    href: "/guia/propina-hoteles",
    title: "Propina en hoteles",
    description: "Montos rápidos para maleteros, limpieza y recepción.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: `${normalizedBaseUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guías",
      item: `${normalizedBaseUrl}/guia`,
    },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: guides.map((guide, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: guide.title,
    url: `${normalizedBaseUrl}${guide.href}`,
  })),
};

export const metadata: Metadata = {
  title: "Guías de propinas",
  description: "Recopilamos guías rápidas sobre propinas en hoteles y restaurantes.",
  alternates: {
    canonical: `${normalizedBaseUrl}/guia`,
  },
  openGraph: {
    title: "Guías de propinas",
    description: "Recopilamos guías rápidas sobre propinas en hoteles y restaurantes.",
    url: `${normalizedBaseUrl}/guia`,
  },
};

export default function GuiaHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <nav className="text-sm text-white/70 mb-3">
        <ol className="flex items-center gap-2 flex-wrap">
          <li className="flex items-center gap-2">
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>
            <span>/</span>
          </li>
          <li className="text-white">Guías</li>
        </ol>
      </nav>

      <header className="space-y-3">
        <p className="badge">Recursos esenciales</p>
        <h1 className="text-4xl font-bold">Guías de propinas</h1>
        <p className="muted max-w-2xl">
          Guías rápidas para resolver dudas comunes al dejar propina en tu viaje.
        </p>
      </header>

      <section className="mt-6 space-y-4">
        <h2 className="section-title">Elige una guía</h2>
        <div className="grid-cards">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="card bg-white/5 hover:border-accent/40 transition-colors flex flex-col gap-3"
            >
              <div className="space-y-1">
                <p className="text-lg font-semibold">{guide.title}</p>
                <p className="muted text-sm">{guide.description}</p>
              </div>
              <span className="link text-sm font-semibold">Ver guía →</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-6">
        <AdSlot />
      </div>
    </>
  );
}
