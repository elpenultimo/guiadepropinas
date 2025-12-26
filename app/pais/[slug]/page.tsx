import { AdSlot } from "@/components/AdSlot";
import { FAQAccordion } from "@/components/FAQAccordion";
import { findPaisBySlug, paises } from "@/data/paises";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return paises.map((pais) => ({ slug: pais.slug }));
}

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
      url: `https://guiadepropinas.vercel.app/pais/${pais.slug}`,
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

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <header className="space-y-1">
        <p className="badge">Guía rápida</p>
        <h1 className="text-3xl font-bold">Propinas en {pais.name}</h1>
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

      <section>
        <h2 className="section-title">Preguntas frecuentes</h2>
        <FAQAccordion faqs={pais.faqs} />
      </section>
    </div>
  );
}
