import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import Eyebrow from '../components/Eyebrow';
import CtaGroup from '../components/CtaGroup';

/**
 * El cierre oscuro de una página por lo demás clara — mismo criterio
 * que la banda dorada de jflit.online (un golpe de color reservado para
 * el remate). El Hero también pasó a ser oscuro (foto de fondo casi
 * negra, ver su comentario en Hero.tsx), así que esto ya no es el único
 * momento oscuro del sitio, pero sigue siendo el único lugar donde se
 * usa AnimatedText: la frase de urgencia real (no un timer inventado)
 * se "escribe" a medida que se scrollea, como remate final.
 */
export default function CierreBand() {
  return (
    <section className="relative bg-ink px-4 py-16 sm:py-20">
      <div className="ticket-perf absolute inset-x-0 -top-1" aria-hidden="true" />

      <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
        <Eyebrow tone="ink">Antes de que se pierda otro pedido</Eyebrow>

        <AnimatedText
          text="Probá el sistema funcionando de verdad antes de decidir"
          className="font-display text-[clamp(1.7rem,4.4vw,2.75rem)] font-bold leading-[1.15] text-paper"
        />

        <p className="max-w-lg text-[15px] leading-relaxed text-paper/70">
          Cada día que pasa con la carta en WhatsApp es ticket promedio que no estás cobrando.
        </p>

        <CtaGroup tone="paper" className="mt-2 justify-center" />
      </FadeIn>
    </section>
  );
}
