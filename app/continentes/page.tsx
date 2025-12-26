import type { Metadata } from "next";
import Link from "next/link";
import { continentesList } from "@/data/continentes";

const baseUrl = "https://guiadepropinas.vercel.app";

export const metadata: Metadata = {
  title: "Continentes – propinas por región",
  description:
    "Explora propinas por continente y abre las guías por país para restaurantes, taxis y hoteles.",
  openGraph: {
    title: "Continentes – propinas por región",
    description:
      "Explora propinas por continente y abre las guías por país para restaurantes, taxis y hoteles.",
    url: `${baseUrl}/continentes`,
  },
  alternates: {
    canonical: `${baseUrl}/continentes`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: `${baseUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Continentes",
      item: `${baseUrl}/continentes`,
    },
  ],
};

export default function ContinentesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav className="text-sm text-white/70 mb-3">
        <ol className="flex items-center gap-2 flex-wrap">
          <li className="flex items-center gap-2">
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>
            <span>/</span>
          </li>
          <li className="text-white">Continentes</li>
        </ol>
      </nav>
      <header className="space-y-3">
        <p className="badge">Mapa regional</p>
        <h1 className="text-4xl font-bold">Propinas por continente</h1>
        <p className="muted max-w-2xl">
          Abre cada continente para conocer las reglas de propina en restaurantes, taxis y hoteles,
          con enlaces directos a cada país.
        </p>
      </header>
      <section className="mt-6 space-y-4">
        <h2 className="section-title">Explora las regiones</h2>
        <div className="grid-cards">
          {continentesList.map((continente) => (
            <Link
              key={continente.slug}
              href={`/continente/${continente.slug}`}
              className="card hover:border-accent/40 transition-colors"
            >
              <p className="text-lg font-semibold">{continente.nombre}</p>
              <p className="muted text-sm">Guías de propina por país</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
