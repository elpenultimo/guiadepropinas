import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://guiadepropinas.vercel.app";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

const cards = [
  {
    href: "/ranking/paises-sin-propina",
    title: "Países sin propina",
    description: "Destinos donde la propina no es costumbre o se considera innecesaria.",
  },
  {
    href: "/ranking/paises-mayor-propina",
    title: "Países con mayor propina",
    description: "Lista de países donde se espera un porcentaje alto en restaurantes.",
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
      name: "Ranking",
      item: `${normalizedBaseUrl}/ranking`,
    },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: cards.map((card, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: card.title,
    url: `${normalizedBaseUrl}${card.href}`,
  })),
};

export const metadata: Metadata = {
  title: "Rankings de propinas",
  description:
    "Rankings rápidos para viajeros: dónde no se deja propina, dónde se deja más, etc.",
  alternates: {
    canonical: `${normalizedBaseUrl}/ranking`,
  },
  openGraph: {
    title: "Rankings de propinas",
    description:
      "Rankings rápidos para viajeros: dónde no se deja propina, dónde se deja más, etc.",
    url: `${normalizedBaseUrl}/ranking`,
  },
};

export default function RankingHubPage() {
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
          <li className="text-white">Ranking</li>
        </ol>
      </nav>

      <header className="space-y-3">
        <p className="badge">Selecciones rápidas</p>
        <h1 className="text-4xl font-bold">Rankings de propinas</h1>
        <p className="muted max-w-2xl">
          Rankings rápidos para viajeros: dónde no se deja propina, dónde se deja más, etc.
        </p>
      </header>

      <section className="mt-6 space-y-4">
        <h2 className="section-title">Explora los rankings</h2>
        <div className="grid-cards">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="card bg-white/5 hover:border-accent/40 transition-colors flex flex-col gap-3"
            >
              <div className="space-y-1">
                <p className="text-lg font-semibold">{card.title}</p>
                <p className="muted text-sm">{card.description}</p>
              </div>
              <span className="link text-sm font-semibold">Ver ranking →</span>
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
