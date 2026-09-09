import FadeIn from '../components/FadeIn';
import Eyebrow from '../components/Eyebrow';
import DemoCta from '../components/DemoCta';

/**
 * Bloque de promesa/solución, mismo patrón de sección centrada que
 * CierreBand pero sobre fondo claro (`bg-paper-soft`, como Problema /
 * Comparativa) — todavía no es el cierre final de la página, así que no
 * usa el tratamiento oscuro reservado para CierreBand.
 */
export default function PromesaDolor() {
  return (
    <section className="relative bg-paper-soft px-4 py-10 sm:py-16">
      <div className="ticket-perf ticket-perf--soft absolute inset-x-0 -top-1" aria-hidden="true" />

      <FadeIn className="mx-auto flex max-w-2xl flex-col items-start gap-5 text-left">
        <Eyebrow>La solución</Eyebrow>

        <h2 className="font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
          Tu propio canal de pedidos, ordenado — sin pagarle comisión a nadie.
        </h2>

        <p className="max-w-xl text-[15px] leading-relaxed text-ink-dim">
          Menutti no es una app de delivery que te cobra por pedido. Es tu menú, con tu marca, tu
          WhatsApp y tus precios. El cliente arma el pedido solo, vos lo recibís armado y listo
          para preparar.
        </p>

        <DemoCta className="mt-2" />
      </FadeIn>
    </section>
  );
}
