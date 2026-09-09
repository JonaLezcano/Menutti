import FadeIn from '../components/FadeIn';
import Eyebrow from '../components/Eyebrow';
import DemoCta from '../components/DemoCta';

export default function PromesaTransformacion() {
  return (
    <section className="relative bg-paper-soft px-4 py-10 sm:py-16">
      <div className="ticket-perf ticket-perf--soft absolute inset-x-0 -top-1" aria-hidden="true" />

      <FadeIn className="mx-auto flex max-w-2xl flex-col items-start gap-5 text-left">
        <Eyebrow>Se paga solo</Eyebrow>

        <h2 className="font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
          El sistema se paga solo con lo primero que vendas de más.
        </h2>

        <p className="max-w-xl text-[15px] leading-relaxed text-ink-dim">
          No es un gasto fijo más: es la plata que hoy se te escapa por no ofrecer el upsell en el
          momento justo. Con el primer puñado de pedidos, ya cubriste lo que cuesta tener Menutti.
        </p>

        <DemoCta className="mt-2" />
      </FadeIn>
    </section>
  );
}
