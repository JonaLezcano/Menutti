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

/**
 * Comparativa Menutti vs. "Otros", reconstruida (3ra ronda) para calcar la
 * ESTRUCTURA real de la referencia "2 Points Infographic" — no solo el tono
 * de una curva. La referencia tiene: dos cápsulas de header con un rulo
 * decorativo chico pegado a cada una; una barra central alta tipo stadium
 * con "COMPARISON" rotado verticalmente que corre toda la altura de la
 * sección; un conector en horquilla que nace arriba de esa barra y se
 * separa en dos curvas hasta la base de cada cápsula; y DOS listas
 * paralelas sueltas (sin marco) debajo de cada cápsula.
 *
 * Eso obliga a pasar de "una sola lista de 5 filas comparativas" a DOS
 * columnas espejadas con el mismo patrón "lo tenés / no lo tenés" que usa
 * cualquier infografía comparativa: misma FILAS de contenido a cada lado,
 * pero Menutti con cuadrado flame sólido + check + título en `ink` fuerte,
 * y Otros con cuadrado outline + X + título en `ink-dim` (apagado, para que
 * no compita visualmente con la columna Menutti aunque el texto se repita
 * — es intencional, no un error de contenido).
 *
 * Paleta: `flame` para Menutti (mismo naranja del CTA principal), `ink`
 * para Otros. Nada de `cash` verde (reservado para "la plata que sube" en
 * otra sección, decisión de una ronda anterior). La barra central y la
 * horquilla van en un neutro (`ink-border-strong` / `paper-card`), no en
 * el color de ninguna columna — así se lee como el eje neutral que arbitra
 * entre ambas, tal cual la referencia.
 *
 * Mobile (<640px): la barra alta + horquilla no entran con dos columnas
 * lado a lado, así que se arma un bloque totalmente aparte (apilado:
 * Menutti arriba, divisor horizontal con "Comparación", Otros abajo) en
 * vez de forzar el layout de desktop a un viewport angosto.
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

        {/* ---------- Desktop / tablet (>=640px): dos columnas + barra
            central alta con horquilla, calcando la referencia. ---------- */}
        <FadeIn delay={0.05} className="relative mt-14 hidden sm:block">
          {/* Barra central tipo stadium: absoluta, `inset-y-0` la estira a
              la altura total de este wrapper (cápsulas + listas), sin
              medir nada por JS — el wrapper no tiene alto propio, lo
              define el flujo normal de sus hijos (header + listas). */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-1/2 z-10 flex w-12 -translate-x-1/2 items-center justify-center rounded-full border border-ink-border-strong bg-paper-card shadow-sm md:w-14"
          >
            <span className="whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-ink [writing-mode:vertical-rl] rotate-180 md:text-xs">
              Comparación
            </span>
          </div>

          {/* Horquilla: nace arriba de la barra central y se separa hacia
              la base de cada cápsula — un solo trazo neutro por lado. */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[92px] w-full text-ink-border-strong md:h-[104px]"
            viewBox="0 0 400 92"
            preserveAspectRatio="none"
          >
            <path
              d="M200,92 C200,60 150,50 60,42.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M200,92 C200,60 250,50 349.5,42.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Cápsulas de header, cada una con su rulo decorativo pegado al
              costado que mira al centro. */}
          <div className="relative z-20 flex h-[92px] items-start justify-between md:h-[104px]">
            <div className="relative">
              <svg
                aria-hidden="true"
                viewBox="0 0 44 34"
                className="pointer-events-none absolute -right-6 -top-1 h-8 w-11 text-flame md:-right-7 md:h-9 md:w-12"
              >
                <path
                  d="M6,18 C14,18 18,18 18,10 C18,4 8,4 8,10 C8,15 14,16 22,14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <span className="relative inline-flex items-center justify-center rounded-full bg-flame px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-flame-text shadow-sm md:px-7 md:text-base">
                Menutti
              </span>
            </div>

            <div className="relative">
              <svg
                aria-hidden="true"
                viewBox="0 0 44 34"
                className="pointer-events-none absolute -left-6 -top-1 h-8 w-11 text-ink md:-left-7 md:h-9 md:w-12"
              >
                <path
                  d="M38,18 C30,18 26,18 26,10 C26,4 36,4 36,10 C36,15 30,16 22,14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <span className="relative inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-paper shadow-sm md:px-7 md:text-base">
                Otros
              </span>
            </div>
          </div>

          {/* Dos listas paralelas, sueltas (sin marco), a cada costado de
              la barra central. */}
          <div className="relative z-20 mt-8 grid grid-cols-2 gap-x-8 md:gap-x-16">
            <ul className="flex flex-col gap-5 pr-3 md:pr-8">
              {FILAS.map((fila) => (
                <li key={fila.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-flame">
                    <Check size={13} strokeWidth={3} className="text-flame-text" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-[15px] font-bold leading-snug text-ink">{fila.title}</h3>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-dim">{fila.body}</p>
                  </div>
                </li>
              ))}
              <li aria-hidden="true" className="mt-1 h-px w-16 bg-flame" />
            </ul>

            <ul className="flex flex-col gap-5 pl-3 md:pl-8">
              {FILAS.map((fila) => (
                <li key={fila.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-ink-border-strong">
                    <X size={12} strokeWidth={2.5} className="text-ink-dim" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-[15px] font-bold leading-snug text-ink-dim">{fila.title}</h3>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-dim">{fila.body}</p>
                  </div>
                </li>
              ))}
              <li aria-hidden="true" className="mt-1 h-px w-16 bg-ink" />
            </ul>
          </div>
        </FadeIn>

        {/* ---------- Mobile (<640px): apilado, con divisor horizontal
            "Comparación" en vez de la barra alta + horquilla. ---------- */}
        <div className="mt-8 flex flex-col gap-6 sm:hidden">
          <FadeIn delay={0.05}>
            <div className="relative inline-flex">
              <svg
                aria-hidden="true"
                viewBox="0 0 34 26"
                className="pointer-events-none absolute -right-5 -top-2 h-6 w-8 text-flame"
              >
                <path
                  d="M5,14 C11,14 14,14 14,8 C14,3 7,3 7,8 C7,11 11,12 17,11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <span className="relative inline-flex items-center justify-center rounded-full bg-flame px-3.5 py-2 font-display text-[11px] font-bold uppercase tracking-wide text-flame-text shadow-sm">
                Menutti
              </span>
            </div>

            <ul className="mt-5 flex flex-col gap-4">
              {FILAS.map((fila) => (
                <li key={fila.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-flame">
                    <Check size={13} strokeWidth={3} className="text-flame-text" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-[14px] font-bold leading-snug text-ink">{fila.title}</h3>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-ink-dim">{fila.body}</p>
                  </div>
                </li>
              ))}
              <li aria-hidden="true" className="mt-1 h-px w-16 bg-flame" />
            </ul>
          </FadeIn>

          <FadeIn delay={0.08} className="flex items-center gap-3">
            <span className="h-px flex-1 bg-ink-border-strong" />
            <span className="whitespace-nowrap rounded-full border border-ink-border-strong bg-paper-card px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-ink">
              Comparación
            </span>
            <span className="h-px flex-1 bg-ink-border-strong" />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative inline-flex">
              <svg
                aria-hidden="true"
                viewBox="0 0 34 26"
                className="pointer-events-none absolute -left-5 -top-2 h-6 w-8 text-ink"
              >
                <path
                  d="M29,14 C23,14 20,14 20,8 C20,3 27,3 27,8 C27,11 23,12 17,11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <span className="relative inline-flex items-center justify-center rounded-full bg-ink px-3.5 py-2 font-display text-[11px] font-bold uppercase tracking-wide text-paper shadow-sm">
                Otros
              </span>
            </div>

            <ul className="mt-5 flex flex-col gap-4">
              {FILAS.map((fila) => (
                <li key={fila.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-ink-border-strong">
                    <X size={12} strokeWidth={2.5} className="text-ink-dim" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-[14px] font-bold leading-snug text-ink-dim">{fila.title}</h3>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-ink-dim">{fila.body}</p>
                  </div>
                </li>
              ))}
              <li aria-hidden="true" className="mt-1 h-px w-16 bg-ink" />
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
