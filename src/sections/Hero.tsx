import { CheckCircle2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Eyebrow from '../components/Eyebrow';
import CtaGroup from '../components/CtaGroup';
import ReceiptCard from '../components/ReceiptCard';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-32 sm:pt-40">
      {/* Wash cálido ambiental, fijo, no decorativo por sí solo: ancla el
          color flame en la parte más alta de la página desde el primer
          frame, antes de que aparezca en ningún botón. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]"
        style={{
          background:
            'radial-gradient(60% 55% at 82% 8%, rgba(227,80,42,0.14) 0%, rgba(227,80,42,0.05) 45%, transparent 75%)',
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col items-start gap-6 text-left">
          <FadeIn>
            <Eyebrow>Para locales gastronómicos que ya venden por WhatsApp</Eyebrow>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="font-display text-[clamp(2.3rem,6.4vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-ink">
              Tu carta de WhatsApp te está haciendo{' '}
              <span className="pain-highlight">perder plata en cada pedido.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="max-w-xl text-balance text-[15.5px] leading-relaxed text-ink-dim sm:text-base">
              Menutti convierte cada pedido en más ticket promedio, con upsells automáticos y
              métricas reales — el mismo sistema que ya funciona en Crunchy Burger.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <CtaGroup />
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="flex items-center gap-2 text-[13.5px] text-ink-dimmer">
              <CheckCircle2 size={16} className="shrink-0 text-cash" />
              Ya funcionando en Crunchy Burger — no es una promesa, es un caso real.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="flex justify-center lg:justify-end">
          <ReceiptCard />
        </FadeIn>
      </div>
    </section>
  );
}
