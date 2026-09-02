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
 * Comparativa Menutti vs. "Otros", en formato infografía de dos cápsulas
 * conectadas (inspirado en el layout "2 Points Infographic": dos headers
 * en pastilla unidos por líneas curvas a una etiqueta central) adaptado a
 * una comparación fila-por-fila en vez de dos listas independientes — acá
 * ambas cápsulas apuntan a la MISMA lista de features de abajo, no a
 * contenido propio cada una.
 *
 * Cápsula "Menutti" en `flame` (mismo naranja del botón "Pedir DEMO
 * AHORA", texto en `flame.text` ~4.7:1 AA). Cápsula "Otros" en `ink`
 * (texto `paper`, ~16:1) — a propósito NO en `cash` verde: el usuario ya
 * sacó el verde de esta sección en una ronda anterior (pidió pasar el
 * chip de cash a flame) y pidió explícitamente reservar `cash` para "la
 * plata que sube" en otra parte de la página, no para "la opción sin
 * destacar" acá. `ink` lee como neutro/apagado frente al flame, que es
 * exactamente la jerarquía que se busca: Menutti protagonista, Otros gris.
 *
 * Debajo, la lista de 5 features (sin duplicar contenido: un solo título
 * + body por fila, tal cual FILAS) con un cuadradito indicador a cada
 * lado en vez de los círculos de check/X de la versión anterior — el
 * cuadrado es el motivo de "bullet de color" de la referencia, adaptado a
 * indicador binario: cuadrado flame + check a la izquierda (Menutti sí),
 * cuadrado outline + X a la derecha (Otros no). Ninguno de los dos
 * indicadores depende solo del color: posición, forma (sólido vs.
 * outline) e ícono ya distinguen "sí" de "no" sin necesitar leer color.
 */
export default function Comparativa() {
  return (
    <section className="relative bg-paper-soft px-4 py-10 sm:py-16">
      <div className="ticket-perf ticket-perf--soft absolute inset-x-0 -top-1" aria-hidden="true" />

      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <Eyebrow>Comparación</Eyebrow>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
            Menutti vs. cualquier otro menú online.
          </h2>
        </FadeIn>

        {/* Header infográfico: dos cápsulas conectadas por líneas curvas
            a una pastilla central "Comparación" — el motivo visual de la
            referencia, aplicado a un layout de altura fija para que las
            curvas SVG y las pastillas queden ancladas entre sí en ambos
            breakpoints (solo cambian tamaños de fuente/paddings). */}
        <FadeIn delay={0.05} className="relative mx-auto mt-9 h-[104px] max-w-sm sm:mt-14 sm:h-36 sm:max-w-2xl">
          <svg
            className="absolute inset-0 h-full w-full text-ink-border-strong"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M18,30 C24,25 26,34 19,36 C11,38 9,29 17,29 C26,29 38,48 50,62"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M82,30 C76,25 74,34 81,36 C89,38 91,29 83,29 C74,29 62,48 50,62"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <span className="absolute left-0 top-0 z-10 rounded-full bg-flame px-3.5 py-2 font-display text-[11px] font-bold uppercase tracking-wide text-flame-text shadow-sm sm:px-7 sm:py-3 sm:text-base sm:tracking-wider">
            Menutti
          </span>
          <span className="absolute right-0 top-0 z-10 rounded-full bg-ink px-3.5 py-2 font-display text-[11px] font-bold uppercase tracking-wide text-paper shadow-sm sm:px-7 sm:py-3 sm:text-base sm:tracking-wider">
            Otros
          </span>
          <span className="absolute left-1/2 top-[62%] z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-paper shadow-sm sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.22em]">
            Comparación
          </span>
        </FadeIn>

        {/* Lista de features: una sola fila por feature (no se duplica
            contenido entre columnas), con indicador cuadrado a cada
            costado — flame/check alineado bajo la cápsula Menutti,
            outline/X alineado bajo la cápsula Otros. */}
        <FadeIn delay={0.1} className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
          {FILAS.map((fila) => (
            <div
              key={fila.title}
              className="flex items-center gap-3 rounded-2xl border border-ink-border bg-paper-card px-4 py-4 sm:gap-5 sm:px-6 sm:py-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-flame sm:h-11 sm:w-11 sm:rounded-xl">
                <Check size={18} strokeWidth={3} className="shrink-0 text-flame-text" aria-label="Menutti: sí" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-[14px] font-bold leading-snug text-ink sm:text-base">{fila.title}</h3>
                <p className="mt-0.5 text-[12px] leading-relaxed text-ink-dim sm:text-sm">{fila.body}</p>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ink-border bg-paper-soft sm:h-11 sm:w-11 sm:rounded-xl">
                <X size={16} strokeWidth={2.5} className="shrink-0 text-ink-dim" aria-label="Otros: no" />
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
