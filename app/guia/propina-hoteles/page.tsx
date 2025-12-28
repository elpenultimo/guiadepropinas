import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { FAQAccordion } from "@/components/FAQAccordion";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://guiadepropinas.vercel.app";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

const faqItems = [
  {
    q: "¿Cuánto dejar al personal de limpieza?",
    a: "Deja 1 a 3 unidades de la moneda local por noche, en un sobre visible, salvo en países donde no se dejan propinas.",
  },
  {
    q: "¿Y al maletero o botones?",
    a: "Un monto por maleta (2-5 unidades de moneda local) entregado en mano justo después del servicio.",
  },
  {
    q: "¿Se deja algo en recepción?",
    a: "Solo cuando te ayudan con reservas o upgrades: un pequeño extra como agradecimiento opcional.",
  },
  {
    q: "¿Resorts vs hoteles urbanos?",
    a: "En resorts todo incluido se deja un monto simbólico diario; en hoteles urbanos se paga por servicio recibido.",
  },
  {
    q: "¿Qué pasa en países sin cultura de propina?",
    a: "Prefiere notas de agradecimiento o dulces; evita el efectivo en Japón, China, Corea del Sur o Singapur.",
  },
];

const regionHighlights = [
  {
    nombre: "Norteamérica",
    rango: "2-5 USD por día a limpieza; 2-3 USD por maleta.",
    enlaces: [
      { href: "/pais/estados-unidos", label: "Guía de Estados Unidos" },
      { href: "/pais/canada", label: "Propinas en Canadá" },
    ],
  },
  {
    nombre: "Europa",
    rango: "1-3 EUR por día en hoteles urbanos; revisa si ya hay cargo de servicio.",
    enlaces: [
      { href: "/pais/espana", label: "Propinas en España" },
      { href: "/pais/italia", label: "Propinas en Italia" },
    ],
  },
  {
    nombre: "Asia",
    rango: "En Japón, China o Corea no se deja propina; en destinos turísticos del sudeste asiático se deja un pequeño extra.",
    enlaces: [
      { href: "/pais/japon", label: "Etiqueta en Japón" },
      { href: "/pais/tailandia", label: "Guía de Tailandia" },
    ],
  },
];

const paisesHotelDestacados = [
  { slug: "estados-unidos", label: "Estados Unidos" },
  { slug: "canada", label: "Canadá" },
  { slug: "mexico", label: "México" },
  { slug: "brasil", label: "Brasil" },
  { slug: "espana", label: "España" },
  { slug: "reino-unido", label: "Reino Unido" },
  { slug: "emiratos-arabes-unidos", label: "Emiratos Árabes Unidos" },
  { slug: "japon", label: "Japón" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
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
      name: "Guía",
      item: `${normalizedBaseUrl}/guia`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Propina en hoteles",
      item: `${normalizedBaseUrl}/guia/propina-hoteles`,
    },
  ],
};

export const metadata: Metadata = {
  title: "Propina en hoteles: limpieza, maleteros y recepción",
  description:
    "Consejos claros de propina en hoteles: cuánto dejar a limpieza, maleteros y recepción, con diferencias por región.",
  alternates: {
    canonical: `${normalizedBaseUrl}/guia/propina-hoteles`,
  },
  openGraph: {
    title: "Propina en hoteles",
    description:
      "Guía rápida para dar propina en hoteles urbanos y resorts, con montos por región y excepciones culturales.",
    url: `${normalizedBaseUrl}/guia/propina-hoteles`,
  },
};

export default function PropinaHotelesPage() {
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
            <Link href="/guia" className="hover:text-white">
              Guía
            </Link>
          </li>
          <li className="text-white/40">/</li>
          <li className="font-semibold text-white/80">Propina en hoteles</li>
        </ol>
      </nav>

      <header className="space-y-2">
        <p className="badge">Hoteles y resorts</p>
        <h1 className="text-3xl font-bold">Propina en hoteles: limpieza, maleteros y recepción</h1>
        <p className="muted max-w-3xl">
          Qué dejar en efectivo, cuándo usar la tarjeta y cómo cambian las reglas entre hoteles urbanos y resorts todo
          incluido.
        </p>
      </header>

      <section className="card space-y-3">
        <h2 className="section-title">Montos rápidos por servicio</h2>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="card bg-white/5">
            <p className="text-sm uppercase text-white/60">Limpieza</p>
            <p className="leading-relaxed text-white/90">
              1-3 unidades de moneda local por noche. Déjala cada día en un sobre o nota visible.
            </p>
          </div>
          <div className="card bg-white/5">
            <p className="text-sm uppercase text-white/60">Maleteros</p>
            <p className="leading-relaxed text-white/90">2-5 unidades por maleta al momento de recibir el servicio.</p>
          </div>
          <div className="card bg-white/5">
            <p className="text-sm uppercase text-white/60">Recepción</p>
            <p className="leading-relaxed text-white/90">
              Propina opcional cuando gestionan upgrades, reservas o late check-out exitoso.
            </p>
          </div>
        </div>
        <AdSlot />
      </section>

      <section className="card space-y-3">
        <h2 className="section-title">Diferencias culturales</h2>
        <p className="leading-relaxed text-white/90">
          En Norteamérica y partes de América Latina se agradece la propina en efectivo; en Europa suele ser opcional y
          moderada. En Asia oriental se evita el efectivo extra y es mejor agradecer con palabras o un pequeño
          obsequio.
        </p>
      </section>

      <section className="card space-y-3">
        <h2 className="section-title">Resorts vs hoteles urbanos</h2>
        <ul className="list-disc list-inside space-y-2 text-white/90">
          <li>Resorts todo incluido: deja un monto simbólico diario a limpieza y al personal de bar preferido.</li>
          <li>Hoteles urbanos: paga por servicio recibido (maletas, concierge, room service).</li>
          <li>En hoteles boutique, preguntar si el equipo comparte propinas evita duplicar montos.</li>
        </ul>
      </section>

      <section className="card space-y-4">
        <h2 className="section-title">Referencias por región</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {regionHighlights.map((region) => (
            <div key={region.nombre} className="card bg-white/5 space-y-2">
              <p className="text-lg font-semibold">{region.nombre}</p>
              <p className="muted text-sm">{region.rango}</p>
              <ul className="space-y-1 text-sm">
                {region.enlaces.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="card space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="section-title">Países a revisar antes de viajar</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/paises" className="link">
              Ver todas las guías
            </Link>
            <Link href="/continentes" className="link">
              Explorar por continente
            </Link>
          </div>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
          {paisesHotelDestacados.map((pais) => (
            <Link
              key={pais.slug}
              href={`/pais/${pais.slug}`}
              className="card bg-white/5 hover:border-accent/40 transition-colors"
            >
              <p className="font-semibold">{pais.label}</p>
              <p className="muted text-xs">Montos rápidos para hoteles</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="section-title">Preguntas frecuentes</h2>
            <p className="muted text-sm">Guía rápida para no dejar de más ni de menos.</p>
          </div>
          <Link href="/paises" className="link">
            Revisar guías por país
          </Link>
        </div>
        <FAQAccordion faqs={faqItems} />
      </section>
    </div>
  );
}
