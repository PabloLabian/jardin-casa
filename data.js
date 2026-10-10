/* Contenido del jardín de Novés.
   Para cambiar o añadir tareas, solo hay que tocar este archivo.
   Fechas en formato AAAA-MM-DD. Prioridad: urgente, importante, mantenimiento, opcional. */

window.JARDIN = {

areas: [
  { id: "semana",   nombre: "Esta semana" },
  { id: "plano",    nombre: "Plano" },
  { id: "cesped",   nombre: "Césped",
    intro: "Unos 132 m² en cuatro zonas (plano en el proyecto \"Casa\"). Mezcla de ray grass y festuca: hierba de clima frío que crece mucho en primavera y otoño, sufre con el calor de julio y en invierno se queda verde pero parada. Por eso sus dos estaciones importantes son el otoño y la primavera. Cuatro tareas la mantienen: segar, regar, abonar y rellenar calvas.",
    ficha: [
      ["Superficie", "L trasera ≈ 68 m² · franja lateral ≈ 42 m² (28 del tramo estrecho y 14 del ancho) · entrada ≈ 22 m². Total ≈ 132 m². Para comprar material, calcular sobre 145 m²."],
      ["Siega", "Mar-may: cada semana a 4-5 cm. Jun-sep: cada 7-10 días a 5-6 cm. Oct-nov: cada 10-15 días a 5 cm. Dic-feb: solo si pasa de 7-8 cm."],
      ["Regla de oro", "No cortar nunca más de un tercio de la altura de una vez."],
      ["Abono", "Tres veces al año: marzo-abril, finales de mayo y octubre. Nunca en verano ni en invierno. Para tu césped, unos 4 kg por pasada (a 30 g/m²; manda la etiqueta)."],
      ["Calvas", "Se resiembran en octubre o en marzo-abril. En noviembre ya no: la tierra está fría y la semilla no nace."],
      ["Escarificado", "Una vez al año, en marzo-abril, justo antes de resembrar y abonar."]
    ]},
  { id: "frutales", nombre: "Frutales",
    intro: "Higuera, peral, manzano, ciruelo, dos albaricoqueros y un melocotonero. En invierno pierden la hoja y se duermen hasta febrero: es normal y es justo el momento de tratarlos y podarlos. El melocotonero es el que más cuidado pide, por la lepra (hojas rizadas y rojizas en primavera).",
    ficha: [
      ["Lo imprescindible", "Dos tratamientos de invierno: al caer la hoja (noviembre) y al hinchar las yemas (febrero)."],
      ["Poda", "Con el árbol dormido, de mediados de diciembre a febrero. El albaricoquero, mejor tras la cosecha (verano)."],
      ["En floración", "Nunca insecticidas: matan las abejas y sin abejas no hay fruta."],
      ["En verano", "Se trata solo si aparece un problema. Foto a Claude y se decide."],
      ["Perros", "Recoger la fruta caída: fermenta, atrae avispas y los huesos son peligrosos."]
    ]},
  { id: "limonero", nombre: "Limonero y plantas",
    intro: "El limonero está en el parterre del muro verde del fondo, entre la higuera y el manzano, con lantanas, tagetes, cosmos y margaritas africanas. El muro le da calor y le protege, pero es el único árbol de la casa que sufre con el frío de Novés: por debajo de -2 °C se queman hojas y ramas jóvenes.",
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
    intro: "Piscina de obra de 6,5 × 3,5 m, de 1 a 1,5 m de profundidad: unos 28 m³ de agua. Cloro, filtro de arena y lona de invierno con rejilla. El agua de Novés es muy dura: tendencia a cal, agua turbia y pH alto. Todas las dosis de esta sección están calculadas para esos 28 m³.",
    ficha: [
      ["Volumen", "≈ 28 m³ (6,5 × 3,5 × 1,25 m de media, al nivel actual del agua)."],
      ["Presión del filtro", "Limpio marca unos 0,55 bar (la aguja baila entre 0,5 y 0,6). Contralavado cuando llegue a 0,9-1,0."],
      ["Tu equipo", "Filtro de arena AstralPool con manómetro y válvula selectora de 6 posiciones (manda la punta corta de la maneta), bomba Sena con prefiltro transparente, cuadro naranja (MANUAL / AUTO / PARO) y 3 llaves rojas: skimmers, fondo y limpiafondos (maneta en línea con el tubo = abierta)."],
      ["Regla de oro", "Nunca mover la válvula selectora con la bomba en marcha. Siempre: bomba OFF, mover, bomba ON. La rueda de la derecha de la tapa del filtro es el cierre: no tocarla nunca."],
      ["Química", "pH y cloro nunca a la vez: 4-6 h entre uno y otro, cubos distintos y siempre el producto sobre el agua. Guantes y gafas."],
      ["Dosis tuyas", "Reductor de pH líquido: unos 0,5 L baja 0,2 puntos (máximo 1,5 L por tanda). Cloro de choque: 550 g para recuperar agua verde; 300 g de mantenimiento o al invernar."],
      ["Limpiafondos", "Lo tienes. Falta la manguera flotante de 38 mm (sin placa de skimmer: va a la toma de la pared)."],
      ["Perros", "Fuera del agua desde que se echa producto hasta que el cloro vuelve a 1-3. Hasta ver en la etiqueta de la lona que aguanta peso, que no se suba."]
    ]},
  { id: "riego",    nombre: "Riego",
    intro: "Riego automático con un solo programa: todo se riega a la vez y con la misma frecuencia (césped, árboles y huerto). Por eso lo que necesita más agua de forma puntual (calvas recién sembradas, plantones nuevos) se riega a mano. En invierno se apaga, pero \"no se riega\" significa \"no se riega si llueve\".",
    ficha: [
      ["Otoño", "Césped 2 días por semana; árboles y goteos 1 vez. Temprano por la mañana."],
      ["Invierno", "Apagado. Un riego profundo si pasan 3 semanas sin llover."],
      ["Heladas", "Los tramos de tubería o válvulas al aire se vacían antes del frío."]
    ]},
  { id: "material", nombre: "Material" },
  { id: "anio",     nombre: "El año" }
],

/* Plano interactivo: cada elemento se abre al tocarlo en el plano.
   tipo: zona, arbol o planta. tareas: ids de tareas relacionadas (se muestran las pendientes). */
plano: [
  /* ---- Zonas ---- */
  { id: "cesped-l", tipo: "zona", area: "cesped", nombre: "Césped de la L trasera", donde: "Detrás de la casa, de la barbacoa a la piscina",
    datos: [["Superficie", "≈ 68 m²"], ["Medidas", "Banda del fondo 9,43 × 5,32 y brazo junto a la piscina 4,06 × 4,66"], ["Árboles", "Higuera (1), manzano (2), limonero (3) y albaricoquero (4)"], ["Abono", "≈ 2 kg por pasada"]],
    cuidados: ["Es la zona con más hojas: la higuera suelta hojas grandes que hay que retirar cada semana en otoño.", "Los alcorques de los árboles no se abonan con el abono de césped."],
    ojo: "Junto a la piscina, no echar abono ni semilla en la playa: mancha la piedra y acaba en el agua.",
    tareas: ["c-resiembra", "c-abono-otono", "ronda-invierno", "c-ultima-siega", "c-escarificar"] },
  { id: "cesped-lateral", tipo: "zona", area: "cesped", nombre: "Franja lateral de césped", donde: "Entre el pasillo de baldosa y el muro lateral",
    datos: [["Superficie", "≈ 42 m² (28 del tramo estrecho y 14 del ancho)"], ["Medidas", "2,89 × 9,72 y luego 4,01 × 3,52"], ["Largo total", "13,24 m"], ["Árboles", "Ciruelo (5) y melocotonero (6)"], ["Abono", "≈ 1,3 kg por pasada"]],
    cuidados: ["Al ser estrecha y pegada al muro, tiene horas de sombra: si salen calvas, es donde más tarda en cerrarse.", "El arbusto pequeño del principio de la franja: rodearlo al segar."],
    tareas: ["c-resiembra", "c-abono-otono", "ronda-invierno"] },
  { id: "cesped-entrada", tipo: "zona", area: "cesped", nombre: "Césped de la entrada", donde: "Delante de la casa, junto a la zona del coche",
    datos: [["Superficie", "≈ 22 m²"], ["Medidas", "5,34 × 4,05"], ["Árboles", "Albaricoquero (7) y peral (8, con tutor)"], ["Abono", "≈ 0,7 kg por pasada"]],
    cuidados: ["El peral tiene tutor: revisar que la atadura no estrangule el tronco (holgura de un dedo).", "Las rosas y tagetes de la valla están en el parterre, no en el césped."],
    tareas: ["c-resiembra", "c-abono-otono", "ronda-invierno"] },
  { id: "piscina", tipo: "zona", area: "piscina", nombre: "Piscina", donde: "Esquina trasera derecha, con la ducha junto al muro",
    datos: [["Vaso", "6,5 × 3,5 m (≈ 23 m² de agua)"], ["Profundidad", "1 m la parte baja y 1,5 m la alta (al nivel actual)"], ["Volumen", "≈ 28 m³"], ["Filtro", "Arena. Limpio: 0,55 bar. Contralavado a 0,9-1,0"], ["Reductor de pH", "0,5 L baja 0,2 puntos (máx. 1,5 L por tanda)"], ["Cloro de choque", "550 g agua verde · 300 g invernaje"]],
    cuidados: ["Escalera romana en el lado de la casa.", "Valores buenos: pH 7,2-7,6 y cloro libre 1-3.", "pH y cloro nunca a la vez: 4-6 h entre uno y otro."],
    ojo: "Perros fuera del agua desde que se echa producto hasta que el cloro vuelve a 1-3.",
    tareas: ["p-choque", "p-lona", "p-aclarar", "p-grieta", "p-invernaje", "p-purga", "p-primavera"] },
  { id: "huerto", tipo: "zona", area: "huerto", nombre: "Huerto", donde: "Esquina delantera, junto a la entrada",
    datos: [["Superficie", "≈ 24 m² (5,45 × 4,46)"], ["Ahora", "Acelgas y restos de tomates y pimientos"], ["Plantas", "Solano azul (J) en la esquina y acelgas (M)"]],
    cuidados: ["Este invierno: ajos y habas, que aguantan las heladas y casi no piden nada.", "Las acelgas aguantan el invierno: se cortan las hojas de fuera y siguen saliendo."],
    tareas: ["h-limpiar", "h-ajos-habas", "h-escardar", "h-cosecha-habas", "h-cosecha-ajos", "h-verano"] },

  /* ---- Árboles ---- */
  { id: "a1", num: 1, tipo: "arbol", area: "frutales", nombre: "Higuera", donde: "L trasera, lado de la barbacoa",
    datos: [["Cosecha", "Agosto y septiembre (a veces una primera en junio)"], ["Poda", "Ligera, en invierno: quitar ramas secas y cruzadas"]],
    cuidados: ["Es el árbol más resistente de la casa: casi no enferma y aguanta la sequía.", "Sus hojas grandes caen en noviembre: retirarlas del césped cada semana."],
    ojo: "El látex blanco de hojas y ramas irrita la piel: guantes al podar. Los higos caídos fermentan y atraen avispas.",
    tareas: ["ronda-invierno", "f-trat1", "f-poda", "f-cosecha-higos"] },
  { id: "a2", num: 2, tipo: "arbol", area: "frutales", nombre: "Manzano", donde: "L trasera, junto a la piscina",
    datos: [["Cosecha", "Finales de agosto a septiembre"], ["Poda", "Invierno, con el árbol dormido"]],
    cuidados: ["Tratamientos de invierno y fungicida a la caída de la flor: el moteado (manchas en hojas y fruta) es su problema típico.", "Recoger las manzanas caídas: cerca de la piscina acaban en el agua."],
    tareas: ["f-trat1", "f-poda", "f-trat2", "f-caida-flor", "f-cosecha-manzanas"] },
  { id: "a3", num: 3, tipo: "arbol", area: "limonero", nombre: "Limonero", donde: "Parterre del muro verde del fondo, entre la higuera y el manzano",
    datos: [["Hoja", "Perenne: no pierde la hoja en invierno"], ["Cosecha", "Desde noviembre, escalonada"], ["Peligro", "Heladas por debajo de -2 °C"]],
    cuidados: ["Las noches de helada fuerte, manta térmica por encima; quitarla por la mañana.", "En invierno, muy poco riego y nunca los días de helada.", "Abono para cítricos en marzo y junio."],
    ojo: "Es el único árbol de la casa que sufre con el frío de Novés.",
    tareas: ["l-heladas", "l-cosecha", "l-abono", "l-poda"] },
  { id: "a4", num: 4, tipo: "arbol", area: "frutales", nombre: "Albaricoquero", donde: "L trasera, junto a la esquina del patio",
    datos: [["Cosecha", "Junio"], ["Poda", "Mejor en verano, tras la cosecha (en invierno sangra goma)"]],
    cuidados: ["Florece muy pronto (febrero-marzo): una helada tardía puede llevarse la cosecha y no se puede hacer mucho.", "Tratamientos de invierno como el resto."],
    tareas: ["f-trat1", "f-trat2", "f-cosecha-albaricoque", "f-poda-albaricoque"] },
  { id: "a5", num: 5, tipo: "arbol", area: "frutales", nombre: "Ciruelo (por confirmar)", donde: "Franja lateral, donde empieza el tramo ancho",
    datos: [["Cosecha", "Julio"], ["Poda", "Invierno"]],
    cuidados: ["Está por confirmar que sea un ciruelo: en primavera, con flor u hoja, foto al buzón.", "Vigilar pulgón en las puntas de las ramas en primavera."],
    tareas: ["f-trat1", "f-poda", "f-trat2", "f-cosecha-ciruela"] },
  { id: "a6", num: 6, tipo: "arbol", area: "frutales", nombre: "Melocotonero", donde: "Final de la franja lateral, junto al huerto",
    datos: [["Cosecha", "Julio"], ["Poda", "Invierno; es el que más poda necesita"]],
    cuidados: ["Es el que más cuidado pide: la lepra (hojas rizadas y rojizas en primavera) se evita con los dos tratamientos de invierno.", "Si carga mucho, aclarar frutos en mayo: fruta más grande y ramas que no se rompen."],
    ojo: "El tratamiento de febrero, antes de que se abran las yemas, es el que de verdad evita la lepra. Si se pasa, ya no sirve.",
    tareas: ["f-trat1", "f-poda", "f-trat2", "f-aclareo", "f-cosecha-melocoton"] },
  { id: "a7", num: 7, tipo: "arbol", area: "frutales", nombre: "Albaricoquero de la entrada", donde: "Césped de la entrada, junto al coche",
    datos: [["Cosecha", "Junio"], ["Poda", "En verano, tras la cosecha"]],
    cuidados: ["Igual que el otro albaricoquero.", "Junto al coche: recoger la fruta caída, mancha la carrocería y el suelo."],
    tareas: ["f-trat1", "f-trat2", "f-cosecha-albaricoque", "f-poda-albaricoque"] },
  { id: "a8", num: 8, tipo: "arbol", area: "frutales", nombre: "Peral", donde: "Centro del césped de la entrada, con tutor",
    datos: [["Cosecha", "Agosto"], ["Tutor", "Revisar la atadura: holgura de un dedo"]],
    cuidados: ["Las peras se cogen aún duras y maduran en casa unos días.", "Si el tronco ya está firme, el tutor se puede quitar en un par de años."],
    tareas: ["f-trat1", "f-poda", "f-trat2", "f-cosecha-peras"] },

  /* ---- Plantas de los parterres ---- */
  { id: "pA", letra: "A", tipo: "planta", area: "limonero", nombre: "Lantanas", donde: "Muro izquierdo y muro verde del fondo",
    datos: [["Flor", "De primavera a las primeras heladas"], ["Poda", "Fuerte en marzo, a un palmo del suelo"]],
    cuidados: ["Con las heladas se ponen feas y pueden perder la parte de arriba: no podar hasta marzo, esas ramas protegen la base.", "Muy poco riego en invierno."],
    ojo: "Sus bolitas verdes y negras son tóxicas para perros: si las mordisquea, retirarlas.",
    tareas: [] },
  { id: "pB", letra: "B", tipo: "planta", area: "limonero", nombre: "Margaritas africanas", donde: "Muro izquierdo y fondo, hacia la piscina",
    datos: [["Flor", "Primavera y otoño"], ["Poda", "Recorte suave tras cada floración"]],
    cuidados: ["Quitar flores secas para que sigan floreciendo.", "Aguantan heladas suaves; con fríos fuertes se resienten pero suelen rebrotar."],
    tareas: [] },
  { id: "pC", letra: "C", tipo: "planta", area: "limonero", nombre: "Tagetes", donde: "Muro verde del fondo y valla de la entrada",
    datos: [["Ciclo", "Anual: vive una temporada"], ["Final", "Mueren con las primeras heladas"]],
    cuidados: ["Disfrutarlos hasta que hiele y luego arrancarlos.", "Si quieres repetir, guarda semillas de las flores secas y siémbralas en abril."],
    tareas: [] },
  { id: "pD", letra: "D", tipo: "planta", area: "limonero", nombre: "Cosmos", donde: "Muro verde del fondo",
    datos: [["Ciclo", "Anual"], ["Final", "Mueren con las heladas"]],
    cuidados: ["Arrancar cuando se sequen. Suelen resembrarse solos: en primavera salen plantitas nuevas en el mismo sitio."],
    tareas: [] },
  { id: "pE", letra: "E", tipo: "planta", area: "limonero", nombre: "Dos arbolitos en bola (por identificar)", donde: "Borde entre la playa de la piscina y la franja lateral",
    datos: [["Estado", "Sin identificar"]],
    cuidados: ["Foto de cerca de una rama con hojas al buzón y te digo qué son y cómo se recortan."],
    tareas: [] },
  { id: "pF", letra: "F", tipo: "planta", area: "limonero", nombre: "Arbolito joven contra el muro (por identificar)", donde: "Muro lateral, al principio de la franja",
    datos: [["Estado", "Sin identificar"]],
    cuidados: ["Foto de la planta entera y de una hoja de cerca al buzón."],
    tareas: [] },
  { id: "pG", letra: "G", tipo: "planta", area: "limonero", nombre: "Romero", donde: "Muro lateral",
    datos: [["Riego", "Muy poco: odia el encharcamiento"], ["Poda", "Ligera tras la floración, nunca a madera vieja"]],
    cuidados: ["Se puede cortar para cocinar todo el año.", "Aguanta heladas y sequía sin problema."],
    tareas: ["l-aromaticas"] },
  { id: "pH", letra: "H", tipo: "planta", area: "limonero", nombre: "Calas", donde: "Muro lateral",
    datos: [["Flor", "Primavera"], ["Invierno", "Pueden perder hojas con las heladas y rebrotan"]],
    cuidados: ["Quitar hojas y flores secas.", "Les gusta la humedad en primavera; en invierno, poco riego."],
    ojo: "Toda la planta es tóxica si se muerde: que los perros no la masquen.",
    tareas: [] },
  { id: "pI", letra: "I", tipo: "planta", area: "limonero", nombre: "Agapantos", donde: "Muro lateral",
    datos: [["Flor", "Verano, varas de flor azul"], ["Poda", "Cortar las varas secas a ras"]],
    cuidados: ["Mantienen la hoja en invierno; con heladas fuertes alguna hoja se quema y se quita en primavera.", "Florecen mejor algo apretados: no hace falta dividirlos."],
    tareas: [] },
  { id: "pJ", letra: "J", tipo: "planta", area: "huerto", nombre: "Solano azul", donde: "Esquina del huerto",
    datos: [["Flor", "Morada, de primavera a otoño"], ["Poda", "Fuerte en marzo, cuando ya no hiela"]],
    cuidados: ["Las heladas queman las puntas: no podar hasta marzo, protegen el resto.", "Crece mucho: se puede recortar en verano si invade el huerto."],
    ojo: "Sus bayas son tóxicas: si las da, que los perros no las coman.",
    tareas: [] },
  { id: "pK", letra: "K", tipo: "planta", area: "limonero", nombre: "Rosales", donde: "Valla de la entrada",
    datos: [["Flor", "Primavera a otoño"], ["Poda", "Enero-febrero, a 3-5 yemas"]],
    cuidados: ["Quitar las flores secas hasta noviembre.", "Si las hojas salen con manchas negras o polvo blanco, foto al buzón."],
    tareas: [] },
  { id: "pL", letra: "L", tipo: "planta", area: "limonero", nombre: "Arbolito de hoja grande (por identificar)", donde: "Valla de la entrada",
    datos: [["Estado", "Sin identificar"]],
    cuidados: ["Foto de la planta entera y de una hoja de cerca al buzón."],
    tareas: [] },
  { id: "pM", letra: "M", tipo: "planta", area: "huerto", nombre: "Acelgas", donde: "Huerto",
    datos: [["Cosecha", "Todo el invierno"], ["Cómo", "Cortar las hojas de fuera y dejar el centro"]],
    cuidados: ["Aguantan las heladas de Novés. En primavera suben a flor: entonces se arrancan."],
    tareas: ["h-limpiar"] },
  { id: "arbusto", tipo: "planta", area: "limonero", nombre: "Arbusto pequeño", donde: "Césped, al principio de la franja lateral",
    datos: [["Estado", "Sin identificar"]],
    cuidados: ["Foto al buzón cuando puedas. Mientras, rodearlo al segar."],
    tareas: [] }
],

/* Tipos de repetición:
   fecha: "AAAA-MM-DD" para tareas de un día
   semanal: { desde, hasta } en el día de la semana de "desde" */
tareas: [

/* ---------- GENERAL ---------- */
{ id: "ronda-invierno", area: "cesped", tipo: "revisar", titulo: "Ronda semanal de jardín", prioridad: "mantenimiento",
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
{ id: "ronda-verano", area: "cesped", tipo: "revisar", titulo: "Ronda semanal de primavera y verano", prioridad: "mantenimiento",
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
{ id: "c-medir", area: "cesped", tipo: "revisar", titulo: "Medir los m² de césped", prioridad: "importante", fecha: "2026-10-10", duracion: "10 min",
  que: "Hecho: unos 132 m² de césped y 24 m² de huerto. Las medidas y el plano están en el proyecto \"Casa\".",
  pasos: [
    "L trasera (barbacoa, higuera, manzano, piscina): ≈ 68 m².",
    "Franja lateral entre el pasillo y el muro: ≈ 42 m².",
    "Césped de la entrada (peral y albaricoquero): ≈ 22 m².",
    "Para comprar semilla o abono, calcular sobre 145 m² (margen del 10 %)."
  ],
  porque: "La dosis de abono va por m². Sin ese dato se compra de más o de menos.",
  sinoSe: "Abonar a ojo: o se quema el césped o no hace nada."
},
{ id: "c-resiembra", area: "cesped", tipo: "hacer", titulo: "Resembrar las calvas", prioridad: "importante", fecha: "2026-10-10", duracion: "1-1,5 h",
  que: "Rellenar las zonas peladas aprovechando la última ventana templada del año. Se hace antes que el abono y el mismo día.",
  material: ["semillas", "mantillo", "rastrillo", "manguera-jardin", "guantes"],
  pasos: [
    "Si el césped pasa de 7-8 cm, segar antes a 5 cm, con la bolsa puesta (recoge también las hojas).",
    "Marcar las calvas: si cuesta verlas, regar 5 minutos antes y se distinguen mejor.",
    "Rastrillar fuerte cada calva con el rastrillo de púas: quitar hierba muerta y piedras y soltar 1-2 cm de tierra. Que quede como tierra de maceta, sin terrones.",
    "Semilla: unos 35 g/m², que es un puñado pequeño por cada calva del tamaño de una baldosa grande. Mejor dos pasadas cruzadas que una. Que la semilla se vea repartida, sin montones.",
    "Tapar con medio centímetro de mantillo: la semilla casi tiene que desaparecer, no enterrarse.",
    "Apretar con el dorso del rastrillo (o pisando con suavidad) para que la semilla toque la tierra.",
    "Regar las calvas a mano con la pistola en modo lluvia, hasta que el mantillo se vea oscuro, sin hacer charcos ni arrastrar semilla.",
    "Desde mañana: riego a mano de las calvas cada día (2 veces si hace sol y viento) durante 2-3 semanas. Si llueve, ese día no.",
    "Nace en 7-14 días. No pisar ni segar esas zonas hasta que la hierba mida unos 8 cm. Los perros, lejos de las calvas: con unas sillas o un palé basta."
  ],
  porque: "La semilla necesita la tierra por encima de unos 10 °C para germinar; en Novés eso dura hasta finales de octubre. Sembrada ahora, tiene todo el invierno y la primavera para enraizar antes del calor. El mantillo guarda la humedad y la esconde de los pájaros.",
  sinoSe: "Calvas todo el invierno, con hueco para malas hierbas. Habría que esperar a marzo.",
  importante: "Si no da tiempo antes del 25 de octubre, no sembrar en noviembre: se pasa a marzo-abril. No echar abono encima de la semilla recién sembrada. El riego automático no vale para esto: va todo junto y regar todo el jardín a diario encharcaría árboles y huerto. Mirar la fecha de las cajas de semilla: si tienen varios años, echar algo más (45 g/m²)."
},
{ id: "c-abono-otono", area: "cesped", tipo: "hacer", titulo: "Abono de otoño del césped", prioridad: "mantenimiento", fecha: "2026-10-10", duracion: "20 min",
  que: "Fortalecer la raíz y preparar el césped para el frío. Se puede hacer el mismo día que la resiembra, justo después y sin pasar por las calvas.",
  material: ["abono-otono"],
  pasos: [
    "Con el césped seco (si acabas de regar las calvas, no importa: solo el resto tiene que estar seco).",
    "Cantidad: la de la etiqueta; si pone 30 g/m², para tus 132 m² son unos 4 kg. Pésalo o mídelo con un vaso: un vaso de agua lleno de abono son unos 200 g.",
    "Repartirlo a voleo por zonas (L trasera ≈ 2 kg, franja lateral ≈ 1,3 kg, entrada ≈ 0,7 kg), en dos pasadas cruzadas con la mitad cada una.",
    "Rodear las calvas recién sembradas y los alcorques de los árboles.",
    "Regar justo después todo el césped (5-10 minutos con el automático, en manual, o con la manguera) para que el grano se deshaga y no se queme la hierba.",
    "Perros dentro hasta que esté regado y seco. Barrer los granos que caigan en la playa de la piscina o el patio: manchan la piedra."
  ],
  porque: "En otoño el césped crece hacia abajo: echa raíz y guarda reservas. El abono de otoño lleva más potasio (K), que refuerza raíz y resistencia al frío, y poco nitrógeno (N), que solo daría hoja tierna justo antes de las heladas.",
  sinoSe: "Poca cosa: césped algo menos fuerte en primavera. Es recomendable, no obligatorio."
},
{ id: "c-ultima-siega", area: "cesped", tipo: "hacer", titulo: "Última siega del otoño", prioridad: "mantenimiento", fecha: "2026-11-28", duracion: "30 min",
  que: "Dejar el césped a la altura buena para el invierno.",
  pasos: [
    "Segar a 5-6 cm (algo más alto que en octubre).",
    "Recoger bien la hierba cortada y las hojas.",
    "Después de esta, solo se siega en invierno si pasa de 7-8 cm."
  ],
  porque: "Un poco más de altura protege la base de la planta de las heladas y le da más hoja para seguir haciendo reservas.",
  sinoSe: "Césped demasiado alto (se apelmaza y salen hongos) o demasiado bajo (sufre con el frío)."
},
{ id: "c-escarificar", area: "cesped", tipo: "hacer", titulo: "Escarificar, resembrar y abonar", prioridad: "importante", fecha: "2027-03-20", duracion: "2-3 h",
  que: "La puesta a punto anual del césped. La máquina que pasaba el dueño en abril es un escarificador.",
  material: ["escarificador", "abono-primavera", "semillas", "mantillo", "rastrillo"],
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
  importante: "Una vez al año, no más. En otoño no: el césped queda muy castigado y no le da tiempo a recuperarse antes del frío. Antes, foto de la máquina roja del garaje y de su etiqueta a Claude (por el buzón) para confirmar que es un escarificador y cómo se ajusta la altura."
},
{ id: "c-abono-mayo", area: "cesped", tipo: "hacer", titulo: "Segundo abono de césped", prioridad: "mantenimiento", fecha: "2027-05-29", duracion: "20 min",
  que: "Llegar fuerte al verano.",
  material: ["abono-primavera"],
  pasos: ["Mismo abono de primavera, a dosis algo menor que la de la etiqueta.", "Regar después."],
  porque: "La reserva de primavera se agota a finales de mayo; este aporte sostiene el césped antes del calor.",
  sinoSe: "Césped más débil en julio, más amarillo con el calor."
},
{ id: "c-altura-verano", area: "cesped", tipo: "hacer", titulo: "Subir la altura de corte para el verano", prioridad: "mantenimiento", fecha: "2027-06-05", duracion: "5 min",
  que: "Pasar a cortar a 5-6 cm.",
  pasos: ["Subir una o dos posiciones la altura del cortacésped.", "Mantenerla hasta septiembre."],
  porque: "La hierba más alta da sombra a su propia raíz y al suelo: aguanta mucho mejor el calor y necesita menos agua.",
  sinoSe: "Césped quemado y amarillo en julio."
},
{ id: "c-resiembra-2027", area: "cesped", tipo: "hacer", titulo: "Resiembra de otoño", prioridad: "importante", fecha: "2027-09-18", duracion: "1 h",
  que: "Repasar las calvas que haya dejado el verano.",
  material: ["semillas", "mantillo"],
  pasos: ["Mismo método que la resiembra de octubre de 2026.", "Mediados de septiembre es el mejor momento del año."],
  porque: "Tierra todavía caliente y lluvias que empiezan: la semilla nace rápido y tiene meses para enraizar.",
  sinoSe: "Las calvas del verano se quedan todo el invierno."
},

/* ---------- FRUTALES ---------- */
{ id: "f-podador", area: "frutales", tipo: "hacer", titulo: "Contratar podador para los frutales", prioridad: "importante", fecha: "2026-11-14", duracion: "Unas llamadas",
  que: "Tener a alguien reservado para podar entre mediados de diciembre y febrero.",
  pasos: [
    "Preguntar a vecinos o en el vivero o la cooperativa de Torrijos o Novés.",
    "Árboles: higuera, peral, manzano, ciruelo, dos albaricoqueros y un melocotonero.",
    "Pedirle que no pode el limonero (se poda en primavera) y que al albaricoquero le haga poda ligera.",
    "Estar presente y preguntar: el segundo año la podemos hacer nosotros."
  ],
  porque: "La poda de frutales es la tarea donde un error se paga con años de mala cosecha. Y los buenos podadores se llenan pronto.",
  sinoSe: "Árboles sin podar (menos fruta y más enfermedades) o podados mal."
},
{ id: "f-trat1", area: "frutales", tipo: "hacer", titulo: "Tratamiento de invierno 1/2: caída de la hoja", prioridad: "urgente", fecha: "2026-11-21", duracion: "1 h",
  que: "Pulverizar los frutales cuando ya han perdido casi toda la hoja.",
  material: ["pack-sipcam", "pulverizador", "epi"],
  pasos: [
    "Esperar a que hayan caído la mayoría de las hojas (si aún tienen muchas, 1-2 semanas más).",
    "Árboles: el melocotonero (prioridad), los dos albaricoqueros, ciruelo, peral y manzano. Higuera y limonero no.",
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
{ id: "f-estiercol", area: "frutales", tipo: "hacer", titulo: "Estiércol o compost a los frutales", prioridad: "mantenimiento", fecha: "2026-12-12", duracion: "45 min",
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
{ id: "f-poda", area: "frutales", tipo: "hacer", titulo: "Poda de invierno (con el podador)", prioridad: "importante", fecha: "2027-01-16", duracion: "Una mañana", material: ["tijeras", "bolsas"],
  que: "Podar con el árbol dormido. Este año lo hace el podador y tú miras.",
  pasos: [
    "Fecha a cuadrar con el podador: de mediados de diciembre a principios de febrero.",
    "Preguntarle por qué corta cada rama y apuntarlo (o grabarlo).",
    "Retirar y sacar del jardín los restos de poda."
  ],
  porque: "Sin hoja se ve la estructura del árbol y la savia está parada: los cortes cicatrizan mejor y se pierde menos energía.",
  sinoSe: "Ramas que se cruzan, menos luz, más enfermedades y fruta más pequeña."
},
{ id: "f-trat2", area: "frutales", tipo: "hacer", titulo: "Tratamiento de invierno 2/2: antes de brotar", prioridad: "urgente", fecha: "2027-02-13", duracion: "1 h",
  que: "La segunda pasada, la más importante del año para el melocotonero.",
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
{ id: "f-abono-yemas", area: "frutales", tipo: "hacer", titulo: "Abono al suelo al hinchar las yemas", prioridad: "mantenimiento", fecha: "2027-03-06", duracion: "30 min", material: ["abono-frutales"],
  que: "Abono granulado alrededor de cada frutal cuando arrancan.",
  pasos: [
    "Abono para frutales (o universal) a la dosis de la etiqueta por árbol.",
    "Repartido en círculo bajo el borde de la copa y regado.",
    "Si las hojas salen amarillas con nervios verdes, avisar a Claude (puede faltar hierro)."
  ],
  porque: "Es cuando el árbol empieza a gastar reservas en flor y hoja. Lo recoge la hoja del vivero que dejó el dueño.",
  sinoSe: "Arranque más flojo y fruta más pequeña."
},
{ id: "f-floracion", area: "frutales", tipo: "revisar", titulo: "Floración: vigilar, sin insecticidas", prioridad: "mantenimiento", fecha: "2027-03-15", duracion: "5 min",
  que: "Disfrutar la flor y no tocar nada.",
  pasos: [
    "No usar insecticidas (la hoja del vivero lo recomienda; no hacerlo).",
    "Si hay helada fuerte con flor abierta, no hay mucho que hacer en árboles grandes: se acepta.",
    "Foto a Claude si ves pulgón o manchas en hoja nueva."
  ],
  porque: "Los insecticidas en flor matan a las abejas, y sin polinización no hay fruta.",
  sinoSe: "-"
},
{ id: "f-caida-flor", area: "frutales", tipo: "hacer", titulo: "Fungicida a la caída de la flor", prioridad: "importante", fecha: "2027-04-10", duracion: "45 min",
  que: "Proteger la hoja nueva y el fruto recién cuajado.",
  material: ["duaxo", "pulverizador", "epi"],
  pasos: [
    "Cuando hayan caído la mayoría de los pétalos.",
    "Duaxo (fungicida del garaje) a la dosis de la caja, en el melocotonero, los albaricoqueros, el ciruelo, el manzano y el peral.",
    "Día sin viento ni lluvia. Protección y perros dentro."
  ],
  porque: "Es el último momento sensible para la lepra y el moteado.",
  sinoSe: "Más riesgo de manchas y hojas deformadas, sobre todo si la primavera es lluviosa."
},
{ id: "f-aclareo", area: "frutales", tipo: "hacer", titulo: "Aclarar frutos del melocotonero", prioridad: "opcional", fecha: "2027-05-08", duracion: "30 min",
  que: "Quitar frutitos para que los que quedan crezcan grandes.",
  pasos: ["Cuando los melocotones tengan tamaño de nuez.", "Dejar uno cada 15-20 cm de rama y quitar el resto."],
  porque: "Un melocotonero cargado da fruta pequeña y puede romper ramas.",
  sinoSe: "Muchos melocotones pequeños y ramas que se parten."
},
{ id: "f-revision-verano", area: "frutales", tipo: "revisar", titulo: "Revisar plagas de verano", prioridad: "mantenimiento", fecha: "2027-06-05", duracion: "15 min",
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
{ id: "f-poda-albaricoque", area: "frutales", tipo: "hacer", titulo: "Poda ligera del albaricoquero", prioridad: "mantenimiento", fecha: "2027-07-10", duracion: "30 min",
  que: "Aclarar ramas tras la cosecha.",
  pasos: ["Quitar ramas secas, cruzadas o que crecen hacia dentro.", "Poco y limpio: en verano se poda suave."],
  porque: "El albaricoquero cicatriza mal en invierno y es propenso a la goma; en verano cierra mejor las heridas.",
  sinoSe: "Árbol más cerrado y con más madera muerta."
},

/* ---------- LIMONERO Y PLANTAS ---------- */
{ id: "l-heladas", area: "limonero", tipo: "revisar", titulo: "¿Heladas esta semana? Tapar el limonero", prioridad: "urgente",
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
{ id: "l-aromaticas", area: "limonero", tipo: "hacer", titulo: "Recortar las aromáticas", prioridad: "opcional", fecha: "2027-03-13", duracion: "20 min",
  que: "Recortar romero, lavanda, tomillo y similares para que no se queden leñosas.",
  pasos: ["Recortar un tercio de lo que creció el año anterior.", "Nunca cortar hasta la madera vieja sin hojas."],
  porque: "Recortadas en primavera rebrotan compactas; si no, se abren y se quedan feas por dentro.",
  sinoSe: "Matas desgarbadas y peladas por el centro."
},
{ id: "l-abono", area: "limonero", tipo: "hacer", titulo: "Abono para cítricos", prioridad: "mantenimiento", fecha: "2027-03-27", duracion: "10 min",
  que: "Primer abono del año del limonero.",
  material: ["abono-citricos"],
  pasos: ["Dosis de la etiqueta, repartida alrededor del tronco bajo la copa.", "Regar después.", "Repetir a principios de junio."],
  porque: "Los cítricos son exigentes y en suelos calizos como los de Toledo amarillean con facilidad.",
  sinoSe: "Hojas amarillas y poca fruta."
},
{ id: "l-poda", area: "limonero", tipo: "hacer", titulo: "Poda ligera del limonero", prioridad: "opcional", fecha: "2027-04-17", duracion: "20 min",
  que: "Quitar ramas secas, dañadas por el frío o mal orientadas.",
  pasos: ["Cuando ya no haya riesgo de helada.", "Poco: el limonero no necesita poda fuerte."],
  porque: "Así se ve qué ha dañado el invierno y se poda lo justo.",
  sinoSe: "Ramas secas que atraen plagas."
},

/* ---------- COSECHAS ---------- */
{ id: "f-cosecha-otono", area: "frutales", tipo: "cosecha", titulo: "Recoger la fruta que quede y la del suelo", prioridad: "mantenimiento", fecha: "2026-10-17", duracion: "30 min",
  ventana: "Octubre",
  que: "Al llegar, mirar si quedan manzanas, peras o higos tardíos y limpiar lo caído.",
  material: ["guantes", "bolsas"],
  pasos: [
    "Manzanas: si al levantarla y girarla un poco se suelta sola, está lista. Si hay que tirar, aún no.",
    "Peras: igual que la manzana, pero se cogen duras y maduran en casa (ver la cosecha de agosto).",
    "Higos: solo los blandos y colgando. Los duros ya no maduran con el frío.",
    "Recoger toda la fruta del suelo y la que esté seca o podrida en el árbol (\"momias\"). A la basura, no al compost."
  ],
  porque: "La fruta podrida en el árbol o en el suelo es donde pasan el invierno los hongos (monilia) y los gusanos de la fruta. Quitarla ahora es el mejor tratamiento gratis para el año que viene.",
  importante: "Perros: recoger la fruta caída cada día. Los huesos pueden atascarse en el intestino y la fruta podrida les sienta mal y atrae avispas."
},
{ id: "l-cosecha", area: "limonero", tipo: "cosecha", titulo: "Empiezan los limones", prioridad: "mantenimiento", fecha: "2026-11-14", duracion: "Cuando haga falta",
  ventana: "Noviembre a marzo",
  que: "Los limones maduran despacio en otoño-invierno y aguantan semanas en el árbol: se cogen según se van necesitando.",
  material: ["tijeras"],
  pasos: [
    "Listo cuando está amarillo entero y cede un poco al apretar.",
    "Cortar con tijera dejando un trocito de rabito. Arrancarlo tirando desgarra la piel y se pudre antes.",
    "No hace falta cogerlos todos: en el árbol se conservan mejor que en la nevera.",
    "Si anuncian helada fuerte (menos de -2 °C), coger antes los que estén maduros."
  ],
  porque: "El árbol es la mejor despensa: un limón maduro aguanta colgado semanas. Con -3 °C el fruto se hiela por dentro y se echa a perder."
},
{ id: "f-cosecha-albaricoque", area: "frutales", tipo: "cosecha", titulo: "Cosecha del albaricoque", prioridad: "mantenimiento", fecha: "2027-06-12", duracion: "Varios días",
  ventana: "Mediados de junio a principios de julio",
  que: "El primero del año. Madura casi todo en 2-3 semanas.",
  
  pasos: [
    "Listo cuando es naranja entero, sin verde junto al rabito, y cede un poco al apretar.",
    "Pasar cada 2-3 días: no madura todo a la vez.",
    "Se conserva poco (3-5 días en nevera). Lo que sobre, mermelada o congelado sin hueso.",
    "Recoger cada día lo que caiga."
  ],
  porque: "Cogido en su punto tiene todo el azúcar. Demasiado pronto queda ácido y harinoso; demasiado tarde cae y se pudre.",
  importante: "Perros: recoger la fruta caída cada día. Los huesos pueden atascarse en el intestino y la fruta podrida les sienta mal y atrae avispas."
},
{ id: "f-cosecha-melocoton", area: "frutales", tipo: "cosecha", titulo: "Cosecha de los melocotones", prioridad: "mantenimiento", fecha: "2027-07-03", duracion: "Varios días",
  ventana: "Julio a agosto según la variedad",
  que: "Coger los melocotones según maduran: no maduran todos a la vez.",
  
  pasos: [
    "No fiarse del rojo de la piel: lo que manda es el color de fondo, que pasa de verde a amarillo o crema.",
    "Cede al apretar suave junto al rabito y se suelta girándolo.",
    "Cogerlos con la palma de la mano, sin apretar con los dedos: se marcan enseguida.",
    "Pasar cada 2-3 días y recoger la caída a diario."
  ],
  porque: "El melocotón apenas madura fuera del árbol: si se coge verde, se ablanda pero no endulza.",
  importante: "Perros: recoger la fruta caída cada día. Los huesos pueden atascarse en el intestino y la fruta podrida les sienta mal y atrae avispas."
},
{ id: "f-cosecha-ciruela", area: "frutales", tipo: "cosecha", titulo: "Cosecha de ciruelas", prioridad: "mantenimiento", fecha: "2027-07-17", duracion: "Varios días",
  ventana: "Julio a agosto",
  que: "Madura escalonada durante unas semanas.",
  
  pasos: [
    "Lista cuando tiene su color final, ese polvillo blanco por encima y cede un poco.",
    "Si al tocar la rama caen solas, está en su punto.",
    "Se pueden coger un poco firmes: terminan en casa en 1-2 días.",
    "Recoger la caída a diario."
  ],
  porque: "La ciruela muy madura se raja con el calor o el riego y atrae avispas.",
  importante: "Perros: recoger la fruta caída cada día. Los huesos pueden atascarse en el intestino y la fruta podrida les sienta mal y atrae avispas."
},
{ id: "f-cosecha-higos", area: "frutales", tipo: "cosecha", titulo: "Cosecha de higos", prioridad: "mantenimiento", fecha: "2027-08-07", duracion: "Varios días",
  ventana: "Agosto a septiembre (si la higuera es breval, brevas a finales de junio)",
  que: "Higos maduros cada pocos días durante semanas.",
  
  pasos: [
    "Listo cuando cuelga hacia abajo, está blando y a veces con la piel agrietada o una gotita en el \"ojo\".",
    "Fuera del árbol no madura: solo coger los que estén en su punto.",
    "Manga larga y guantes: la leche de la higuera irrita la piel con el sol.",
    "Comer o guardar en nevera en 2-3 días. Recoger los caídos."
  ],
  porque: "El higo es de los pocos frutos que no sigue madurando una vez cogido.",
  importante: "La leche de tallos y hojas irrita la piel (de personas y perros). Perros: recoger la fruta caída cada día. Los huesos pueden atascarse en el intestino y la fruta podrida les sienta mal y atrae avispas."
},
{ id: "f-cosecha-peras", area: "frutales", tipo: "cosecha", titulo: "Cosecha de peras", prioridad: "mantenimiento", fecha: "2027-08-14", duracion: "Varios días",
  ventana: "Agosto a septiembre según la variedad",
  que: "La pera se coge dura y madura en casa.",
  
  pasos: [
    "Levantar la pera hasta ponerla horizontal: si el rabito se separa solo de la rama, está lista.",
    "Madurar en casa a temperatura ambiente 3-7 días, hasta que ceda junto al rabito.",
    "Para guardar más tiempo: en la nevera duras y sacar las que se vayan a comer.",
    "Recoger la caída."
  ],
  porque: "Si la pera madura en el árbol, se pone arenosa y se pudre por dentro aunque por fuera parezca buena.",
  importante: "Perros: recoger la fruta caída cada día. Los huesos pueden atascarse en el intestino y la fruta podrida les sienta mal y atrae avispas."
},
{ id: "f-cosecha-manzanas", area: "frutales", tipo: "cosecha", titulo: "Cosecha de manzanas", prioridad: "mantenimiento", fecha: "2027-09-04", duracion: "Varios días",
  ventana: "Septiembre a octubre",
  que: "La última del año. Aguanta bien guardada.",
  
  pasos: [
    "Levantar y girar un poco: si se suelta, está lista. Las primeras caídas sanas son la señal.",
    "Las pepitas de dentro, marrones.",
    "Guardar en sitio fresco y oscuro, sin que se toquen, revisando que no haya ninguna podrida.",
    "Recoger la caída."
  ],
  porque: "Bien cogidas y guardadas en fresco duran semanas o meses según la variedad.",
  importante: "Perros: recoger la fruta caída cada día. Los huesos pueden atascarse en el intestino y la fruta podrida les sienta mal y atrae avispas."
},
{ id: "h-cosecha-verano", area: "huerto", tipo: "cosecha", titulo: "Cosechar el huerto de verano (si lo plantaste)", prioridad: "opcional", fecha: "2027-07-10", duracion: "Varios días",
  ventana: "Julio a septiembre",
  que: "Tomates, pimientos y lo que se plante en abril.",
  
  pasos: [
    "Tomate: con el color final y cediendo un poco. Si se coge pintón, termina en casa.",
    "Pimiento: verde cuando tiene buen tamaño, o esperar a que se ponga rojo (más dulce, tarda más).",
    "Coger cada 2-3 días: la planta produce más si no se le deja fruta madura colgando."
  ],
  porque: "Recoger a menudo estimula a la planta a seguir dando fruto."
},

/* ---------- HUERTO ---------- */
{ id: "h-limpiar", area: "huerto", tipo: "hacer", titulo: "Recoger lo aprovechable y limpiar el huerto de verano", prioridad: "importante", fecha: "2026-10-17", duracion: "1 h",
  que: "Tomateras y pimientos ya han terminado: se aprovecha lo que quede y se quitan. Las acelgas se quedan.",
  material: ["guantes", "bolsas"],
  pasos: [
    "Recoger los tomates que tengan algo de color y los pimientos sanos. Los tomates verdes y duros maduran en casa en una caja con una manzana o un plátano en 1-2 semanas.",
    "Arrancar tomateras y pimientos con su raíz.",
    "Si tienen manchas negras o marrones en hojas o tallos (hongos), a la bolsa de basura, no al compost ni enterrados.",
    "Las acelgas se quedan: aguantan el frío y dan hojas todo el invierno. Se cortan las de fuera a ras de la base y se deja el centro, que vuelve a sacar.",
    "Quitar malas hierbas y soltar la tierra con la azada. Queda listo para ajos y habas."
  ],
  porque: "Tomate y pimiento son de verano: en octubre ya no cuajan fruta nueva y la primera helada los mata. Esperar a ver qué sale no da nada más. Dejarlos pudrirse deja hongos y plagas pasando el invierno justo donde van ajos y habas.",
  sinoSe: "No hay sitio para plantar y los hongos pasan al año siguiente.",
  importante: "Perros: las hojas y los tomates verdes son tóxicos para ellos. Que no queden restos por el suelo."
},
{ id: "h-ajos-habas", area: "huerto", tipo: "hacer", titulo: "Plantar ajos y habas", prioridad: "opcional", fecha: "2026-10-17", duracion: "1-2 h",
  que: "Huerto de invierno que se cuida casi solo.",
  material: ["ajo", "habas", "estiercol", "guantes"],
  pasos: [
    "Con el huerto ya limpio (tarea anterior), echar una capa de estiércol o compost de 3-5 cm donde vayan ajos y habas y mezclar con la azada.",
    "Ajos: dientes sueltos, punta hacia arriba, a 3-4 cm de profundidad y 10-15 cm entre sí.",
    "Habas: 2-3 semillas por hoyo, a 4-5 cm de profundidad, hoyos a 25-30 cm.",
    "Un riego tras plantar. Después, la lluvia suele bastar."
  ],
  porque: "Aguantan las heladas y el ajo necesita frío para formar cabeza. Las habas, además, enriquecen la tierra para el huerto de verano.",
  sinoSe: "Nada: el huerto descansa. Cualquier fin de semana hasta mediados de noviembre vale."
},
{ id: "h-escardar", area: "huerto", tipo: "hacer", titulo: "Quitar hierbas del huerto", prioridad: "opcional", fecha: "2027-01-09", duracion: "30 min",
  que: "Arrancar las hierbas que compiten con ajos y habas.",
  pasos: ["A mano o con azadilla, con la tierra húmeda (sale la raíz entera)."],
  porque: "Las malas hierbas roban agua y luz a los cultivos pequeños.",
  sinoSe: "Ajos más pequeños."
},
{ id: "h-verano", area: "huerto", tipo: "hacer", titulo: "Decidir el huerto de verano", prioridad: "opcional", fecha: "2027-04-03", duracion: "Charla con Claude",
  que: "Elegir qué plantar en mayo (tomate, pimiento, calabacín...) o dejarlo en barbecho.",
  pasos: ["Decidir cuánto tiempo apetece dedicarle en verano.", "Pedir a Claude el plan de plantación y riego."],
  porque: "El huerto de verano es lo que más trabajo da de todo el jardín: mejor decidirlo con calma.",
  sinoSe: "-"
},
{ id: "h-cosecha-habas", area: "huerto", tipo: "cosecha", titulo: "Cosechar habas", prioridad: "opcional", fecha: "2027-04-24", duracion: "Ratos",
  que: "Recoger las vainas cuando estén llenas pero tiernas.",
  pasos: ["Ir recogiendo cada pocos días durante 3-4 semanas."],
  porque: "Pasadas, se ponen duras y harinosas.", sinoSe: "Habas duras."
},
{ id: "h-cosecha-ajos", area: "huerto", tipo: "cosecha", titulo: "Cosechar ajos", prioridad: "opcional", fecha: "2027-06-12", duracion: "30 min",
  que: "Arrancar los ajos cuando la mitad de las hojas estén secas.",
  pasos: ["Dejar de regar 2 semanas antes.", "Arrancar, dejarlos secar a la sombra unos días y guardarlos en sitio seco."],
  porque: "Si se arrancan tarde, las cabezas se abren y se conservan peor.", sinoSe: "Ajos que se pudren o se abren."
},

/* ---------- PISCINA ---------- */
{ id: "p-revisar", area: "piscina", tipo: "revisar", titulo: "Arrancar la depuradora y medir el agua", prioridad: "urgente", fecha: "2026-10-10", duracion: "30 min",
  que: "Hecho el 10 de octubre: contralavado y enjuague, depuradora filtrando 24 h en MANUAL, medidas tomadas (28 m³) y agua medida (pH 8,0-8,2 y cloro 0).",
  material: ["kit-agua"],
  pasos: [
    "Llaves rojas de skimmers y fondo abiertas; la de limpiafondos cerrada (se abre solo para aspirar).",
    "Selector en FILTRACIÓN (con la bomba apagada para moverlo).",
    "Cuadro naranja en MANUAL: la bomba funciona día y noche hasta que el agua esté limpia. Luego pasa a AUTO.",
    "Referencia del manómetro con el filtro limpio: 0,55 bar.",
    "Cada día, un vistazo: cestillos de skimmers y prefiltro limpios y presión por debajo de 0,9."
  ],
  porque: "El agua verde es cloro a cero o que no actúa. Sin filtrar y sin saber el pH, cualquier producto que eches se desperdicia.",
  sinoSe: "El verde va a más y cuesta el doble de producto recuperarla.",
  importante: "Si la bomba hace ruido raro, no saca agua o gotea algo en la caseta: apagar y foto a Claude. La purga del filtro (la rueda pequeña junto al manómetro) está atascada de cal: no es urgente, se limpia otro día con la bomba apagada."
},
{ id: "p-choque", area: "piscina", tipo: "hacer", titulo: "Recuperar el agua: pH y cloración de choque", prioridad: "urgente", fecha: "2026-10-10", duracion: "45 min en dos tandas",
  que: "Matar las algas antes de invernar. Primero el pH, luego el choque, nunca a la vez. Hecho a mediodía del 10: 1,5 L de reductor de pH con el agua a pH 8,0-8,2 y cloro 0.",
  material: ["minorador-ph", "cloro-choque", "kit-agua", "guantes"],
  pasos: [
    "✓ Cepillado de paredes (el fondo, cuando llegue la manguera).",
    "✓ 1,5 L de reductor de pH líquido diluido en un cubo y repartido por las boquillas, con la bomba en marcha.",
    "Entre las 18:30 y las 19:00, volver a medir el pH. Foto del kit a Claude.",
    "Si sale 7,6 o menos: a partir de las 22:00, choque con 550 g de cloro rápido granulado (dicloro). Disolverlo en un cubo distinto lleno de agua de la piscina (el producto sobre el agua, nunca al revés), remover con un palo y repartirlo por todo el borde.",
    "Si sale 7,8 o más: otro litro de reductor esa tarde y el choque al día siguiente por la noche.",
    "Bomba en MANUAL 24 h durante 2-3 días después del choque. Cepillar paredes y fondo una vez al día.",
    "Perros fuera del agua y de la playa hasta que el cloro vuelva a 1-3 (1-2 días)."
  ],
  porque: "Con el pH alto (tu agua dura lo sube sola) el cloro pierde casi toda su fuerza: a pH 8 trabaja a un 20 %, a 7,4 a más del 50 %. De noche, porque el sol destruye el cloro en pocas horas. El cepillado deja las algas sueltas para que el cloro y el filtro acaben con ellas.",
  sinoSe: "No se puede invernar: con algas debajo de la lona, en marzo hay una charca.",
  importante: "No mezclar nunca productos entre sí ni en el mismo cubo, y dejar 4-6 h entre pH y cloro. Guantes y gafas. El reductor apenas suelta vapor: basta con no inclinarse sobre el cubo. Dicloro, no hipoclorito cálcico: con agua tan dura mete más cal."
},
{ id: "p-grieta", area: "piscina", tipo: "revisar", titulo: "Revisar las grietas de la playa", prioridad: "importante", fecha: "2026-10-10", duracion: "10 min",
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
{ id: "p-lona", area: "piscina", tipo: "hacer", titulo: "Limpiar la lona y guardarla seca", prioridad: "importante", fecha: "2026-10-11", duracion: "1 h (entre dos)",
  que: "Dejar la lona limpia antes del invernaje. Ahora es el momento: con el choque de cloro tiene que estar quitada.",
  material: ["manguera-jardin"],
  pasos: [
    "Si está puesta: quitar hojas y tierra con una escoba blanda y sacar el agua de encima antes de moverla. Con peso no se arrastra.",
    "Retirarla entre dos, doblándola por la mitad, y extenderla en el patio o la entrada (en el césped, como mucho una o dos horas: lo amarillea).",
    "Mojar con la manguera, frotar con cepillo de cerdas suaves y agua con un chorro de jabón neutro (el de fregar sirve).",
    "Manchas verdes o de moho: un vaso de vinagre en un cubo de agua, frotar y aclarar.",
    "Aclarar bien por las dos caras y dejarla secar del todo al sol, dándole la vuelta.",
    "Doblarla solo cuando esté seca. Guardarla en la caseta, a la sombra y levantada del suelo."
  ],
  porque: "La suciedad que se queda en la lona acaba en el agua al quitarla en primavera, y doblada húmeda coge moho y se pudre.",
  sinoSe: "Lona que huele, se mancha y dura menos años.",
  importante: "Nada de lejía, disolventes ni estropajo. Hidrolimpiadora solo a baja presión y a medio metro. Perros fuera mientras esté mojada con jabón."
},
{ id: "p-purga", area: "piscina", tipo: "hacer", titulo: "Desatascar la purga del filtro", prioridad: "opcional", fecha: "2026-11-07", duracion: "20 min",
  que: "La rueda pequeña junto al manómetro, que sirve para sacar el aire del filtro, está atascada de cal.",
  pasos: [
    "Bomba en PARO.",
    "Desenroscar la purga del todo (ya sabes que sale entera).",
    "Dejarla en vinagre de limpieza una hora y repasar el agujero con un alambre fino o un clip.",
    "Mirar la junta de goma: si está agrietada, foto a Claude.",
    "Volver a montarla y encender: debe salir un poco de aire y luego agua al abrirla."
  ],
  porque: "Si entra aire en el filtro, filtra peor y la presión baila. La purga es la forma de sacarlo.",
  sinoSe: "Nada grave a corto plazo."
},
{ id: "p-aclarar", area: "piscina", tipo: "revisar", titulo: "Revisar el agua tras el choque", prioridad: "importante", fecha: "2026-10-14", duracion: "30 min",
  que: "Ver si el choque ha funcionado y rematar.",
  material: ["floculante", "kit-agua", "manguera"],
  pasos: [
    "Mirar el manómetro: si marca 0,9-1,0 bar (o 0,3-0,4 más que los 0,55 de referencia), contralavado. Si no, saltar el paso siguiente.",
    "Contralavado: bomba OFF, selector en LAVADO, bomba ON 2-3 min (hasta que el agua del visor salga limpia), bomba OFF, ENJUAGUE 30 s, bomba OFF, FILTRACIÓN, bomba ON.",
    "Si el agua está azul y se ve el fondo: perfecto. Medir cloro (1-3) y pH (7,2-7,6) y listo para invernar.",
    "Si sigue verde: segundo choque igual que el primero (antes, pH a 7,2-7,6).",
    "Si está turbia gris o blanquecina (algas muertas en suspensión): floculante según la etiqueta para 28 m³, repartido por el borde con la bomba en marcha 10 min, y luego bomba parada toda la noche.",
    "Al día siguiente, aspirar el fondo despacio con el limpiafondos y el selector en VACIADO, para tirar la suciedad sin pasar por el filtro. Llaves: solo la de limpiafondos abierta. Baja el nivel: rellenar con la manguera de jardín."
  ],
  porque: "Las algas muertas son polvo fino que el filtro de arena no atrapa bien. El floculante las junta en el fondo y se tiran directamente al desagüe.",
  sinoSe: "Invernar con agua turbia: el invernador no hace bien su trabajo."
},
{ id: "p-invernaje", area: "piscina", tipo: "hacer", titulo: "Invernar la piscina", prioridad: "urgente", fecha: "2026-10-24", duracion: "1-2 h",
  que: "Dejar el agua protegida para todo el invierno. Solo con el agua ya transparente.",
  material: ["kit-agua", "invernador", "cloro-choque", "minorador-ph"],
  pasos: [
    "Limpiar fondo (limpiafondos), paredes y cestillos. Contralavado si el manómetro pasa de 0,9.",
    "Ajustar el pH a 7,2-7,6 con el reductor (unos 0,5 L por cada 0,2 puntos).",
    "4-6 h después, de noche: 300 g de cloro de choque disuelto en un cubo.",
    "Al día siguiente, el invernador: la dosis de la etiqueta para 28 m³ (con los habituales, 1-1,5 L), repartido por el borde con la bomba en marcha 4-6 h.",
    "Quitar el dosificador flotante de pastillas: en invierno no hace falta.",
    "Depuradora en AUTO: 2 horas al día, de madrugada, para que el agua en movimiento no hiele.",
    "Poner la lona limpia y bien tensa."
  ],
  porque: "Con el agua por debajo de 15 °C las algas casi no crecen. Bien invernada, en primavera basta con limpiar y ajustar.",
  sinoSe: "Agua verde en primavera: semanas de trabajo y mucho producto."
},
{ id: "p-primavera", area: "piscina", tipo: "hacer", titulo: "Puesta a punto de primavera", prioridad: "importante", fecha: "2027-04-10", duracion: "Medio día",
  que: "Quitar la lona y dejar la piscina lista para la temporada.",
  material: ["manguera"],
  pasos: [
    "Limpiar y secar la lona antes de guardarla.",
    "Limpiar fondo con el limpiafondos conectado a la toma de la pared (manguera llena de agua antes de conectarla).",
    "Lavar el filtro, revisar bomba y prefiltro.",
    "Ajustar pH y cloro: Claude dará cantidades con el volumen.",
    "Limpiar la playa (los hongos negros del suelo)."
  ],
  porque: "Una puesta a punto ordenada evita arrancar con averías o agua turbia en junio.",
  sinoSe: "Agua turbia y semanas perdidas de baño."
},

/* ---------- RIEGO ---------- */
{ id: "r-reducir", area: "riego", tipo: "hacer", titulo: "Reducir el riego de otoño", prioridad: "importante", fecha: "2026-10-10", duracion: "15 min",
  que: "Pasar el programador al ritmo de otoño. Como todo va junto, se programa para lo que menos agua necesita.",
  material: ["manguera-jardin"],
  pasos: [
    "Dejarlo en 2 días por semana (por ejemplo martes y sábado), a primera hora de la mañana.",
    "Tiempo de cada riego: la mitad que en verano. Si no sabes cuánto tenía, foto del programador a Claude.",
    "Si llueve más de un día en la semana, saltar el siguiente riego (botón de pausa o lluvia, si lo tiene).",
    "Las calvas recién sembradas, a mano a diario (no con el automático).",
    "Mirar en el programador si hay varias zonas o \"estaciones\" (números 1, 2, 3…). Aunque se rieguen el mismo día, a veces se puede dar más tiempo a una que a otra. Foto a Claude."
  ],
  porque: "Con menos calor el suelo apenas pierde agua. Regar como en verano encharca, da hongos y deja la raíz perezosa en superficie. Los frutales, además, tienen que ir frenando para entrar en reposo.",
  sinoSe: "Hongos en el césped, árboles que no se preparan para el frío y gasto de agua."
},
{ id: "r-apagar", area: "riego", tipo: "hacer", titulo: "Apagar el riego para el invierno", prioridad: "urgente", fecha: "2026-11-07", duracion: "20 min",
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
{ id: "r-encender", area: "riego", tipo: "hacer", titulo: "Encender y revisar el riego", prioridad: "importante", fecha: "2027-03-27", duracion: "45 min",
  que: "Volver a ponerlo en marcha comprobando que todo funciona.",
  pasos: [
    "Abrir la llave general y poner el programador en automático.",
    "Lanzar cada sector a mano y mirar: aspersores que no giran o no suben, goteros atascados, fugas o charcos.",
    "Programa de primavera: césped 2-3 días por semana. Claude lo ajusta con los sectores."
  ],
  porque: "Las averías del invierno se descubren mejor ahora que en julio, con el césped ya sufriendo.",
  sinoSe: "Zonas secas en verano por un aspersor roto."
},
{ id: "r-verano", area: "riego", tipo: "hacer", titulo: "Programa de verano", prioridad: "importante", fecha: "2027-06-01", duracion: "15 min",
  que: "Ajustar el riego al calor.",
  pasos: ["Riego de madrugada (antes de las 8).", "Mejor riegos más largos y menos frecuentes que cortos a diario.", "Claude ajusta tiempos por sector."],
  porque: "Regar profundo y espaciado hace que la raíz baje y aguante mejor el calor. De madrugada se evapora menos.",
  sinoSe: "Césped quemado o gasto de agua disparado."
},

/* ---------- EXTERIOR / MÁQUINAS ---------- */
{ id: "g-cortacesped", area: "cesped", tipo: "hacer", titulo: "Vaciar y guardar el cortacésped", prioridad: "mantenimiento", fecha: "2026-12-05", duracion: "20 min",
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
{ id: "g-cortacesped-prim", area: "cesped", tipo: "hacer", titulo: "Revisar el cortacésped", prioridad: "mantenimiento", fecha: "2027-03-06", duracion: "30 min",
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
  { id: "semillas", cat: "cesped", nombre: "Semillas de césped (Ray Grass Inglés y Geolia Deporte y Juegos)", garaje: true,
    queEs: "Semilla para resembrar calvas. Cada caja de 1 kg da para unos 35 m².", uso: "Octubre y marzo-abril.",
    nota: "Mirar la fecha de la caja: si son de hace años, germinan peor." },
  { id: "pack-sipcam", cat: "frutales", nombre: "Pack Tratamiento Invierno (Sipcam, caja morada)", garaje: true,
    queEs: "Fungicida, aceite e insecticida para frutales en reposo.", uso: "21 nov y 13 feb." },
  { id: "pack-masso", cat: "frutales", nombre: "Pack Tratamiento de Invierno (Massó, caja naranja)", garaje: true,
    queEs: "Lo mismo que el de Sipcam. Reserva.", uso: "Febrero, si se acaba el de Sipcam." },
  { id: "duaxo", cat: "frutales", nombre: "Duaxo, fungicida polivalente (Compo)", garaje: true,
    queEs: "Fungicida para oídio, roya y moteado.", uso: "Primavera, a la caída de la flor." },
  { id: "azufre", cat: "frutales", nombre: "Azufre 80% (Sipcam)", garaje: true,
    queEs: "Fungicida y acaricida para oídio y araña roja.", uso: "Primavera-verano, solo si aparece.",
    nota: "Nunca con más de 30 °C ni cerca de los tratamientos con aceite." },
  { id: "insecticida-orugas", cat: "frutales", nombre: "Insecticida orugas (Flower)", garaje: true,
    queEs: "Insecticida de contacto para orugas.", uso: "Solo si aparecen orugas. Nunca en floración." },
  { id: "corrector-calcio", cat: "huerto", nombre: "Corrector de carencias de calcio (Massó)", garaje: true,
    queEs: "Evita la podredumbre del culo del tomate y el pimiento.", uso: "Huerto de verano." },
  { id: "gasolina", cat: "herramientas", nombre: "Gasolina (bidón de 5 L)", garaje: true,
    queEs: "Para el cortacésped.", uso: "Hasta diciembre. En marzo, gasolina nueva." },
  { id: "limpiafondos", cat: "piscina", nombre: "Limpiafondos manual y cepillo de paredes", garaje: true,
    queEs: "El de ruedas aspira el fondo conectado a la depuradora con una manguera; el curvo frota paredes.", uso: "Primavera y verano." },

  { id: "escarificador", cat: "cesped", nombre: "Máquina roja del garaje (escarificador, por confirmar)", garaje: true,
    queEs: "Por lo que contó el dueño (una vez al año, en primavera, para \"limpiar\" el césped), casi seguro es un escarificador: cuchillas que arañan el césped y sacan la hierba muerta y el musgo. No arranca malas hierbas de raíz.",
    uso: "Una vez al año, en marzo-abril.",
    nota: "Foto de la máquina y de su etiqueta a Claude por el buzón. Podría ser también un aireador (pincha agujeros). Ahora, en otoño, no se usa." },

  /* ---- No usar ---- */
  { id: "kestrel", cat: "frutales", nombre: "Kestrel (insecticida)", noUsar: true,
    queEs: "Uso reservado a profesionales con carné de aplicador y muy tóxico para las abejas.", uso: "No usar. Punto limpio." },
  { id: "botellas", cat: "herramientas", nombre: "Botellas sin etiqueta \"CHAMPÚ\" y \"HORMIGAS\"", noUsar: true,
    queEs: "Productos trasvasados sin saber qué son.", uso: "Preguntar al dueño; si no lo sabe, punto limpio. Mientras, en una balda alta lejos de los perros." },

  /* ---- Por comprar ---- */
  { id: "abono-otono", cat: "cesped", nombre: "Abono de césped de otoño", aviso: "2026-10-09", tenerAntes: "2026-10-10",
    queEs: "Abono granulado para césped con poco nitrógeno (N) y más potasio (K). En la etiqueta aparecen tres números N-P-K: busca que el último (K) sea igual o mayor que el primero (N). Sirven los que digan \"otoño\" o \"otoño-invierno\".",
    cantidad: "2-3 kg por cada 100 m² de césped. Un saco de 5 kg.",
    precio: "12-20 €",
    links: [ { t: "Ver abonos de otoño en Leroy Merlin", u: "https://www.leroymerlin.es/search?q=abono%20cesped%20oto%C3%B1o" } ],
    nota: "Si no encuentras uno de otoño, uno de césped de liberación lenta vale. Evita los que llevan herbicida." },
  { id: "mantillo", cat: "cesped", nombre: "Mantillo", aviso: "2026-10-09", tenerAntes: "2026-10-10",
    queEs: "Materia orgánica fina y oscura. Se echa una capa muy fina encima de la semilla para protegerla del sol y los pájaros y mantener la humedad.",
    cantidad: "1 saco de 50 L.", precio: "6-8 €",
    links: [ { t: "Ejemplo: Mantillo Geolia 50 L (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/mantillo-geolia-50-l-86487846.html" } ] },
  { id: "rastrillo", cat: "herramientas", nombre: "Rastrillo de púas de acero", aviso: "2026-10-09", tenerAntes: "2026-10-10",
    queEs: "Rastrillo rígido de dientes cortos para soltar la tierra de las calvas. No es lo mismo que la escoba de hojas.",
    cantidad: "1 (solo si no hay en el garaje).", precio: "10-15 €",
    links: [ { t: "Ejemplo: Rastrillo 14 púas Jardinor (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/rastrillo-con-mango-14-puas-de-acero-34-cm-jardinor-12110966.html" } ] },
  { id: "manguera-jardin", cat: "herramientas", nombre: "Manguera de jardín con pistola (o regadera)", aviso: "2026-10-09", tenerAntes: "2026-10-10",
    queEs: "Para regar a mano lo que el riego automático no puede tratar aparte: las calvas recién sembradas (a diario 2-3 semanas), los ajos y habas al plantar y el limonero en un apuro. No es la manguera gruesa de la piscina.",
    uso: "Desde la resiembra y todo el año.", precio: "8-40 €",
    gamas: [
      { nivel: "Básica", nombre: "Regadera de 10 L con alcachofa (la boca de ducha)", precio: "8-12 €", texto: "Basta para las calvas: dos o tres viajes al día. Lenta para cualquier otra cosa.", u: "https://www.leroymerlin.es/search?q=regadera%2010%20litros" },
      { nivel: "Lo que haría yo", nombre: "Manguera de 15-20 m con pistola de varios chorros y conector de grifo", precio: "25-40 €", texto: "Si hay grifo fuera. Con el chorro \"lluvia\" riega las calvas sin levantar la semilla, y sirve para el huerto, el limonero, limpiar la playa y rellenar la piscina tras aspirar.", u: "https://www.leroymerlin.es/search?q=kit%20manguera%20jardin%2020%20m%20pistola", recomendada: true }
    ],
    nota: "Mira antes si hay una junto al grifo de fuera o en el garaje." },
  { id: "escoba-hojas", cat: "herramientas", nombre: "Escoba de jardín para hojas", aviso: "2026-10-12", tenerAntes: "2026-10-17",
    gamas: [
      { nivel: "Básica", nombre: "Escoba de jardín para hojas", precio: "8-18 €", texto: "Suficiente para rincones, arriates y la terraza.", u: "https://www.leroymerlin.es/productos/escoba-con-mango-para-recoger-hojas-geolia-de-acero-de-44-5-cm-14052752.html" },
      { nivel: "Lo que haría yo", nombre: "El cortacésped que ya tienes, con la bolsa puesta", precio: "0 €", texto: "En el césped es lo más rápido: aspira, tritura y recoge las hojas en una pasada. La escoba queda para terraza y arriates.", recomendada: true },
      { nivel: "Si quieres más", nombre: "Soplador-aspirador-triturador eléctrico", precio: "50-120 €", texto: "Cómodo para la terraza y la playa de la piscina, donde el cortacésped no llega. Con cable es más barato y potente; con batería, más cómodo y caro. Hace ruido y sobre césped trabaja peor que el cortacésped.", u: "https://www.manomano.es/p/sopladoraspirador-de-hojas-electrico-3-en-1-3000-w-45-l-275-kmh-840-mh-funcion-de-trituracion-151-para-soplar-aspirar-y-triturar-hojas-a-87944517" }
    ],
        queEs: "Rastrillo en abanico de púas flexibles para recoger hojas del césped sin dañarlo.",
    cantidad: "1 (solo si no hay en el garaje).", precio: "8-18 €",
    links: [ { t: "Ejemplo: Escoba para hojas Geolia de acero (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/escoba-con-mango-para-recoger-hojas-geolia-de-acero-de-44-5-cm-14052752.html" } ] },
  { id: "ajo", cat: "huerto", nombre: "Ajo de siembra", aviso: "2026-10-12", tenerAntes: "2026-10-17",
    queEs: "Cabezas de ajo para plantar. El del supermercado suele estar tratado para no brotar.",
    cantidad: "0,5 kg (unos 40-50 dientes).", precio: "3-5 €",
    links: [], nota: "Mejor en vivero o cooperativa de la zona: Castilla-La Mancha es tierra de ajo morado." },
  { id: "habas", cat: "huerto", nombre: "Semilla de habas", aviso: "2026-10-12", tenerAntes: "2026-10-17",
    queEs: "Semillas para sembrar. La variedad más común es Aguadulce.",
    cantidad: "1 sobre de unos 250 g.", precio: "2-4 €",
    links: [ { t: "Ver semillas de habas en Leroy Merlin", u: "https://www.leroymerlin.es/search?q=semillas%20habas" } ] },
  { id: "estiercol", cat: "frutales", nombre: "Estiércol o compost en saco", aviso: "2026-10-12", tenerAntes: "2026-10-17",
    queEs: "Abono orgánico de acción lenta. Para el huerto ahora y para los frutales en diciembre.",
    cantidad: "6-8 sacos de 50 L en total: 1-2 para el huerto ahora y 4-6 para los frutales en diciembre. Aguanta meses en el saco cerrado.", precio: "5-8 €/saco",
    links: [ { t: "Ejemplo: Estiércol de caballo 50 L (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/estiercol-de-caballo-hnos-aguado-50l-14662550.html" } ] },
  { id: "manta", cat: "limonero", nombre: "Manta térmica antiheladas (velo de hibernación)", aviso: "2026-10-12", tenerAntes: "2026-11-30",
    queEs: "Tela blanca muy ligera que deja pasar luz y aire pero guarda el calor. Se pone sobre la planta las noches de helada.",
    cantidad: "Un rollo de 2 x 10 m sobra para el limonero. Pinzas o cuerda para sujetarla.", precio: "10-15 €",
    links: [ { t: "Ejemplo: Velo de hibernación Geolia 2 x 10 m (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/velo-de-hibernacion-de-polipropileno-2x10-m-82280829.html" } ] },
  { id: "pulverizador", cat: "frutales", nombre: "Pulverizador de presión de 5-8 L", aviso: "2026-10-12", tenerAntes: "2026-11-21",
    gamas: [
      { nivel: "Básica", nombre: "Pulverizador de presión manual de 5 L", precio: "20-35 €", texto: "Se bombea a mano. Para dos o tres tratamientos al año sobra.", u: "https://www.nexmart.com/media/catalog/matabi/82842_flyer_matabi_es.pdf", recomendada: true },
      { nivel: "Si quieres más", nombre: "Pulverizador de mochila con batería (5 L)", precio: "60-120 €", texto: "No hay que bombear y la presión es constante. Merece la pena si tratas a menudo o tienes muchos árboles; para tu jardín es un capricho.", u: "https://www.cofan.es/images/content/FichasTecnicas/ftpFichaTecnica15921.pdf" }
    ],
        queEs: "Depósito que se bombea a mano y lanza el producto pulverizado con una lanza. Para los tratamientos de los frutales.",
    cantidad: "1 (mirar antes si hay uno en el garaje).", precio: "20-35 €",
    links: [ { t: "Ficha de ejemplo: Matabi Polita 7 (5 L útiles)", u: "https://www.nexmart.com/media/catalog/matabi/82842_flyer_matabi_es.pdf" },
             { t: "Ver pulverizadores en Leroy Merlin", u: "https://www.leroymerlin.es/search?q=pulverizador%20presion%20previa" } ],
    nota: "Uno de 5 L con lanza larga basta para tus árboles. Las mochilas de 12-16 L son para fincas." },
  { id: "epi", cat: "herramientas", nombre: "Guantes de nitrilo, gafas y mascarilla FFP2", aviso: "2026-10-12", tenerAntes: "2026-11-21",
    queEs: "Protección para los tratamientos.", cantidad: "1 juego.", precio: "10 €",
    links: [], nota: "Cualquier ferretería o farmacia." },
  { id: "abono-primavera", cat: "cesped", nombre: "Abono de césped de primavera (liberación lenta)", uso: "Se usa en marzo y mayo; guardado seco aguanta sin problema.", aviso: "2026-10-12", tenerAntes: "2027-03-20",
    queEs: "Abono granulado de césped rico en nitrógeno que se libera poco a poco durante 2-3 meses.",
    cantidad: "Lo calcula Claude con los m² medidos.", precio: "12-20 €",
    links: [ { t: "Ver abonos de césped en Leroy Merlin", u: "https://www.leroymerlin.es/search?q=abono%20cesped%20liberacion%20lenta" } ] },
  { id: "abono-citricos", cat: "limonero", nombre: "Abono para cítricos", uso: "Para el limonero en marzo y junio.", aviso: "2026-10-12", tenerAntes: "2027-03-27",
    queEs: "Abono específico para limoneros y naranjos, con hierro y microelementos.",
    cantidad: "Un envase pequeño (1-2 kg) da para la temporada.", precio: "6-10 €",
    links: [ { t: "Ejemplo: Abono cítricos Geolia 1,15 kg (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/abono-citricos-geolia-1-15-kg-91987662.html" } ] },
  { id: "manguera", cat: "piscina", nombre: "Manguera flotante de piscina de 38 mm", uso: "Para aspirar el fondo ahora y cada primavera.", aviso: "2026-10-09", tenerAntes: "2026-10-14",
    queEs: "Manguera gruesa y con anillos que flota. Une el limpiafondos con la toma de limpiafondos de la pared (tu piscina la tiene: es la tercera llave roja) para que la depuradora aspire el fondo. Una manguera de jardín no sirve.",
    cantidad: "12-15 m, con sus terminales (los extremos que encajan en el limpiafondos y en la toma).", precio: "25-45 €",
    links: [ { t: "Ejemplo: manguera autoflotante 38 mm (ManoMano, elige el largo)", u: "https://www.manomano.es/p/manguera-autoflotante-eva-38mm-rollo-30m-con-terminales-corrugada-flexible-de-alta-resistencia-filtro-piscina-215776699" } ],
    nota: "Va directa a la toma de limpiafondos de la pared: no hace falta placa de skimmer. La de 32 mm de la tienda no vale. Hace falta para aspirar el fondo tras el choque y antes de invernar." },
  { id: "tijeras", cat: "herramientas", nombre: "Tijeras de podar de una mano (tipo bypass)", aviso: "2026-10-12", tenerAntes: "2026-12-15",
    gamas: [
      { nivel: "Básica", nombre: "Tijera bypass de gama media", precio: "15-30 €", texto: "Corta bien el primer año. Se mella antes y no tiene recambios.", u: "https://www.leroymerlin.es/productos/tijera-de-poda-a-una-mano-altuna-bypass-82063623.html" },
      { nivel: "Lo que haría yo", nombre: "Felco 2", precio: "50-65 €", texto: "La tijera de referencia de los profesionales. Dura décadas, se afila y todas sus piezas tienen recambio. Con nueve frutales y aromáticas, es de las pocas compras donde gastar más sale más barato.", u: "https://eu.felco.com/en-lu/products/felco-2", recomendada: true }
    ],
        queEs: "Tijera de dos hojas que cortan como unas tijeras normales (bypass). Para ramas finas, aromáticas, fruta y limpiar el limonero. Las de tipo \"yunque\" aplastan la rama: mejor bypass.",
    uso: "Todo el año.", cantidad: "1.", precio: "15-30 €",
    links: [ { t: "Ejemplo: Tijera de poda bypass Altuna (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/tijera-de-poda-a-una-mano-altuna-bypass-82063623.html" } ],
    nota: "Aunque contrates podador, la vas a usar mucho. Mira antes si hay en el garaje." },
  { id: "guantes", cat: "herramientas", nombre: "Guantes de jardinería", aviso: "2026-10-12", tenerAntes: "2026-10-17",
    queEs: "Guantes resistentes para rastrillar, plantar, manejar estiércol y ramas.", uso: "Todo el año.",
    cantidad: "2 pares (uno para cada uno).", precio: "5-10 € el par",
    links: [ { t: "Ejemplo: Guantes de piel de vacuno Juba (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/guantes-juba-flor-vacuno-hps1lt-t10-85788757.html" } ] },
  { id: "bolsas", cat: "herramientas", nombre: "Bolsas grandes de jardín", aviso: "2026-10-12", tenerAntes: "2026-10-17",
    queEs: "Sacos de 250 L para hojas, hierba cortada y restos de poda.", uso: "Otoño (hojas) e invierno (poda).",
    cantidad: "1-2 (son reutilizables).", precio: "5-10 €",
    links: [ { t: "Ejemplo: Bolsa de jardín 250 L (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/bolsa-de-basura-de-jardin-de-70x60-cm-para-250l-81908399.html" } ] },
  { id: "kit-agua", cat: "piscina", nombre: "Kit para medir el agua de la piscina (pH y cloro)", aviso: "2026-10-09", tenerAntes: "2026-10-10",
    gamas: [
      { nivel: "Básica", nombre: "Kit líquido de pH y cloro", precio: "8-12 €", texto: "Fiable pero mide solo pH y cloro.", u: "https://www.leroymerlin.es/productos/kit-de-analisis-liquido-para-piscina-axton-18666914.html" },
      { nivel: "Lo que haría yo", nombre: "Tiras reactivas 6 en 1", precio: "10-15 €", texto: "Miden además dureza y alcalinidad, que con el agua de Novés importan mucho. Rápidas: mojar y comparar colores.", u: "https://www.manomano.es/p/analisis-de-agua-para-piscinas-paquete-de-2-tiras-reactivas-6-en-1-para-piscinas-y-spas-tiras-reactivas-para-cloro-cloro-libre-ph-alcalinidad-acido-cianurico-dureza-del-agua-100-unidades-228215084", recomendada: true },
      { nivel: "Si quieres más", nombre: "Analizador digital", precio: "30-80 €", texto: "Da el número exacto sin interpretar colores. Útil si pasamos la piscina a sal o en verano con mucho uso. Necesita calibración.", u: "https://www.obramat.es/productos/analizador-digital-scuba-2-25058126.html" }
    ],
        queEs: "Reactivos para saber el pH y el cloro del agua. Imprescindible para echar productos con cabeza en vez de a ojo.",
    uso: "Invernaje y toda la temporada de baño.", cantidad: "1 kit.", precio: "8-15 €",
    links: [ { t: "Ejemplo: Kit de análisis líquido para piscina Axton (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/kit-de-analisis-liquido-para-piscina-axton-18666914.html" },
             { t: "Alternativa: tiras 6 en 1 que miden también dureza y alcalinidad (ManoMano)", u: "https://www.manomano.es/p/analisis-de-agua-para-piscinas-paquete-de-2-tiras-reactivas-6-en-1-para-piscinas-y-spas-tiras-reactivas-para-cloro-cloro-libre-ph-alcalinidad-acido-cianurico-dureza-del-agua-100-unidades-228215084" } ],
    nota: "Compra las tiras 6 en 1: miden también dureza y alcalinidad, que con el agua de Novés importan." },
  { id: "abono-frutales", cat: "frutales", nombre: "Abono granulado para frutales", aviso: "2026-10-12", tenerAntes: "2027-03-06", uso: "Al hinchar las yemas (marzo) y a la caída de la flor (abril).",
    queEs: "Abono para echar al suelo alrededor de los frutales cuando arrancan en primavera.",
    cantidad: "1-2 kg para todos los árboles.", precio: "6-10 €",
    links: [ { t: "Ejemplo: Abono granulado Compo para huerta y frutales 1 kg (Leroy Merlin)", u: "https://www.leroymerlin.es/productos/abono-granulado-compo-para-huerta-y-frutales-1kg-para-uso-ecologico-16331483.html" } ] },
  { id: "minorador-ph", cat: "piscina", nombre: "Reductor de pH líquido (Axton \"– pH\", 5 L)", aviso: "2026-10-09", tenerAntes: "2026-10-10",
    queEs: "Ácido diluido para bajar el pH. Con el agua dura de Novés el pH sube solo: lo vas a usar toda la vida de la piscina.",
    uso: "Para tus 28 m³: unos 0,5 L baja 0,2 puntos. Máximo 1,5 L por tanda, diluido en un cubo.", cantidad: "Garrafa de 5 L (comprada).", precio: "10-20 €",
    links: [],
    nota: "Guardar separado del cloro, tapado y lejos de los perros. Nunca mezclarlos ni usar el mismo cubo." },
  { id: "cloro-choque", cat: "piscina", nombre: "Cloro rápido granulado (dicloro)", aviso: "2026-10-09", tenerAntes: "2026-10-10",
    queEs: "Cloro de disolución rápida para subir el cloro de golpe y matar algas. En la etiqueta: \"dicloro\" o \"dicloroisocianurato\", 55-60 %.",
    uso: "Para tus 28 m³: 550 g para recuperar agua verde; 300 g al invernar o de mantenimiento.", cantidad: "Un envase de 5 kg da para el choque, el invernaje y la temporada.", precio: "25-40 €",
    links: [],
    nota: "No uses hipoclorito cálcico: con agua tan dura deja más cal y enturbia. Siempre disuelto en un cubo, nunca a puñados al agua." },
  { id: "floculante", cat: "piscina", nombre: "Floculante líquido", aviso: "2026-10-09", tenerAntes: "2026-10-14",
    queEs: "Junta las partículas finas (algas muertas, polvo) en grumos que caen al fondo para aspirarlas al desagüe.",
    uso: "Solo si tras el choque el agua queda turbia.", cantidad: "Botella de 1-2 L.", precio: "8-15 €",
    links: [ { t: "Ver floculantes (Leroy Merlin)", u: "https://www.leroymerlin.es/search?q=floculante%20liquido%20piscina" } ],
    nota: "Barato y se conserva: mejor tenerlo ya que volver a la tienda a mitad de la recuperación." },
  { id: "invernador", cat: "piscina", nombre: "Invernador (alguicida de invierno)", aviso: "2026-10-09", tenerAntes: "2026-10-17",
    queEs: "Producto que se echa al cerrar la piscina para que no crezcan algas ni cal durante el invierno.",
    uso: "Una vez, al invernar.", cantidad: "Para tus 28 m³, la dosis de la etiqueta (con los habituales, 1-1,5 L).", precio: "15-25 €",
    links: [ { t: "Ver invernadores (Leroy Merlin)", u: "https://www.leroymerlin.es/search?q=invernador%20piscina" } ] },
  { id: "gasolina-nueva", cat: "herramientas", nombre: "Gasolina nueva para el cortacésped", grupo: "despues", aviso: "2027-02-24", tenerAntes: "2027-03-06",
    queEs: "Gasolina sin plomo normal. Se compra justo antes porque se degrada en 2-3 meses.", uso: "Primera siega de marzo.",
    cantidad: "5 L.", precio: "8-10 €", links: [] }
]
};
