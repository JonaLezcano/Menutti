import { Check, X } from 'lucide-react';
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

/** Grid compartido por el header (VS) y cada fila, para que la columna
 * vertebral central quede perfectamente alineada entre ambos. */
const GRID = 'grid grid-cols-[1fr_44px_1fr] gap-x-2 sm:grid-cols-[1fr_52px_1fr] sm:gap-x-3 md:grid-cols-[1fr_60px_1fr] md:gap-x-4';

/**
 * Comparativa Menutti vs. "Otros", 4ta ronda — calca la referencia "2
 * Points" tipo ribbon-chart de 2 columnas (no el modelo zigzag de steps,
 * descartado): dos cintas/pills horizontales por fila, con el extremo
 * exterior redondeado y el extremo interior (el que mira al centro)
 * cortado en punta de flecha; entre ambas, una columna vertebral vertical
 * con un nodo numerado por fila; arriba, un header con "Menutti" a la
 * izquierda, un ícono neutro "Otros" a la derecha y un círculo "VS" en
 * el medio.
 *
 * Contenido: NO hay porcentajes reales que comparar (Menutti es un
 * checklist binario, no una métrica), así que el "valor" de cada cinta no
 * se representa con un número inventado sino con el propio relleno: la
 * cinta Menutti va llena/sólida en `flame` (la tiene), la de Otros va
 * hueca/outline en `ink` (no la tiene) — mismo largo en ambas para no
 * insinuar ninguna cifra falsa, la diferencia es de relleno, no de
 * longitud. Título completo + bajada en las dos columnas: es el mismo
 * texto real del sitio (`FILAS`), atenuado del lado Otros porque no lo
 * ofrece.
 */
export default function Comparativa() {
  return (
    <section className="relative bg-paper-soft px-4 py-10 sm:py-16">
      <div className="ticket-perf ticket-perf--soft absolute inset-x-0 -top-1" aria-hidden="true" />

      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <Eyebrow>Comparación</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
            Menutti vs. cualquier otro menú online.
          </h2>
        </FadeIn>

        {/* ---------- Desktop / tablet (>=640px): ribbon-chart de 2
            columnas + columna vertebral central. ---------- */}
        <div className="mt-14 hidden sm:block">
          {/* Header: nombres + VS, sobre el mismo grid que las filas para
              que el círculo VS quede exactamente arriba de la columna
              vertebral. */}
          <FadeIn delay={0.05} className={`${GRID} items-end`}>
            <div className="text-right">
              <div className="inline-flex items-center gap-1.5 font-display text-xl font-bold text-ink md:text-2xl">
                Menutti
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-flame" aria-hidden="true" />
              </div>
              <p className="mt-1.5 text-[12.5px] leading-snug text-ink-dim md:text-sm">
                Tu marca, tus datos, a tu ritmo.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink-border-strong bg-paper-card font-mono text-[11px] font-bold uppercase tracking-wide text-ink-dim shadow-sm md:h-11 md:w-11">
                VS
              </span>
            </div>

            <div className="text-left">
              <div className="inline-flex items-center gap-1.5 font-display text-xl font-bold text-ink-dim md:text-2xl">
                <span className="inline-block h-2 w-2 rounded-full border border-ink-border-strong" aria-hidden="true" />
                Otros
              </div>
              <p className="mt-1.5 text-[12.5px] leading-snug text-ink-dim md:text-sm">
                Plantillas genéricas, siempre iguales.
              </p>
            </div>
          </FadeIn>

          {/* Filas: cada una es el mismo GRID, con la columna vertebral
              (línea continua + nodo numerado) corriendo detrás de todas. */}
          <div className="relative mt-2">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 bottom-4 w-px -translate-x-1/2 bg-ink-border-strong sm:left-[calc(50%)]"
            />

            <ul className="relative flex flex-col">
              {FILAS.map((fila, i) => (
                <FadeIn
                  key={fila.title}
                  delay={0.06 + i * 0.05}
                  as="li"
                  className={`${GRID} items-center py-3`}
                >
                  {/* Cinta Menutti: llena, pill afuera (izq), flecha hacia el centro (der) */}
                  <div className="relative">
                    <div className="relative flex min-h-[3.25rem] items-center gap-2.5 rounded-l-full bg-gradient-to-r from-flame-soft to-flame py-2.5 pl-5 pr-8 shadow-[0_14px_26px_-16px_rgba(185,60,29,0.75)] md:min-h-[3.75rem] md:gap-3 md:pl-6 md:pr-10">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 md:h-7 md:w-7">
                        <Check size={13} strokeWidth={3} className="text-flame-text" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 font-display text-[13px] font-bold leading-snug text-flame-text md:text-[15px]">
                        {fila.title}
                      </span>
                    </div>
                    <span
                      aria-hidden="true"
                      className="absolute right-0 top-1/2 h-6 w-4 -translate-y-1/2 translate-x-[65%] bg-flame-deep drop-shadow-[2px_2px_3px_rgba(185,60,29,0.4)] [clip-path:polygon(0%_0%,100%_50%,0%_100%)] md:h-7 md:w-5"
                    />
                    <p className="mt-2 pl-5 pr-8 text-[12px] leading-relaxed text-ink-dim md:pl-6 md:pr-10 md:text-[13px]">
                      {fila.body}
                    </p>
                  </div>

                  {/* Nodo de la columna vertebral */}
                  <div className="relative z-10 flex items-center justify-center self-stretch">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-border-strong bg-paper-soft font-mono text-[10.5px] font-bold text-ink-dim md:h-9 md:w-9 md:text-[11px]">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Cinta Otros: hueca/outline, pill afuera (der), flecha hacia el centro (izq) */}
                  <div className="relative">
                    <div className="relative flex min-h-[3.25rem] items-center gap-2.5 rounded-r-full border border-ink-border-strong bg-paper-card py-2.5 pl-8 pr-5 shadow-[0_10px_20px_-16px_rgba(32,24,16,0.3)] md:min-h-[3.75rem] md:gap-3 md:pl-10 md:pr-6">
                      <span className="min-w-0 font-display text-[13px] font-semibold leading-snug text-ink-dim md:text-[15px]">
                        {fila.title}
                      </span>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink-border-strong md:h-7 md:w-7">
                        <X size={12} strokeWidth={2.5} className="text-ink-dimmer" aria-hidden="true" />
                      </span>
                    </div>
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1/2 h-6 w-4 -translate-x-[65%] -translate-y-1/2 border-y border-l border-ink-border-strong bg-paper-card [clip-path:polygon(100%_0%,0%_50%,100%_100%)] md:h-7 md:w-5"
                    />
                    <p className="mt-2 pl-8 pr-5 text-right text-[12px] leading-relaxed text-ink-dim md:pl-10 md:pr-6 md:text-[13px]">
                      {fila.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </ul>

            <div className={`${GRID} pt-1`}>
              <span aria-hidden="true" className="col-start-2 mx-auto h-2 w-2 rounded-full bg-ink-border-strong" />
            </div>
          </div>

          <p className="mt-8 text-center text-[12px] text-ink-dim md:text-[13px]">
            Cinco cosas que Menutti resuelve de fábrica y el resto te deja armar por tu cuenta.
          </p>
        </div>

        {/* ---------- Mobile (<640px): apilado, sin columna vertebral —
            dos listas de cintas completas, una debajo de la otra. ---------- */}
        <div className="mt-8 flex flex-col gap-7 sm:hidden">
          <FadeIn delay={0.05}>
            <div className="inline-flex items-center gap-1.5 font-display text-lg font-bold text-ink">
              Menutti
              <span className="inline-block h-[7px] w-[7px] animate-pulse rounded-full bg-flame" aria-hidden="true" />
            </div>

            <ul className="mt-4 flex flex-col gap-4">
              {FILAS.map((fila) => (
                <li key={fila.title} className="relative">
                  <div className="flex min-h-[3rem] items-center gap-2.5 rounded-full bg-gradient-to-r from-flame-soft to-flame py-2.5 pl-4 pr-5 shadow-[0_12px_22px_-16px_rgba(185,60,29,0.75)]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <Check size={13} strokeWidth={3} className="text-flame-text" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 font-display text-[13px] font-bold leading-snug text-flame-text">
                      {fila.title}
                    </span>
                  </div>
                  <p className="mt-1.5 pl-4 text-[12px] leading-relaxed text-ink-dim">{fila.body}</p>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.08} className="flex items-center gap-3">
            <span className="h-px flex-1 bg-ink-border-strong" />
            <span className="whitespace-nowrap rounded-full border border-ink-border-strong bg-paper-card px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-ink-dim">
              vs
            </span>
            <span className="h-px flex-1 bg-ink-border-strong" />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-1.5 font-display text-lg font-bold text-ink-dim">
              <span className="inline-block h-[7px] w-[7px] rounded-full border border-ink-border-strong" aria-hidden="true" />
              Otros
            </div>

            <ul className="mt-4 flex flex-col gap-4">
              {FILAS.map((fila) => (
                <li key={fila.title} className="relative">
                  <div className="flex min-h-[3rem] items-center gap-2.5 rounded-full border border-ink-border-strong bg-paper-card py-2.5 pl-4 pr-5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink-border-strong">
                      <X size={12} strokeWidth={2.5} className="text-ink-dimmer" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 font-display text-[13px] font-semibold leading-snug text-ink-dim">
                      {fila.title}
                    </span>
                  </div>
                  <p className="mt-1.5 pl-4 text-[12px] leading-relaxed text-ink-dim">{fila.body}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
