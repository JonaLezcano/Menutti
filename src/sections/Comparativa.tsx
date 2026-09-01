import { CheckCircle2, X } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Eyebrow from '../components/Eyebrow';

const FILAS = [
  {
    title: 'Ofrecer Upsells',
    body: 'Aumenta ticket promedio',
  },
  {
    title: 'Panel de control en vivo',
    body: 'Con datos reales de tu canal de venta',
  },
  {
    title: 'Dominio propio sin costo por 1 año',
    body: 'Tu marca, tu prestigio',
  },
  {
    title: 'Posibilidad de escalar el sistema',
    body: 'Podés agregar a tu panel Caja diaria y stock',
  },
  {
    title: 'Agregar funciones con Bots',
    body: 'Integralos a Instagram o WhatsApp',
  },
];

/**
 * Tabla comparativa Menutti vs. "Otros" — tabla real en desktop (semántica,
 * navegable con lector de pantalla) y cards apiladas en mobile (una por
 * feature, con las dos columnas lado a lado adentro), porque una tabla de
 * 3 columnas angosta se rompe o queda ilegible por debajo de ~480px. Cada
 * feature vive dentro de un chip sólido en `cash` (verde) — no `flame`:
 * con texto blanco encima, flame da ~3.9:1 de contraste (falla AA para
 * texto normal), cash da ~5.3:1. Fuera del chip, sobre el blanco de la
 * tabla: check verde bajo "Menutti", ✕ oscura bajo "Otros" — sin rojo, no
 * es un ataque a la competencia, es una foto de lo que falta.
 */
export default function Comparativa() {
  return (
    <section className="relative bg-paper-soft px-4 py-16 sm:py-24">
      <div className="ticket-perf ticket-perf--soft absolute inset-x-0 -top-1" aria-hidden="true" />

      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <Eyebrow>Comparación</Eyebrow>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
            Menutti vs. cualquier otro menú online.
          </h2>
        </FadeIn>

        {/* Mobile: una card por feature, chip sólido en cash a la izquierda
            (título + body en blanco) y check/✕ a la derecha — mismo
            lenguaje visual que la tabla de desktop. */}
        <FadeIn delay={0.05} className="mt-8 flex flex-col gap-3 sm:hidden">
          <div className="flex items-center justify-end gap-4 pr-1 text-[11px] font-semibold uppercase tracking-wide text-ink-dimmer" aria-hidden="true">
            <span className="text-cash">Menutti</span>
            <span>Otros</span>
          </div>
          {FILAS.map((fila) => (
            <div
              key={fila.title}
              className="flex items-stretch gap-2 rounded-2xl border border-ink-border bg-paper-card p-2"
            >
              <div className="flex min-w-0 flex-1 flex-col justify-center rounded-xl bg-cash px-3.5 py-3">
                <h3 className="text-[13.5px] font-semibold leading-snug text-white">{fila.title}</h3>
                <p className="mt-1 text-[11.5px] leading-relaxed text-white/70">{fila.body}</p>
              </div>
              <div className="flex w-[30%] shrink-0 grow-0 basis-[30%] items-center justify-center gap-2 rounded-xl bg-paper-soft">
                <div className="flex flex-1 items-center justify-center">
                  <CheckCircle2 size={18} className="shrink-0 text-cash" aria-label="Menutti: sí" />
                </div>
                <div className="h-6 w-px shrink-0 bg-ink-border" aria-hidden="true" />
                <div className="flex flex-1 items-center justify-center">
                  <X size={16} className="shrink-0 text-ink-dim" aria-label="Otros: no" />
                </div>
              </div>
            </div>
          ))}
        </FadeIn>

        {/* Desktop: tabla semántica real, dos columnas de estado a la
            derecha de cada feature. */}
        <FadeIn delay={0.05} className="mt-10 hidden overflow-hidden rounded-3xl border border-ink-border-strong bg-paper-card sm:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-ink-border">
                <th scope="col" className="px-6 py-4 text-[13px] font-medium uppercase tracking-wide text-ink-dimmer">
                  &nbsp;
                </th>
                <th scope="col" className="w-[140px] px-6 py-4 text-center font-display text-base font-bold text-flame-deep">
                  Menutti
                </th>
                <th scope="col" className="w-[140px] px-6 py-4 text-center text-[13px] font-medium uppercase tracking-wide text-ink-dimmer">
                  Otros
                </th>
              </tr>
            </thead>
            <tbody>
              {FILAS.map((fila, i) => (
                <tr key={fila.title} className={i !== FILAS.length - 1 ? 'border-b border-ink-border' : ''}>
                  <th scope="row" className="p-2 text-left font-normal align-middle">
                    <div className="flex h-full flex-col justify-center rounded-2xl bg-cash px-5 py-4">
                      <span className="block text-[15px] font-semibold leading-snug text-white">{fila.title}</span>
                      <span className="mt-0.5 block text-[13px] leading-relaxed text-white/70">{fila.body}</span>
                    </div>
                  </th>
                  <td className="px-6 py-5 text-center align-middle">
                    <CheckCircle2 size={22} className="mx-auto shrink-0 text-cash" aria-label="Sí" />
                  </td>
                  <td className="px-6 py-5 text-center align-middle">
                    <X size={20} className="mx-auto shrink-0 text-ink-dim" aria-label="No" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </div>
    </section>
  );
}
