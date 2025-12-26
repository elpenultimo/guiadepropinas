import type { FAQItem, Continente } from "@/data/paises";

export type ContinenteSlug = "america" | "europa" | "asia" | "africa" | "oceania";

export type ContinenteInfo = {
  slug: ContinenteSlug;
  nombre: Continente;
  intro: string[];
  faqs: FAQItem[];
};

export const continentesInfo: Record<ContinenteSlug, ContinenteInfo> = {
  america: {
    slug: "america",
    nombre: "América",
    intro: [
      "América reúne costumbres variadas: en ciudades grandes la propina suele ser parte de la experiencia en restaurantes y bares, mientras que en zonas rurales es más discreta.",
      "En taxis o aplicaciones de transporte se acostumbra redondear o dejar un pequeño extra si el servicio fue puntual; en hoteles turísticos el gesto al personal de equipaje o limpieza es bien recibido.",
      "Las normas cambian de norte a sur, así que conviene revisar cada país para entender si el 10% es sugerido o solo opcional.",
    ],
    faqs: [
      {
        q: "¿Es obligatorio dejar 10% en todos los países de América?",
        a: "No, el 10% es una referencia común en restaurantes formales, pero en varios países queda a criterio del cliente.",
      },
      {
        q: "¿Los taxis esperan propina?",
        a: "No suele ser obligatoria; se acostumbra redondear o dejar monedas cuando el servicio fue ágil o el conductor ayudó con equipaje.",
      },
      {
        q: "¿Se puede pagar propina con tarjeta?",
        a: "En capitales y destinos turísticos es frecuente, aunque algunos locales prefieren efectivo para recibirla íntegra.",
      },
      {
        q: "¿En hoteles se deja propina diaria?",
        a: "Sí, en hoteles urbanos y de playa se acostumbra dar un monto pequeño por día a limpieza y al botones por maleta.",
      },
      {
        q: "¿Los servicios incluyen cargo obligatorio?",
        a: "Algunos restaurantes añaden cargo por servicio; si aparece en la cuenta, puedes ajustar la propina adicional a tu criterio.",
      },
    ],
  },
  europa: {
    slug: "europa",
    nombre: "Europa",
    intro: [
      "En Europa la propina suele ser más discreta: en restaurantes se deja un 5-10% o se redondea, según el país y el tipo de servicio.",
      "Los taxis no siempre esperan extra, aunque redondear facilita el pago; en hoteles, dar algo al botones o housekeeping sigue siendo buena práctica.",
      "Varios países incluyen cargo por servicio en la cuenta, por lo que revisar el detalle evita pagar de más o duplicar montos.",
    ],
    faqs: [
      {
        q: "¿Si la cuenta incluye 'service charge' debo dejar más?",
        a: "No es obligatorio; puedes sumar un pequeño extra solo si el servicio fue excepcional.",
      },
      {
        q: "¿Cómo se maneja la propina en cafés y pubs?",
        a: "En la mayoría se deja el cambio o 5-10% si hay servicio de mesa; en barras, redondear es suficiente.",
      },
      {
        q: "¿Los pagos con tarjeta permiten añadir propina?",
        a: "En muchos países sí, pero en otros el POS se cierra con el total exacto; pregunta antes de pagar.",
      },
      {
        q: "¿Los taxis aceptan propina digital?",
        a: "Las apps permiten agregar un extra; en taxis de calle suele bastar con redondear en efectivo.",
      },
      {
        q: "¿Qué pasa en hoteles boutique o de lujo?",
        a: "Se aprecia una propina pequeña por maleta y un agradecimiento diario al personal de limpieza.",
      },
    ],
  },
  asia: {
    slug: "asia",
    nombre: "Asia",
    intro: [
      "Asia presenta contrastes: en algunos países la propina es parte del turismo y en otros se considera innecesaria o incluso descortés.",
      "En restaurantes urbanos y hoteles internacionales puede sugerirse un 5-10%, mientras que en negocios familiares se suele pagar solo el precio marcado.",
      "Para taxis y apps de movilidad, redondear o dejar una gratificación pequeña es más común en destinos con alto flujo turístico.",
    ],
    faqs: [
      {
        q: "¿Debo dejar propina en puestos callejeros?",
        a: "Normalmente no; se paga el precio indicado y un agradecimiento verbal es suficiente.",
      },
      {
        q: "¿Los hoteles esperan propina?",
        a: "En cadenas internacionales sí se valora un monto simbólico para botones y limpieza, sobre todo en destinos turísticos.",
      },
      {
        q: "¿Es aceptada la propina con tarjeta?",
        a: "Depende del país; algunos POS no permiten añadirla y se prefiere efectivo si quieres agradecer el servicio.",
      },
      {
        q: "¿Qué pasa si la propina no es costumbre local?",
        a: "Si notas que el personal la rechaza, no insistas; un agradecimiento es suficiente para respetar la norma cultural.",
      },
      {
        q: "¿En taxis se deja algo extra?",
        a: "No siempre; en ciudades con apps de transporte puedes redondear o calificar bien cuando el servicio fue puntual.",
      },
    ],
  },
  africa: {
    slug: "africa",
    nombre: "África",
    intro: [
      "En África las prácticas de propina varían entre capitales, safaris y destinos de playa; conviene revisar cada país antes de viajar.",
      "En restaurantes urbanos se deja un porcentaje moderado si el servicio fue bueno, mientras que en taxis suele bastar con redondear.",
      "En hoteles y lodges turísticos se valora el reconocimiento al personal de limpieza, guías y choferes con montos sugeridos locales.",
    ],
    faqs: [
      {
        q: "¿Se deja propina en safaris?",
        a: "Sí, guías y conductores suelen recibir un monto diario por persona; los alojamientos indican rangos sugeridos.",
      },
      {
        q: "¿En restaurantes es obligatorio?",
        a: "No siempre, pero en ciudades grandes se acostumbra 5-10% si la cuenta no incluye cargo por servicio.",
      },
      {
        q: "¿Cómo agradecer en hoteles todo incluido?",
        a: "Una pequeña propina al personal que atiende mesas, habitaciones o equipaje es apreciada aunque no sea exigida.",
      },
      {
        q: "¿Los taxis y transfers esperan propina?",
        a: "No es obligatorio; se puede redondear o dejar una cantidad simbólica si hubo ayuda con maletas.",
      },
      {
        q: "¿Se aceptan monedas extranjeras?",
        a: "Algunos destinos prefieren moneda local; cambia una cantidad mínima para propinas y gastos menores.",
      },
    ],
  },
  oceania: {
    slug: "oceania",
    nombre: "Oceanía",
    intro: [
      "En Oceanía la propina no siempre es esperada, pero en áreas turísticas se agradece un extra por buen servicio en restaurantes y cafés.",
      "Los taxis suelen funcionar con tarifas claras; redondear o dejar un pequeño extra es opcional cuando el viaje fue cómodo y rápido.",
      "En hoteles urbanos y resorts, un gesto al personal de equipaje o limpieza es bien recibido aunque no se considera obligatorio.",
    ],
    faqs: [
      {
        q: "¿Los restaurantes incluyen servicio?",
        a: "La mayoría no incluye cargo fijo; dejar 5-10% es opcional y se hace cuando la atención fue destacada.",
      },
      {
        q: "¿Qué ocurre en cafés y bares?",
        a: "Se suele redondear o dejar monedas en el frasco de propinas, especialmente en zonas con turistas.",
      },
      {
        q: "¿Se deja propina en taxis o rideshare?",
        a: "No es obligatorio; puedes redondear o calificar bien al conductor si quieres agradecer el servicio.",
      },
      {
        q: "¿En hoteles de playa es necesaria la propina?",
        a: "No es requisito, pero se valora un monto pequeño para quien ayuda con maletas o mantiene la habitación.",
      },
      {
        q: "¿Es común usar tarjeta para propinas?",
        a: "Algunos locales lo permiten, pero en propinas pequeñas se prefiere efectivo para que llegue directo al personal.",
      },
    ],
  },
};

export const continentesList = Object.values(continentesInfo);

export const nombreToSlug = continentesList.reduce<Record<Continente, ContinenteSlug>>(
  (acc, item) => {
    acc[item.nombre] = item.slug;
    return acc;
  },
  {} as Record<Continente, ContinenteSlug>
);

export const slugToContinente = (slug: string): ContinenteInfo | null => {
  if (Object.hasOwn(continentesInfo, slug)) {
    return continentesInfo[slug as ContinenteSlug];
  }
  return null;
};
