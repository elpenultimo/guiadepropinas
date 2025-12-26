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
  {
    name: "Brasil",
    slug: "brasil",
    moneda: "Real brasileño (BRL)",
    seDejaPropina: "Opcional",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Brasil con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Brasil la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Brasil?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Brasil.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Colombia",
    slug: "colombia",
    moneda: "Peso colombiano (COP)",
    seDejaPropina: "Sí",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Colombia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Colombia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Colombia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Colombia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Ecuador",
    slug: "ecuador",
    moneda: "Dólar estadounidense (USD)",
    seDejaPropina: "Opcional",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Ecuador con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Ecuador la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Ecuador?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Ecuador.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Bolivia",
    slug: "bolivia",
    moneda: "Boliviano (BOB)",
    seDejaPropina: "Opcional",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Bolivia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Bolivia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Bolivia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Bolivia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Paraguay",
    slug: "paraguay",
    moneda: "Guaraní paraguayo (PYG)",
    seDejaPropina: "Opcional",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Paraguay con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Paraguay la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Paraguay?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Paraguay.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Uruguay",
    slug: "uruguay",
    moneda: "Peso uruguayo (UYU)",
    seDejaPropina: "Opcional",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Uruguay con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Uruguay la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Uruguay?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Uruguay.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Venezuela",
    slug: "venezuela",
    moneda: "Bolívar (VES) y USD en zonas turísticas",
    seDejaPropina: "Opcional",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Venezuela con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Venezuela la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Venezuela?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Venezuela.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Guatemala",
    slug: "guatemala",
    moneda: "Quetzal (GTQ)",
    seDejaPropina: "Opcional",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Guatemala con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Guatemala la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Guatemala?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Guatemala.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Costa Rica",
    slug: "costa-rica",
    moneda: "Colón costarricense (CRC)",
    seDejaPropina: "Opcional",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Costa Rica con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Costa Rica la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Costa Rica?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Costa Rica.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Panamá",
    slug: "panama",
    moneda: "Balboa y USD",
    seDejaPropina: "Sí",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Panamá con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Panamá la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Panamá?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Panamá.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "República Dominicana",
    slug: "republica-dominicana",
    moneda: "Peso dominicano (DOP)",
    seDejaPropina: "Sí",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de República Dominicana con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En República Dominicana la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en República Dominicana?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en República Dominicana.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Cuba",
    slug: "cuba",
    moneda: "Peso cubano (CUP)",
    seDejaPropina: "Opcional",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Cuba con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Cuba la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Cuba?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Cuba.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Jamaica",
    slug: "jamaica",
    moneda: "Dólar jamaiquino (JMD)",
    seDejaPropina: "Sí",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Jamaica con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Jamaica la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Jamaica?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Jamaica.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Bahamas",
    slug: "bahamas",
    moneda: "Dólar bahameño (BSD)",
    seDejaPropina: "Sí",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Bahamas con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Bahamas la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Bahamas?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Bahamas.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Barbados",
    slug: "barbados",
    moneda: "Dólar de Barbados (BBD)",
    seDejaPropina: "Sí",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Barbados con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Barbados la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Barbados?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Barbados.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Trinidad y Tobago",
    slug: "trinidad-y-tobago",
    moneda: "Dólar de Trinidad y Tobago (TTD)",
    seDejaPropina: "Opcional",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Trinidad y Tobago con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Trinidad y Tobago la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Trinidad y Tobago?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Trinidad y Tobago.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Nicaragua",
    slug: "nicaragua",
    moneda: "Córdoba (NIO)",
    seDejaPropina: "Opcional",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Nicaragua con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Nicaragua la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Nicaragua?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Nicaragua.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Honduras",
    slug: "honduras",
    moneda: "Lempira (HNL)",
    seDejaPropina: "Opcional",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Honduras con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Honduras la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Honduras?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Honduras.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "El Salvador",
    slug: "el-salvador",
    moneda: "Dólar estadounidense (USD)",
    seDejaPropina: "Opcional",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de El Salvador con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En El Salvador la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en El Salvador?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en El Salvador.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Haití",
    slug: "haiti",
    moneda: "Gourde (HTG)",
    seDejaPropina: "Opcional",
    continente: "América",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Haití con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Haití la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Haití?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Haití.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Portugal",
    slug: "portugal",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Portugal con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Portugal la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Portugal?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Portugal.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Países Bajos",
    slug: "paises-bajos",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Países Bajos con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Países Bajos la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Países Bajos?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Países Bajos.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Bélgica",
    slug: "belgica",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Bélgica con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Bélgica la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Bélgica?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Bélgica.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Suiza",
    slug: "suiza",
    moneda: "Franco suizo (CHF)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Suiza con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Suiza la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Suiza?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Suiza.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Austria",
    slug: "austria",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Austria con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Austria la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Austria?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Austria.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Suecia",
    slug: "suecia",
    moneda: "Corona sueca (SEK)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Suecia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Suecia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Suecia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Suecia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Noruega",
    slug: "noruega",
    moneda: "Corona noruega (NOK)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Noruega con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Noruega la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Noruega?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Noruega.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Dinamarca",
    slug: "dinamarca",
    moneda: "Corona danesa (DKK)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Dinamarca con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Dinamarca la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Dinamarca?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Dinamarca.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Finlandia",
    slug: "finlandia",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Finlandia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Finlandia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Finlandia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Finlandia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Irlanda",
    slug: "irlanda",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Irlanda con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Irlanda la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Irlanda?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Irlanda.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Islandia",
    slug: "islandia",
    moneda: "Corona islandesa (ISK)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Islandia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Islandia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Islandia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Islandia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Polonia",
    slug: "polonia",
    moneda: "Zloty (PLN)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Polonia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Polonia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Polonia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Polonia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "República Checa",
    slug: "republica-checa",
    moneda: "Corona checa (CZK)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de República Checa con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En República Checa la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en República Checa?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en República Checa.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Hungría",
    slug: "hungria",
    moneda: "Forinto húngaro (HUF)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Hungría con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Hungría la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Hungría?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Hungría.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Rumania",
    slug: "rumania",
    moneda: "Leu rumano (RON)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Rumania con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Rumania la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Rumania?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Rumania.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Bulgaria",
    slug: "bulgaria",
    moneda: "Lev búlgaro (BGN)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Bulgaria con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Bulgaria la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Bulgaria?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Bulgaria.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Grecia",
    slug: "grecia",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Grecia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Grecia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Grecia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Grecia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Turquía",
    slug: "turquia",
    moneda: "Lira turca (TRY)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Turquía con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Turquía la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Turquía?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Turquía.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Croacia",
    slug: "croacia",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Croacia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Croacia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Croacia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Croacia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Eslovenia",
    slug: "eslovenia",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Eslovenia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Eslovenia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Eslovenia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Eslovenia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Eslovaquia",
    slug: "eslovaquia",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Eslovaquia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Eslovaquia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Eslovaquia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Eslovaquia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Serbia",
    slug: "serbia",
    moneda: "Dinar serbio (RSD)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Serbia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Serbia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Serbia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Serbia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Bosnia y Herzegovina",
    slug: "bosnia-y-herzegovina",
    moneda: "Marco convertible (BAM)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Bosnia y Herzegovina con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Bosnia y Herzegovina la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Bosnia y Herzegovina?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Bosnia y Herzegovina.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Montenegro",
    slug: "montenegro",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Montenegro con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Montenegro la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Montenegro?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Montenegro.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Albania",
    slug: "albania",
    moneda: "Lek (ALL)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Albania con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Albania la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Albania?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Albania.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Macedonia del Norte",
    slug: "macedonia-del-norte",
    moneda: "Dinar macedonio (MKD)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Macedonia del Norte con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Macedonia del Norte la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Macedonia del Norte?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Macedonia del Norte.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Ucrania",
    slug: "ucrania",
    moneda: "Grivna (UAH)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Ucrania con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Ucrania la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Ucrania?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Ucrania.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Estonia",
    slug: "estonia",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Estonia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Estonia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Estonia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Estonia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Letonia",
    slug: "letonia",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Letonia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Letonia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Letonia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Letonia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Lituania",
    slug: "lituania",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Lituania con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Lituania la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Lituania?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Lituania.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Luxemburgo",
    slug: "luxemburgo",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Luxemburgo con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Luxemburgo la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Luxemburgo?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Luxemburgo.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Malta",
    slug: "malta",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Malta con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Malta la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Malta?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Malta.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Chipre",
    slug: "chipre",
    moneda: "Euro (EUR)",
    seDejaPropina: "Opcional",
    continente: "Europa",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Chipre con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Chipre la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Chipre?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Chipre.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "China",
    slug: "china",
    moneda: "Yuan (CNY)",
    seDejaPropina: "No",
    continente: "Asia",
    resumen: {
      restaurantes: "La propina no es costumbre en restaurantes de China; solo deja monedas si el servicio fue excepcional.",
      taxis: "No se espera propina en taxis; paga la tarifa exacta salvo que quieras redondear por cortesía.",
      hoteles: "En hoteles de gama alta se puede dejar un pequeño extra en efectivo, pero no es obligatorio.",
    },
    notas: [
      "En China la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en China?",
        a: "Generalmente no; solo en contextos turísticos algunos meseros aceptan un pequeño extra.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en China.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Corea del Sur",
    slug: "corea-del-sur",
    moneda: "Won surcoreano (KRW)",
    seDejaPropina: "No",
    continente: "Asia",
    resumen: {
      restaurantes: "La propina no es costumbre en restaurantes de Corea del Sur; solo deja monedas si el servicio fue excepcional.",
      taxis: "No se espera propina en taxis; paga la tarifa exacta salvo que quieras redondear por cortesía.",
      hoteles: "En hoteles de gama alta se puede dejar un pequeño extra en efectivo, pero no es obligatorio.",
    },
    notas: [
      "En Corea del Sur la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Corea del Sur?",
        a: "Generalmente no; solo en contextos turísticos algunos meseros aceptan un pequeño extra.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Corea del Sur.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "India",
    slug: "india",
    moneda: "Rupia india (INR)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de India con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En India la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en India?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en India.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Tailandia",
    slug: "tailandia",
    moneda: "Baht (THB)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Tailandia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Tailandia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Tailandia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Tailandia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Vietnam",
    slug: "vietnam",
    moneda: "Dong vietnamita (VND)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Vietnam con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Vietnam la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Vietnam?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Vietnam.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Indonesia",
    slug: "indonesia",
    moneda: "Rupia indonesia (IDR)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Indonesia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Indonesia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Indonesia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Indonesia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Filipinas",
    slug: "filipinas",
    moneda: "Peso filipino (PHP)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Filipinas con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Filipinas la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Filipinas?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Filipinas.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Malasia",
    slug: "malasia",
    moneda: "Ringgit (MYR)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Malasia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Malasia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Malasia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Malasia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Singapur",
    slug: "singapur",
    moneda: "Dólar de Singapur (SGD)",
    seDejaPropina: "No",
    continente: "Asia",
    resumen: {
      restaurantes: "La propina no es costumbre en restaurantes de Singapur; solo deja monedas si el servicio fue excepcional.",
      taxis: "No se espera propina en taxis; paga la tarifa exacta salvo que quieras redondear por cortesía.",
      hoteles: "En hoteles de gama alta se puede dejar un pequeño extra en efectivo, pero no es obligatorio.",
    },
    notas: [
      "En Singapur la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Singapur?",
        a: "Generalmente no; solo en contextos turísticos algunos meseros aceptan un pequeño extra.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Singapur.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Taiwán",
    slug: "taiwan",
    moneda: "Nuevo dólar taiwanés (TWD)",
    seDejaPropina: "No",
    continente: "Asia",
    resumen: {
      restaurantes: "La propina no es costumbre en restaurantes de Taiwán; solo deja monedas si el servicio fue excepcional.",
      taxis: "No se espera propina en taxis; paga la tarifa exacta salvo que quieras redondear por cortesía.",
      hoteles: "En hoteles de gama alta se puede dejar un pequeño extra en efectivo, pero no es obligatorio.",
    },
    notas: [
      "En Taiwán la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Taiwán?",
        a: "Generalmente no; solo en contextos turísticos algunos meseros aceptan un pequeño extra.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Taiwán.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Hong Kong",
    slug: "hong-kong",
    moneda: "Dólar de Hong Kong (HKD)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Hong Kong con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Hong Kong la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Hong Kong?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Hong Kong.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Emiratos Árabes Unidos",
    slug: "emiratos-arabes-unidos",
    moneda: "Dirham (AED)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Emiratos Árabes Unidos con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Emiratos Árabes Unidos la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Emiratos Árabes Unidos?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Emiratos Árabes Unidos.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Qatar",
    slug: "qatar",
    moneda: "Riyal qatarí (QAR)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Qatar con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Qatar la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Qatar?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Qatar.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Arabia Saudita",
    slug: "arabia-saudita",
    moneda: "Riyal saudí (SAR)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Arabia Saudita con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Arabia Saudita la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Arabia Saudita?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Arabia Saudita.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Israel",
    slug: "israel",
    moneda: "Nuevo séquel (ILS)",
    seDejaPropina: "Sí",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Israel con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Israel la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Israel?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Israel.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Jordania",
    slug: "jordania",
    moneda: "Dinar jordano (JOD)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Jordania con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Jordania la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Jordania?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Jordania.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Líbano",
    slug: "libano",
    moneda: "Libra libanesa (LBP)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Líbano con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Líbano la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Líbano?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Líbano.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Camboya",
    slug: "camboya",
    moneda: "Riel (KHR)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Camboya con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Camboya la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Camboya?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Camboya.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Laos",
    slug: "laos",
    moneda: "Kip laosiano (LAK)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Laos con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Laos la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Laos?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Laos.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Nepal",
    slug: "nepal",
    moneda: "Rupia nepalesa (NPR)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Nepal con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Nepal la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Nepal?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Nepal.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Sri Lanka",
    slug: "sri-lanka",
    moneda: "Rupia de Sri Lanka (LKR)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Sri Lanka con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Sri Lanka la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Sri Lanka?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Sri Lanka.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Pakistán",
    slug: "pakistan",
    moneda: "Rupia pakistaní (PKR)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Pakistán con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Pakistán la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Pakistán?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Pakistán.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Bangladesh",
    slug: "bangladesh",
    moneda: "Taka (BDT)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Bangladesh con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Bangladesh la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Bangladesh?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Bangladesh.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Kazajistán",
    slug: "kazajistan",
    moneda: "Tenge (KZT)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Kazajistán con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Kazajistán la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Kazajistán?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Kazajistán.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Uzbekistán",
    slug: "uzbekistan",
    moneda: "Som uzbeko (UZS)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Uzbekistán con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Uzbekistán la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Uzbekistán?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Uzbekistán.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Georgia",
    slug: "georgia",
    moneda: "Lari (GEL)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Georgia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Georgia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Georgia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Georgia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Armenia",
    slug: "armenia",
    moneda: "Dram armenio (AMD)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Armenia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Armenia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Armenia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Armenia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Azerbaiyán",
    slug: "azerbaiyan",
    moneda: "Manat azerbaiyano (AZN)",
    seDejaPropina: "Opcional",
    continente: "Asia",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Azerbaiyán con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Azerbaiyán la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Azerbaiyán?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Azerbaiyán.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Marruecos",
    slug: "marruecos",
    moneda: "Dirham marroquí (MAD)",
    seDejaPropina: "Opcional",
    continente: "África",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Marruecos con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Marruecos la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Marruecos?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Marruecos.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Túnez",
    slug: "tunez",
    moneda: "Dinar tunecino (TND)",
    seDejaPropina: "Opcional",
    continente: "África",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Túnez con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Túnez la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Túnez?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Túnez.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Egipto",
    slug: "egipto",
    moneda: "Libra egipcia (EGP)",
    seDejaPropina: "Sí",
    continente: "África",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Egipto con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Egipto la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Egipto?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Egipto.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Sudáfrica",
    slug: "sudafrica",
    moneda: "Rand sudafricano (ZAR)",
    seDejaPropina: "Sí",
    continente: "África",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Sudáfrica con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Sudáfrica la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Sudáfrica?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Sudáfrica.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Kenia",
    slug: "kenia",
    moneda: "Chelín keniano (KES)",
    seDejaPropina: "Opcional",
    continente: "África",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Kenia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Kenia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Kenia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Kenia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Tanzania",
    slug: "tanzania",
    moneda: "Chelín tanzano (TZS)",
    seDejaPropina: "Opcional",
    continente: "África",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Tanzania con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Tanzania la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Tanzania?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Tanzania.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Etiopía",
    slug: "etiopia",
    moneda: "Birr etíope (ETB)",
    seDejaPropina: "Opcional",
    continente: "África",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Etiopía con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Etiopía la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Etiopía?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Etiopía.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Ghana",
    slug: "ghana",
    moneda: "Cedi ghanés (GHS)",
    seDejaPropina: "Opcional",
    continente: "África",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Ghana con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Ghana la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Ghana?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Ghana.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Nigeria",
    slug: "nigeria",
    moneda: "Naira (NGN)",
    seDejaPropina: "Opcional",
    continente: "África",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Nigeria con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Nigeria la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Nigeria?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Nigeria.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Senegal",
    slug: "senegal",
    moneda: "Franco CFA (XOF)",
    seDejaPropina: "Opcional",
    continente: "África",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Senegal con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Senegal la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Senegal?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Senegal.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Uganda",
    slug: "uganda",
    moneda: "Chelín ugandés (UGX)",
    seDejaPropina: "Opcional",
    continente: "África",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Uganda con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Uganda la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Uganda?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Uganda.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Ruanda",
    slug: "ruanda",
    moneda: "Franco ruandés (RWF)",
    seDejaPropina: "Opcional",
    continente: "África",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Ruanda con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Ruanda la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Ruanda?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Ruanda.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Namibia",
    slug: "namibia",
    moneda: "Dólar namibio (NAD)",
    seDejaPropina: "Opcional",
    continente: "África",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Namibia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Namibia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Namibia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Namibia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Botsuana",
    slug: "botsuana",
    moneda: "Pula (BWP)",
    seDejaPropina: "Opcional",
    continente: "África",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Botsuana con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Botsuana la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Botsuana?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Botsuana.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Zimbabue",
    slug: "zimbabue",
    moneda: "Dólar estadounidense (USD) y dólar zimbabuense",
    seDejaPropina: "Opcional",
    continente: "África",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Zimbabue con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Zimbabue la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Zimbabue?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Zimbabue.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Australia",
    slug: "australia",
    moneda: "Dólar australiano (AUD)",
    seDejaPropina: "Opcional",
    continente: "Oceanía",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Australia con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Australia la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Australia?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Australia.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Nueva Zelanda",
    slug: "nueva-zelanda",
    moneda: "Dólar neozelandés (NZD)",
    seDejaPropina: "Opcional",
    continente: "Oceanía",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Nueva Zelanda con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Nueva Zelanda la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Nueva Zelanda?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Nueva Zelanda.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Fiyi",
    slug: "fiyi",
    moneda: "Dólar fiyiano (FJD)",
    seDejaPropina: "Opcional",
    continente: "Oceanía",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Fiyi con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Fiyi la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Fiyi?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Fiyi.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

  {
    name: "Papúa Nueva Guinea",
    slug: "papua-nueva-guinea",
    moneda: "Kina (PGK)",
    seDejaPropina: "Opcional",
    continente: "Oceanía",
    resumen: {
      restaurantes: "10% sugerido en restaurantes de Papúa Nueva Guinea con servicio completo; en locales sencillos basta con redondear.",
      taxis: "No es obligatorio en taxis, pero redondear la tarifa o dejar monedas es un gesto amable.",
      hoteles: "1-3 USD equivalentes por maleta o por noche de limpieza suelen ser bien recibidos en hoteles.",
    },
    notas: [
      "En Papúa Nueva Guinea la propina se ve como un agradecimiento, no una obligación legal.",
      "Si ya ves un cargo por servicio, puedes ajustar la propina adicional o no agregar más.",
    ],
    faqs: [
      {
        q: "¿La propina es obligatoria en Papúa Nueva Guinea?",
        a: "No, se deja a discreción del cliente y depende del servicio que recibas.",
      },
      {
        q: "¿Cómo se maneja en bares o cafés?",
        a: "En bares se redondea la cuenta o se deja un 5-10% cuando hay atención en mesa en Papúa Nueva Guinea.",
      },
      {
        q: "¿Qué pasa con tours o choferes privados?",
        a: "Para guías y choferes se acostumbra un monto fijo o 5-10% al final del servicio si quedaste conforme.",
      },
    ],
  },

];

export const findPaisBySlug = (slug: string): Pais | undefined =>
  paises.find((p) => p.slug === slug);
