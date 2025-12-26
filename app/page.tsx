import { AdSlot } from "@/components/AdSlot";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SearchBox } from "@/components/SearchBox";
import { type Continente, paises } from "@/data/paises";
import Link from "next/link";

const generalFaqs = [
  {
    q: "¿Por qué varía tanto la propina entre países?",
    a: "En algunos lugares la propina complementa el salario base del personal; en otros, el servicio ya está incluido y se deja solo como gesto.",
  },
  {
    q: "¿Debo dejar propina si el servicio fue malo?",
    a: "No es necesario. Puedes reducirla o no dejarla y comentar educadamente qué falló.",
  },
  {
    q: "¿Se puede dejar propina con tarjeta?",
    a: "Depende del país y el comercio. Si dudas, pregunta si prefieren efectivo o agregarla al POS.",
  },
  {
    q: "¿Las apps de delivery ya incluyen propina?",
    a: "La mayoría la deja opcional. Revisa antes de pagar para ajustar el monto.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Guía de Propinas",
  url: "https://guiadepropinas.vercel.app",
  description:
    "Consejos rápidos sobre propinas por país para restaurantes, taxis y hoteles.",
};

export default function HomePage() {
  const continentesOrden: Continente[] = [
    "América",
    "Europa",
    "Asia",
    "África",
    "Oceanía",
  ];

  const paisesPopulares = paises.slice(0, 12);

  const continentesCompactos = continentesOrden.map((continente) => {
    const totalPaises = paises.filter((pais) => pais.continente === continente).length;
    return { continente, totalPaises };
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div className="space-y-4">
          <p className="badge">Actualizado 2025</p>
          <h1 className="text-4xl font-bold leading-tight">Propinas en el mundo</h1>
          <p className="muted max-w-2xl leading-relaxed">
            Aprende cuánto dejar, cuándo dejar y dónde dejar propina en cada destino. Resuelve tus
            dudas de tipping para restaurantes, taxis, tours y hoteles con información directa en
            español, lista para viajeros.
          </p>
          <div className="card">
            <p className="font-semibold mb-2">Busca un país</p>
            <SearchBox />
          </div>
          <div className="card">
            <h2 className="section-title">Países populares</h2>
            <div className="grid-cards">
              {paisesPopulares.map((pais) => (
                <Link
                  key={pais.slug}
                  href={`/pais/${pais.slug}`}
                  className="card hover:border-accent/40 transition-colors"
                >
                  <p className="text-lg font-semibold">{pais.name}</p>
                  <p className="muted text-sm">Moneda: {pais.moneda}</p>
                  <p className="mt-1 text-sm">
                    ¿Se deja propina? <span className="font-semibold">{pais.seDejaPropina}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="card">
            <h2 className="section-title">Explora por continente</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {continentesCompactos.map(({ continente, totalPaises }) => (
                <Link
                  key={continente}
                  href={`/paises?continente=${encodeURIComponent(continente)}`}
                  className="card bg-white/5 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold">{continente}</p>
                      <p className="muted text-sm">{totalPaises} países</p>
                    </div>
                    <span className="text-accent font-semibold">Ver lista →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <AdSlot />
          <div className="card">
            <h2 className="section-title">FAQ general</h2>
            <FAQAccordion faqs={generalFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
