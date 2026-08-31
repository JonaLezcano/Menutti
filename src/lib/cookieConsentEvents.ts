export const OPEN_COOKIE_PREFERENCES_EVENT = 'menutti:open-cookie-preferences';
export const COOKIE_BANNER_VISIBILITY_EVENT = 'menutti:cookie-banner-visibility';

/** Llamado por el link "Preferencias de cookies" del Footer para reabrir
 * el panel del banner en cualquier momento, aunque ya haya un consentimiento
 * guardado. */
export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT));
}

/** Emitido por CookieConsentBanner cada vez que se muestra/oculta, para que
 * el botón flotante de WhatsApp se aparte mientras el banner ocupa la franja
 * inferior de la pantalla (evita que los dos floten superpuestos). */
export function notifyCookieBannerVisibility(visible: boolean) {
  window.dispatchEvent(new CustomEvent(COOKIE_BANNER_VISIBILITY_EVENT, { detail: visible }));
}
