const PRODUCTS = [
  {
    id: 1,
    sku: "hb-hd-001",
    name: "HB Urban Hoodie",
    category: "Hoodies",
    gender: "hombre",
    condition: "Segunda mano seleccionada",
    price: 32990,
    description: "Hoodie urbana de USA en muy buen estado, ideal para uso diario.",
    sizes: ["S", "M", "L", "XL"],
    mainImage: "assets/products/hombre/hoodies/hb-hd-001-frente.jpg",
    images: ["assets/products/hombre/hoodies/hb-hd-001-frente.jpg", "assets/products/hombre/hoodies/hb-hd-001-espalda.jpg"]
  },
  {
    id: 2,
    sku: "hb-pan-001",
    name: "HB Cargo Pants",
    category: "Pantalones",
    gender: "hombre",
    condition: "Segunda mano seleccionada",
    price: 1000,
    description: "Pantalon cargo comodo y resistente con estilo streetwear.",
    sizes: ["28", "30", "32", "34", "36"],
    mainImage: "assets/products/hombre/pantalones/hb-pan-001-frente.jpg",
    images: ["assets/products/hombre/pantalones/hb-pan-001-frente.jpg"]
  },
  {
    id: 3,
    sku: "hb-pol-001",
    name: "HB Classic Tee",
    category: "Poleras",
    gender: "unisex",
    condition: "Nuevo",
    price: 15990,
    description: "Polera basica premium, corte comodo y facil de combinar.",
    sizes: ["S", "M", "L", "XL"],
    mainImage: "assets/products/unisex/poleras/hb-pol-001-frente.jpg",
    images: ["assets/products/unisex/poleras/hb-pol-001-frente.jpg", "assets/products/unisex/poleras/hb-pol-001-detalle-1.jpg"]
  },
  // {
  //   id: 4,
  //   sku: "hb-cha-001",
  //   name: "HB Oversize Jacket",
  //   category: "Chaquetas",
  //   gender: "mujer",
  //   condition: "Segunda mano seleccionada",
  //   price: 45990,
  //   description: "Chaqueta oversize importada desde USA, abrigada y versatil.",
  //   sizes: ["S", "M", "L"],
  //   mainImage: "assets/products/mujer/chaquetas/hb-cha-001-frente.jpg",
  //   images: ["assets/products/mujer/chaquetas/hb-cha-001-frente.jpg"]
  // },
  {
    id: 5,
    sku: "hb-sh-001",
    name: "HB Street Shorts",
    category: "Shorts",
    gender: "hombre",
    condition: "Nuevo",
    price: 19990,
    description: "Short de estilo urbano en excelente terminacion.",
    sizes: ["28", "30", "32", "34"],
    mainImage: "assets/products/hombre/shorts/hb-sh-001-frente.jpg",
    images: ["assets/products/hombre/shorts/hb-sh-001-frente.jpg"]
  },
  {
    id: 6,
    sku: "hb-acc-001",
    name: "HB Essential Cap",
    category: "Accesorios",
    gender: "unisex",
    condition: "Segunda mano seleccionada",
    price: 9990,
    description: "Gorra clasica original de USA, lista para uso.",
    sizes: ["Talla unica"],
    mainImage: "assets/products/unisex/accesorios/hb-acc-001-frente.jpg",
    images: ["assets/products/unisex/accesorios/hb-acc-001-frente.jpg"]
  },
  // {
  //   id: 7,
  //   sku: "hb-int-001",
  //   name: "HB Bra USA",
  //   category: "Interior",
  //   gender: "mujer",
  //   condition: "Segunda mano seleccionada",
  //   price: 1000,
  //   description: "Prenda interior importada, revisada y en muy buen estado.",
  //   sizes: ["32A", "32B", "34A", "34B", "36B"],
  //   mainImage: "assets/products/mujer/interior/hb-int-001-frente.jpeg",
  //   images: ["assets/products/mujer/interior/hb-int-001-frente.jpeg","assets/products/mujer/interior/hb-int-001-espalda.jpeg"]
  // },
  {
    id: 8,
    sku: "hb-blu-001",
    name: "Blusa Azul Corazones",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 1000,
    description: "Blusa azul con estampado de corazones, marca Socialite. Importada desde USA. Observacion: falta un boton.",
    sizes: ["L"],
    mainImage: "assets/products/mujer/blusas/hb-blu-001-frente.jpg",
    images: ["assets/products/mujer/blusas/hb-blu-001-frente.jpg"]
  },
  {
    id: 9,
    sku: "hb-blu-002",
    name: "Blusa Lila Estampado Hojas",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Blusa lila con estampado de hojas. Importada desde USA, en muy buen estado.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/blusas/hb-blu-002-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-blu-002-frente.jpg",
      "assets/products/mujer/blusas/hb-blu-002-espalda.jpg",
      "assets/products/mujer/blusas/hb-blu-002-detalle-1.jpg"
    ]
  },
  {
    id: 10,
    sku: "hb-blu-003",
    name: "Blusa Boho Anudada",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa boho con detalle anudado al medio, marca Wet Seal. Importada desde USA, en muy buen estado.",
    sizes: ["S"],
    mainImage: "assets/products/mujer/blusas/hb-blu-003-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-blu-003-frente.jpg",
      "assets/products/mujer/blusas/hb-blu-003-espalda.jpg"
    ]
  },
  {
    id: 11,
    sku: "hb-blu-004",
    name: "Blusa Floral Azul y Rosa",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Blusa floreada en tonos azul y rosa, marca Liz Claiborne. Importada desde USA, en muy buen estado.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/blusas/hb-blu-004-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-blu-004-frente.jpg",
      "assets/products/mujer/blusas/hb-blu-004-espalda.jpg",
      "assets/products/mujer/blusas/hb-blu-004-detalle.jpg"
    ]
  },
  {
    id: 12,
    sku: "hb-blu-005",
    name: "Blusa Verde Menta Encaje Espalda",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Blusa verde menta con detalle de encaje en la espalda, marca Candie's. Importada desde USA, en muy buen estado.",
    sizes: ["XS"],
    mainImage: "assets/products/mujer/blusas/hb-blu-005-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-blu-005-frente.jpg",
      "assets/products/mujer/blusas/hb-blu-005-espalda.jpg",
      "assets/products/mujer/blusas/hb-blu-005-detalle.jpg",
      "assets/products/mujer/blusas/hb-blu-005-detalle-1.jpg"
    ]
  },
  {
    id: 13,
    sku: "hb-blu-006",
    name: "Blusa Multicolor Amarillo Petroleo Fucsia",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa multicolor con tonos amarillos, verde petroleo y fucsia, marca Simply Vera. Importada desde USA, en muy buen estado.",
    sizes: ["L"],
    mainImage: "assets/products/mujer/blusas/hb-blu-006-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-blu-006-frente.jpg",
      "assets/products/mujer/blusas/hb-blu-006-espalda.jpg",
      "assets/products/mujer/blusas/hb-blu-006-detalle.jpg"
    ]
  },
  {
    id: 14,
    sku: "hb-blu-007",
    name: "Blusa Blanca Botones",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 1000,
    description: "Blusa blanca con botones, marca Milano. Importada desde USA. Observacion: falta un boton en la manga.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/blusas/hb-blu-007-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-blu-007-frente.jpg",
      "assets/products/mujer/blusas/hb-blu-007-espalda.jpg"
    ]
  },
  {
    id: 15,
    sku: "hb-blu-008",
    name: "Blusa Verde Limon Manga 3/4",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Blusa verde limon con manga 3/4. Importada desde USA, en muy buen estado.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/blusas/hb-blu-008-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-blu-008-frente.jpg",
      "assets/products/mujer/blusas/hb-blu-008-espalda.jpg"
    ]
  },
  {
    id: 16,
    sku: "hb-blu-011",
    name: "Blusa Estilo Hindu",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa de estilo hindu, marca Jones New York. Importada desde USA, en muy buen estado.",
    sizes: ["S"],
    mainImage: "assets/products/mujer/blusas/hb-blu-011-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-blu-011-frente.jpg",
      "assets/products/mujer/blusas/hb-blu-011-espalda.jpg",
      "assets/products/mujer/blusas/hb-blu-011-detalle.jpg"
    ]
  },
  {
    id: 17,
    sku: "hb-blu-012",
    name: "Camisa Morada",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Camisa morada elegante. Importada desde USA, en muy buen estado.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/blusas/hb-blu-012-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-blu-012-frente.jpg",
      "assets/products/mujer/blusas/hb-blu-012-espalda.jpg"
    ]
  },
  {
    id: 18,
    sku: "hb-blu-013",
    name: "Blusa Blanca Estampado en el Pecho",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa de polyester blanca con diseno en el pecho, marca Christie & Jill. Importada desde USA, en muy buen estado.",
    sizes: ["M"],
    mainImage: "assets/products/mujer/blusas/hb-blu-013-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-blu-013-frente.jpg",
      "assets/products/mujer/blusas/hb-blu-013-espalda.jpg",
      "assets/products/mujer/blusas/hb-blu-013-detalle.jpg"
    ]
  },
  {
    id: 19,
    sku: "hb-blu-014",
    name: "Blusa Rosa Cuello Caida",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa de polyester manga corta, color rosa claro con tela caida en el cuello. Importada desde USA, en muy buen estado.",
    sizes: ["L"],
    mainImage: "assets/products/mujer/blusas/hb-blu-014-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-blu-014-frente.jpg",
      "assets/products/mujer/blusas/hb-blu-014-espalda.jpg",
      "assets/products/mujer/blusas/hb-blu-014-detalle.jpg"
    ]
  },
  {
    id: 20,
    sku: "hb-blu-015",
    name: "Blusa Geometrica Negro y Rosa",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Blusa con estampado geometrico de pequenos triangulos sobre fondo negro y rosa, marca JNY. Importada desde USA, en muy buen estado.",
    sizes: ["M"],
    mainImage: "assets/products/mujer/blusas/hb-blu-015-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-blu-015-frente.jpg",
      "assets/products/mujer/blusas/hb-blu-015-espalda.jpg",
      "assets/products/mujer/blusas/hb-blu-015-detalle.jpg"
    ]
  },
  {
    id: 21,
    sku: "hb-blu-017",
    name: "Blusa Camisera Morada Estampada",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa camisera morada con estampado. Importada desde USA, en muy buen estado.",
    sizes: ["M"],
    mainImage: "assets/products/mujer/blusas/hb-blu-017-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-blu-017-frente.jpg",
      "assets/products/mujer/blusas/hb-blu-017-espalda.jpg"
    ]
  },
  {
    id: 22,
    sku: "hb-blu-018",
    name: "Camisa Morada a Rayas",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Camisa morada a rayas. Importada desde USA, en muy buen estado.",
    sizes: ["M"],
    mainImage: "assets/products/mujer/blusas/hb-blu-018-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-blu-018-frente.jpg",
      "assets/products/mujer/blusas/hb-blu-018-espalda.jpg"
    ]
  },
  {
    id: 23,
    sku: "hb-blu-019",
    name: "Camisa Playera Azul Hojas",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Camisa playera en tonos azulados con estampado de hojas, marca Allison Daley. Importada desde USA, en muy buen estado.",
    sizes: ["L"],
    mainImage: "assets/products/mujer/blusas/hb-blu-019-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-blu-019-frente.jpg",
      "assets/products/mujer/blusas/hb-blu-019-espalda.jpg",
      "assets/products/mujer/blusas/hb-blu-019-detalle.jpg"
    ]
  },
  {
    id: 24,
    sku: "hb-int-002",
    name: "Sostén Deportivo Fila Sport Negro",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo Fila Sport color negro, alto impacto racerback. Importado desde USA, en muy buen estado. Talla M en etiqueta.",
    sizes: ["M"],
    mainImage: "assets/products/mujer/interior/hb-int-002-frente.jpg",
    images: [
      "assets/products/mujer/interior/hb-int-002-frente.jpg",
      "assets/products/mujer/interior/hb-int-002-detalle.jpg"
    ]
  },
  {
    id: 25,
    sku: "hb-int-003",
    name: "Sostén Deportivo Jockey Activewear Estampado",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo Jockey Activewear con estampado amarillo y verde. Importado desde USA, en muy buen estado. Talla XL en etiqueta.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/interior/hb-int-003-frente.jpg",
    images: [
      "assets/products/mujer/interior/hb-int-003-frente.jpg",
      "assets/products/mujer/interior/hb-int-003-espalda.jpg",
      "assets/products/mujer/interior/hb-int-003-detalle.jpg",
      "assets/products/mujer/interior/hb-int-003-detalle-1.jpg"
    ]
  },
  {
    id: 26,
    sku: "hb-int-004",
    name: "Sostén Deportivo All in Motion Magenta",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo All in Motion color magenta con textura rib. Importado desde USA, en muy buen estado. Talla XL en etiqueta.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/interior/hb-int-004-frente.jpg",
    images: [
      "assets/products/mujer/interior/hb-int-004-frente.jpg",
      "assets/products/mujer/interior/hb-int-004-espalda.jpg",
      "assets/products/mujer/interior/hb-int-004-detalle.jpg"
    ]
  },
  {
    id: 27,
    sku: "hb-int-005",
    name: "Sostén Deportivo Gris Jaspeado Justice",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo gris jaspeado marca Justice, estilo racerback. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-int-005-frente.jpg",
    images: [
      "assets/products/mujer/interior/hb-int-005-frente.jpg",
      "assets/products/mujer/interior/hb-int-005-espalda.jpg",
      "assets/products/mujer/interior/hb-int-005-detalle.jpg"
    ]
  },
  {
    id: 28,
    sku: "hb-int-006",
    name: "Sostén Deportivo Gris Racerback",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo gris con espalda racerback y detalle perforado. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-int-006-frente.jpg",
    images: ["assets/products/mujer/interior/hb-int-006-frente.jpg"]
  },
  {
    id: 29,
    sku: "hb-int-007",
    name: "Sostén Deportivo Tie-Dye Morado Naranja",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo tie-dye en tonos morado y naranja con tirantes cruzados en la espalda. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-int-007-frente.jpg",
    images: ["assets/products/mujer/interior/hb-int-007-frente.jpg"]
  },
  {
    id: 30,
    sku: "hb-int-008",
    name: "Sostén Deportivo Urban Kids Camuflaje",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo Urban Kids estampado camuflaje. Importado desde USA, en muy buen estado. Talla M (10/12) en etiqueta.",
    sizes: ["10/12"],
    mainImage: "assets/products/mujer/interior/hb-int-008-frente.jpg",
    images: [
      "assets/products/mujer/interior/hb-int-008-frente.jpg",
      "assets/products/mujer/interior/hb-int-008-detalle.jpg"
    ]
  },
  {
    id: 31,
    sku: "hb-int-009",
    name: "Sostén Deportivo Champion Negro Azul",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo Champion negro con detalle azul estampado, espalda racerback. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-int-009-frente.jpg",
    images: ["assets/products/mujer/interior/hb-int-009-frente.jpg"]
  },
  {
    id: 32,
    sku: "hb-int-010",
    name: "Sostén Tie-Dye Morado Encaje No Boundaries",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén tie-dye morado con panel de encaje en la espalda, marca No Boundaries. Importado desde USA, en muy buen estado. Talla XL en etiqueta.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/interior/hb-int-010-frente.jpg",
    images: [
      "assets/products/mujer/interior/hb-int-010-frente.jpg",
      "assets/products/mujer/interior/hb-int-010-detalle-1.jpg",
      "assets/products/mujer/interior/hb-int-010-detalle.jpg"
    ]
  },
  {
    id: 33,
    sku: "hb-int-011",
    name: "Sostén Deportivo Morado Jaspe",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo morado jaspe con espalda racerback fruncida. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-int-011-frente.jpg",
    images: ["assets/products/mujer/interior/hb-int-011-frente.jpg"]
  },
  {
    id: 34,
    sku: "hb-int-012",
    name: "Sostén Deportivo Nike Dri-FIT Estampado",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo Nike Dri-FIT con estampado azul y blanco. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-int-012-frente.jpg",
    images: ["assets/products/mujer/interior/hb-int-012-frente.jpg"]
  },
  {
    id: 35,
    sku: "hb-int-013",
    name: "Sostén Beige con Aro",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén beige con aro y copas moldeadas. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-int-013-frente.jpg",
    images: ["assets/products/mujer/interior/hb-int-013-frente.jpg"]
  },
  {
    id: 36,
    sku: "hb-int-014",
    name: "Bralette Intime Floral Blanco Morado",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Bralette Intime blanco con bordado floral morado y copa fija. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-int-014-frente.jpg",
    images: ["assets/products/mujer/interior/hb-int-014-frente.jpg"]
  },
  {
    id: 37,
    sku: "hb-int-015",
    name: "Sostén Encaje Rosa",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén de encaje floral en tono rosa malva. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-int-015-frente.jpg",
    images: ["assets/products/mujer/interior/hb-int-015-frente.jpg"]
  },
  {
    id: 38,
    sku: "hb-int-016",
    name: "Sostén Deportivo Leopardo Borde Neón",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo estampado leopardo con borde neón amarillo-verde. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-int-016-frente.jpg",
    images: ["assets/products/mujer/interior/hb-int-016-frente.jpg"]
  }
];

function formatCLP(value) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
  }).format(value);
}

function getImageUrl(path) {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;

  const cdn = typeof HB_CONFIG !== "undefined" ? HB_CONFIG.cdnBaseUrl : "";
  if (!cdn) return path;

  const cleanPath = path.replace(/^assets\//, "").replace(/^\//, "");
  return cdn.replace(/\/$/, "") + "/" + cleanPath;
}

function productCard(product) {
  const mainImageRaw = product.mainImage || (product.images && product.images.length > 0 ? product.images[0] : "");
  const mainImage = getImageUrl(mainImageRaw);
  const media = mainImage
    ? `<img class="card-image" src="${mainImage}" alt="${product.name}" loading="lazy" onerror="this.parentElement.innerHTML='Imagen pendiente';" />`
    : "Imagen pendiente";

  return `
    <article class="card">
      <div class="card-media">${media}</div>
      <div class="card-body">
        <p class="meta">${product.category}</p>
        <h3>${product.name}</h3>
        <p class="meta">${product.condition}</p>
        <p class="price">${formatCLP(product.price)}</p>
        <div class="actions">
          <a class="btn btn-secondary" href="producto.html?id=${product.id}">Ver detalle</a>
          <button class="btn btn-primary" type="button" data-add-id="${product.id}">Agregar</button>
        </div>
      </div>
    </article>
  `;
}
