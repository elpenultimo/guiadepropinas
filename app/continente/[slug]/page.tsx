import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CountryFlag } from "@/components/CountryFlag";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  continentesList,
  slugToContinente,
  type ContinenteSlug,
} from "@/data/continentes";
import { paises } from "@/data/paises";

type Props = {
  params: { slug: ContinenteSlug };
};

const baseUrl = "https://guiadepropinas.vercel.app";

export function generateStaticParams() {
  return continentesList.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const info = slugToContinente(params.slug);
  if (!info) {
    return {};
  }

  const title = `Propinas en ${info.nombre} – guía por países`;
  const description =
    "Reglas de propina en " +
    `${info.nombre}: restaurantes, taxis, hoteles y consejos rápidos por país.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/continente/${params.slug}`,
    },
    alternates: {
      canonical: `${baseUrl}/continente/${params.slug}`,
    },
  };
}

export default function ContinentePage({ params }: Props) {
  const info = slugToContinente(params.slug);

  if (!info) {
    notFound();
  }

  const paisesContinente = paises
    .filter((pais) => pais.continente === info.nombre)
    .sort((a, b) => a.name.localeCompare(b.name));

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
      {
        "@type": "ListItem",
        position: 3,
        name: info.nombre,
        item: `${baseUrl}/continente/${info.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: info.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumb = [
    { label: "Inicio", href: "/" },
    { label: "Continentes", href: "/continentes" },
    { label: info.nombre, href: `/continente/${info.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <nav className="text-sm text-white/70 mb-3">
        <ol className="flex items-center gap-2 flex-wrap">
          {breadcrumb.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              <Link href={item.href} className="hover:text-white">
                {item.label}
              </Link>
              {index < breadcrumb.length - 1 && <span>/</span>}
            </li>
          ))}
        </ol>
      </nav>
      <header className="space-y-3">
        <p className="badge">Continente</p>
        <h1 className="text-4xl font-bold">Propinas en {info.nombre}</h1>
        <p className="muted max-w-2xl">
          Reglas rápidas sobre cuándo y cuánto dejar propina en restaurantes, taxis y hoteles
          de {info.nombre}. Explora las diferencias culturales y abre la guía por país.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/paises" className="btn-primary">
            Ver todos los países
          </Link>
          <Link href="/" className="btn-secondary">
            Buscar un país
          </Link>
        </div>
      </header>
      <section className="mt-6 space-y-6">
        <div className="grid gap-3">
          {info.intro.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-white/90">
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          <p className="text-sm font-semibold mb-2">Cambiar de continente</p>
          <div className="flex flex-wrap gap-2">
            {continentesList.map((continente) => {
              const active = continente.slug === info.slug;
              return (
                <Link
                  key={continente.slug}
                  href={`/continente/${continente.slug}`}
                  className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "border-accent bg-white text-slate-900 shadow-lg"
                      : "border-white/20 text-white/80 hover:border-white/50 hover:bg-white/5"
                  }`}
                >
                  {continente.nombre}
                </Link>
              );
            })}
            <Link
              href="/paises"
              className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors border-white/20 text-white/80 hover:border-white/50 hover:bg-white/5"
            >
              Todos
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="section-title">Países de {info.nombre}</h2>
            <p className="text-sm text-white/70">{paisesContinente.length} países listados</p>
          </div>
          <div className="grid-cards">
            {paisesContinente.map((pais) => (
              <Link
                key={pais.slug}
                href={`/pais/${pais.slug}`}
                className="card hover:border-accent/40 transition-colors"
              >
                <div className="text-base">
                  <div className="flex items-center gap-2">
                    <CountryFlag
                      countryName={pais.name}
                      size={18}
                      className="shrink-0"
                    />
                    <span className="font-semibold">{pais.name}</span>
                  </div>
                </div>
                <p className="muted text-sm">Moneda: {pais.moneda}</p>
                <p className="text-sm mt-1">¿Se deja propina? {pais.seDejaPropina}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <p className="text-sm font-semibold text-accent">Atajo</p>
              <p className="text-lg font-semibold">¿Buscas otro destino?</p>
              <p className="muted text-sm">
                Explora el listado completo o vuelve al inicio para buscar un país específico.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/paises" className="btn-primary">
                Ver todos los países
              </Link>
              <Link href="/" className="btn-secondary">
                Buscar un país
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
            <h2 className="section-title">Preguntas frecuentes sobre {info.nombre}</h2>
            <span className="text-xs text-white/60">5 respuestas rápidas</span>
          </div>
          <FAQAccordion faqs={info.faqs} />
        </div>
      </section>
    </>
  );
}
