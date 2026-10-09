/* Contenido del jardín de Novés.
   Para cambiar o añadir tareas, solo hay que tocar este archivo.
   Fechas en formato AAAA-MM-DD. Prioridad: urgente, importante, mantenimiento, opcional. */

window.JARDIN = {

areas: [
  { id: "semana",   nombre: "Esta semana" },
  { id: "cesped",   nombre: "Césped",
    intro: "Mezcla de ray grass y festuca (las semillas del garaje son de ese tipo). Es hierba de clima frío: crece mucho en primavera y otoño, sufre con el calor de julio y en invierno se queda verde pero parada. Por eso sus dos estaciones importantes son el otoño y la primavera, no el verano. Cuatro tareas la mantienen: segar, regar, abonar y rellenar calvas." ,
    ficha: [
      ["Siega", "Mar-may: cada semana a 4-5 cm. Jun-sep: cada 7-10 días a 5-6 cm. Oct-nov: cada 10-15 días a 5 cm. Dic-feb: solo si pasa de 7-8 cm."],
      ["Regla de oro", "No cortar nunca más de un tercio de la altura de una vez."],
      ["Abono", "Tres veces al año: marzo-abril, finales de mayo y octubre. Nunca en verano ni en invierno."],
      ["Calvas", "Se resiembran en octubre o en marzo-abril. En noviembre ya no: la tierra está fría y la semilla no nace."],
      ["Escarificado", "Una vez al año, en marzo-abril, justo antes de resembrar y abonar."]
    ]},
  { id: "frutales", nombre: "Frutales",
    intro: "Higuera, peral, manzano, ciruelo, albaricoquero y dos melocotoneros. En invierno pierden la hoja y se duermen hasta febrero: es normal y es justo el momento de tratarlos y podarlos. Los melocotoneros son los que más cuidado piden, por la lepra (hojas rizadas y rojizas en primavera).",
    ficha: [
      ["Lo imprescindible", "Dos tratamientos de invierno: al caer la hoja (noviembre) y al hinchar las yemas (febrero)."],
      ["Poda", "Con el árbol dormido, de mediados de diciembre a febrero. El albaricoquero, mejor tras la cosecha (verano)."],
      ["En floración", "Nunca insecticidas: matan las abejas y sin abejas no hay fruta."],
      ["En verano", "Se trata solo si aparece un problema. Foto a Claude y se decide."],
      ["Perros", "Recoger la fruta caída: fermenta, atrae avispas y los huesos son peligrosos."]
    ]},
  { id: "limonero", nombre: "Limonero y plantas",
    intro: "El limonero está en el arriate pegado a la casa, con las aromáticas y las flores. La pared le da calor y le protege, pero es el único árbol de la casa que sufre con el frío de Novés: por debajo de -2 °C se queman hojas y ramas jóvenes.",
    ficha: [
      ["Heladas", "Taparlo con la manta térmica las noches por debajo de -2 °C. Quitarla por la mañana."],
      ["Riego en invierno", "Muy poco. Nunca los días de helada."],
      ["Abono", "Abono para cítricos en primavera y principios de verano."],
      ["Poda", "Ligera, en primavera, cuando ya no hiela. Nunca en invierno."]
    ]},
  { id: "huerto",   nombre: "Huerto",
    intro: "Este invierno, en modo fácil: ajos y habas, que se plantan en otoño, aguantan las heladas y casi no piden nada hasta la cosecha. El huerto de verano (tomates, pimientos) lo decidiremos en abril.",
    ficha: [
      ["Ajos", "Diente con la punta hacia arriba, a 3-4 cm de profundidad y 10-15 cm entre sí. Cosecha a principios de verano."],
      ["Habas", "2-3 semillas por hoyo, a 4-5 cm de profundidad y 25-30 cm entre hoyos. Cosecha en abril-mayo."],
      ["Riego", "La lluvia suele bastar en invierno. Solo si pasan 3 semanas sin llover."]
    ]},
  { id: "piscina",  nombre: "Piscina",
    intro: "Piscina de cloro de unos 20 m², con depuradora y lona de invierno. El agua de Novés es muy dura: tendencia a cal, agua turbia y pH alto. Para dar cantidades de producto hacen falta el volumen (largo, ancho y profundidades) y las fotos de los productos que dejó el dueño: hasta entonces, nada a ojo.",
    ficha: [
      ["Pendiente", "Medidas y profundidades, tipo de filtro, potencia de la bomba y fotos de los productos."],
      ["Limpiafondos", "Lo tienes. Falta la manguera flotante de 38 mm: se compra en primavera."],
      ["La depuradora", "Es la aspiradora: la bomba chupa por el skimmer, el filtro atrapa la suciedad y el agua vuelve limpia."],
      ["Perros", "Más demanda de cloro y pelo en skimmers y prefiltro. Revisar los cestillos más a menudo en verano."]
    ]},
  { id: "riego",    nombre: "Riego",
    intro: "Riego automático con programador. En invierno se apaga, pero \"no se riega\" significa \"no se riega si llueve\". El calendario fino por sectores lo haremos con una foto del programador y de qué riega cada sector.",
    ficha: [
      ["Otoño", "Césped 2 días por semana; árboles y goteos 1 vez. Temprano por la mañana."],
      ["Invierno", "Apagado. Un riego profundo si pasan 3 semanas sin llover."],
      ["Heladas", "Los tramos de tubería o válvulas al aire se vacían antes del frío."]
    ]},
  { id: "material", nombre: "Material" },
  { id: "anio",     nombre: "El año" }
],

/* Tipos de repetición:
   fecha: "AAAA-MM-DD" para tareas de un día
   semanal: { desde, hasta } en el día de la semana de "desde" */
tareas: [

/* ---------- GENERAL ---------- */
{ id: "ronda-invierno", area: "cesped", titulo: "Ronda semanal de jardín", prioridad: "mantenimiento",
  semanal: { desde: "2026-10-10", hasta: "2027-02-27" }, duracion: "30-45 min", material: ["escoba-hojas", "bolsas"],
  que: "Un repaso rápido cada sábado para que nada se acumule.",
  pasos: [
    "Hojas: retirar las del césped, sobre todo las de la higuera. Al compost o al huerto.",
    "Siega (octubre y noviembre): cada 10-15 días o cuando pase de unos 7 cm. Dejar a 5 cm. De diciembre a febrero, solo si hace falta.",
    "Fruta caída: recogerla.",
    "Lluvia: si llevamos 3 semanas sin llover, un riego profundo de césped y árboles.",
    "Piscina: vistazo a la lona (que no tenga agua encharcada encima) y al nivel del agua."
  ],
  porque: "Las hojas grandes de la higuera tapan la luz y pudren el césped en pocos días. La fruta fermentada atrae avispas y los huesos son peligrosos para los perros. Los inviernos de Toledo pueden ser secos: el césped no se seca por frío, sí por semanas sin agua.",
  sinoSe: "Calvas y hongos en primavera."
},
{ id: "ronda-verano", area: "cesped", titulo: "Ronda semanal de primavera y verano", prioridad: "mantenimiento",
  semanal: { desde: "2027-03-06", hasta: "2027-09-25" }, duracion: "45-60 min",
  que: "El repaso semanal de la temporada de crecimiento.",
  pasos: [
    "Siega semanal (4-5 cm en primavera, 5-6 cm desde junio). Nunca más de un tercio de la altura.",
    "Mirar el riego funcionando 2 minutos: aspersores que no giran, goteros secos, charcos.",
    "Piscina: cestillos de skimmers y prefiltro, nivel del agua y medición de pH y cloro (cuando esté en marcha).",
    "Frutales y huerto: vistazo a hojas (pulgón, orugas, manchas blancas). Foto a Claude si algo raro.",
    "Fruta caída: recogerla."
  ],
  porque: "En primavera y verano todo crece y se estropea rápido. Diez minutos de vista ahorran tratamientos.",
  sinoSe: "Césped que se dispara, plagas que se extienden y agua de piscina que se pone verde."
},

/* ---------- CÉSPED ---------- */
{ id: "c-medir", area: "cesped", titulo: "Medir los m² de césped", prioridad: "importante", fecha: "2026-10-10", duracion: "10 min",
  que: "Saber cuánto césped hay para calcular abono y semilla.",
  pasos: [
    "Divide el césped en rectángulos (más o menos).",
    "Mide largo y ancho de cada uno a pasos (un paso normal es casi un metro).",
    "Multiplica y suma. Pásale el número a Claude."
  ],
  porque: "La dosis de abono va por m². Sin ese dato se compra de más o de menos.",
  sinoSe: "Abonar a ojo: o se quema el césped o no hace nada."
},
{ id: "c-resiembra", area: "cesped", titulo: "Resembrar las calvas", prioridad: "importante", fecha: "2026-10-10", duracion: "1 h",
  que: "Rellenar las zonas peladas aprovechando la última ventana templada del año.",
  material: ["semillas", "mantillo", "rastrillo", "guantes"],
  pasos: [
    "Rastrillar fuerte cada calva: quitar hierba muerta y soltar 1-2 cm de tierra.",
    "Repartir la semilla a la dosis de la caja (unos 30 g/m²; en una calva, un puñado pequeño por palmo cuadrado).",
    "Tapar con medio centímetro de mantillo.",
    "Apretar con el dorso del rastrillo para que la semilla toque la tierra.",
    "Regar suave a diario (o cada dos días si llueve) 2-3 semanas, sin encharcar.",
    "Nace en 7-14 días. No pisar ni segar esas zonas hasta que la hierba mida unos 8 cm."
  ],
  porque: "La semilla necesita la tierra por encima de unos 10 °C para germinar; en Novés eso dura hasta finales de octubre. Sembrada ahora, tiene todo el invierno y la primavera para enraizar antes del calor.",
  sinoSe: "Calvas todo el invierno, con hueco para malas hierbas. Habría que esperar a marzo.",
  importante: "Si no da tiempo antes del 25 de octubre, no sembrar en noviembre: se pasa a marzo-abril. No echar abono encima de la semilla recién sembrada."
},
{ id: "c-abono-otono", area: "cesped", titulo: "Abono de otoño del césped", prioridad: "mantenimiento", fecha: "2026-10-10", duracion: "20 min",
  que: "Fortalecer la raíz y preparar el césped para el frío.",
  material: ["abono-otono"],
  pasos: [
    "Mejor 1-2 días después de segar, con el césped seco.",
    "Repartir el abono a la dosis de la etiqueta, a voleo y en dos pasadas cruzadas para que quede uniforme.",
    "No echarlo sobre las calvas recién sembradas.",
    "Regar justo después (o aplicarlo antes de un día de lluvia).",
    "Perros fuera hasta que esté regado."
  ],
  porque: "En otoño el césped crece hacia abajo: echa raíz y guarda reservas. El abono de otoño lleva más potasio (K), que refuerza raíz y resistencia al frío, y poco nitrógeno (N), que solo daría hoja tierna justo antes de las heladas.",
  sinoSe: "Poca cosa: césped algo menos fuerte en primavera. Es recomendable, no obligatorio."
},
{ id: "c-ultima-siega", area: "cesped", titulo: "Última siega del otoño", prioridad: "mantenimiento", fecha: "2026-11-28", duracion: "30 min",
  que: "Dejar el césped a la altura buena para el invierno.",
  pasos: [
    "Segar a 5-6 cm (algo más alto que en octubre).",
    "Recoger bien la hierba cortada y las hojas.",
    "Después de esta, solo se siega en invierno si pasa de 7-8 cm."
  ],
  porque: "Un poco más de altura protege la base de la planta de las heladas y le da más hoja para seguir haciendo reservas.",
  sinoSe: "Césped demasiado alto (se apelmaza y salen hongos) o demasiado bajo (sufre con el frío)."
},
{ id: "c-escarificar", area: "cesped", titulo: "Escarificar, resembrar y abonar", prioridad: "importante", fecha: "2027-03-20", duracion: "2-3 h",
  que: "La puesta a punto anual del césped. La máquina que pasaba el dueño en abril es un escarificador.",
  material: ["abono-primavera", "semillas", "mantillo", "rastrillo"],
  pasos: [
    "Esperar a que el césped ya crezca con ganas (mediados de marzo a abril).",
    "Segar a 4 cm.",
    "Pasar el escarificador en dos direcciones cruzadas: saca hierba muerta y musgo y abre surcos.",
    "Rastrillar y retirar todo lo que haya sacado la máquina.",
    "Resembrar calvas y zonas claras (mismo método que en octubre).",
    "Abonar con abono de primavera de liberación lenta.",
    "Riego ligero diario 2-3 semanas en las zonas sembradas."
  ],
  porque: "Con los años se acumula abajo un \"fieltro\" de hierba muerta y raíces que impide que agua y abono lleguen a la raíz. Quitarlo una vez al año hace el césped más denso, y los surcos son el sitio perfecto para la semilla.",
  sinoSe: "Césped cada año más ralo y con más musgo y malas hierbas.",
  importante: "Una vez al año, no más. En otoño no: el césped queda muy castigado y no le da tiempo a recuperarse antes del frío. Si la máquina roja del garaje es el escarificador, foto a Claude antes de usarla."
},
{ id: "c-abono-mayo", area: "cesped", titulo: "Segundo abono de césped", prioridad: "mantenimiento", fecha: "2027-05-29", duracion: "20 min",
  que: "Llegar fuerte al verano.",
  material: ["abono-primavera"],
  pasos: ["Mismo abono de primavera, a dosis algo menor que la de la etiqueta.", "Regar después."],
  porque: "La reserva de primavera se agota a finales de mayo; este aporte sostiene el césped antes del calor.",
  sinoSe: "Césped más débil en julio, más amarillo con el calor."
},
{ id: "c-altura-verano", area: "cesped", titulo: "Subir la altura de corte para el verano", prioridad: "mantenimiento", fecha: "2027-06-05", duracion: "5 min",
  que: "Pasar a cortar a 5-6 cm.",
  pasos: ["Subir una o dos posiciones la altura del cortacésped.", "Mantenerla hasta septiembre."],
  porque: "La hierba más alta da sombra a su propia raíz y al suelo: aguanta mucho mejor el calor y necesita menos agua.",
  sinoSe: "Césped quemado y amarillo en julio."
},
{ id: "c-resiembra-2027", area: "cesped", titulo: "Resiembra de otoño", prioridad: "importante", fecha: "2027-09-18", duracion: "1 h",
  que: "Repasar las calvas que haya dejado el verano.",
  material: ["semillas", "mantillo"],
  pasos: ["Mismo método que la resiembra de octubre de 2026.", "Mediados de septiembre es el mejor momento del año."],
  porque: "Tierra todavía caliente y lluvias que empiezan: la semilla nace rápido y tiene meses para enraizar.",
  sinoSe: "Las calvas del verano se quedan todo el invierno."
},

/* ---------- FRUTALES ---------- */
{ id: "f-podador", area: "frutales", titulo: "Contratar podador para los frutales", prioridad: "importante", fecha: "2026-11-14", duracion: "Unas llamadas",
  que: "Tener a alguien reservado para podar entre mediados de diciembre y febrero.",
  pasos: [
    "Preguntar a vecinos o en el vivero o la cooperativa de Torrijos o Novés.",
    "Árboles: higuera, peral, manzano, ciruelo, albaricoquero y dos melocotoneros.",
    "Pedirle que no pode el limonero (se poda en primavera) y que al albaricoquero le haga poda ligera.",
    "Estar presente y preguntar: el segundo año la podemos hacer nosotros."
  ],
  porque: "La poda de frutales es la tarea donde un error se paga con años de mala cosecha. Y los buenos podadores se llenan pronto.",
  sinoSe: "Árboles sin podar (menos fruta y más enfermedades) o podados mal."
},
{ id: "f-trat1", area: "frutales", titulo: "Tratamiento de invierno 1/2: caída de la hoja", prioridad: "urgente", fecha: "2026-11-21", duracion: "1 h",
  que: "Pulverizar los frutales cuando ya han perdido casi toda la hoja.",
  material: ["pack-sipcam", "pulverizador", "epi"],
  pasos: [
    "Esperar a que hayan caído la mayoría de las hojas (si aún tienen muchas, 1-2 semanas más).",
    "Árboles: los 2 melocotoneros (prioridad), albaricoquero, ciruelo, peral y manzano. Higuera y limonero no.",
    "Seguir las dosis y el orden de la guía del Pack Tratamiento Invierno de Sipcam. Si indica que fungicida y aceite van por separado, son dos pasadas.",
    "Mojar bien tronco y todas las ramas.",
    "Día sin viento, sin lluvia en 24-48 h y sin helada esa noche.",
    "Guantes, gafas y mascarilla. Perros dentro hasta que seque.",
    "Lavar bien el pulverizador al terminar."
  ],
  porque: "Cada hoja que cae deja una pequeña herida por donde entra el hongo de la lepra. Sin hojas se moja todo el árbol, y el aceite elimina los insectos que pasan el invierno en la corteza.",
  sinoSe: "Melocotoneros con lepra en primavera: hojas deformadas y rojizas y la cosecha perdida.",
  importante: "Nada de azufre 3-4 semanas antes o después: azufre y aceite juntos queman el árbol."
},
{ id: "f-estiercol", area: "frutales", titulo: "Estiércol o compost a los frutales", prioridad: "mantenimiento", fecha: "2026-12-12", duracion: "45 min",
  que: "El único abono del invierno, orgánico y de acción lenta.",
  material: ["estiercol"],
  pasos: [
    "Medio saco o un saco por árbol (menos para el limonero).",
    "Repartirlo en círculo a la altura del borde de la copa, no pegado al tronco.",
    "Mezclarlo un poco con la tierra o dejarlo encima: la lluvia lo incorpora.",
    "Si los perros escarban, mejor compost que estiércol."
  ],
  porque: "Se descompone despacio en invierno y está listo cuando el árbol arranca en primavera. Un abono químico ahora lo lavaría la lluvia sin que el árbol lo use.",
  sinoSe: "Menos vigor en primavera, nada grave."
},
{ id: "f-poda", area: "frutales", titulo: "Poda de invierno (con el podador)", prioridad: "importante", fecha: "2027-01-16", duracion: "Una mañana", material: ["tijeras", "bolsas"],
  que: "Podar con el árbol dormido. Este año lo hace el podador y tú miras.",
  pasos: [
    "Fecha a cuadrar con el podador: de mediados de diciembre a principios de febrero.",
    "Preguntarle por qué corta cada rama y apuntarlo (o grabarlo).",
    "Retirar y sacar del jardín los restos de poda."
  ],
  porque: "Sin hoja se ve la estructura del árbol y la savia está parada: los cortes cicatrizan mejor y se pierde menos energía.",
  sinoSe: "Ramas que se cruzan, menos luz, más enfermedades y fruta más pequeña."
},
{ id: "f-trat2", area: "frutales", titulo: "Tratamiento de invierno 2/2: antes de brotar", prioridad: "urgente", fecha: "2027-02-13", duracion: "1 h",
  que: "La segunda pasada, la más importante del año para los melocotoneros.",
  material: ["pack-sipcam", "pack-masso", "pulverizador", "epi"],
  pasos: [
    "Después de la poda y con las yemas hinchadas, pero antes de que se abran las flores.",
    "Si ya hay flor u hoja abierta, no tratar y avisar a Claude.",
    "Segunda aplicación del pack de Sipcam (o el de Massó si se acabó). Dosis y orden de la guía.",
    "Mismas condiciones: sin viento, sin lluvia en 24-48 h, sin helada. Protección y perros dentro."
  ],
  porque: "La lepra infecta justo cuando se abren las yemas. También protege los cortes de la poda.",
  sinoSe: "Melocotoneros con lepra en primavera."
},
{ id: "f-abono-yemas", area: "frutales", titulo: "Abono al suelo al hinchar las yemas", prioridad: "mantenimiento", fecha: "2027-03-06", duracion: "30 min", material: ["abono-frutales"],
  que: "Abono granulado alrededor de cada frutal cuando arrancan.",
  pasos: [
    "Abono para frutales (o universal) a la dosis de la etiqueta por árbol.",
    "Repartido en círculo bajo el borde de la copa y regado.",
    "Si las hojas salen amarillas con nervios verdes, avisar a Claude (puede faltar hierro)."
  ],
  porque: "Es cuando el árbol empieza a gastar reservas en flor y hoja. Lo recoge la hoja del vivero que dejó el dueño.",
  sinoSe: "Arranque más flojo y fruta más pequeña."
},
{ id: "f-floracion", area: "frutales", titulo: "Floración: vigilar, sin insecticidas", prioridad: "mantenimiento", fecha: "2027-03-15", duracion: "5 min",
  que: "Disfrutar la flor y no tocar nada.",
  pasos: [
    "No usar insecticidas (la hoja del vivero lo recomienda; no hacerlo).",
    "Si hay helada fuerte con flor abierta, no hay mucho que hacer en árboles grandes: se acepta.",
    "Foto a Claude si ves pulgón o manchas en hoja nueva."
  ],
  porque: "Los insecticidas en flor matan a las abejas, y sin polinización no hay fruta.",
  sinoSe: "-"
},
{ id: "f-caida-flor", area: "frutales", titulo: "Fungicida a la caída de la flor", prioridad: "importante", fecha: "2027-04-10", duracion: "45 min",
  que: "Proteger la hoja nueva y el fruto recién cuajado.",
  material: ["duaxo", "pulverizador", "epi"],
  pasos: [
    "Cuando hayan caído la mayoría de los pétalos.",
    "Duaxo (fungicida del garaje) a la dosis de la caja, en melocotoneros, albaricoquero, ciruelo, manzano y peral.",
    "Día sin viento ni lluvia. Protección y perros dentro."
  ],
  porque: "Es el último momento sensible para la lepra y el moteado.",
  sinoSe: "Más riesgo de manchas y hojas deformadas, sobre todo si la primavera es lluviosa."
},
{ id: "f-aclareo", area: "frutales", titulo: "Aclarar frutos del melocotonero", prioridad: "opcional", fecha: "2027-05-08", duracion: "30 min",
  que: "Quitar frutitos para que los que quedan crezcan grandes.",
  pasos: ["Cuando los melocotones tengan tamaño de nuez.", "Dejar uno cada 15-20 cm de rama y quitar el resto."],
  porque: "Un melocotonero cargado da fruta pequeña y puede romper ramas.",
  sinoSe: "Muchos melocotones pequeños y ramas que se parten."
},
{ id: "f-revision-verano", area: "frutales", titulo: "Revisar plagas de verano", prioridad: "mantenimiento", fecha: "2027-06-05", duracion: "15 min",
  que: "Mirar hojas y frutos en busca de problemas.",
  material: ["azufre", "insecticida-orugas"],
  pasos: [
    "Pulgón (bichitos verdes o negros en brotes), orugas, manchas blancas (oídio) o hojas con telarañas finas (araña roja).",
    "Foto a Claude antes de tratar: azufre y el insecticida de orugas del garaje solo si hace falta.",
    "Azufre nunca con más de 30 °C."
  ],
  porque: "En verano se trata solo lo que aparece. Tratar \"por si acaso\" cada mes es gastar dinero y matar fauna útil.",
  sinoSe: "Una plaga que crece sin control."
},
{ id: "f-poda-albaricoque", area: "frutales", titulo: "Poda ligera del albaricoquero", prioridad: "mantenimiento", fecha: "2027-07-10", duracion: "30 min",
  que: "Aclarar ramas tras la cosecha.",
  pasos: ["Quitar ramas secas, cruzadas o que crecen hacia dentro.", "Poco y limpio: en verano se poda suave."],
  porque: "El albaricoquero cicatriza mal en invierno y es propenso a la goma; en verano cierra mejor las heridas.",
  sinoSe: "Árbol más cerrado y con más madera muerta."
},

/* ---------- LIMONERO Y PLANTAS ---------- */
{ id: "l-heladas", area: "limonero", titulo: "¿Heladas esta semana? Tapar el limonero", prioridad: "urgente",
  semanal: { desde: "2026-12-04", hasta: "2027-02-26" }, duracion: "2 min",
  material: ["manta"],
  que: "Mirar la previsión de Novés y tapar el limonero si hace falta.",
  pasos: [
    "Mirar la previsión de la semana (AEMET o la app del tiempo).",
    "Si alguna noche baja de -2 °C, taparlo esa tarde: que la manta cubra la copa entera y llegue al suelo.",
    "Quitarla por la mañana cuando suba la temperatura.",
    "No regar el limonero los días de helada."
  ],
  porque: "El limonero es el cítrico más sensible al frío. La manta guarda el calor del suelo y gana 2-4 grados.",
  sinoSe: "Limonero quemado o muerto tras una noche de helada fuerte."
},
{ id: "l-aromaticas", area: "limonero", titulo: "Recortar las aromáticas", prioridad: "opcional", fecha: "2027-03-13", duracion: "20 min",
  que: "Recortar romero, lavanda, tomillo y similares para que no se queden leñosas.",
  pasos: ["Recortar un tercio de lo que creció el año anterior.", "Nunca cortar hasta la madera vieja sin hojas."],
  porque: "Recortadas en primavera rebrotan compactas; si no, se abren y se quedan feas por dentro.",
  sinoSe: "Matas desgarbadas y peladas por el centro."
},
{ id: "l-abono", area: "limonero", titulo: "Abono para cítricos", prioridad: "mantenimiento", fecha: "2027-03-27", duracion: "10 min",
  que: "Primer abono del año del limonero.",
  material: ["abono-citricos"],
  pasos: ["Dosis de la etiqueta, repartida alrededor del tronco bajo la copa.", "Regar después.", "Repetir a principios de junio."],
  porque: "Los cítricos son exigentes y en suelos calizos como los de Toledo amarillean con facilidad.",
  sinoSe: "Hojas amarillas y poca fruta."
},
{ id: "l-poda", area: "limonero", titulo: "Poda ligera del limonero", prioridad: "opcional", fecha: "2027-04-17", duracion: "20 min",
  que: "Quitar ramas secas, dañadas por el frío o mal orientadas.",
  pasos: ["Cuando ya no haya riesgo de helada.", "Poco: el limonero no necesita poda fuerte."],
  porque: "Así se ve qué ha dañado el invierno y se poda lo justo.",
  sinoSe: "Ramas secas que atraen plagas."
},

/* ---------- HUERTO ---------- */
{ id: "h-ajos-habas", area: "huerto", titulo: "Plantar ajos y habas", prioridad: "opcional", fecha: "2026-10-17", duracion: "1-2 h",
  que: "Huerto de invierno que se cuida casi solo.",
  material: ["ajo", "habas", "estiercol", "guantes"],
  pasos: [
    "Limpiar restos del verano y echar una capa de estiércol o compost de 3-5 cm; mezclar con la azada.",
    "Ajos: dientes sueltos, punta hacia arriba, a 3-4 cm de profundidad y 10-15 cm entre sí.",
    "Habas: 2-3 semillas por hoyo, a 4-5 cm de profundidad, hoyos a 25-30 cm.",
    "Un riego tras plantar. Después, la lluvia suele bastar."
  ],
  porque: "Aguantan las heladas y el ajo necesita frío para formar cabeza. Las habas, además, enriquecen la tierra para el huerto de verano.",
  sinoSe: "Nada: el huerto descansa. Cualquier fin de semana hasta mediados de noviembre vale."
},
{ id: "h-escardar", area: "huerto", titulo: "Quitar hierbas del huerto", prioridad: "opcional", fecha: "2027-01-09", duracion: "30 min",
  que: "Arrancar las hierbas que compiten con ajos y habas.",
  pasos: ["A mano o con azadilla, con la tierra húmeda (sale la raíz entera)."],
  porque: "Las malas hierbas roban agua y luz a los cultivos pequeños.",
  sinoSe: "Ajos más pequeños."
},
{ id: "h-verano", area: "huerto", titulo: "Decidir el huerto de verano", prioridad: "opcional", fecha: "2027-04-03", duracion: "Charla con Claude",
  que: "Elegir qué plantar en mayo (tomate, pimiento, calabacín...) o dejarlo en barbecho.",
  pasos: ["Decidir cuánto tiempo apetece dedicarle en verano.", "Pedir a Claude el plan de plantación y riego."],
  porque: "El huerto de verano es lo que más trabajo da de todo el jardín: mejor decidirlo con calma.",
  sinoSe: "-"
},
{ id: "h-cosecha-habas", area: "huerto", titulo: "Cosechar habas", prioridad: "opcional", fecha: "2027-04-24", duracion: "Ratos",
  que: "Recoger las vainas cuando estén llenas pero tiernas.",
  pasos: ["Ir recogiendo cada pocos días durante 3-4 semanas."],
  porque: "Pasadas, se ponen duras y harinosas.", sinoSe: "Habas duras."
},
{ id: "h-cosecha-ajos", area: "huerto", titulo: "Cosechar ajos", prioridad: "opcional", fecha: "2027-06-12", duracion: "30 min",
  que: "Arrancar los ajos cuando la mitad de las hojas estén secas.",
  pasos: ["Dejar de regar 2 semanas antes.", "Arrancar, dejarlos secar a la sombra unos días y guardarlos en sitio seco."],
  porque: "Si se arrancan tarde, las cabezas se abren y se conservan peor.", sinoSe: "Ajos que se pudren o se abren."
},

/* ---------- PISCINA ---------- */
{ id: "p-revisar", area: "piscina", titulo: "Revisar piscina, depuradora y productos", prioridad: "urgente", fecha: "2026-10-10", duracion: "20 min",
  que: "Diagnóstico inicial para poder invernar bien.",
  pasos: [
    "Fotos del agua (aunque esté sucia), de la depuradora (bomba, filtro, válvula) y de los productos de piscina que haya.",
    "Medidas: largo, ancho, profundidad mínima y máxima (preguntar al dueño si no se pueden medir).",
    "Mirar si hay charcos o humedad junto a la depuradora (posible fuga).",
    "Mandarlo todo a Claude."
  ],
  porque: "Sin volumen ni productos no se puede calcular cuánto cloro ni invernador echar. A ojo se estropea el agua o el revestimiento.",
  sinoSe: "Invernaje mal hecho y primavera con agua verde."
},
{ id: "p-grieta", area: "piscina", titulo: "Revisar las grietas de la playa", prioridad: "importante", fecha: "2026-10-10", duracion: "10 min",
  que: "Ver si las fisuras del pavimento llegan al borde del vaso.",
  pasos: [
    "Pasar el dedo: si hay hueco o escalón, es grieta.",
    "Mirar si llega a la coronación (las piezas del borde de la piscina).",
    "Golpear con los nudillos a ambos lados: sonido hueco = pieza despegada.",
    "Foto de cerca con referencia (un pie, un mechero) y otra general. A Claude."
  ],
  porque: "Por una grieta junto al borde entra agua; al helar, se expande y la abre más.",
  sinoSe: "Reparación más cara en primavera."
},
{ id: "p-invernaje", area: "piscina", titulo: "Invernar la piscina", prioridad: "urgente", fecha: "2026-10-24", duracion: "1-2 h",
  que: "Dejar el agua protegida para todo el invierno. Cantidades pendientes de los datos de la piscina.",
  material: ["kit-agua", "productos-piscina"],
  pendiente: "Faltan volumen y fotos de productos. Claude completará cantidades.",
  pasos: [
    "Limpiar fondo, paredes y cestillos.",
    "Ajustar el pH (7,2-7,6).",
    "Choque de cloro.",
    "Al día siguiente, producto invernador.",
    "Si vivís allí: depuradora 2 horas al día, mejor de madrugada para que el agua en movimiento no hiele.",
    "Poner la lona bien tensa."
  ],
  porque: "Con el agua por debajo de 15 °C las algas casi no crecen. Bien invernada, en primavera basta con limpiar y ajustar.",
  sinoSe: "Agua verde en primavera: semanas de trabajo y mucho producto."
},
{ id: "p-primavera", area: "piscina", titulo: "Puesta a punto de primavera", prioridad: "importante", fecha: "2027-04-10", duracion: "Medio día",
  que: "Quitar la lona y dejar la piscina lista para la temporada.",
  material: ["manguera", "placa-skimmer"],
  pasos: [
    "Limpiar y secar la lona antes de guardarla.",
    "Limpiar fondo con el limpiafondos (manguera llena de agua antes de conectarla).",
    "Lavar el filtro, revisar bomba y prefiltro.",
    "Ajustar pH y cloro: Claude dará cantidades con el volumen.",
    "Limpiar la playa (los hongos negros del suelo)."
  ],
  porque: "Una puesta a punto ordenada evita arrancar con averías o agua turbia en junio.",
  sinoSe: "Agua turbia y semanas perdidas de baño."
},

/* ---------- RIEGO ---------- */
{ id: "r-reducir", area: "riego", titulo: "Reducir el riego de otoño", prioridad: "importante", fecha: "2026-10-10", duracion: "15 min",
  que: "Pasar el programador al ritmo de otoño.",
  pasos: [
    "Césped 2 días por semana (las calvas sembradas, a diario y poco). Árboles y goteos 1 vez por semana.",
    "Riego temprano por la mañana.",
    "Foto del programador y de qué riega cada sector. A Claude."
  ],
  porque: "Con menos calor el suelo apenas pierde agua. Regar como en verano encharca, da hongos y deja la raíz perezosa en superficie.",
  sinoSe: "Hongos en el césped y gasto de agua."
},
{ id: "r-apagar", area: "riego", titulo: "Apagar el riego para el invierno", prioridad: "urgente", fecha: "2026-11-07", duracion: "20 min",
  que: "Poner el programador en reposo y proteger lo que pueda helar.",
  pasos: [
    "Programador en OFF (o modo \"lluvia\"). No quitar la pila: no pierde la programación.",
    "Buscar tramos de tubería, llaves o válvulas al aire.",
    "Si los hay: cerrar la llave general del riego y vaciarlos abriendo el punto más bajo.",
    "Lo enterrado no necesita nada.",
    "Desde ahora: un riego solo si pasan 3 semanas sin llover."
  ],
  porque: "El agua que se queda en tramos al aire se congela, se expande y revienta tubos y válvulas.",
  sinoSe: "Riego innecesario en invierno y averías en marzo."
},
{ id: "r-encender", area: "riego", titulo: "Encender y revisar el riego", prioridad: "importante", fecha: "2027-03-27", duracion: "45 min",
  que: "Volver a ponerlo en marcha comprobando que todo funciona.",
  pasos: [
    "Abrir la llave general y poner el programador en automático.",
    "Lanzar cada sector a mano y mirar: aspersores que no giran o no suben, goteros atascados, fugas o charcos.",
    "Programa de primavera: césped 2-3 días por semana. Claude lo ajusta con los sectores."
  ],
  porque: "Las averías del invierno se descubren mejor ahora que en julio, con el césped ya sufriendo.",
  sinoSe: "Zonas secas en verano por un aspersor roto."
},
{ id: "r-verano", area: "riego", titulo: "Programa de verano", prioridad: "importante", fecha: "2027-06-01", duracion: "15 min",
  que: "Ajustar el riego al calor.",
  pasos: ["Riego de madrugada (antes de las 8).", "Mejor riegos más largos y menos frecuentes que cortos a diario.", "Claude ajusta tiempos por sector."],
  porque: "Regar profundo y espaciado hace que la raíz baje y aguante mejor el calor. De madrugada se evapora menos.",
  sinoSe: "Césped quemado o gasto de agua disparado."
},

/* ---------- EXTERIOR / MÁQUINAS ---------- */
{ id: "g-cortacesped", area: "cesped", titulo: "Vaciar y guardar el cortacésped", prioridad: "mantenimiento", fecha: "2026-12-05", duracion: "20 min",
  que: "Prepararlo para el invierno.",
  material: ["gasolina"],
  pasos: [
    "Dejar el motor en marcha hasta que se pare solo: depósito y carburador vacíos.",
    "Desconectar la bujía y limpiar la hierba de debajo de la carcasa.",
    "La gasolina del bidón dura 2-3 meses: si sobra, al coche o al punto limpio.",
    "Guardarlo en sitio seco."
  ],
  porque: "La gasolina vieja se degrada y atasca el carburador: es la avería típica de primavera.",
  sinoSe: "El cortacésped no arranca en marzo."
},
{ id: "g-cortacesped-prim", area: "cesped", titulo: "Revisar el cortacésped", prioridad: "mantenimiento", fecha: "2027-03-06", duracion: "30 min",
  que: "Dejarlo listo para la primera siega.",
  material: ["gasolina-nueva"],
  pasos: ["Gasolina nueva.", "Revisar el nivel de aceite del motor.", "Afilar la cuchilla (o llevarla a afilar)."],
  porque: "Una cuchilla roma desgarra la hierba y deja las puntas amarillas.",
  sinoSe: "Siegas que estropean el césped."
}
],

/* Compras y material. tenerAntes = fecha para tenerlo; aviso = cuándo salta el aviso de compra. */
material: [
  /* ---- Ya en el garaje ---- */
  { id: "semillas", nombre: "Semillas de césped (Ray Grass Inglés y Geolia Deporte y Juegos)", garaje: true,
    queEs: "Semilla para resembrar calvas. Cada caja de 1 kg da para unos 35 m².", uso: "Octubre y marzo-abril.",
    nota: "Mirar la fecha de la caja: si son de hace años, germinan peor." },
  { id: "pack-sipcam", nombre: "Pack Tratamiento Invierno (Sipcam, caja morada)", garaje: true,
    queEs: "Fungicida, aceite e insecticida para frutales en reposo.", uso: "21 nov y 13 feb." },
  { id: "pack-masso", nombre: "Pack Tratamiento de Invierno (Massó, caja naranja)", garaje: true,
    queEs: "Lo mismo que el de Sipcam. Reserva.", uso: "Febrero, si se acaba el de Sipcam." },
  { id: "duaxo", nombre: "Duaxo, fungicida polivalente (Compo)", garaje: true,
    queEs: "Fungicida para oídio, roya y moteado.", uso: "Primavera, a la caída de la flor." },
  { id: "azufre", nombre: "Azufre 80% (Sipcam)", garaje: true,
    queEs: "Fungicida y acaricida para oídio y araña roja.", uso: "Primavera-verano, solo si aparece.",
    nota: "Nunca con más de 30 °C ni cerca de los tratamientos con aceite." },
  { id: "insecticida-orugas", nombre: "Insecticida orugas (Flower)", garaje: true,
    queEs: "Insecticida de contacto para orugas.", uso: "Solo si aparecen orugas. Nunca en floración." },
  { id: "corrector-calcio", nombre: "Corrector de carencias de calcio (Massó)", garaje: true,
    queEs: "Evita la podredumbre del culo del tomate y el pimiento.", uso: "Huerto de verano." },
  { id: "gasolina", nombre: "Gasolina (bidón de 5 L)", garaje: true,
    queEs: "Para el cortacésped.", uso: "Hasta diciembre. En marzo, gasolina nueva." },
  { id: "limpiafondos", nombre: "Limpiafondos manual y cepillo de paredes", garaje: true,
    queEs: "El de ruedas aspira el fondo conectado a la depuradora con una manguera; el curvo frota paredes.", uso: "Primavera y verano." },

  /* ---- No usar ---- */
  { id: "kestrel", nombre: "Kestrel (insecticida)", noUsar: true,
    queEs: "Uso reservado a profesionales con carné de aplicador y muy tóxico para las abejas.", uso: "No usar. Punto limpio." },
  { id: "botellas", nombre: "Botellas sin etiqueta \"CHAMPÚ\" y \"HORMIGAS\"", noUsar: true,
    queEs: "Productos trasvasados sin saber qué son.", uso: "Preguntar al dueño; si no lo sabe, punto limpio. Mientras, en una balda alta lejos de los perros." },

  /* ---- Por comprar ---- */
  { id: "abono-otono", nombre: "Abono de césped de otoño", aviso: "2026-10-09", tenerAntes: "2026-10-10",
    queEs: "Abono granulado para césped con poco nitrógeno (N) y más potasio (K). En la etiqueta aparecen tres números N-P-K: busca que el último (K) sea igual o mayor que el primero (N). Sirven los que digan \"otoño\" o \"otoño-invierno\".",
    cantidad: "2-3 kg por cada 100 m² de césped. Un saco de 5 kg.",
    precio: "12-20 €",
    links: [ { t: "Ver abonos de otoño en Leroy Merlin", u: "https://www.leroymerlin.es/search?q=abono%20cesped%20oto%C3%B1o" } ],
    nota: "Si no encuentras uno de otoño, uno de césped de liberación lenta vale. Evita los que llevan herbicida." },
  { id: "mantillo", nombre: "Mantillo", aviso: "2026-10-09", tenerAntes: "2026-10-10",
    queEs: "Materia orgánica fina y oscura. Se echa una capa muy fina encima de la semilla para protegerla del sol y los pájaros y mantener la humedad.",
    cantidad: "1 saco de 50 L.", precio: "6-8 €",
    links: [ { t: "Ejemplo: Mantillo Geolia 50 L (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/mantillo-geolia-50-l-86487846.html" } ] },
  { id: "rastrillo", nombre: "Rastrillo de púas de acero", aviso: "2026-10-09", tenerAntes: "2026-10-10",
    queEs: "Rastrillo rígido de dientes cortos para soltar la tierra de las calvas. No es lo mismo que la escoba de hojas.",
    cantidad: "1 (solo si no hay en el garaje).", precio: "10-15 €",
    links: [ { t: "Ejemplo: Rastrillo 14 púas Jardinor (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/rastrillo-con-mango-14-puas-de-acero-34-cm-jardinor-12110966.html" } ] },
  { id: "escoba-hojas", nombre: "Escoba de jardín para hojas", aviso: "2026-10-12", tenerAntes: "2026-10-17",
    queEs: "Rastrillo en abanico de púas flexibles para recoger hojas del césped sin dañarlo.",
    cantidad: "1 (solo si no hay en el garaje).", precio: "8-18 €",
    links: [ { t: "Ejemplo: Escoba para hojas Geolia de acero (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/escoba-con-mango-para-recoger-hojas-geolia-de-acero-de-44-5-cm-14052752.html" } ] },
  { id: "ajo", nombre: "Ajo de siembra", aviso: "2026-10-12", tenerAntes: "2026-10-17",
    queEs: "Cabezas de ajo para plantar. El del supermercado suele estar tratado para no brotar.",
    cantidad: "0,5 kg (unos 40-50 dientes).", precio: "3-5 €",
    links: [], nota: "Mejor en vivero o cooperativa de la zona: Castilla-La Mancha es tierra de ajo morado." },
  { id: "habas", nombre: "Semilla de habas", aviso: "2026-10-12", tenerAntes: "2026-10-17",
    queEs: "Semillas para sembrar. La variedad más común es Aguadulce.",
    cantidad: "1 sobre de unos 250 g.", precio: "2-4 €",
    links: [ { t: "Ver semillas de habas en Leroy Merlin", u: "https://www.leroymerlin.es/search?q=semillas%20habas" } ] },
  { id: "estiercol", nombre: "Estiércol o compost en saco", aviso: "2026-10-12", tenerAntes: "2026-10-17",
    queEs: "Abono orgánico de acción lenta. Para el huerto ahora y para los frutales en diciembre.",
    cantidad: "6-8 sacos de 50 L en total: 1-2 para el huerto ahora y 4-6 para los frutales en diciembre. Aguanta meses en el saco cerrado.", precio: "5-8 €/saco",
    links: [ { t: "Ejemplo: Estiércol de caballo 50 L (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/estiercol-de-caballo-hnos-aguado-50l-14662550.html" } ] },
  { id: "manta", nombre: "Manta térmica antiheladas (velo de hibernación)", aviso: "2026-10-12", tenerAntes: "2026-11-30",
    queEs: "Tela blanca muy ligera que deja pasar luz y aire pero guarda el calor. Se pone sobre la planta las noches de helada.",
    cantidad: "Un rollo de 2 x 10 m sobra para el limonero. Pinzas o cuerda para sujetarla.", precio: "10-15 €",
    links: [ { t: "Ejemplo: Velo de hibernación Geolia 2 x 10 m (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/velo-de-hibernacion-de-polipropileno-2x10-m-82280829.html" } ] },
  { id: "pulverizador", nombre: "Pulverizador de presión de 5-8 L", aviso: "2026-10-12", tenerAntes: "2026-11-21",
    queEs: "Depósito que se bombea a mano y lanza el producto pulverizado con una lanza. Para los tratamientos de los frutales.",
    cantidad: "1 (mirar antes si hay uno en el garaje).", precio: "20-35 €",
    links: [ { t: "Ficha de ejemplo: Matabi Polita 7 (5 L útiles)", u: "https://www.nexmart.com/media/catalog/matabi/82842_flyer_matabi_es.pdf" },
             { t: "Ver pulverizadores en Leroy Merlin", u: "https://www.leroymerlin.es/search?q=pulverizador%20presion%20previa" } ],
    nota: "Uno de 5 L con lanza larga basta para tus árboles. Las mochilas de 12-16 L son para fincas." },
  { id: "epi", nombre: "Guantes de nitrilo, gafas y mascarilla FFP2", aviso: "2026-10-12", tenerAntes: "2026-11-21",
    queEs: "Protección para los tratamientos.", cantidad: "1 juego.", precio: "10 €",
    links: [], nota: "Cualquier ferretería o farmacia." },
  { id: "abono-primavera", nombre: "Abono de césped de primavera (liberación lenta)", uso: "Se usa en marzo y mayo; guardado seco aguanta sin problema.", aviso: "2026-10-12", tenerAntes: "2027-03-20",
    queEs: "Abono granulado de césped rico en nitrógeno que se libera poco a poco durante 2-3 meses.",
    cantidad: "Lo calcula Claude con los m² medidos.", precio: "12-20 €",
    links: [ { t: "Ver abonos de césped en Leroy Merlin", u: "https://www.leroymerlin.es/search?q=abono%20cesped%20liberacion%20lenta" } ] },
  { id: "abono-citricos", nombre: "Abono para cítricos", uso: "Para el limonero en marzo y junio.", aviso: "2026-10-12", tenerAntes: "2027-03-27",
    queEs: "Abono específico para limoneros y naranjos, con hierro y microelementos.",
    cantidad: "Un envase pequeño (1-2 kg) da para la temporada.", precio: "6-10 €",
    links: [ { t: "Ejemplo: Abono cítricos Geolia 1,15 kg (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/abono-citricos-geolia-1-15-kg-91987662.html" } ] },
  { id: "manguera", nombre: "Manguera flotante de piscina de 38 mm", uso: "Para limpiar el fondo en primavera.", aviso: "2026-10-12", tenerAntes: "2027-04-10",
    queEs: "Manguera gruesa y con anillos que flota. Conecta el limpiafondos con el skimmer para que la depuradora aspire el fondo. Una manguera de jardín no sirve.",
    cantidad: "El largo de la piscina más 2-3 m.", precio: "25-45 €",
    links: [ { t: "Ejemplo: manguera autoflotante 38 mm (ManoMano, elige el largo)", u: "https://www.manomano.es/p/manguera-autoflotante-eva-38mm-rollo-30m-con-terminales-corrugada-flexible-de-alta-resistencia-filtro-piscina-215776699" } ],
    nota: "Mide la boquilla del limpiafondos para confirmar los 38 mm." },
  { id: "placa-skimmer", nombre: "Placa de aspiración para skimmer", uso: "Con la manguera, en primavera.", aviso: "2026-10-12", tenerAntes: "2027-04-10",
    queEs: "Plato redondo con un tubo que se pone sobre el cestillo del skimmer para enchufar la manguera. Solo hace falta si la piscina no tiene toma de limpiafondos en la pared.",
    cantidad: "1.", precio: "8-17 €",
    links: [ { t: "Ejemplo: placa de aspiración 15 cm para manguera de 38 mm (ManoMano)", u: "https://www.manomano.es/p/placa-de-aspiracion-para-piscina-de-15-cm-con-racor-acodado-de-90-para-manguera-de-aspiracion-de-38-cm-compatible-con-skimmers-estandar-213117290" } ],
    nota: "Antes, mirar el diámetro del skimmer: hay placas de distintos tamaños." },
  { id: "tijeras", nombre: "Tijeras de podar de una mano (tipo bypass)", aviso: "2026-10-12", tenerAntes: "2026-12-15",
    queEs: "Tijera de dos hojas que cortan como unas tijeras normales (bypass). Para ramas finas, aromáticas, fruta y limpiar el limonero. Las de tipo \"yunque\" aplastan la rama: mejor bypass.",
    uso: "Todo el año.", cantidad: "1.", precio: "15-30 €",
    links: [ { t: "Ejemplo: Tijera de poda bypass Altuna (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/tijera-de-poda-a-una-mano-altuna-bypass-82063623.html" } ],
    nota: "Aunque contrates podador, la vas a usar mucho. Mira antes si hay en el garaje." },
  { id: "guantes", nombre: "Guantes de jardinería", aviso: "2026-10-12", tenerAntes: "2026-10-17",
    queEs: "Guantes resistentes para rastrillar, plantar, manejar estiércol y ramas.", uso: "Todo el año.",
    cantidad: "2 pares (uno para cada uno).", precio: "5-10 € el par",
    links: [ { t: "Ejemplo: Guantes de piel de vacuno Juba (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/guantes-juba-flor-vacuno-hps1lt-t10-85788757.html" } ] },
  { id: "bolsas", nombre: "Bolsas grandes de jardín", aviso: "2026-10-12", tenerAntes: "2026-10-17",
    queEs: "Sacos de 250 L para hojas, hierba cortada y restos de poda.", uso: "Otoño (hojas) e invierno (poda).",
    cantidad: "1-2 (son reutilizables).", precio: "5-10 €",
    links: [ { t: "Ejemplo: Bolsa de jardín 250 L (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/bolsa-de-basura-de-jardin-de-70x60-cm-para-250l-81908399.html" } ] },
  { id: "kit-agua", nombre: "Kit para medir el agua de la piscina (pH y cloro)", aviso: "2026-10-12", tenerAntes: "2026-10-24",
    queEs: "Reactivos para saber el pH y el cloro del agua. Imprescindible para echar productos con cabeza en vez de a ojo.",
    uso: "Invernaje y toda la temporada de baño.", cantidad: "1 kit.", precio: "8-15 €",
    links: [ { t: "Ejemplo: Kit de análisis líquido para piscina Axton (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/kit-de-analisis-liquido-para-piscina-axton-18666914.html" },
             { t: "Alternativa: tiras 6 en 1 que miden también dureza y alcalinidad (ManoMano)", u: "https://www.manomano.es/p/analisis-de-agua-para-piscinas-paquete-de-2-tiras-reactivas-6-en-1-para-piscinas-y-spas-tiras-reactivas-para-cloro-cloro-libre-ph-alcalinidad-acido-cianurico-dureza-del-agua-100-unidades-228215084" } ],
    nota: "Con el agua tan dura de Novés, merece la pena medir también la dureza y la alcalinidad: las tiras 6 en 1 lo hacen." },
  { id: "abono-frutales", nombre: "Abono granulado para frutales", aviso: "2026-10-12", tenerAntes: "2027-03-06", uso: "Al hinchar las yemas (marzo) y a la caída de la flor (abril).",
    queEs: "Abono para echar al suelo alrededor de los frutales cuando arrancan en primavera.",
    cantidad: "1-2 kg para todos los árboles.", precio: "6-10 €",
    links: [ { t: "Ejemplo: Abono granulado Compo para huerta y frutales 1 kg (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/abono-granulado-compo-para-huerta-y-frutales-1kg-para-uso-ecologico-16331483.html" } ] },
  { id: "productos-piscina", nombre: "Productos de invernaje de la piscina", grupo: "despues", aviso: "2026-10-12", tenerAntes: "2026-10-24",
    queEs: "Corrector de pH, cloro de choque e invernador.", uso: "Pendiente: primero hay que ver qué dejó el dueño y saber el volumen.",
    cantidad: "La calcula Claude con el volumen.", precio: "-", links: [],
    nota: "No comprar todavía: puede que ya tengas parte en el cuarto de la depuradora." },
  { id: "gasolina-nueva", nombre: "Gasolina nueva para el cortacésped", grupo: "despues", aviso: "2027-02-24", tenerAntes: "2027-03-06",
    queEs: "Gasolina sin plomo normal. Se compra justo antes porque se degrada en 2-3 meses.", uso: "Primera siega de marzo.",
    cantidad: "5 L.", precio: "8-10 €", links: [] }
]
};
