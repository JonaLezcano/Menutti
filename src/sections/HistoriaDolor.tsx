import FadeIn from '../components/FadeIn';
import Eyebrow from '../components/Eyebrow';

/**
 * Ocupa el mismo lugar que `Problema` en la página principal: la sección
 * clara inmediatamente después del Hero, sobre `bg-paper-soft` y con la
 * perforación de ticket arriba, con el mismo ancho y escala tipográfica.
 * La diferencia es de contenido: acá se cuenta una escena concreta en vez
 * de plantear la pregunta general.
 */
export default function HistoriaDolor() {
  return (
    <section className="relative bg-paper-soft px-4 py-10 sm:py-16">
      <div className="ticket-perf ticket-perf--soft absolute inset-x-0 -top-1" aria-hidden="true" />

      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <Eyebrow>Un viernes cualquiera</Eyebrow>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
            Las 21:30 de un viernes, con la cocina llena.
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-ink-dim">
            <p>
              El teléfono no para. Tres chats abiertos al mismo tiempo, cada uno pidiendo algo
              distinto. En el apuro, cargás mal un pedido: falta el aderezo, sobra un extra que
              nadie pidió.
            </p>
            <p>
              Un cliente pregunta el precio y no le contestás a tiempo — se cansa de esperar y
              pide en otro lado. Al cierre no sabés cuánto vendiste de más ni qué se te fue mal
              cargado. Mañana se repite igual.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
