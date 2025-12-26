export type ResumenPropinas = {
  restaurantes: string;
  taxis: string;
  hoteles: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export type Continente = "América" | "Europa" | "Asia" | "Oceanía" | "África";

export type ExtraPais = {
  baresCafes?: string;
  tours?: string;
  delivery?: string;
  tarjetaVsEfectivo?: string;
  erroresComunes?: string[];
};

export type Pais = {
  name: string;
  slug: string;
  moneda: string;
  seDejaPropina: "Sí" | "Opcional" | "No";
  continente?: Continente;
  resumen: ResumenPropinas;
  notas: string[];
  faqs: FAQItem[];
  extra?: ExtraPais;
};

export const paises: Pais[] = [
  {
    name: "Chile",
    slug: "chile",
    moneda: "Peso chileno (CLP)",
    seDejaPropina: "Sí",
    continente: "América",
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
    extra: {
      baresCafes:
        "En bares y cafés de ciudades grandes se deja el 10% o se redondea con monedas.",
      tours: "Los tours a pie funcionan con 'paga lo que quieras'; 5.000-10.000 CLP es habitual.",
      delivery: "En apps como Rappi o Uber Eats se suma 5-10% si el repartidor fue puntual.",
      tarjetaVsEfectivo:
        "Las propinas con tarjeta son comunes en restaurantes, pero los repartidores prefieren efectivo.",
      erroresComunes: [
        "Olvidar que el 10% sugerido se puede ajustar o quitar.",
        "Dejar monedas de baja denominación en restaurantes formales.",
        "Suponer que en taxis es obligatorio; solo se redondea.",
        "Confundir el cargo por servicio con la propina en hoteles.",
      ],
    },
  },
  {
    name: "Argentina",
    slug: "argentina",
    moneda: "Peso argentino (ARS)",
    seDejaPropina: "Opcional",
    continente: "América",
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
    extra: {
      baresCafes:
        "En bares se deja cambio chico o 5-10%; en cafés, monedas si hubo buena atención.",
      tours:
        "En free tours se acostumbra dar 2.000-4.000 ARS por persona según la duración.",
      delivery:
        "En apps como PedidosYa se añade un extra simbólico; 5-10% es bien recibido.",
      tarjetaVsEfectivo:
        "Algunos POS permiten sumar propina, pero muchos mozos prefieren efectivo para cobrarla íntegra.",
      erroresComunes: [
        "Confundir el 'cubierto' con propina.",
        "Dejar pesos muy devaluados o monedas extranjeras.",
        "Pensar que es obligatorio en taxis de calle.",
        "Olvidar que en bares se paga en efectivo al momento.",
      ],
    },
  },
  {
    name: "Perú",
    slug: "peru",
    moneda: "Sol (PEN)",
    seDejaPropina: "Opcional",
    continente: "América",
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
    extra: {
      baresCafes:
        "En cafés de especialidad se deja cambio o 5-10%; en bares, redondear al pagar.",
      tours:
        "En tours a Machu Picchu o trekking se sugiere 10-20 PEN por día para guías y porteadores.",
      delivery:
        "Las apps permiten añadir 2-4 PEN extra; no es obligatorio.",
      tarjetaVsEfectivo:
        "En Lima muchos locales aceptan propinas en tarjeta, pero en provincias prefieren efectivo.",
      erroresComunes: [
        "Suponer que todos los restaurantes incluyen 10% automáticamente.",
        "No llevar sencillo para taxis o puestos callejeros.",
        "Dejar propina en la mesa sin avisar y que no llegue al mesero.",
        "Olvidar propinas para porteadores en tours largos.",
      ],
    },
  },
  {
    name: "México",
    slug: "mexico",
    moneda: "Peso mexicano (MXN)",
    seDejaPropina: "Sí",
    continente: "América",
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
    extra: {
      baresCafes:
        "En bares se deja 10-15% o $10-$20 por ronda; en cafés, monedas o 5-10%.",
      tours:
        "En tours guiados se agradece 50-100 MXN por persona según la duración y servicio.",
      delivery:
        "En apps se acostumbra 10-20 MXN extra; en lluvia o distancias largas se deja un poco más.",
      tarjetaVsEfectivo:
        "En restaurantes turísticos se agrega en el POS, pero muchos prefieren efectivo para recibirlo completo.",
      erroresComunes: [
        "Aceptar propinas sugeridas automáticas sin revisarlas.",
        "Pensar que en gasolineras no se deja nada: $5-$10 MXN es lo normal.",
        "Olvidar dejar cambio en bares de cerveza artesanal.",
        "Pagar propina con tarjeta en puestos callejeros donde no la reciben.",
      ],
    },
  },
  {
    name: "Estados Unidos",
    slug: "estados-unidos",
    moneda: "Dólar estadounidense (USD)",
    seDejaPropina: "Sí",
    continente: "América",
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
    extra: {
      baresCafes:
        "En bares se deja 1-2 USD por trago o 18-20% del total; en cafés, 1 USD en el frasco.",
      tours:
        "Para tours de día completo se deja 10-20 USD por persona al guía; en free tours, 10 USD es estándar.",
      delivery:
        "Las apps sugieren 15-20%; en pedidos pequeños 3-5 USD es aceptado.",
      tarjetaVsEfectivo:
        "La mayoría de las propinas se agregan en el POS; efectivo es bien recibido en barras y taxis.",
      erroresComunes: [
        "No considerar que el impuesto se calcula antes de la propina.",
        "Pensar que la 'service charge' es opcional cuando ya es obligatoria.",
        "Dejar monedas pequeñas en bares donde se espera billetes.",
        "Olvidar dar propina a housekeeping en hoteles largos.",
      ],
    },
  },
  {
    name: "Canadá",
    slug: "canada",
    moneda: "Dólar canadiense (CAD)",
    seDejaPropina: "Sí",
    continente: "América",
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
    extra: {
      baresCafes: "En pubs se deja 1 CAD por ronda o 15% del total; en cafés, 0.5-1 CAD.",
      tours: "Para tours de naturaleza o esquí, 5-10 CAD por persona es habitual para el guía.",
      delivery: "En apps de reparto se agrega 10-15% o mínimo 2 CAD según la distancia.",
      tarjetaVsEfectivo:
        "El POS permite elegir porcentaje; en cashless es normal. Efectivo acelera el reparto en bares.",
      erroresComunes: [
        "Olvidar que las propinas pueden estar preconfiguradas en la máquina.",
        "Dejar monedas de 5 centavos que casi no circulan.",
        "Pensar que en pubs sin servicio a mesa no se deja nada.",
        "No considerar la gratuidad automática en grupos grandes.",
      ],
    },
  },
  {
    name: "España",
    slug: "espana",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
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
    extra: {
      baresCafes: "En bares y terrazas se dejan monedas; en cafés de barrio basta con el cambio suelto.",
      tours: "Los free tours funcionan a donación: 5-10 EUR por persona según la duración.",
      delivery: "En apps como Glovo se deja 1-3 EUR; no es obligatorio, pero mejora el servicio.",
      tarjetaVsEfectivo:
        "En la mayoría de ciudades se puede sumar propina al TPV, aunque muchos prefieren efectivo por rapidez.",
      erroresComunes: [
        "Confundir el 'servicio incluido' con propina obligatoria.",
        "Dejar billetes grandes en barras pequeñas sin avisar.",
        "Pensar que en taxis es mal visto no redondear.",
        "No tener monedas para dejar en cafeterías pequeñas.",
      ],
    },
  },
  {
    name: "Francia",
    slug: "francia",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes:
        "El servicio suele estar incluido (service compris); dejar 5-10% si sobresaliente.",
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
    extra: {
      baresCafes:
        "En cafés se deja el cambio; en bares de vinos, 5% si hubo recomendación personalizada.",
      tours:
        "Para free tours en París, 5-10 EUR por persona es habitual; tours privados esperan algo más.",
      delivery:
        "Las apps permiten sumar 1-3 EUR; algunos repartidores prefieren efectivo pequeño.",
      tarjetaVsEfectivo:
        "En restaurantes el TPV acepta propina, pero en cafés de barrio aún prefieren monedas.",
      erroresComunes: [
        "Suponer que 'service non compris' significa propina obligatoria.",
        "Dejar billetes grandes en la mesa y salir sin indicar el total.",
        "Olvidar que en taxis se acostumbra solo redondear.",
        "No llevar efectivo en mercados o boulangeries pequeñas.",
      ],
    },
  },
  {
    name: "Italia",
    slug: "italia",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
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
    extra: {
      baresCafes:
        "En cafés de barra no se deja; en bares con mesa se redondea o se deja 5-10% en efectivo.",
      tours:
        "En visitas guiadas por museos o ruinas, 5-10 EUR por persona según el tiempo es habitual.",
      delivery: "En ciudades grandes se deja 1-2 EUR al repartidor; no es común en pueblos.",
      tarjetaVsEfectivo:
        "Muchos TPV permiten propina, pero en trattorias familiares prefieren efectivo.",
      erroresComunes: [
        "Confundir el 'coperto' con propina adicional.",
        "No revisar si ya hay 'servizio' agregado en grupos.",
        "Dejar monedas de muy bajo valor que casi no circulan.",
        "Olvidar dejar algo al guía en tours culturales.",
      ],
    },
  },
  {
    name: "Reino Unido",
    slug: "reino-unido",
    moneda: "Libra esterlina (GBP)",
    seDejaPropina: "Opcional",
    continente: "Europa",
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
    extra: {
      baresCafes:
        "En pubs sin servicio a mesa no se deja propina; si la hay, 10% es suficiente. En cafés, redondear.",
      tours:
        "En free tours se deja 5-10 GBP por persona; en tours pagados, 10% del valor si fue excepcional.",
      delivery:
        "Los repartos de apps aceptan 1-3 GBP extra; en lluvia o noche, un poco más.",
      tarjetaVsEfectivo:
        "Casi todo se paga con tarjeta; el POS permite añadir tip. Efectivo es raro pero apreciado en taxis.",
      erroresComunes: [
        "No revisar si ya hay 'service charge' en la cuenta.",
        "Pensar que en pubs siempre se deja algo.",
        "No tener monedas para baños o guardarropas en clubes.",
        "Olvidar propina en hoteles boutique para housekeeping.",
      ],
    },
  },
  {
    name: "Alemania",
    slug: "alemania",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
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
    extra: {
      baresCafes:
        "En biergärten y cervecerías se redondea; en cafés, 5-10% entregado en mano.",
      tours:
        "Los free tours esperan 8-12 EUR por persona; tours privados, 10% del costo si fue excelente.",
      delivery:
        "Los repartidores agradecen 1-3 EUR extra; en efectivo suele ser más práctico.",
      tarjetaVsEfectivo:
        "Aunque los POS aceptan propina, muchos prefieren efectivo por rapidez al cerrar la cuenta.",
      erroresComunes: [
        "Dejar el dinero en la mesa en lugar de entregarlo al mesero.",
        "Pensar que el servicio ya incluye propina alta; suele ser mínima.",
        "No llevar efectivo en mercados donde no aceptan tarjeta para tips.",
        "Redondear demasiado poco en taxis largos.",
      ],
    },
  },
  {
    name: "Japón",
    slug: "japon",
    moneda: "Yen (JPY)",
    seDejaPropina: "No",
    continente: "Asia",
    resumen: {
      restaurantes: "No se deja propina; puede considerarse descortés.",
      taxis: "No se espera propina; el precio indicado es final.",
      hoteles:
        "En ryokans de lujo puede dejarse un sobre sellado (ochugen) pero no es común.",
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
    extra: {
      baresCafes:
        "No se deja propina; un simple agradecimiento es suficiente incluso en bares de cócteles.",
      tours:
        "En tours privados algunos guías aceptan un regalo pequeño; evita dinero en efectivo.",
      delivery:
        "Las entregas no esperan propina; el monto pagado ya incluye el servicio.",
      tarjetaVsEfectivo:
        "No se agregan propinas en POS; los pagos son exactos y sin montos adicionales.",
      erroresComunes: [
        "Intentar dejar monedas y que el personal las rechace.",
        "Creer que un sobre con efectivo siempre es apropiado.",
        "Ofrecer propina a taxistas, lo cual puede incomodar.",
        "Pensar que hoteles de ciudad esperan propina diaria.",
      ],
    },
  },
];

export const findPaisBySlug = (slug: string): Pais | undefined =>
  paises.find((p) => p.slug === slug);
