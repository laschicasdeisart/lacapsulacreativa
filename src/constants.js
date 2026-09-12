export const SKOOL_URL = "https://www.skool.com/la-capsula-creativa-4067/plans";
export const SKOOL_ABOUT_URL = "https://www.skool.com/la-capsula-creativa-4067/about";
export const FLOWLY_DEMO_URL = "https://demo.flowlysystem.io/";
export const OFFER_DEADLINE = "30 de septiembre";
// Hora límite real de la oferta, usada por el countdown.
export const OFFER_DEADLINE_ISO = "2026-09-30T23:59:59+02:00";

// El cobro real en Skool es en USD. Mostramos un € aproximado (redondeado,
// tipo de cambio ~0.86) para el público español, siempre con una nota de
// conversión junto al precio — nunca solo el número en €.
export const PRICING = {
  standard: {
    label: "Estándar",
    usdMonthly: 22,
    usdYearly: 220,
    eurMonthlyApprox: 19,
    savedEur: 114,
  },
  premium: {
    label: "Premium",
    usdMonthly: 47,
    usdYearly: 400,
    eurMonthlyApprox: 40,
    savedEur: 228,
  },
};

// Precio real de Flowly por separado, usado para anclar el "te ahorras X€".
export const FLOWLY_PRICE_EUR_MONTHLY = 19;

// Valor reportado a Meta en el evento InitiateCheckout, para que coincida
// con el € aproximado que se muestra en la propia landing (no con el
// número en dólares que realmente cobra Skool).
export const META_INITIATE_CHECKOUT_VALUE = PRICING.standard.eurMonthlyApprox;
export const META_INITIATE_CHECKOUT_CURRENCY = "EUR";

export const SLIDES = {
  HERO: 0,
  PAIN: 1,
  COMBO: 2,
  FORYOU: 3,
  OFFER: 4,
  NUMBERS: 5,
  TESTIMONIALS: 6,
  FAQ: 7,
  CLOSING: 8,
};
export const TOTAL_SLIDES = Object.keys(SLIDES).length;
