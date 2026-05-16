const PRODUCTS = [
  // {
  //   id: 1,
  //   sku: "hb-hd-001",
  //   name: "HB Urban Hoodie",
  //   category: "Hoodies",
  //   gender: "hombre",
  //   condition: "Segunda mano seleccionada",
  //   price: 32990,
  //   description: "Hoodie urbana de USA en muy buen estado, ideal para uso diario.",
  //   sizes: ["S", "M", "L", "XL"],
  //   mainImage: "assets/products/hombre/hoodies/hb-hd-001-frente.jpg",
  //   images: ["assets/products/hombre/hoodies/hb-hd-001-frente.jpg", "assets/products/hombre/hoodies/hb-hd-001-espalda.jpg"]
  // },
  // {
  //   id: 2,
  //   sku: "hb-pan-001",
  //   name: "HB Cargo Pants",
  //   category: "Pantalones",
  //   gender: "hombre",
  //   condition: "Segunda mano seleccionada",
  //   price: 1000,
  //   description: "Pantalon cargo comodo y resistente con estilo streetwear.",
  //   sizes: ["28", "30", "32", "34", "36"],
  //   mainImage: "assets/products/hombre/pantalones/hb-pan-001-frente.jpg",
  //   images: ["assets/products/hombre/pantalones/hb-pan-001-frente.jpg"]
  // },
  // {
  //   id: 3,
  //   sku: "hb-pol-001",
  //   name: "HB Classic Tee",
  //   category: "Poleras",
  //   gender: "unisex",
  //   condition: "Nuevo",
  //   price: 15990,
  //   description: "Polera basica premium, corte comodo y facil de combinar.",
  //   sizes: ["S", "M", "L", "XL"],
  //   mainImage: "assets/products/unisex/poleras/hb-pol-001-frente.jpg",
  //   images: ["assets/products/unisex/poleras/hb-pol-001-frente.jpg", "assets/products/unisex/poleras/hb-pol-001-detalle-1.jpg"]
  // },
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
  // {
  //   id: 5,
  //   sku: "hb-sh-001",
  //   name: "HB Street Shorts",
  //   category: "Shorts",
  //   gender: "hombre",
  //   condition: "Nuevo",
  //   price: 19990,
  //   description: "Short de estilo urbano en excelente terminacion.",
  //   sizes: ["28", "30", "32", "34"],
  //   mainImage: "assets/products/hombre/shorts/hb-sh-001-frente.jpg",
  //   images: ["assets/products/hombre/shorts/hb-sh-001-frente.jpg"]
  // },
  // {
  //   id: 6,
  //   sku: "hb-acc-001",
  //   name: "HB Essential Cap",
  //   category: "Accesorios",
  //   gender: "unisex",
  //   condition: "Segunda mano seleccionada",
  //   price: 9990,
  //   description: "Gorra clasica original de USA, lista para uso.",
  //   sizes: ["Talla unica"],
  //   mainImage: "assets/products/unisex/accesorios/hb-acc-001-frente.jpg",
  //   images: ["assets/products/unisex/accesorios/hb-acc-001-frente.jpg"]
  // },
  // {
  //   id: 7,
  //   sku: "hb-muj-int-001",
  //   name: "HB Bra USA",
  //   category: "Interior",
  //   gender: "mujer",
  //   condition: "Segunda mano seleccionada",
  //   price: 1000,
  //   description: "Prenda interior importada, revisada y en muy buen estado.",
  //   sizes: ["32A", "32B", "34A", "34B", "36B"],
  //   mainImage: "assets/products/mujer/interior/hb-muj-int-001-frente.jpeg",
  //   images: ["assets/products/mujer/interior/hb-muj-int-001-frente.jpeg","assets/products/mujer/interior/hb-muj-int-001-espalda.jpeg"]
  // },
  // {
  //   id: 8,
  //   sku: "hb-muj-blu-001",
  //   name: "Blusa Azul Corazones",
  //   category: "Blusas",
  //   gender: "mujer",
  //   condition: "Segunda mano seleccionada",
  //   price: 1000,
  //   description: "Blusa azul con estampado de corazones, marca Socialite. Importada desde USA. Observacion: falta un boton.",
  //   sizes: ["L"],
  //   mainImage: "assets/products/mujer/blusas/hb-muj-blu-001-frente.jpg",
  //   images: ["assets/products/mujer/blusas/hb-muj-blu-001-frente.jpg"]
  // },
  {
    id: 9,
    sku: "hb-muj-blu-002",
    name: "Blusa Lila Estampado Hojas",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Blusa lila con estampado de hojas. Importada desde USA, en muy buen estado.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-002-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-002-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-002-espalda.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-002-detalle-1.jpg"
    ]
  },
  {
    id: 10,
    sku: "hb-muj-blu-003",
    name: "Blusa Boho Anudada",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa boho con detalle anudado al medio, marca Wet Seal. Importada desde USA, en muy buen estado.",
    sizes: ["S"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-003-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-003-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-003-espalda.jpg"
    ]
  },
  {
    id: 11,
    sku: "hb-muj-blu-004",
    name: "Blusa Floral Azul y Rosa",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Blusa floreada en tonos azul y rosa, marca Liz Claiborne. Importada desde USA, en muy buen estado.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-004-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-004-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-004-espalda.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-004-detalle.jpg"
    ]
  },
  {
    id: 12,
    sku: "hb-muj-blu-005",
    name: "Blusa Verde Menta Encaje Espalda",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Blusa verde menta con detalle de encaje en la espalda, marca Candie's. Importada desde USA, en muy buen estado.",
    sizes: ["XS"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-005-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-005-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-005-espalda.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-005-detalle.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-005-detalle-1.jpg"
    ]
  },
  {
    id: 13,
    sku: "hb-muj-blu-006",
    name: "Blusa Multicolor Amarillo Petroleo Fucsia",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa multicolor con tonos amarillos, verde petroleo y fucsia, marca Simply Vera. Importada desde USA, en muy buen estado.",
    sizes: ["L"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-006-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-006-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-006-espalda.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-006-detalle.jpg"
    ]
  },
  {
    id: 14,
    sku: "hb-muj-blu-007",
    name: "Blusa Blanca Botones",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 1000,
    description: "Blusa blanca con botones, marca Milano. Importada desde USA. Observacion: falta un boton en la manga.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-007-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-007-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-007-espalda.jpg"
    ]
  },
  {
    id: 15,
    sku: "hb-muj-blu-008",
    name: "Blusa Verde Limon Manga 3/4",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Blusa verde limon con manga 3/4. Importada desde USA, en muy buen estado.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-008-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-008-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-008-espalda.jpg"
    ]
  },
  {
    id: 16,
    sku: "hb-muj-blu-011",
    name: "Blusa Estilo Hindu",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa de estilo hindu, marca Jones New York. Importada desde USA, en muy buen estado.",
    sizes: ["S"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-011-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-011-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-011-espalda.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-011-detalle.jpg"
    ]
  },
  {
    id: 17,
    sku: "hb-muj-blu-012",
    name: "Camisa Morada",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Camisa morada elegante. Importada desde USA, en muy buen estado.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-012-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-012-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-012-espalda.jpg"
    ]
  },
  {
    id: 18,
    sku: "hb-muj-blu-013",
    name: "Blusa Blanca Estampado en el Pecho",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa de polyester blanca con diseno en el pecho, marca Christie & Jill. Importada desde USA, en muy buen estado.",
    sizes: ["M"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-013-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-013-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-013-espalda.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-013-detalle.jpg"
    ]
  },
  {
    id: 19,
    sku: "hb-muj-blu-014",
    name: "Blusa Rosa Cuello Caida",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa de polyester manga corta, color rosa claro con tela caida en el cuello. Importada desde USA, en muy buen estado.",
    sizes: ["L"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-014-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-014-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-014-espalda.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-014-detalle.jpg"
    ]
  },
  {
    id: 20,
    sku: "hb-muj-blu-015",
    name: "Blusa Geometrica Negro y Rosa",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Blusa con estampado geometrico de pequenos triangulos sobre fondo negro y rosa, marca JNY. Importada desde USA, en muy buen estado.",
    sizes: ["M"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-015-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-015-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-015-espalda.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-015-detalle.jpg"
    ]
  },
  {
    id: 21,
    sku: "hb-muj-blu-017",
    name: "Blusa Camisera Morada Estampada",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa camisera morada con estampado. Importada desde USA, en muy buen estado.",
    sizes: ["M"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-017-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-017-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-017-espalda.jpg"
    ]
  },
  {
    id: 22,
    sku: "hb-muj-blu-018",
    name: "Camisa Morada a Rayas",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Camisa morada a rayas. Importada desde USA, en muy buen estado.",
    sizes: ["M"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-018-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-018-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-018-espalda.jpg"
    ]
  },
  {
    id: 23,
    sku: "hb-muj-blu-019",
    name: "Camisa Playera Azul Hojas",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Camisa playera en tonos azulados con estampado de hojas, marca Allison Daley. Importada desde USA, en muy buen estado.",
    sizes: ["L"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-019-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-019-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-019-espalda.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-019-detalle.jpg"
    ]
  },
  {
    id: 24,
    sku: "hb-muj-int-002",
    name: "Sostén Deportivo Fila Sport Negro",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo Fila Sport color negro, alto impacto racerback. Importado desde USA, en muy buen estado. Talla M en etiqueta.",
    sizes: ["M"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-002-frente.jpg",
    images: [
      "assets/products/mujer/interior/hb-muj-int-002-frente.jpg",
      "assets/products/mujer/interior/hb-muj-int-002-frente-1.jpg",
      "assets/products/mujer/interior/hb-muj-int-002-espalda-1.jpg",
      "assets/products/mujer/interior/hb-muj-int-002-espalda-2.jpg"
    ]
  },
  {
    id: 25,
    sku: "hb-muj-int-003",
    name: "Sostén Deportivo Jockey Activewear Estampado",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo Jockey Activewear con estampado amarillo y verde. Importado desde USA, en muy buen estado. Talla XL en etiqueta.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-003-frente.jpg",
    images: [
      "assets/products/mujer/interior/hb-muj-int-003-frente.jpg",
      "assets/products/mujer/interior/hb-muj-int-003-espalda.jpg",
      "assets/products/mujer/interior/hb-muj-int-003-detalle.jpg",
      "assets/products/mujer/interior/hb-muj-int-003-detalle-1.jpg"
    ]
  },
  {
    id: 26,
    sku: "hb-muj-int-004",
    name: "Sostén Deportivo All in Motion Magenta",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo All in Motion color magenta con textura rib. Importado desde USA, en muy buen estado. Talla XL en etiqueta.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-004-frente.jpg",
    images: [
      "assets/products/mujer/interior/hb-muj-int-004-frente.jpg",
      "assets/products/mujer/interior/hb-muj-int-004-espalda.jpg",
      "assets/products/mujer/interior/hb-muj-int-004-detalle.jpg"
    ]
  },
  {
    id: 27,
    sku: "hb-muj-int-005",
    name: "Sostén Deportivo Gris Jaspeado Justice",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo gris jaspeado marca Justice, estilo racerback. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-005-frente.jpg",
    images: [
      "assets/products/mujer/interior/hb-muj-int-005-frente.jpg",
      "assets/products/mujer/interior/hb-muj-int-005-frente-1.jpg",
      "assets/products/mujer/interior/hb-muj-int-005-espalda.jpg"
    ]
  },
  {
    id: 28,
    sku: "hb-muj-int-006",
    name: "Sostén Deportivo Gris Racerback",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo gris con espalda racerback y detalle perforado. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-006-frente.jpg",
    images: ["assets/products/mujer/interior/hb-muj-int-006-frente.jpg"]
  },
  {
    id: 29,
    sku: "hb-muj-int-007",
    name: "Sostén Deportivo Tie-Dye Morado Naranja",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo tie-dye en tonos morado y naranja con tirantes cruzados en la espalda. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-007-frente.jpg",
    images: ["assets/products/mujer/interior/hb-muj-int-007-frente.jpg"]
  },
  {
    id: 30,
    sku: "hb-muj-int-008",
    name: "Sostén Deportivo Urban Kids Camuflaje",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo Urban Kids estampado camuflaje. Importado desde USA, en muy buen estado. Talla M (10/12) en etiqueta.",
    sizes: ["10/12"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-008-frente-1.jpg",
    images: [
      "assets/products/mujer/interior/hb-muj-int-008-frente-1.jpg",
      "assets/products/mujer/interior/hb-muj-int-008-espalda.jpg",
      "assets/products/mujer/interior/hb-muj-int-008-detalle-1.jpg",
      "assets/products/mujer/interior/hb-muj-int-008-detalle-2.jpg"
    ]
  },
  {
    id: 31,
    sku: "hb-muj-int-009",
    name: "Sostén Deportivo Champion Negro Azul",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo Champion negro con detalle azul estampado, espalda racerback. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-009-frente.jpg",
    images: ["assets/products/mujer/interior/hb-muj-int-009-frente.jpg"]
  },
  {
    id: 32,
    sku: "hb-muj-int-010",
    name: "Sostén Tie-Dye Morado Encaje No Boundaries",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén tie-dye morado con panel de encaje en la espalda, marca No Boundaries. Importado desde USA, en muy buen estado. Talla XL en etiqueta.",
    sizes: ["XL"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-010-frente.jpg",
    images: [
      "assets/products/mujer/interior/hb-muj-int-010-frente.jpg",
      "assets/products/mujer/interior/hb-muj-int-010-espalda.jpg",
      "assets/products/mujer/interior/hb-muj-int-010-detalle.jpg"
    ]
  },
  {
    id: 33,
    sku: "hb-muj-int-011",
    name: "Sostén Deportivo Morado Jaspe",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo morado jaspe con espalda racerback fruncida. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-011-frente.jpg",
    images: ["assets/products/mujer/interior/hb-muj-int-011-frente.jpg"]
  },
  {
    id: 34,
    sku: "hb-muj-int-012",
    name: "Sostén Deportivo Nike Dri-FIT Estampado",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo Nike Dri-FIT con estampado azul y blanco. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-012-frente.jpg",
    images: ["assets/products/mujer/interior/hb-muj-int-012-frente.jpg"]
  },
  {
    id: 35,
    sku: "hb-muj-int-013",
    name: "Sostén Beige con Aro",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén beige con aro y copas moldeadas. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-013-frente.jpg",
    images: ["assets/products/mujer/interior/hb-muj-int-013-frente.jpg"]
  },
  {
    id: 36,
    sku: "hb-muj-int-014",
    name: "Bralette Intime Floral Blanco Morado",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Bralette Intime blanco con bordado floral morado y copa fija. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-014-frente.jpg",
    images: ["assets/products/mujer/interior/hb-muj-int-014-frente.jpg"]
  },
  {
    id: 37,
    sku: "hb-muj-int-015",
    name: "Sostén Encaje Rosa",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén de encaje floral en tono rosa malva. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-015-frente.jpg",
    images: ["assets/products/mujer/interior/hb-muj-int-015-frente.jpg"]
  },
  {
    id: 38,
    sku: "hb-muj-int-016",
    name: "Sostén Deportivo Leopardo Borde Neón",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo estampado leopardo con borde neón amarillo-verde. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-016-frente.jpg",
    images: ["assets/products/mujer/interior/hb-muj-int-016-frente.jpg"]
  },
  {
    id: 39,
    sku: "hb-nin-pol-001",
    name: "Polera Niño Perezoso Verde",
    category: "Poleras",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Polera manga larga verde con estampado de perezoso y texto No Hurry No Worry. Importada desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/ninos/poleras/hb-nin-pol-001-frente.jpg",
    images: [
      "assets/products/ninos/poleras/hb-nin-pol-001-frente.jpg",
      "assets/products/ninos/poleras/hb-nin-pol-001-detalle.jpg"
    ]
  },
  {
    id: 40,
    sku: "hb-nin-por-001",
    name: "Polerón Niño Dinosaurios Member's Mark",
    category: "Polerones",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Polerón fleece naranja y azul con dinosaurios bordados, marca Member's Mark. Importado desde USA, en muy buen estado. Talla 8 en etiqueta.",
    sizes: ["8"],
    mainImage: "assets/products/ninos/polerones/hb-nin-por-001-frente.jpg",
    images: [
      "assets/products/ninos/polerones/hb-nin-por-001-frente.jpg",
      "assets/products/ninos/polerones/hb-nin-por-001-espalda.jpg",
      "assets/products/ninos/polerones/hb-nin-por-001-detalle.jpg",
      "assets/products/ninos/polerones/hb-nin-por-001-detalle-1.jpg"
    ]
  },
  {
    id: 41,
    sku: "hb-nin-pol-002",
    name: "Polera Niño Adidas Azul",
    category: "Poleras",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Polera corta azul con logo Adidas trefoil. Importada desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/ninos/poleras/hb-nin-pol-002-frente.jpg",
    images: [
      "assets/products/ninos/poleras/hb-nin-pol-002-frente.jpg",
      "assets/products/ninos/poleras/hb-nin-pol-002-espalda.jpg",
      "assets/products/ninos/poleras/hb-nin-pol-002-detalle.jpg"
    ]
  },
  {
    id: 42,
    sku: "hb-nin-pol-003",
    name: "Polera Niño Amarilla",
    category: "Poleras",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Polera corta amarilla lisa. Importada desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/ninos/poleras/hb-nin-pol-003-frente.jpg",
    images: [
      "assets/products/ninos/poleras/hb-nin-pol-003-frente.jpg",
      "assets/products/ninos/poleras/hb-nin-pol-003-espalda.jpg",
      "assets/products/ninos/poleras/hb-nin-pol-003-detalle.jpg"
    ]
  },
  {
    id: 43,
    sku: "hb-nin-por-002",
    name: "Polerón Niño Oso Morado",
    category: "Polerones",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Polerón morado con estampado de oso polar y texto beary loved. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/ninos/polerones/hb-nin-por-002-frente.jpg",
    images: [
      "assets/products/ninos/polerones/hb-nin-por-002-frente.jpg",
      "assets/products/ninos/polerones/hb-nin-por-002-espalda.jpg",
      "assets/products/ninos/polerones/hb-nin-por-002-detalle.jpg",
      "assets/products/ninos/polerones/hb-nin-por-002-detalle-1.jpg"
    ]
  },
  {
    id: 44,
    sku: "hb-nin-bod-001",
    name: "Body Bebé Rosa Manga Larga",
    category: "Bodies",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Body bebé rosa jaspe manga larga con puños blancos. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/ninos/bodies/hb-nin-bod-001-frente.jpg",
    images: [
      "assets/products/ninos/bodies/hb-nin-bod-001-frente.jpg",
      "assets/products/ninos/bodies/hb-nin-bod-001-espalda.jpg",
      "assets/products/ninos/bodies/hb-nin-bod-001-detalle.jpg"
    ]
  },
  {
    id: 45,
    sku: "hb-nin-bod-002",
    name: "Body Carter's Dinosaurio Azul 3M",
    category: "Bodies",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Body Carter's azul marino con dinosaurio Mighty Cute. Importado desde USA, en muy buen estado. Talla 3M en etiqueta.",
    sizes: ["3M"],
    mainImage: "assets/products/ninos/bodies/hb-nin-bod-002-frente.jpg",
    images: [
      "assets/products/ninos/bodies/hb-nin-bod-002-frente.jpg",
      "assets/products/ninos/bodies/hb-nin-bod-002-espalda.jpg"
    ]
  },
  {
    id: 46,
    sku: "hb-nin-pol-004",
    name: "Polera Niña Princesas Disney",
    category: "Poleras",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Polera rosa estampada Princesas Disney con cuello y mangas turquesa. Importada desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/ninos/poleras/hb-nin-pol-004-frente.jpg",
    images: ["assets/products/ninos/poleras/hb-nin-pol-004-frente.jpg"]
  },
  {
    id: 47,
    sku: "hb-nin-pij-001",
    name: "Pijama Bebé Lunares y Peces",
    category: "Pijamas",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Enterito pijama azul con lunares y bordado de peces, con cremallera frontal. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/ninos/pijamas/hb-nin-pij-001-frente.jpg",
    images: [
      "assets/products/ninos/pijamas/hb-nin-pij-001-frente.jpg",
      "assets/products/ninos/pijamas/hb-nin-pij-001-espalda.jpg"
    ]
  },
  {
    id: 48,
    sku: "hb-nin-pij-002",
    name: "Pijama Bebé Coronas Gerber",
    category: "Pijamas",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Enterito pijama rosa con coronas doradas y texto if the crown fits, marca Gerber. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/ninos/pijamas/hb-nin-pij-002-frente.jpg",
    images: [
      "assets/products/ninos/pijamas/hb-nin-pij-002-frente.jpg",
      "assets/products/ninos/pijamas/hb-nin-pij-002-espalda.jpg",
      "assets/products/ninos/pijamas/hb-nin-pij-002-detalle.jpg"
    ]
  },
  {
    id: 49,
    sku: "hb-nin-pan-001",
    name: "Pantalón Bebé Azul Marino",
    category: "Pantalones",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Pantalón bebé azul marino elasticado. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/ninos/pantalones/hb-nin-pan-001-frente.jpg",
    images: [
      "assets/products/ninos/pantalones/hb-nin-pan-001-frente.jpg",
      "assets/products/ninos/pantalones/hb-nin-pan-001-espalda.jpg"
    ]
  },
  {
    id: 50,
    sku: "hb-muj-blu-009",
    name: "Blusa Azul Floral Boho",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa azul manga larga con estampado floral y detalles geometricos. Importada desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-009-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-009-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-009-espalda.jpg"
    ]
  },
  {
    id: 51,
    sku: "hb-muj-blu-010",
    name: "Blusa Beige Forever 21",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa beige manga larga marca Forever 21, corte alto-bajo. Importada desde USA, en muy buen estado. Talla S en etiqueta.",
    sizes: ["S"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-010-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-010-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-010-espalda.jpg"
    ]
  },
  {
    id: 52,
    sku: "hb-muj-blu-016",
    name: "Blusa Patchwork Notations",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Blusa manga corta estilo patchwork floral y geometrico, marca Notations. Importada desde USA, en muy buen estado. Talla L en etiqueta.",
    sizes: ["L"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-016-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-016-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-016-espalda.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-016-detalle.jpg"
    ]
  },
  {
    id: 53,
    sku: "hb-muj-blu-020",
    name: "Blusa Sin Mangas Estampado Abstracto",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa sin mangas con estampado abstracto azul y negro, cuello drapeado. Importada desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-020-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-020-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-020-espalda.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-020-espalda-1.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-020-detalle-1.jpg"
    ]
  },
  {
    id: 54,
    sku: "hb-muj-blu-021",
    name: "Blusa Verde UPS & DOWNS",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa verde manga corta con hombreras, marca UPS & DOWNS. Importada desde USA, en muy buen estado. Talla M en etiqueta.",
    sizes: ["M"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-021-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-021-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-021-espalda.jpg"
    ]
  },
  {
    id: 55,
    sku: "hb-muj-blu-022",
    name: "Blusa Estampado Geometrico Tribal",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa manga corta con estampado geometrico tribal en tonos azul, naranja y verde. Importada desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-022-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-022-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-022-espalda.jpg"
    ]
  },
  {
    id: 56,
    sku: "hb-muj-blu-023",
    name: "Blusa Roja Mangas Acampanadas Masseus",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Blusa roja manga acampanada marca Masseus. Importada desde USA, en muy buen estado. Talla L en etiqueta.",
    sizes: ["L"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-023-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-023-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-023-frente-1.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-023-frente-2.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-023-espalda.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-023-espalda-2.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-023-detalle-1.jpg"
    ]
  },
  {
    id: 57,
    sku: "hb-muj-blu-024",
    name: "Blusa Teal H&M con Bolsillos",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa teal manga 3/4 con bolsillos delanteros, marca H&M. Importada desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-024-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-024-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-024-espalda.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-024-detalle.jpg"
    ]
  },
  {
    id: 58,
    sku: "hb-muj-blu-025",
    name: "Blusa Verde Oliva Bordada BCX",
    category: "Blusas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Blusa sin mangas verde oliva con bordado geometrico en el cuello, marca BCX. Importada desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/blusas/hb-muj-blu-025-frente.jpg",
    images: [
      "assets/products/mujer/blusas/hb-muj-blu-025-frente.jpg",
      "assets/products/mujer/blusas/hb-muj-blu-025-espalda.jpg"
    ]
  },
  {
    id: 59,
    sku: "hb-hom-cam-001",
    name: "Camisa Calvin Klein Cuadros Azul",
    category: "Camisas",
    gender: "hombre",
    condition: "Segunda mano seleccionada",
    price: 5000,
    description: "Camisa manga larga cuadros micro azul y blanco, marca Calvin Klein. Importada desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/hombre/camisa/hb-hom-cam-001-frente.jpg",
    images: [
      "assets/products/hombre/camisa/hb-hom-cam-001-frente.jpg",
      "assets/products/hombre/camisa/hb-hom-cam-001-espalda.jpg",
      "assets/products/hombre/camisa/hb-hom-cam-001-detalle-1.jpg",
      "assets/products/hombre/camisa/hb-hom-cam-001-detalle-2.jpg"
    ]
  },
  {
    id: 60,
    sku: "hb-muj-int-001",
    name: "Sostén Interior USA",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Prenda interior importada, revisada y en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-001-frente.jpeg",
    images: [
      "assets/products/mujer/interior/hb-muj-int-001-frente.jpeg",
      "assets/products/mujer/interior/hb-muj-int-001-espalda.jpeg"
    ]
  },
  {
    id: 61,
    sku: "hb-muj-int-017",
    name: "Sostén Deportivo New Balance Negro",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén deportivo New Balance negro con detalle blanco, espalda racerback. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-017-frente.jpg",
    images: [
      "assets/products/mujer/interior/hb-muj-int-017-frente.jpg",
      "assets/products/mujer/interior/hb-muj-int-017-espalda.jpg",
      "assets/products/mujer/interior/hb-muj-int-017-detalle.jpg"
    ]
  },
  {
    id: 62,
    sku: "hb-muj-int-018",
    name: "Sostén Rojo Rosas Negras",
    category: "Interior",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Sostén rojo con estampado de rosas negras, copa con aro. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/interior/hb-muj-int-018-frente.jpg",
    images: [
      "assets/products/mujer/interior/hb-muj-int-018-frente.jpg",
      "assets/products/mujer/interior/hb-muj-int-018-frente-1.jpg",
      "assets/products/mujer/interior/hb-muj-int-018-espalda.jpg",
      "assets/products/mujer/interior/hb-muj-int-018-espalda-2.jpg",
      "assets/products/mujer/interior/hb-muj-int-018-detalle.jpg",
      "assets/products/mujer/interior/hb-muj-int-018-detalle-2.jpg"
    ]
  },
  {
    id: 63,
    sku: "hb-muj-ves-001",
    name: "Vestido Blanco Lino Volados",
    category: "Vestidos",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 4000,
    description: "Vestido largo blanco estilo lino con escote en V, mangas con volados y falda en capas. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/vestidos/hb-muj-ves-001-frente.jpg",
    images: [
      "assets/products/mujer/vestidos/hb-muj-ves-001-frente.jpg",
      "assets/products/mujer/vestidos/hb-muj-ves-001-espalda.jpg",
      "assets/products/mujer/vestidos/hb-muj-ves-001-detalle.jpg"
    ]
  },
  {
    id: 64,
    sku: "hb-muj-cha-001",
    name: "Trench Largo Gris Oscuro",
    category: "Chaquetas",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 6000,
    description: "Trench / abrigo largo gris oscuro con botones y doble capucha. Corte elegante, importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/chaquetas/hb-muj-cha-001-frente.jpg",
    images: [
      "assets/products/mujer/chaquetas/hb-muj-cha-001-frente.jpg",
      "assets/products/mujer/chaquetas/hb-muj-cha-001-frente-2.jpg",
      "assets/products/mujer/chaquetas/hb-muj-cha-001-espalda.jpg",
      "assets/products/mujer/chaquetas/hb-muj-cha-001-detalle.jpg"
    ]
  },
  {
    id: 65,
    sku: "hb-muj-bat-001",
    name: "Bata Polar Menta Texturizada",
    category: "Bata",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 5000,
    description: "Bata polar larga color menta con textura de burbujas, cuello chal y bolsillos frontales. Importada desde USA, talla única en etiqueta. En excelente estado.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/bata/hb-muj-bat-001-frente.jpg",
    images: [
      "assets/products/mujer/bata/hb-muj-bat-001-frente.jpg",
      "assets/products/mujer/bata/hb-muj-bat-001-espalda.jpg"
    ]
  },
  {
    id: 66,
    sku: "hb-muj-ban-001",
    name: "Bikini Top Azul Racerback",
    category: "Ropa de Baño",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Top de bikini azul rey con espalda racerback y nudo frontal. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/ropa_bano/hb-muj-ban-001-frente.jpg",
    images: [
      "assets/products/mujer/ropa_bano/hb-muj-ban-001-frente.jpg",
      "assets/products/mujer/ropa_bano/hb-muj-ban-001-frente-2.jpg",
      "assets/products/mujer/ropa_bano/hb-muj-ban-001-frente-3.jpg",
      "assets/products/mujer/ropa_bano/hb-muj-ban-001-espalda.jpg",
      "assets/products/mujer/ropa_bano/hb-muj-ban-001-detalle.jpg",
      "assets/products/mujer/ropa_bano/hb-muj-ban-001-detalle-2.jpg"
    ]
  },
  {
    id: 67,
    sku: "hb-muj-ban-002",
    name: "Bikini Top Multicolor Étnico",
    category: "Ropa de Baño",
    gender: "mujer",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Top de bikini con estampado multicolor geométrico étnico (tonos rosa, turquesa, amarillo). Copa con refuerzo, tiras al cuello y detalle anudado. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/mujer/ropa_bano/hb-muj-ban-002-frente.jpg",
    images: [
      "assets/products/mujer/ropa_bano/hb-muj-ban-002-frente.jpg",
      "assets/products/mujer/ropa_bano/hb-muj-ban-002-frente-2.jpg",
      "assets/products/mujer/ropa_bano/hb-muj-ban-002-espalda.jpg",
      "assets/products/mujer/ropa_bano/hb-muj-ban-002-espalda-2.jpg",
      "assets/products/mujer/ropa_bano/hb-muj-ban-002-detalle.jpg"
    ]
  },
  {
    id: 68,
    sku: "hb-hom-pol-001",
    name: "Polar Columbia Azul Media Cremallera",
    category: "Poleras",
    gender: "hombre",
    condition: "Segunda mano seleccionada",
    price: 5000,
    description: "Polar Columbia azul marino con media cremallera y cuello alto. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/hombre/poleras/hb-hom-pol-001-frente.jpg",
    images: [
      "assets/products/hombre/poleras/hb-hom-pol-001-frente.jpg",
      "assets/products/hombre/poleras/hb-hom-pol-001-espalda.jpg",
      "assets/products/hombre/poleras/hb-hom-pol-001-detalle.jpg"
    ]
  },
  {
    id: 69,
    sku: "hb-hom-pan-001",
    name: "Pantalón Chino Beige",
    category: "Pantalones",
    gender: "hombre",
    condition: "Segunda mano seleccionada",
    price: 4000,
    description: "Pantalón chino beige / kaki, corte recto clásico. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/hombre/pantalones/hb-hom-pan-001-frente.jpg",
    images: [
      "assets/products/hombre/pantalones/hb-hom-pan-001-frente.jpg",
      "assets/products/hombre/pantalones/hb-hom-pan-001-espalda.jpg",
      "assets/products/hombre/pantalones/hb-hom-pan-001-detalle.jpg",
      "assets/products/hombre/pantalones/hb-hom-pan-001-detalle-2.jpg"
    ]
  },
  {
    id: 70,
    sku: "hb-hom-cha-001",
    name: "Chaqueta The North Face Azul HyVent",
    category: "Chaquetas",
    gender: "hombre",
    condition: "Segunda mano seleccionada",
    price: 10000,
    description: "Chaqueta cortaviento The North Face azul marino y gris, tecnología HyVent, capucha removible. Importada desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/hombre/chaquetas/hb-hom-cha-001-frente.jpg",
    images: [
      "assets/products/hombre/chaquetas/hb-hom-cha-001-frente.jpg",
      "assets/products/hombre/chaquetas/hb-hom-cha-001-espalda.jpg",
      "assets/products/hombre/chaquetas/hb-hom-cha-001-espalda-2.jpg",
      "assets/products/hombre/chaquetas/hb-hom-cha-001-detalle-1.jpg",
      "assets/products/hombre/chaquetas/hb-hom-cha-001-detalle-2.jpg"
    ]
  },
  {
    id: 71,
    sku: "hb-hom-cha-002",
    name: "Chaqueta Bomber Azul Marino",
    category: "Chaquetas",
    gender: "hombre",
    condition: "Segunda mano seleccionada",
    price: 5000,
    description: "Chaqueta estilo bomber / Harrington azul marino, cierre frontal, cuello con solapa. Importada desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/hombre/chaquetas/hb-hom-cha-002-frente.jpg",
    images: [
      "assets/products/hombre/chaquetas/hb-hom-cha-002-frente.jpg",
      "assets/products/hombre/chaquetas/hb-hom-cha-002-espalda.jpg",
      "assets/products/hombre/chaquetas/hb-hom-cha-002-detalle.jpg"
    ]
  },
  {
    id: 72,
    sku: "hb-hom-chv-001",
    name: "Chaleco Puffer Verde Petróleo",
    category: "Chalecos",
    gender: "hombre",
    condition: "Segunda mano seleccionada",
    price: 5000,
    description: "Chaleco acolchado puffer verde petróleo con cierre frontal, ultraligero. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/hombre/chaleco/hb-hom-chv-001-frente.jpg",
    images: [
      "assets/products/hombre/chaleco/hb-hom-chv-001-frente.jpg",
      "assets/products/hombre/chaleco/hb-hom-chv-001-espalda.jpg",
      "assets/products/hombre/chaleco/hb-hom-chv-001-detalle.jpg"
    ]
  },
  {
    id: 73,
    sku: "hb-nin-pol-005",
    name: "Polera Niña Unicornio Negra Cat&Jack",
    category: "Poleras",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Polera manga larga negra con unicornio multicolor neón, marca Cat & Jack. Importada desde USA, talla XL (14/16) en etiqueta.",
    sizes: ["XL (14/16)"],
    mainImage: "assets/products/ninos/poleras/hb-nin-pol-005-frente.jpg",
    images: [
      "assets/products/ninos/poleras/hb-nin-pol-005-frente.jpg",
      "assets/products/ninos/poleras/hb-nin-pol-005-frente-2.jpg",
      "assets/products/ninos/poleras/hb-nin-pol-005-espalda.jpg",
      "assets/products/ninos/poleras/hb-nin-pol-005-detalle.jpg"
    ]
  },
  {
    id: 74,
    sku: "hb-nin-pol-006",
    name: "Polera Niño Batman Gris DC",
    category: "Poleras",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Polera manga larga gris con estampado de Batman en amarillo, marca DC Comics. Importada desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/ninos/poleras/hb-nin-pol-006-frente.jpg",
    images: [
      "assets/products/ninos/poleras/hb-nin-pol-006-frente.jpg",
      "assets/products/ninos/poleras/hb-nin-pol-006-espalda.jpg",
      "assets/products/ninos/poleras/hb-nin-pol-006-detalle.jpg"
    ]
  },
  {
    id: 75,
    sku: "hb-nin-por-003",
    name: "Polerón Nike Astros World Series Azul",
    category: "Polerones",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Polerón azul marino Nike / Houston Astros World Series 2021, con capucha. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/ninos/polerones/hb-nin-por-003-frente.jpg",
    images: [
      "assets/products/ninos/polerones/hb-nin-por-003-frente.jpg",
      "assets/products/ninos/polerones/hb-nin-por-003-frente-2.jpg",
      "assets/products/ninos/polerones/hb-nin-por-003-espalda.jpg",
      "assets/products/ninos/polerones/hb-nin-por-003-espalda-2.jpg",
      "assets/products/ninos/polerones/hb-nin-por-003-detalle.jpg"
    ]
  },
  {
    id: 76,
    sku: "hb-nin-por-004",
    name: "Polerón Polar Azul Rey Cremallera",
    category: "Polerones",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 2000,
    description: "Polerón polar azul rey con capucha y cremallera frontal, detalle de corazones en mangas y bolsillos. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/ninos/polerones/hb-nin-por-004-frente.jpg",
    images: [
      "assets/products/ninos/polerones/hb-nin-por-004-frente.jpg",
      "assets/products/ninos/polerones/hb-nin-por-004-espalda.jpg",
      "assets/products/ninos/polerones/hb-nin-por-004-detalle.jpg"
    ]
  },
  {
    id: 77,
    sku: "hb-nin-por-005",
    name: "Polerón Nike Fútbol Americano Negro",
    category: "Polerones",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Polerón negro Nike con estampado gráfico de fútbol americano, bolsillo canguro. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/ninos/polerones/hb-nin-por-005-frente.jpg",
    images: [
      "assets/products/ninos/polerones/hb-nin-por-005-frente.jpg",
      "assets/products/ninos/polerones/hb-nin-por-005-espalda.jpg",
      "assets/products/ninos/polerones/hb-nin-por-005-detalle.jpg"
    ]
  },
  {
    id: 78,
    sku: "hb-nin-pij-003",
    name: "Pijama Set Gamer Polar Gris",
    category: "Pijamas",
    gender: "ninos",
    condition: "Segunda mano seleccionada",
    price: 3000,
    description: "Set de pijama polar: top gris con bordado de control de videojuegos + pantalón azul con estampado de gatos y consolas. Importado desde USA, en muy buen estado. Sin etiqueta de talla visible; consultar por WhatsApp.",
    sizes: ["Única"],
    mainImage: "assets/products/ninos/pijamas/hb-nin-pij-003-frente.jpg",
    images: [
      "assets/products/ninos/pijamas/hb-nin-pij-003-frente.jpg",
      "assets/products/ninos/pijamas/hb-nin-pij-003-frente-2.jpg",
      "assets/products/ninos/pijamas/hb-nin-pij-003-frente-3.jpg",
      "assets/products/ninos/pijamas/hb-nin-pij-003-detalle.jpg"
    ]
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
