import { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';
import { getConsent, setConsent } from '../lib/cookieConsent';
import { loadGoogleAnalytics, loadMetaPixel } from '../lib/trackers';
import {
  OPEN_COOKIE_PREFERENCES_EVENT,
  notifyCookieBannerVisibility,
} from '../lib/cookieConsentEvents';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(() => !getConsent());
  const [configuring, setConfiguring] = useState(false);
  const [analytics, setAnalytics] = useState(() => getConsent()?.analytics ?? false);
  const [marketing, setMarketing] = useState(() => getConsent()?.marketing ?? false);

  useEffect(() => {
    notifyCookieBannerVisibility(visible);
  }, [visible]);

  useEffect(() => {
    const stored = getConsent();
    if (stored?.analytics) loadGoogleAnalytics();
    if (stored?.marketing) loadMetaPixel();

    const reopen = () => {
      const current = getConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setConfiguring(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, reopen);
  }, []);

  const apply = (nextAnalytics: boolean, nextMarketing: boolean) => {
    setConsent(nextAnalytics, nextMarketing);
    if (nextAnalytics) loadGoogleAnalytics();
    if (nextMarketing) loadMetaPixel();
    setVisible(false);
    setConfiguring(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferencias de cookies"
      className="fixed inset-x-0 bottom-0 z-[998] border-t border-ink-border bg-paper-card/95 px-4 py-5 backdrop-blur sm:px-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4">
        <div className="flex items-start gap-3">
          <Cookie size={20} className="mt-0.5 shrink-0 text-flame" aria-hidden="true" />
          <p className="text-[13.5px] leading-relaxed text-ink-dim">
            Usamos cookies necesarias para que el sitio funcione. Si nos das tu ok, también
            usamos cookies de analítica y publicidad para entender qué contenido funciona.{' '}
            <a
              href="/cookies.html"
              className="underline decoration-ink-border-strong underline-offset-2 hover:text-flame"
            >
              Más info en la Política de Cookies
            </a>
            .
          </p>
        </div>

        {configuring && (
          <div className="grid gap-3 rounded-xl border border-ink-border bg-paper px-4 py-4 sm:grid-cols-3">
            <label className="flex items-start gap-2 text-[13px] text-ink-dimmer">
              <input type="checkbox" checked disabled className="mt-0.5 accent-flame" />
              <span>
                <span className="block font-medium text-ink-dim">Necesarias</span>
                Siempre activas — hacen que el sitio funcione.
              </span>
            </label>
            <label className="flex items-start gap-2 text-[13px] text-ink-dimmer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-0.5 accent-flame"
              />
              <span>
                <span className="block font-medium text-ink-dim">Analíticas</span>
                Nos ayudan a entender cómo se usa el sitio (Google Analytics).
              </span>
            </label>
            <label className="flex items-start gap-2 text-[13px] text-ink-dimmer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-0.5 accent-flame"
              />
              <span>
                <span className="block font-medium text-ink-dim">Marketing</span>
                Miden campañas de publicidad (Meta Pixel).
              </span>
            </label>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
          {configuring ? (
            <button type="button" onClick={() => apply(analytics, marketing)} className="pearl-button">
              <span className="pearl-wrap">
                <span className="pearl-label">Guardar preferencias</span>
              </span>
            </button>
          ) : (
            <button type="button" onClick={() => apply(true, true)} className="pearl-button">
              <span className="pearl-wrap">
                <span className="pearl-label">Aceptar todas</span>
              </span>
            </button>
          )}

          <button
            type="button"
            onClick={() => apply(false, false)}
            className="rounded-full border border-ink-border-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-flame hover:text-flame"
          >
            Rechazar no esenciales
          </button>

          {!configuring && (
            <button
              type="button"
              onClick={() => setConfiguring(true)}
              className="text-sm font-medium text-ink-dim underline decoration-ink-border-strong underline-offset-2 hover:text-flame"
            >
              Configurar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
