import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://guiadepropinas.vercel.app";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

export const metadata: Metadata = {
  title: "¿Por qué existe la propina y por qué cambia según el país?",
  description:
    "Explicamos el origen histórico de la propina, sus diferencias culturales y por qué en algunos países es esencial y en otros innecesaria.",
  alternates: {
    canonical: `${normalizedBaseUrl}/por-que-existe-la-propina`,
  },
  openGraph: {
    title: "¿Por qué existe la propina y por qué cambia según el país?",
    description:
      "Un repaso claro y humano sobre el origen de la propina, su papel en distintos países y cómo evitar errores culturales al viajar.",
    url: `${normalizedBaseUrl}/por-que-existe-la-propina`,
  },
};

export default function PorqueExisteLaPropinaPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="badge">Guía editorial</p>
        <h1 className="text-3xl font-bold">¿Por qué existe la propina y por qué cambia tanto según el país?</h1>
      </header>

      <section className="space-y-4 text-white/90">
        <p>
          Si has viajado fuera de tu país, seguramente te ha pasado: en un lugar te miran mal por no dejar propina, y en
          otro te miran aún peor por dejarla.
        </p>
        <p>
          La propina no es una regla universal. Es una costumbre cultural, histórica y económica que cambia radicalmente
          de un país a otro, y entenderla puede evitarte momentos incómodos, malos ratos… o incluso problemas.
        </p>
        <p>
          En esta guía te explicamos por qué existe la propina, cómo se originó y por qué hoy el mundo está dividido en
          formas tan distintas de entenderla.
        </p>
      </section>

      <p className="text-white/40">⸻</p>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">El origen de la propina: no nació por “buena onda”</h2>
        <p>Aunque hoy se vea como un gesto de cortesía, la propina no nació como algo voluntario.</p>
        <p>
          En Europa, durante los siglos XVII y XVIII, era común que los clientes acomodados entregaran una pequeña suma
          extra a los sirvientes para “asegurar un buen servicio”. Con el tiempo, esta práctica se expandió a hoteles,
          restaurantes y cafés.
        </p>
        <p>Pero el verdadero quiebre ocurrió en Estados Unidos.</p>
      </section>

      <p className="text-white/40">⸻</p>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">Estados Unidos: cuando la propina pasó a ser parte del sueldo</h2>
        <p>
          En EE.UU., la propina dejó de ser un extra y pasó a convertirse en parte esencial del salario. Hoy en muchos
          estados:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Los trabajadores de servicio ganan un sueldo base muy bajo</li>
          <li>La propina completa sus ingresos</li>
          <li>No dejar propina se percibe como una falta grave de respeto</li>
        </ul>
        <p>
          Por eso, en países como <Link href="/pais/estados-unidos" className="link">Estados Unidos</Link> o{" "}
          <Link href="/pais/canada" className="link">Canadá</Link>, no dejar propina no es “ahorrar”, es romper una norma
          social.
        </p>
        <p>👉 En estos casos, la propina no es opcional en la práctica.</p>
      </section>

      <p className="text-white/40">⸻</p>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">Europa: servicio incluido y propina moderada</h2>
        <p>En gran parte de Europa ocurre lo contrario:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>El personal recibe un salario más estable</li>
          <li>El servicio suele estar incluido en la cuenta</li>
          <li>La propina es un gesto voluntario, no una obligación</li>
        </ul>
        <p>
          En países como <Link href="/pais/francia" className="link">Francia</Link>,{" "}
          <Link href="/pais/alemania" className="link">Alemania</Link> o{" "}
          <Link href="/pais/espana" className="link">España</Link>:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Redondear la cuenta o dejar un pequeño extra es suficiente</li>
          <li>Nadie espera porcentajes altos</li>
          <li>No dejar propina no es una ofensa</li>
        </ul>
        <p>Aquí la propina funciona como agradecimiento, no como salario.</p>
      </section>

      <p className="text-white/40">⸻</p>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">Asia: cuando la propina puede ser ofensiva</h2>
        <p>Este es el punto que más sorprende a los viajeros.</p>
        <p>En países como:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <Link href="/pais/japon" className="link">
              Japón
            </Link>
          </li>
          <li>
            <Link href="/pais/corea-del-sur" className="link">
              Corea del Sur
            </Link>
          </li>
          <li>
            <Link href="/pais/china" className="link">
              China
            </Link>
            (en muchos contextos)
          </li>
          <li>
            <Link href="/pais/singapur" className="link">
              Singapur
            </Link>
          </li>
        </ul>
        <p>👉 Dejar propina puede interpretarse como algo grosero o confuso.</p>
        <p>¿Por qué?</p>
        <ul className="list-disc list-inside space-y-2">
          <li>El buen servicio se considera parte del trabajo</li>
          <li>Recibir dinero extra puede verse como “caridad”</li>
          <li>En algunos casos, incluso te devuelven el dinero</li>
        </ul>
        <p>Aquí, el respeto se demuestra con educación, no con dinero adicional.</p>
      </section>

      <p className="text-white/40">⸻</p>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">Entonces… ¿por qué cambia tanto la propina?</h2>
        <p>La diferencia entre países se explica principalmente por cuatro factores:</p>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white">1️⃣ Cultura</h3>
            <p>Cada sociedad interpreta el “buen servicio” de manera distinta.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">2️⃣ Modelo laboral</h3>
            <p>En algunos países la propina sustituye salario, en otros no.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">3️⃣ Historia</h3>
            <p>Costumbres heredadas del turismo, colonización o comercio.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">4️⃣ Economía local</h3>
            <p>Ingresos promedio, costo de vida y dependencia del turismo.</p>
          </div>
        </div>
      </section>

      <p className="text-white/40">⸻</p>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">El error más común de los viajeros</h2>
        <p>El mayor error es asumir que las reglas de tu país aplican en todos lados.</p>
        <p>Lo que en un lugar es normal, en otro puede ser:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>una falta de respeto</li>
          <li>una incomodidad</li>
          <li>una señal de desconocimiento cultural</li>
        </ul>
        <p>
          Por eso creamos <Link href="/" className="link">GuíaDePropinas.com</Link>: para que puedas saber qué hacer antes
          de pagar la cuenta, no después.
        </p>
      </section>

      <p className="text-white/40">⸻</p>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">Cómo usar esta guía correctamente</h2>
        <p>En este sitio puedes:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Consultar cuánta propina se espera en cada país en el directorio de{" "}
            <Link href="/paises" className="link">
              países
            </Link>
          </li>
          <li>
            Ver <Link href="/ranking" className="link">rankings comparativos</Link>
          </li>
          <li>Evitar errores comunes como turista</li>
          <li>Entender el contexto cultural, no solo el porcentaje</li>
        </ul>
        <p>👉 No se trata solo de dinero, sino de respeto cultural.</p>
      </section>

      <p className="text-white/40">⸻</p>

      <section className="space-y-4 text-white/90">
        <h2 className="section-title">En resumen</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>La propina no es universal</li>
          <li>No todos los países la esperan</li>
          <li>En algunos es obligatoria, en otros opcional, y en otros innecesaria</li>
          <li>Informarte antes de viajar te evita problemas y malos ratos</li>
        </ul>
        <p>
          Si vas a viajar, revisa siempre la costumbre local. Un pequeño gesto mal entendido puede arruinar una buena
          experiencia.
        </p>
      </section>
    </div>
  );
}
