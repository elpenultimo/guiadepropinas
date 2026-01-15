import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://guiadepropinas.vercel.app";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

export const metadata: Metadata = {
  title: "Errores comunes con las propinas que pueden arruinar un viaje",
  description:
    "Un repaso claro de los errores más comunes con las propinas al viajar y cómo evitarlos para no pasar malos ratos.",
  alternates: {
    canonical: `${normalizedBaseUrl}/errores-comunes-propinas-viaje`,
  },
  openGraph: {
    title: "Errores comunes con las propinas que pueden arruinar un viaje",
    description:
      "Descubre los errores más frecuentes con las propinas en viajes y aprende a evitarlos con contexto cultural.",
    url: `${normalizedBaseUrl}/errores-comunes-propinas-viaje`,
  },
};

export default function ErroresComunesPropinasViajePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="badge">Guía editorial</p>
        <h1 className="text-3xl font-bold">Errores comunes con las propinas que pueden arruinar un viaje</h1>
      </header>

      <section className="space-y-4 text-white/90">
        <p className="text-white/40">⸻</p>
        <h2 className="section-title">Errores comunes con las propinas que pueden arruinar un viaje</h2>
        <p>Viajar es descubrir nuevas culturas, pero también nuevas reglas sociales.</p>
        <p>
          Uno de los errores más frecuentes —y más incómodos— que cometen los viajeros tiene que ver con las propinas.
        </p>
        <p>
          Lo que en tu país es normal, en otro puede ser mal visto, innecesario o incluso ofensivo. Aquí repasamos los
          errores más comunes relacionados con las propinas y cómo evitarlos.
        </p>
      </section>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">❌ Error 1: Asumir que la propina funciona igual en todo el mundo</h2>
        <p>Este es el error número uno.</p>
        <p>Muchos viajeros aplican automáticamente la regla de su país sin considerar el contexto local.</p>
        <p>En algunos lugares, no dejar propina se interpreta como una falta de respeto.</p>
        <p>En otros, dejarla genera confusión.</p>
        <p>Antes de pagar, siempre conviene saber qué se espera culturalmente, no qué haces tú normalmente.</p>
      </section>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">❌ Error 2: Dejar propina donde no corresponde</h2>
        <p>En varios países asiáticos, dejar dinero extra puede incomodar al trabajador.</p>
        <p>El buen servicio ya está incluido y la propina puede interpretarse como:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>caridad</li>
          <li>desconfianza</li>
          <li>desconocimiento cultural</li>
        </ul>
        <p>En estos casos, una sonrisa y un “gracias” tienen más valor que el dinero.</p>
      </section>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">❌ Error 3: No dejar propina donde sí es esencial</h2>
        <p>El extremo opuesto ocurre en países donde la propina forma parte del salario.</p>
        <p>En lugares como Estados Unidos o Canadá:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>el sueldo base suele ser bajo</li>
          <li>la propina completa el ingreso</li>
        </ul>
        <p>No dejar propina no es neutral: se percibe como un problema.</p>
      </section>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">❌ Error 4: Calcular porcentajes incorrectos</h2>
        <p>Otro error frecuente es dejar montos muy por debajo de lo esperado, pensando que “igual es algo”.</p>
        <p>En ciertos países:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>dejar un 5% puede verse como desagrado</li>
          <li>redondear no siempre es suficiente</li>
        </ul>
        <p>Informarse del rango habitual evita situaciones incómodas.</p>
      </section>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">❌ Error 5: No revisar si el servicio ya está incluido</h2>
        <p>En muchos restaurantes, especialmente en Europa y zonas turísticas:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>el servicio ya está cargado en la cuenta</li>
        </ul>
        <p>Dejar propina adicional no es necesario y, muchas veces, nadie la espera.</p>
        <p>Siempre revisa la boleta antes de pagar.</p>
      </section>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">❌ Error 6: Pensar que “nadie se va a dar cuenta”</h2>
        <p>En culturas con alta conciencia social, las propinas sí se notan.</p>
        <p>Un gesto pequeño puede:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>generar tensión</li>
          <li>marcar una mala impresión</li>
          <li>afectar la experiencia</li>
        </ul>
        <p>No se trata de juzgar, sino de entender las reglas del lugar.</p>
      </section>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">Cómo evitar estos errores</h2>
        <p>
          La forma más simple es <Link href="/por-que-existe-la-propina" className="link">informarse antes de viajar</Link>.
        </p>
        <p>En <Link href="/" className="link">GuíaDePropinas.com</Link> puedes:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>ver cuánto se deja en cada país</li>
          <li>entender el contexto cultural</li>
          <li>evitar errores innecesarios</li>
        </ul>
      </section>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">En resumen</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>No todos los países esperan propina</li>
          <li>No todos la rechazan</li>
          <li>Informarse evita malos ratos</li>
          <li>La propina es cultura, no solo dinero</li>
        </ul>
      </section>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">Recomendado</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <Link href="/ranking" className="link">
              Ranking de países donde la propina es obligatoria
            </Link>
          </li>
          <li>
            <Link href="/ranking" className="link">
              Ranking de países donde no se deja propina
            </Link>
          </li>
          <li>
            <Link href="/paises" className="link">
              Guías por país
            </Link>
          </li>
        </ul>
      </section>

      <p className="text-white/40">⸻</p>
    </div>
  );
}
