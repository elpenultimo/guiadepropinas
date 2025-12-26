export type ResumenPropinas = {
  restaurantes: string;
  taxis: string;
  hoteles: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export type Pais = {
  name: string;
  slug: string;
  moneda: string;
  seDejaPropina: "Sí" | "Opcional" | "No";
  resumen: ResumenPropinas;
  notas: string[];
  faqs: FAQItem[];
};

export const paises: Pais[] = [
  {
    name: "Chile",
    slug: "chile",
    moneda: "Peso chileno (CLP)",
    seDejaPropina: "Sí",
    resumen: {
      restaurantes: "10% sugerido, suele venir detallado en la cuenta y se puede ajustar.",
      taxis: "No es obligatorio; se puede redondear al siguiente número entero.",
      hoteles: "Propina al botones o mucama no es obligatoria pero se agradece (1.000-2.000 CLP).",
    },
    notas: [
      "En cafés de especialidad es común dejar monedas o el 10%.",
      "En apps de delivery se suele añadir 5-10% si el servicio fue bueno.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en restaurantes?",
        a: "No, pero es una práctica extendida dejar 10% si la atención fue buena.",
      },
      {
        q: "¿Se deja propina en bares?",
        a: "Sí, el mismo 10% o dejar el cambio al pagar en efectivo.",
      },
      {
        q: "¿Puedo pagar la propina con tarjeta?",
        a: "Sí, la mayoría de los locales permiten agregarla al total en el POS.",
      },
    ],
  },
  {
    name: "Argentina",
    slug: "argentina",
    moneda: "Peso argentino (ARS)",
    seDejaPropina: "Opcional",
    resumen: {
      restaurantes: "5-10% en efectivo, no suele estar incluido en la cuenta.",
      taxis: "No se espera, pero se puede redondear al cerrar el viaje.",
      hoteles: "Propinas puntuales al botones o limpieza (ARS pequeños).",
    },
    notas: [
      "El servicio de mesa ('cubierto') no es propina.",
      "En bares se deja cambio chico; en cafeterías depende del servicio.",
    ],
    faqs: [
      {
        q: "¿Se puede dejar propina con tarjeta?",
        a: "Algunos locales lo permiten, pero muchos prefieren efectivo.",
      },
      {
        q: "¿Los precios incluyen servicio?",
        a: "No, la propina queda a criterio del cliente.",
      },
      {
        q: "¿Qué pasa si el servicio fue malo?",
        a: "No es necesario dejar propina; se puede comentar educadamente.",
      },
    ],
  },
  {
    name: "Perú",
    slug: "peru",
    moneda: "Sol (PEN)",
    seDejaPropina: "Opcional",
    resumen: {
      restaurantes: "10% en restaurantes formales; en locales casuales no es imprescindible.",
      taxis: "No se espera; el precio se acuerda antes o está fijado en apps.",
      hoteles: "2-5 PEN por maleta o por día de limpieza en hoteles turísticos.",
    },
    notas: [
      "En zonas turísticas algunos precios ya incluyen cargo por servicio.",
      "En cafés modernos se deja cambio o 5-10% si hubo buena atención.",
    ],
    faqs: [
      {
        q: "¿Debo dejar propina en cevicherías?",
        a: "Sí se valora el 10% si el servicio fue bueno, pero no es obligatorio.",
      },
      {
        q: "¿Los mozos la esperan siempre?",
        a: "No siempre, pero en Lima y Cusco es habitual en locales formales.",
      },
      {
        q: "¿Cómo se deja en hoteles boutique?",
        a: "Un sobre con 5-10 PEN por día de estadía es bien recibido.",
      },
    ],
  },
  {
    name: "México",
    slug: "mexico",
    moneda: "Peso mexicano (MXN)",
    seDejaPropina: "Sí",
    resumen: {
      restaurantes: "10-15% en la mayoría de los restaurantes; revisa si ya se añadió.",
      taxis: "No es obligatorio; se puede redondear o agregar 5-10 pesos.",
      hoteles: "20-50 MXN por maleta; 20-40 MXN por noche para limpieza.",
    },
    notas: [
      "En zonas turísticas algunos locales añaden propina sugerida automáticamente.",
      "En bares se acostumbra dejar $10-$20 por ronda o 10% al cierre.",
    ],
    faqs: [
      {
        q: "¿Es obligatorio en restaurantes?",
        a: "No, pero se considera de cortesía dejar al menos el 10%.",
      },
      {
        q: "¿Se deja propina en gasolineras?",
        a: "Sí, $5-$10 MXN por el servicio es habitual.",
      },
      {
        q: "¿Puedo pagarla con tarjeta?",
        a: "Algunos POS permiten agregarla; si no, es mejor efectivo.",
      },
    ],
  },
  {
    name: "Estados Unidos",
    slug: "estados-unidos",
    moneda: "Dólar estadounidense (USD)",
    seDejaPropina: "Sí",
    resumen: {
      restaurantes: "18-22% sobre el subtotal antes de impuestos.",
      taxis: "15-20% o lo que sugiere la app; en rideshare 10-15%.",
      hoteles: "2-5 USD por día a limpieza; 2-3 USD por maleta al botones.",
    },
    notas: [
      "El salario del personal depende en gran parte de las propinas.",
      "La cuenta puede sugerir montos; revisa que no haya 'service charge'.",
    ],
    faqs: [
      {
        q: "¿Qué pasa si no dejo propina?",
        a: "Se considera grosero salvo servicio muy deficiente.",
      },
      {
        q: "¿En bares cuánto se deja?",
        a: "1-2 USD por trago o 18-20% del total.",
      },
      {
        q: "¿Los fast-food requieren propina?",
        a: "No, salvo que haya servicio en mesa o entrega especial.",
      },
    ],
  },
  {
    name: "Canadá",
    slug: "canada",
    moneda: "Dólar canadiense (CAD)",
    seDejaPropina: "Sí",
    resumen: {
      restaurantes: "15-20% según el servicio; puede estar preconfigurado en el POS.",
      taxis: "10-15% o redondear a la cifra más conveniente.",
      hoteles: "2-5 CAD por día para limpieza; similar por maleta al botones.",
    },
    notas: [
      "En cafés se deja 0.5-1 CAD en el frasco o 10% si usas tarjeta.",
      "Si el grupo es grande, revisa si se añadió 'gratuity'.",
    ],
    faqs: [
      {
        q: "¿Las propinas se comparten?",
        a: "Depende del local, pero muchos las reparten entre el equipo.",
      },
      {
        q: "¿En food trucks se deja?",
        a: "Es opcional; 5-10% si el servicio fue amable.",
      },
      {
        q: "¿Hay cargos obligatorios?",
        a: "Algunos restaurantes incluyen gratuidad en grupos; verifica el ticket.",
      },
    ],
  },
  {
    name: "España",
    slug: "espana",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    resumen: {
      restaurantes: "No es obligatoria; se deja 5-10% en restaurantes de gama media y alta.",
      taxis: "No es común; se puede redondear a la unidad superior.",
      hoteles: "1-2 EUR por maleta o por día de limpieza en hoteles urbanos.",
    },
    notas: [
      "En bares se suele dejar monedas sueltas si la atención fue amable.",
      "En menús del día la propina es menos frecuente.",
    ],
    faqs: [
      {
        q: "¿Es mal visto no dejar propina?",
        a: "No, es realmente opcional y depende de la experiencia.",
      },
      {
        q: "¿Se deja en terrazas?",
        a: "Sí, un 5-10% o dejar el cambio si el servicio fue bueno.",
      },
      {
        q: "¿En apps de delivery?",
        a: "Se puede agregar 1-2 EUR; no es obligatorio.",
      },
    ],
  },
  {
    name: "Francia",
    slug: "francia",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    resumen: {
      restaurantes: "El servicio suele estar incluido (service compris); dejar 5-10% si sobresaliente.",
      taxis: "Redondear o añadir 5-10% según la atención.",
      hoteles: "1-2 EUR por día a limpieza y 2 EUR por maleta en hoteles céntricos.",
    },
    notas: [
      "En cafés se deja cambio pequeño al pagar.",
      "No es necesario si ya figura 'service compris'.",
    ],
    faqs: [
      {
        q: "¿Cómo sé si la cuenta incluye servicio?",
        a: "Busca 'service compris' en el ticket; suele estar incluido.",
      },
      {
        q: "¿En bares de vinos?",
        a: "Dejar monedas o 5% si la atención fue personalizada.",
      },
      {
        q: "¿En taxis de aeropuerto?",
        a: "Redondear a la cifra entera superior es suficiente.",
      },
    ],
  },
  {
    name: "Italia",
    slug: "italia",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    resumen: {
      restaurantes: "En trattorias locales se deja 5-10%; el 'coperto' no es propina.",
      taxis: "No es obligatorio; se redondea o añade 1-2 EUR en trayectos largos.",
      hoteles: "1-2 EUR por maleta y 1-3 EUR por día a limpieza.",
    },
    notas: [
      "El 'coperto' es un cargo fijo por cubiertos y pan, no sustituye la propina.",
      "En cafés de barra no se suele dejar.",
    ],
    faqs: [
      {
        q: "¿Qué es el 'servizio'?",
        a: "Un cargo de servicio que a veces incluye propina; revisa la cuenta.",
      },
      {
        q: "¿En gelaterías se deja?",
        a: "No es común, salvo servicio a mesa.",
      },
      {
        q: "¿Cómo se maneja en restaurantes turísticos?",
        a: "Si ya hay 'servizio', puedes no añadir extra; si no, 5-10% es amable.",
      },
    ],
  },
  {
    name: "Reino Unido",
    slug: "reino-unido",
    moneda: "Libra esterlina (GBP)",
    seDejaPropina: "Opcional",
    resumen: {
      restaurantes: "10-12.5% si el servicio fue bueno; algunos añaden service charge.",
      taxis: "Redondear o sumar 10% en black cabs y apps.",
      hoteles: "1-2 GBP por maleta; 2-3 GBP por día a limpieza en hoteles urbanos.",
    },
    notas: [
      "Revisa el recibo: 'service charge included' significa que ya pagaste propina.",
      "En pubs sin servicio a mesa no se deja propina.",
    ],
    faqs: [
      {
        q: "¿Debo dejar propina en pubs?",
        a: "Solo si hay servicio en mesa; en barra no es común.",
      },
      {
        q: "¿Cómo se maneja en restaurantes de cadena?",
        a: "Suelen sugerir 10-12.5%; puedes ajustar o quitar si lo pides.",
      },
      {
        q: "¿En taxis con tarjeta?",
        a: "Los POS permiten añadir un porcentaje o redondear.",
      },
    ],
  },
  {
    name: "Alemania",
    slug: "alemania",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    resumen: {
      restaurantes: "5-10% entregado directamente al mesero al pagar.",
      taxis: "Redondear o añadir 5-10% si el servicio fue amable.",
      hoteles: "1-2 EUR por noche a limpieza; 1-2 EUR por maleta.",
    },
    notas: [
      "El servicio suele estar incluido, por eso las propinas son menores.",
      "Se entrega diciendo el total final (propina incluida).",
    ],
    faqs: [
      {
        q: "¿Se deja en cervecerías?",
        a: "Sí, redondear al pagar en mesa es suficiente.",
      },
      {
        q: "¿Puedo dejar efectivo en la mesa?",
        a: "Mejor entregar al mesero al momento de cobrar.",
      },
      {
        q: "¿En pagos con tarjeta?",
        a: "Se indica el total con propina antes de confirmar el pago.",
      },
    ],
  },
  {
    name: "Japón",
    slug: "japon",
    moneda: "Yen (JPY)",
    seDejaPropina: "No",
    resumen: {
      restaurantes: "No se deja propina; puede considerarse descortés.",
      taxis: "No se espera propina; el precio indicado es final.",
      hoteles: "En ryokans de lujo puede dejarse un sobre sellado (ochugen) pero no es común.",
    },
    notas: [
      "El buen servicio ya está incluido en el precio.",
      "Si quieres agradecer, un pequeño regalo es mejor que dinero.",
    ],
    faqs: [
      {
        q: "¿Qué pasa si dejo monedas?",
        a: "El personal suele rechazarlas amablemente; no es costumbre.",
      },
      {
        q: "¿En tours guiados?",
        a: "En tours privados con guías bilingües se puede dar un regalo, no efectivo.",
      },
      {
        q: "¿En restaurantes occidentales?",
        a: "Tampoco se espera; el servicio está incluido en la cuenta.",
      },
    ],
  },
];

export const findPaisBySlug = (slug: string): Pais | undefined =>
  paises.find((p) => p.slug === slug);
