import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { WHATSAPP_HREF } from '../lib/whatsapp';
import { openCookiePreferences } from '../lib/cookieConsentEvents';

const LINKS = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#prueba', label: 'Prueba' },
  { href: '#faq', label: 'FAQ' },
];

const LEGAL_LINKS = [
  { href: '/privacidad.html', label: 'Política de Privacidad' },
  { href: '/cookies.html', label: 'Política de Cookies' },
  { href: '/terminos.html', label: 'Términos y Condiciones' },
  { href: '/aviso-legal.html', label: 'Aviso Legal' },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-border bg-paper-soft px-4 pb-20 pt-12 sm:pb-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 pb-10 sm:flex-row sm:justify-between">
        <div className="max-w-[30ch]">
          <span className="flex items-center gap-1.5 font-display text-lg font-bold text-ink">
            Menutti
            <span className="inline-block h-[7px] w-[7px] rounded-full bg-flame" aria-hidden="true" />
          </span>
          <p className="mt-2 text-sm text-ink-dimmer">
            El menú digital con upsells automáticos y panel de métricas para locales
            gastronómicos que ya venden por WhatsApp.
          </p>
        </div>

        <nav aria-label="Enlaces del sitio" className="flex flex-col gap-2 text-sm">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-ink-dim hover:text-flame-deep">
              {link.label}
            </a>
          ))}
        </nav>

        <nav aria-label="Legal" className="flex flex-col gap-2 text-sm">
          {LEGAL_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-ink-dim hover:text-flame-deep">
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={openCookiePreferences}
            className="text-left text-ink-dim hover:text-flame-deep"
          >
            Preferencias de cookies
          </button>
        </nav>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-dimmer">
            Hablemos
          </span>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-ink-border-strong px-4 py-2 text-sm font-medium text-ink-dim transition-colors hover:border-flame hover:text-flame-deep"
          >
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
        </div>
      </div>

      <p className="border-t border-ink-border pt-6 text-center font-mono text-[11px] text-ink-dimmer">
        © {new Date().getFullYear()} Menutti — un producto de JFL Estudio Digital.
      </p>
    </footer>
  );
}
