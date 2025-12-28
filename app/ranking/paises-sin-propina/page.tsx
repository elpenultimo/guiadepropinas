import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { FAQAccordion } from "@/components/FAQAccordion";
import { paises } from "@/data/paises";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://guiadepropinas.vercel.app";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

const faqItems = [
  {
    q: "¿Es ofensivo dejar propina?",
    a: "En estos destinos el servicio ya está incluido y ofrecer efectivo puede incomodar al personal.",
  },
  {
    q: "¿Qué pasa en zonas turísticas?",
    a: "En áreas muy turísticas algunos hoteles o guías aceptan un extra opcional, pero no se espera.",
  },
  {
    q: "¿Puedo redondear la cuenta?",
    a: "Si quieres agradecer, puedes redondear discretamente o dejar un pequeño regalo en vez de efectivo.",
  },
  {
    q: "¿Se deja propina en taxis?",
    a: "Normalmente se paga el importe exacto; solo redondea si la atención fue excepcional.",
  },
  {
    q: "¿Cómo mostrar agradecimiento?",
    a: "Un gracias, una reseña positiva o un pequeño souvenir local es mejor recibido que dinero.",
  },
];

const notes: Record<string, string> = {
  japon: "El servicio se considera parte del precio y la propina puede verse como descortesía.",
  china: "El personal suele rechazar efectivo extra porque la tarifa ya incluye el servicio.",
  "corea-del-sur": "La cultura prioriza la hospitalidad sin propinas; paga el monto exacto.",
  singapur: "Hay cargos de servicio; añadir dinero extra no es necesario ni esperado.",
  taiwan: "La tarifa publicada es final y dar efectivo adicional puede sorprender al personal.",
};

const paisesSinPropina = paises
  .filter((pais) => pais.seDejaPropina === "No")
  .map((pais) => ({
    ...pais,
    nota: notes[pais.slug] ?? "La propina no es costumbre; el servicio ya está incluido.",
  }));

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
      name: "Países sin propina",
      item: `${normalizedBaseUrl}/ranking/paises-sin-propina`,
    },
  ],
};

export const metadata: Metadata = {
  title: "Países donde NO se deja propina",
  description:
    "Lista rápida de países donde la propina no es costumbre, con notas culturales y enlaces a guías completas.",
  alternates: {
    canonical: `${normalizedBaseUrl}/ranking/paises-sin-propina`,
  },
  openGraph: {
    title: "Países donde no se deja propina",
    description:
      "Destinos donde la propina puede ser innecesaria o inapropiada, con enlaces a la guía de cada país.",
    url: `${normalizedBaseUrl}/ranking/paises-sin-propina`,
  },
};

export default function PaisesSinPropinaPage() {
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
          <li className="font-semibold text-white/80">Países sin propina</li>
        </ol>
      </nav>

      <header className="space-y-2">
        <p className="badge">Cultura de servicio</p>
        <h1 className="text-3xl font-bold">Países donde NO se deja propina</h1>
        <p className="muted max-w-2xl">
          En estos destinos la propina no es costumbre e incluso puede sorprender al personal. Respeta la
          etiqueta local y usa el monto exacto al pagar.
        </p>
      </header>

      <section className="card space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="section-title">Lista rápida</h2>
            <p className="muted text-sm">Cada tarjeta enlaza a la guía completa del país.</p>
          </div>
          <Link href="/paises" className="link">Ver reglas de propina por país →</Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {paisesSinPropina.map((pais) => (
            <Link
              key={pais.slug}
              href={`/pais/${pais.slug}`}
              className="card bg-white/5 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">{pais.name}</p>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
                  {pais.continente ?? "Sin dato"}
                </span>
              </div>
              <p className="muted text-sm">{pais.nota}</p>
            </Link>
          ))}
        </div>
        <AdSlot />
      </section>

      <section className="grid gap-4 md:grid-cols-[2fr,1fr]">
        <div className="card space-y-3">
          <h2 className="section-title">Consejos rápidos</h2>
          <ul className="list-disc list-inside space-y-2 text-white/90">
            <li>Si quieres agradecer, hazlo con palabras o una reseña positiva, no con efectivo.</li>
            <li>Cuando haya tarifa fija, evita redondear de forma exagerada; paga el monto acordado.</li>
            <li>
              En hoteles de lujo, pregunta si existe cargo por servicio antes de considerar un extra opcional.
            </li>
            <li>Si viajas en grupo, confirma que nadie deje propina para mantener la coherencia cultural.</li>
          </ul>
        </div>
        <div className="card space-y-3">
          <h3 className="section-title">Explora más</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/continentes" className="link">
                Ver propinas por continente
              </Link>
            </li>
            <li>
              <Link href="/pais/japon" className="link">
                Guía completa de Japón
              </Link>
            </li>
            <li>
              <Link href="/pais/china" className="link">
                Guía completa de China
              </Link>
            </li>
            <li>
              <Link href="/pais/corea-del-sur" className="link">
                Propinas en Corea del Sur
              </Link>
            </li>
            <li>
              <Link href="/pais/singapur" className="link">
                Propinas en Singapur
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="card">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="section-title">Preguntas frecuentes</h2>
            <p className="muted text-sm">Resumen corto para viajeros de negocios y turismo.</p>
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
