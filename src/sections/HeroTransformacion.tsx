import FadeIn from '../components/FadeIn';
import CtaGroup from '../components/CtaGroup';
import heroDesktop from '../assets/hero/demo-hero.webp';
import heroMobile from '../assets/hero/demo-hero-mobile.webp';

/**
 * Hero de la landing "transformación". Mismo criterio que `HeroDolor`:
 * calca la estructura del Hero principal (foto de fondo, scrims, texto a
 * una columna sobre `bg-ink`) y solo cambia el copy al del ángulo. La
 * comanda ilustrada (`ReceiptCard`) pasó a `TicketPromedioTransformacion`,
 * la sección de abajo, donde acompaña al argumento del ticket promedio en
 * vez de competir con la foto del Hero.
 */
export default function HeroTransformacion() {
  return (
    <section
      id="top"
      className="relative min-h-[600px] overflow-hidden bg-ink px-4 pb-10 pt-32 sm:min-h-[620px] sm:pb-16 sm:pt-40 lg:min-h-[680px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <img
          src={heroMobile}
          alt=""
          className="hero-media-mask--mobile block h-full w-full object-cover sm:hidden"
          style={{ objectPosition: '50% 50%', filter: 'blur(2px) saturate(1.05) brightness(1.05)', transform: 'scale(1.03)' }}
        />
        <img
          src={heroDesktop}
          alt=""
          className="hero-media-mask hidden h-full w-full object-cover sm:block"
          style={{ objectPosition: '50% 45%', filter: 'blur(2px) saturate(1.05) brightness(1.05)', transform: 'scale(1.03)' }}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] sm:hidden"
        style={{
          background:
            'radial-gradient(92% 92% at 50% 42%, rgba(32,24,16,0.90) 0%, rgba(32,24,16,0.86) 62%, rgba(32,24,16,0.68) 86%, rgba(32,24,16,0.45) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] hidden sm:block"
        style={{
          background:
            'linear-gradient(100deg, rgba(32,24,16,0.92) 0%, rgba(32,24,16,0.82) 34%, rgba(32,24,16,0.55) 52%, rgba(32,24,16,0.26) 68%, rgba(32,24,16,0.12) 82%, rgba(32,24,16,0.06) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 text-left">
        <FadeIn delay={0.05}>
          <h1 className="font-display text-[clamp(2.3rem,6.4vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-paper">
            No se trata de tener un menú lindo. Se trata del ticket promedio
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="max-w-xl text-balance text-[15.5px] leading-relaxed text-paper/70 sm:text-base">
            Con los mismos pedidos que ya tenías, el mismo cliente termina gastando más.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <CtaGroup tone="paper" />
        </FadeIn>
      </div>
    </section>
  );
}
