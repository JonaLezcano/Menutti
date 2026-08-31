// Mismo número que usa JFL IT en sus otros sitios (1165013535, Buenos
// Aires), formato wa.me estándar: 54 (país) + 9 + número.
export const WHATSAPP_NUMBER = '5491165013535';

export function buildWhatsAppHref(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Mensaje precargado del botón flotante y del CTA secundario "Prefiero
// escribir antes" — mismo mensaje en Hero y Cierre para que sea
// reconocible como el mismo botón en toda la página (ver
// estructura-landing.md, sección 1 y 8).
export const WHATSAPP_DEFAULT_MESSAGE =
  'Hola! Vi la landing de Menutti y quiero saber más antes de pedir la demo.';

export const WHATSAPP_HREF = buildWhatsAppHref(WHATSAPP_DEFAULT_MESSAGE);
