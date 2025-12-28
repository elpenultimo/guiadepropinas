import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { FAQAccordion } from "@/components/FAQAccordion";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://guiadepropinas.vercel.app";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

const faqItems = [
  {
    q: "¿Cuánto dejar si no sé la regla local?",
    a: "Entre 10% y 12% suele ser seguro en restaurantes con servicio en mesa, salvo que el país no acepte propinas.",
  },
  {
    q: "¿Propina incluida o aparte?",
    a: "Busca cargos como service charge o gratuity en la cuenta; si ya está incluido, elige un extra solo si el servicio fue excelente.",
  },
  {
    q: "¿Efectivo o tarjeta?",
    a: "En ciudades grandes se puede añadir en el POS, pero en locales pequeños el efectivo garantiza que llegue al personal.",
  },
  {
    q: "¿En buffets o food courts?",
    a: "Normalmente no se deja porcentaje; basta con redondear o dejar monedas en el frasco.",
  },
  {
    q: "¿Qué hago si el servicio fue malo?",
    a: "Reduce el porcentaje o no dejes propina y explica brevemente el motivo al cobrar.",
  },
];

const continentGuides = [
  {
    nombre: "Europa",
    slug: "europa",
    rango: "5-10% en restaurantes con servicio; revisar si ya hay cargo por servicio.",
  },
  {
    nombre: "América",
    slug: "america",
    rango: "10-20% según el país; en EE. UU. y Canadá se espera el tramo alto.",
  },
  {
    nombre: "Asia",
    slug: "asia",
    rango: "En muchos países no se deja propina; verifica Japón, China o Corea del Sur.",
  },
  {
    nombre: "Oceanía",
    slug: "oceania",
    rango: "Australia y Nueva Zelanda aceptan 10% en servicio en mesa, pero no es obligatorio.",
  },
  {
    nombre: "África",
    slug: "africa",
    rango: "En destinos turísticos se deja 10%; en restaurantes locales basta con redondear.",
  },
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
      name: "Propina en restaurantes",
      item: `${normalizedBaseUrl}/guia/propina-restaurantes`,
    },
  ],
};

export const metadata: Metadata = {
  title: "Propina en restaurantes: cuánto dejar y cuándo",
  description:
    "Reglas rápidas de propina en restaurantes: montos por continente, cargos incluidos y cuándo usar efectivo o tarjeta.",
  alternates: {
    canonical: `${normalizedBaseUrl}/guia/propina-restaurantes`,
  },
  openGraph: {
    title: "Propina en restaurantes",
    description:
      "Consejos claros para dejar propina en restaurantes alrededor del mundo, con rangos por continente.",
    url: `${normalizedBaseUrl}/guia/propina-restaurantes`,
  },
};

export default function PropinaRestaurantesPage() {
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
          <li className="font-semibold text-white/80">Propina en restaurantes</li>
        </ol>
      </nav>

      <header className="space-y-2">
        <p className="badge">Reglas globales</p>
        <h1 className="text-3xl font-bold">Propina en restaurantes: cuánto dejar y cuándo</h1>
        <p className="muted max-w-3xl">
          Atajos para viajeros: cuándo revisar si el servicio ya está incluido, rangos por continente y recomendaciones
          prácticas para pagar en efectivo o con tarjeta.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-[2fr,1fr]">
        <div className="card space-y-3">
          <h2 className="section-title">Reglas generales</h2>
          <ul className="list-disc list-inside space-y-2 text-white/90">
            <li>Confirma si hay cargo por servicio en la cuenta antes de añadir un porcentaje.</li>
            <li>En mesas grandes algunos locales suman gratuity obligatoria; evita duplicarla.</li>
            <li>Cuando el pago es en POS, verifica que el porcentaje se aplique sobre el subtotal.</li>
            <li>Si el servicio fue mediocre, deja un monto simbólico y comunica el motivo con respeto.</li>
          </ul>
          <AdSlot />
        </div>
        <div className="card space-y-3">
          <h3 className="section-title">Enlaces rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/continente/europa" className="link">
                Propinas en Europa
              </Link>
            </li>
            <li>
              <Link href="/continente/america" className="link">
                Propinas en América
              </Link>
            </li>
            <li>
              <Link href="/pais/estados-unidos" className="link">
                Detalles para Estados Unidos
              </Link>
            </li>
            <li>
              <Link href="/pais/mexico" className="link">
                Guía rápida de México
              </Link>
            </li>
            <li>
              <Link href="/pais/francia" className="link">
                Cómo funcionan las propinas en Francia
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="card space-y-3">
        <h2 className="section-title">Comparativa por continente</h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {continentGuides.map((item) => (
            <Link
              key={item.slug}
              href={`/continente/${item.slug}`}
              className="card bg-white/5 hover:border-accent/40 transition-colors"
            >
              <p className="text-lg font-semibold">{item.nombre}</p>
              <p className="muted text-sm">{item.rango}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="card space-y-2">
          <h3 className="section-title">Propina incluida vs no incluida</h3>
          <p className="leading-relaxed text-white/90">
            Si ves "service charge", "servicio" o "gratuity" ya estás pagando algo al personal. Puedes sumar un 5%
            extra si la atención fue destacada, pero no es obligatorio. Si no hay cargo, ajusta entre 10% y 20%
            según el país.
          </p>
        </div>
        <div className="card space-y-2">
          <h3 className="section-title">Efectivo vs tarjeta</h3>
          <p className="leading-relaxed text-white/90">
            Con tarjeta eliges porcentaje en la terminal, pero en bares y food trucks el efectivo es más práctico y
            asegura que llegue al equipo. Lleva billetes pequeños para evitar depender del POS.
          </p>
        </div>
      </section>

      <section className="card">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="section-title">Preguntas frecuentes</h2>
            <p className="muted text-sm">Respuestas breves para decidir cuánto dejar.</p>
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
