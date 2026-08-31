/**
 * URL de la demo interactiva real (menú + upsells + checkout de Crunchy
 * Burger). Todavía no tiene deploy propio — placeholder a actualizar por
 * Jonathan apenas exista la URL definitiva. Todos los botones "Pedir DEMO
 * AHORA" del sitio importan esta constante en vez de hardcodear el link,
 * así que actualizar acá alcanza para todo el sitio.
 */
export const DEMO_URL = 'https://menutti-demo.netlify.app';

/**
 * IDs de tracking, todavía sin completar. `src/lib/trackers.ts` solo
 * inyecta el script real de Google Analytics / Meta Pixel si el usuario
 * dio consentimiento (banner de cookies) Y el ID correspondiente acá no
 * está vacío — así que dejarlos así no carga nada de terceros todavía.
 * Completar cuando exista la cuenta real, ej. GA_MEASUREMENT_ID = 'G-XXXXXXX'.
 */
export const GA_MEASUREMENT_ID = '';
export const META_PIXEL_ID = '';
