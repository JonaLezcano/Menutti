import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { DEMO_URL } from '../config';

const LINKS = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#prueba', label: 'Prueba' },
  { href: '#faq', label: 'FAQ' },
];

/**
 * Centered floating pill nav, mismo patrón que jflit.online. Links son
 * anchors simples (el jump es instantáneo, no hay scroll-behavior:
 * smooth en ningún lado de la app — decisión deliberada, no un olvido).
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav
          className={`pointer-events-auto flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-full border border-ink-border-strong bg-paper-card/85 py-2 pl-5 pr-2 backdrop-blur-md transition-shadow ${
            scrolled ? 'shadow-[0_14px_34px_rgba(32,24,16,0.16)]' : 'shadow-[0_10px_30px_rgba(32,24,16,0.08)]'
          }`}
          aria-label="Navegación principal"
        >
          <a href="#top" className="mr-2 flex items-center gap-1.5 font-display text-lg font-bold text-ink">
            Menutti
            <span className="inline-block h-[7px] w-[7px] animate-pulse rounded-full bg-flame" aria-hidden="true" />
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium text-ink-dim md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b-2 border-transparent py-2 transition-colors hover:border-flame hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={DEMO_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden rounded-full bg-flame px-5 py-2.5 text-[13.5px] font-semibold text-flame-text transition-colors hover:bg-flame-soft md:inline-block"
          >
            Ver demo
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-sheet"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-border-strong text-ink md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
            <span className="sr-only">Abrir menú</span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-sheet"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-paper px-8 md:hidden"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink-border py-4 font-display text-2xl font-semibold text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block w-fit rounded-full bg-flame px-6 py-3 text-sm font-semibold text-flame-text"
            >
              Ver demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
