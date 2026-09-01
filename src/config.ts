/**
 * URL de la demo interactiva real (menú + upsells + checkout de Crunchy
 * Burger). Todos los botones "PEDIR DEMO AHORA" del sitio importan esta
 * constante en vez de hardcodear el link, así que actualizar acá alcanza
 * para todo el sitio. Deployada en Vercel (Netlify quedó sin créditos de
 * producción en la cuenta del equipo JFL).
 */
export const DEMO_URL = 'https://menutti-demo.vercel.app';

/**
 * IDs de tracking, todavía sin completar. `src/lib/trackers.ts` solo
 * inyecta el script real de Google Analytics / Meta Pixel si el usuario
 * dio consentimiento (banner de cookies) Y el ID correspondiente acá no
 * está vacío — así que dejarlos así no carga nada de terceros todavía.
 * Completar cuando exista la cuenta real, ej. GA_MEASUREMENT_ID = 'G-XXXXXXX'.
 */
export const GA_MEASUREMENT_ID = '';
export const META_PIXEL_ID = '';
