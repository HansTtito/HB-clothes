const HB_CONFIG = {
  apiBaseUrl: "https://pcqeipgl3m.execute-api.us-east-1.amazonaws.com",
  cdnBaseUrl: "https://hb-clothes-assets.s3.us-east-1.amazonaws.com",
  shippingOptions: {
    home: {
      id: "home",
      label: "Despacho a domicilio (Santiago)",
      shortLabel: "Domicilio",
      cost: 4000,
      description: "Coordinamos dia y horario por WhatsApp despues del pago.",
      requiresAddress: true
    },
    metro: {
      id: "metro",
      label: "Retiro en estacion de metro",
      shortLabel: "Retiro en metro",
      cost: 1000,
      description: "Indica tu estacion preferida. Coordinamos por WhatsApp el horario y cualquier cambio.",
      requiresAddress: true
    }
  },
  defaultShippingMethod: "home",
  currency: "CLP",
  brand: "HB Clothes",
  whatsapp: "56946154130"
};
