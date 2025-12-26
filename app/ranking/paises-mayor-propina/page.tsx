import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { FAQAccordion } from "@/components/FAQAccordion";
import { paises } from "@/data/paises";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://guiadepropinas.vercel.app";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

const ranking = [
  {
    slug: "estados-unidos",
    porcentaje: "18-22%",
    nota: "Cultura de tipping fuerte; revisa si existe service charge en grupos.",
  },
  {
    slug: "canada",
    porcentaje: "15-20%",
    nota: "POS suele sugerir 18%; en pubs se deja por ronda o porcentaje.",
  },
  {
    slug: "mexico",
    porcentaje: "10-15%",
    nota: "En zonas turísticas la cuenta puede traer propina sugerida, verifica antes de pagar.",
  },
  {
    slug: "brasil",
    porcentaje: "10%",
    nota: "La 'taxa de serviço' del 10% aparece en muchas cuentas y se considera estándar.",
  },
  {
    slug: "colombia",
    porcentaje: "10%",
    nota: "En restaurantes formales se pregunta si aceptas agregar el 10% de propina.",
  },
];

const faqItems = [
  {
    q: "¿Por qué se deja tanta propina?",
    a: "En estos países el sueldo del personal depende en gran medida del tipping voluntario.",
  },
  {
    q: "¿La propina se calcula antes de impuestos?",
    a: "En Norteamérica se calcula sobre el subtotal sin impuestos; evita hacerlo sobre el total con tax.",
  },
  {
    q: "¿Cómo pagarla: efectivo o tarjeta?",
    a: "El POS permite añadir porcentaje, pero en bares y taxis el efectivo acelera el reparto.",
  },
  {
    q: "¿Qué hago si el servicio fue malo?",
    a: "Puedes reducir la propina y dejar un comentario; no es obligatorio llegar al rango alto.",
  },
  {
    q: "¿Las apps incluyen propina?",
    a: "Las apps sugieren montos, pero puedes ajustarlos manualmente según la calidad del servicio.",
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
      name: "Ranking",
      item: `${normalizedBaseUrl}/ranking`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Países con mayor propina",
      item: `${normalizedBaseUrl}/ranking/paises-mayor-propina`,
    },
  ],
};

export const metadata: Metadata = {
  title: "Países donde se deja más propina",
  description:
    "Ranking de países con cultura de propina alta, porcentajes habituales en restaurantes y enlaces a guías completas.",
  alternates: {
    canonical: `${normalizedBaseUrl}/ranking/paises-mayor-propina`,
  },
  openGraph: {
    title: "Países donde se deja más propina",
    description:
      "Porcentajes recomendados en restaurantes y notas rápidas para destinos con fuerte cultura de tipping.",
    url: `${normalizedBaseUrl}/ranking/paises-mayor-propina`,
  },
};

const findPaisName = (slug: string) => paises.find((p) => p.slug === slug)?.name ?? slug;

export default function PaisesMayorPropinaPage() {
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
            <Link href="/ranking" className="hover:text-white">
              Ranking
            </Link>
          </li>
          <li className="text-white/40">/</li>
          <li className="font-semibold text-white/80">Países con mayor propina</li>
        </ol>
      </nav>

      <header className="space-y-2">
        <p className="badge">Cultura de tipping</p>
        <h1 className="text-3xl font-bold">Países donde se deja más propina</h1>
        <p className="muted max-w-2xl">
          Destinos donde el porcentaje en restaurantes es alto y esperado. Úsalo como guía rápida y luego abre la
          ficha detallada de cada país.
        </p>
      </header>

      <section className="card space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="section-title">Ranking de restaurantes</h2>
            <p className="muted text-sm">Porcentajes habituales sobre el consumo antes de impuestos.</p>
          </div>
          <Link href="/paises" className="link">Ver guía completa de cada país →</Link>
        </div>
        <ol className="space-y-3 list-decimal list-inside">
          {ranking.map((item) => (
            <li key={item.slug} className="card bg-white/5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <p className="text-lg font-semibold">{findPaisName(item.slug)}</p>
                  <p className="muted text-sm">{item.nota}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-2xl font-bold">{item.porcentaje}</p>
                  <Link href={`/pais/${item.slug}`} className="link text-sm">
                    Abrir guía de propinas
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <AdSlot />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="card space-y-3">
          <h2 className="section-title">Consejos rápidos</h2>
          <ul className="list-disc list-inside space-y-2 text-white/90">
            <li>Calcula la propina sobre el subtotal y revisa si ya añadieron service charge.</li>
            <li>En barras, deja un monto por ronda; en mesa, usa porcentaje.</li>
            <li>En apps, personaliza el monto según puntualidad y estado del pedido.</li>
            <li>Ten billetes pequeños para propinas en efectivo en taxis y hoteles.</li>
          </ul>
        </div>
        <div className="card space-y-3">
          <h3 className="section-title">Otros destinos útiles</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/continentes" className="link">
                Ver propinas por continente
              </Link>
            </li>
            <li>
              <Link href="/pais/espana" className="link">
                ¿Cuánto se deja en España?
              </Link>
            </li>
            <li>
              <Link href="/pais/reino-unido" className="link">
                Propinas en Reino Unido
              </Link>
            </li>
            <li>
              <Link href="/pais/argentina" className="link">
                Propinas en Argentina
              </Link>
            </li>
            <li>
              <Link href="/pais/brasil" className="link">
                Reglas de propina en Brasil
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="card">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="section-title">Preguntas frecuentes</h2>
            <p className="muted text-sm">Lo esencial para no quedar corto ni exagerar.</p>
          </div>
          <Link href="/paises" className="link">
            Abrir todas las guías de países
          </Link>
        </div>
        <FAQAccordion faqs={faqItems} />
      </section>
    </div>
  );
}
