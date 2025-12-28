import { AdSlot } from "@/components/AdSlot";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CountryFlag } from "@/components/CountryFlag";
import { findPaisBySlug, paises } from "@/data/paises";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return paises.map((pais) => ({ slug: pais.slug }));
}

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://guiadepropinas.vercel.app";
const normalizedBaseUrl = baseUrl.endsWith("/")
  ? baseUrl.slice(0, -1)
  : baseUrl;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const pais = findPaisBySlug(params.slug);
  if (!pais) return { title: "País no encontrado" };

  const title = `Propinas en ${pais.name} – cuánto dejar y cuándo`;
  const description = `Guía rápida de propinas en ${pais.name}: restaurantes, taxis, hoteles y errores comunes.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${normalizedBaseUrl}/pais/${pais.slug}`,
    },
  };
}

export default function PaisPage({ params }: { params: { slug: string } }) {
  const pais = findPaisBySlug(params.slug);
  if (!pais) return notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pais.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: normalizedBaseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Países",
        item: `${normalizedBaseUrl}/paises`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pais.name,
        item: `${normalizedBaseUrl}/pais/${pais.slug}`,
      },
    ],
  };

  const extra = pais.extra ?? {};
  const errores = extra.erroresComunes?.length
    ? extra.erroresComunes
    : [
        "No asumir que la propina es obligatoria en todos los servicios.",
        "Llevar siempre efectivo pequeño por si el POS no acepta montos extra.",
        "Preguntar antes de añadir propina en apps para evitar duplicar cargos.",
        "Confirmar si ya hay cargo de servicio en la cuenta.",
      ];

  const populares = [
    "mexico",
    "espana",
    "estados-unidos",
    "japon",
    "francia",
    "italia",
    "colombia",
    "brasil",
    "argentina",
    "peru",
    "reino-unido",
    "alemania",
  ];
  const relacionadosBase = pais.continente
    ? paises.filter((p) => p.continente === pais.continente && p.slug !== pais.slug)
    : [];
  const relacionadosPopulares = populares
    .map((slug) => paises.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .filter((p) => p.slug !== pais.slug && !relacionadosBase.some((base) => base.slug === p.slug));

  const maxRelacionados = 8;
  const relacionadosOrdenados: typeof paises = [];
  const usados = new Set<string>();

  const agregarPais = (lista: typeof paises) => {
    for (const candidato of lista) {
      if (relacionadosOrdenados.length >= maxRelacionados) return;
      if (usados.has(candidato.slug) || candidato.slug === pais.slug) continue;
      relacionadosOrdenados.push(candidato);
      usados.add(candidato.slug);
    }
  };

  agregarPais(relacionadosBase);
  agregarPais(relacionadosPopulares);
  agregarPais(
    paises.filter((p) => p.slug !== pais.slug && !usados.has(p.slug))
  );

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-xs text-white/60">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>
          </li>
          <li className="text-white/40">/</li>
          <li>
            <Link href="/paises" className="hover:text-white">
              Países
            </Link>
          </li>
          <li className="text-white/40">/</li>
          <li className="font-semibold text-white/80">{pais.name}</li>
        </ol>
      </nav>
      <header className="space-y-1">
        <p className="badge">Guía rápida</p>
        <div className="flex items-center gap-3">
          <CountryFlag iso2={pais.iso2} size={30} />
          <h1 className="text-3xl font-bold">Propinas en {pais.name}</h1>
        </div>
        <p className="muted">Moneda: {pais.moneda}</p>
      </header>

      <div className="card space-y-3">
        <p className="font-semibold text-lg">¿Se deja propina? {pais.seDejaPropina}</p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="card bg-white/5">
            <p className="text-sm uppercase text-white/60">Restaurantes</p>
            <p className="leading-relaxed">{pais.resumen.restaurantes}</p>
          </div>
          <div className="card bg-white/5">
            <p className="text-sm uppercase text-white/60">Taxis</p>
            <p className="leading-relaxed">{pais.resumen.taxis}</p>
          </div>
          <div className="card bg-white/5">
            <p className="text-sm uppercase text-white/60">Hoteles</p>
            <p className="leading-relaxed">{pais.resumen.hoteles}</p>
          </div>
        </div>
        <div className="card bg-white/5">
          <p className="font-semibold mb-2">Notas rápidas</p>
          <ul className="list-disc list-inside text-sm text-white/80 space-y-1">
            {pais.notas.map((nota) => (
              <li key={nota}>{nota}</li>
            ))}
          </ul>
        </div>
        <AdSlot />
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="card">
          <h2 className="section-title">Bares y cafés</h2>
          <p className="leading-relaxed text-white/90">
            {extra.baresCafes ?? "Busca dejar monedas o un pequeño porcentaje si hubo buena atención."}
          </p>
        </div>
        <div className="card">
          <h2 className="section-title">Tours y guías</h2>
          <p className="leading-relaxed text-white/90">
            {extra.tours ?? "En tours guiados se agradece una propina acorde a la duración y el tamaño del grupo."}
          </p>
        </div>
        <div className="card">
          <h2 className="section-title">Delivery</h2>
          <p className="leading-relaxed text-white/90">
            {extra.delivery ?? "Las apps permiten sumar un extra opcional; efectivo pequeño también funciona."}
          </p>
        </div>
        <div className="card">
          <h2 className="section-title">Propinas con tarjeta vs efectivo</h2>
          <p className="leading-relaxed text-white/90">
            {extra.tarjetaVsEfectivo ??
              "Pregunta si prefieren efectivo; algunos POS permiten agregar la propina directamente."}
          </p>
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Errores comunes al dejar propina</h2>
        <ul className="mt-2 list-disc list-inside space-y-1 text-white/90">
          {errores.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="section-title">Preguntas frecuentes</h2>
        <FAQAccordion faqs={pais.faqs} />
      </section>

      <section className="card">
        <h2 className="section-title">Países relacionados</h2>
        <p className="muted mb-3">
          Explora otras guías con costumbres parecidas o destinos populares.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {relacionadosOrdenados.map((rel) => (
            <Link
              key={rel.slug}
              href={`/pais/${rel.slug}`}
              className="card bg-white/5 hover:border-accent/40 transition-colors"
            >
              <p className="font-semibold">{rel.name}</p>
              {rel.continente && (
                <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-[11px] text-white/70">
                  {rel.continente}
                </span>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
