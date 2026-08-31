import { useEffect, useState } from 'react';
import { COOKIE_BANNER_VISIBILITY_EVENT } from '../lib/cookieConsentEvents';
import { WHATSAPP_HREF } from '../lib/whatsapp';
import WhatsAppIcon from './icons/WhatsAppIcon';

/**
 * Burbuja flotante de WhatsApp que acompaña el scroll de toda la home.
 * Se oculta mientras el banner de cookies está visible (franja inferior)
 * para que no queden dos elementos flotantes superpuestos — ver
 * `notifyCookieBannerVisibility` en CookieConsentBanner.tsx.
 */
export default function WhatsAppFloatingCta() {
  const [hiddenByBanner, setHiddenByBanner] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => setHiddenByBanner((e as CustomEvent<boolean>).detail);
    window.addEventListener(COOKIE_BANNER_VISIBILITY_EVENT, handler);
    return () => window.removeEventListener(COOKIE_BANNER_VISIBILITY_EVENT, handler);
  }, []);

  if (hiddenByBanner) return null;

  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer noopener"
      className="pearl-button pearl-button--whatsapp !fixed bottom-4 right-4 z-[35] sm:bottom-6 sm:right-6"
    >
      <span className="pearl-wrap !py-3 !pl-4 !pr-5">
        <span className="pearl-label">
          <WhatsAppIcon size={20} />
          Escribinos
        </span>
      </span>
    </a>
  );
}
