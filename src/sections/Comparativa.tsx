import { CheckCircle2, Minus } from 'lucide-react';
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
 * 3 columnas angosta se rompe o queda ilegible por debajo de ~480px. Mismo
 * lenguaje visual que el resto del sitio: check en cash (la plata que
 * sube) para todo lo que Menutti resuelve, un guion neutro en gris para lo
 * que "los otros" no tienen — sin ✕ rojo, no es un ataque a la
 * competencia, es una foto de lo que falta.
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

        {/* Mobile: una card por feature, con las dos columnas lado a lado
            adentro de la card — nunca una tabla de 3 columnas apretada. */}
        <FadeIn delay={0.05} className="mt-8 flex flex-col gap-3 sm:hidden">
          {FILAS.map((fila) => (
            <div
              key={fila.title}
              className="rounded-2xl border border-ink-border bg-paper-card p-4"
            >
              <h3 className="text-[15px] font-semibold leading-snug text-ink">{fila.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-ink-dim">{fila.body}</p>
              <div className="mt-3.5 grid grid-cols-2 gap-2 border-t border-ink-border pt-3.5">
                <div className="flex items-center gap-2 rounded-xl bg-cash-pale px-3 py-2">
                  <CheckCircle2 size={16} className="shrink-0 text-cash" />
                  <span className="text-[12.5px] font-semibold text-cash">Menutti</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-paper px-3 py-2">
                  <Minus size={16} className="shrink-0 text-ink-dimmer" />
                  <span className="text-[12.5px] font-medium text-ink-dimmer">Otros</span>
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
                  <th scope="row" className="px-6 py-5 text-left font-normal">
                    <span className="block text-[15px] font-semibold leading-snug text-ink">{fila.title}</span>
                    <span className="mt-0.5 block text-[13px] leading-relaxed text-ink-dim">{fila.body}</span>
                  </th>
                  <td className="px-6 py-5 text-center">
                    <CheckCircle2 size={22} className="mx-auto shrink-0 text-cash" aria-label="Sí" />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Minus size={20} className="mx-auto shrink-0 text-ink-dimmer" aria-label="No" />
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
