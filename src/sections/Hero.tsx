import { CheckCircle2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Eyebrow from '../components/Eyebrow';
import CtaGroup from '../components/CtaGroup';
import heroDesktop from '../assets/hero/demo-hero.webp';
import heroMobile from '../assets/hero/demo-hero-mobile.webp';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[600px] overflow-hidden px-4 pb-16 pt-32 sm:min-h-[620px] sm:pt-40 lg:min-h-[680px]"
    >
      {/* Fondo real: foto de una hamburguesa real (el mismo archivo que usa
          la Demo como fondo de su propio hero) — misma técnica que
          jflit.online: una foto real detrás del texto, con un scrim
          liviano encima para legibilidad, no un blur pesado que la
          disuelva en una mancha de color. Dos archivos en vez de uno
          recortado a la fuerza por breakpoint: `demo-hero-mobile.webp`
          es un recorte más vertical pensado para pantallas angostas,
          `demo-hero.webp` es la versión ancha para tablet/desktop. Un
          blur mínimo (apenas sensible) le saca dureza a los bordes del
          plato y separa un poco la foto del texto en foco, pero la
          hamburguesa se tiene que reconocer al toque. `scale` compensa
          el blur para que no se vea el halo transparente en el borde de
          la sección. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <img
          src={heroMobile}
          alt=""
          className="hero-media-mask--mobile block h-full w-full object-cover sm:hidden"
          style={{ objectPosition: '50% 38%', filter: 'blur(2px) saturate(1.08) brightness(1.02)', transform: 'scale(1.03)' }}
        />
        <img
          src={heroDesktop}
          alt=""
          className="hero-media-mask hidden h-full w-full object-cover sm:block"
          style={{ objectPosition: '68% 42%', filter: 'blur(2px) saturate(1.08) brightness(1.02)', transform: 'scale(1.03)' }}
        />
      </div>

      {/* Scrim sobre el área donde vive el texto — el mismo criterio de
          legibilidad que el degradé oscuro de jflit.online, pero en
          positivo: funde la foto hacia el papel claro de la Landing (en
          vez de a negro) para que el texto ink oscuro mantenga contraste
          AA. A diferencia del wash anterior (parejo en toda la imagen),
          este se concentra donde está el bloque de texto y se abre rápido
          hacia el resto del frame — así la foto se ve cruda ahí, no lavada
          de punta a punta. Dos variantes: mobile (radial, centrado en el
          bloque de texto que ocupa casi todo el ancho) y desktop (lineal,
          fuerte donde arranca el texto a la izquierda, transparente ya a
          mitad de camino donde sólo queda hamburguesa). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] sm:hidden"
        style={{
          background:
            'radial-gradient(92% 92% at 42% 48%, rgba(251,246,236,0.92) 0%, rgba(251,246,236,0.88) 62%, rgba(251,246,236,0.75) 86%, rgba(251,246,236,0.55) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] hidden sm:block"
        style={{
          background:
            'linear-gradient(100deg, rgba(251,246,236,0.94) 0%, rgba(251,246,236,0.86) 34%, rgba(251,246,236,0.58) 52%, rgba(251,246,236,0.28) 68%, rgba(251,246,236,0.12) 82%, rgba(251,246,236,0.06) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 text-left">
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
    </section>
  );
}
