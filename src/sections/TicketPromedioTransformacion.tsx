import FadeIn from '../components/FadeIn';
import Eyebrow from '../components/Eyebrow';
import ReceiptCard from '../components/ReceiptCard';

/**
 * Ocupa el mismo lugar que `Problema` en la página principal: la sección
 * clara inmediatamente después del Hero, sobre `bg-paper-soft` con la
 * perforación de ticket arriba. Acá el argumento no es el caos sino el
 * ticket promedio, así que la comanda ilustrada (`ReceiptCard`) hace de
 * prueba visual al costado del texto.
 */
export default function TicketPromedioTransformacion() {
  return (
    <section className="relative bg-paper-soft px-4 py-10 sm:py-16">
      <div className="ticket-perf ticket-perf--soft absolute inset-x-0 -top-1" aria-hidden="true" />

      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <FadeIn>
            <Eyebrow>El mismo pedido, más alto</Eyebrow>
            <h2 className="mt-3 font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
              El upsell no cambia cuántos pedidos entran. Cambia cuánto deja cada uno.
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-ink-dim">
              <p>
                Una bebida que nadie ofreció, un extra que el cliente hubiera aceptado, el combo
                más grande que ni apareció en la conversación. Ahí está la diferencia entre lo que
                facturás hoy y lo que podrías estar facturando con los mismos pedidos.
              </p>
              <p>
                Menutti lo sugiere solo, en el momento exacto en que el cliente está armando el
                pedido — cuando todavía está decidiendo, no cuando ya cerró.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <ReceiptCard />
        </FadeIn>
      </div>
    </section>
  );
}
