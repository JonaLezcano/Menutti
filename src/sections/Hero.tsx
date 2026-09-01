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
      {/* Fondo real: captura de la propia Demo de Menutti funcionando
          (misma técnica que jflit.online — una foto/video real detrás
          del texto, no una ilustración). Dos archivos en vez de uno
          recortado a la fuerza por breakpoint: `demo-hero-mobile.webp`
          es un recorte más vertical pensado para pantallas angostas,
          `demo-hero.webp` es la versión ancha para tablet/desktop. */}
      {/* La captura trae su propio título/badges/botón "horneados" en los
          píxeles — a tamaño real de letra chocarían con el H1 nuevo como
          un texto fantasma duplicado. Un blur fuerte los disuelve en
          manchas de color (la técnica de foto-de-fondo desenfocada
          detrás de texto, no un descarte de la imagen real) y de paso
          da aire para que el wash de abajo necesite mucha menos opacidad
          — la foto sigue leyéndose, ahora como textura/ambiente en vez
          de competir letra contra letra. `scale` compensa el blur para
          que no se vea el halo transparente en el borde de la sección. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <img
          src={heroMobile}
          alt=""
          className="hero-media-mask--mobile block h-full w-full object-cover sm:hidden"
          style={{ objectPosition: '58% 30%', filter: 'blur(22px) saturate(1.15) brightness(1.05)', transform: 'scale(1.12)' }}
        />
        <img
          src={heroDesktop}
          alt=""
          className="hero-media-mask hidden h-full w-full object-cover sm:block"
          style={{ objectPosition: '82% 40%', filter: 'blur(26px) saturate(1.15) brightness(1.05)', transform: 'scale(1.12)' }}
        />
      </div>

      {/* Wash color papel sobre el área donde vive el texto — el mismo
          criterio de legibilidad que el scrim oscuro de jflit.online,
          pero en positivo: funde la foto hacia el papel claro de la
          Landing (en vez de a negro) para que el texto ink oscuro
          mantenga contraste AA. La propia captura de la Demo trae su
          título/badges/botón "horneados" en la imagen — el wash tiene
          que taparlos del todo (no solo atenuarlos) para que no se lean
          como un texto fantasma duplicado detrás del H1 nuevo. Dos
          variantes: mobile (radial, pareja, casi opaca — el recorte
          vertical no deja un costado "limpio" de UI) y desktop (lineal,
          se abre recién bien a la derecha, donde termina la UI horneada
          y sólo queda hamburguesa). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] sm:hidden"
        style={{
          background:
            'radial-gradient(95% 90% at 48% 40%, rgba(251,246,236,0.92) 0%, rgba(251,246,236,0.86) 55%, rgba(251,246,236,0.68) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] hidden sm:block"
        style={{
          // El piso no baja de 0.16: en pantallas muy anchas (>1600px) el
          // radio de la máscara no siempre llega a desvanecer del todo el
          // borde derecho de la foto, así que el wash nunca la deja del
          // todo cruda ahí — evita un parche oscuro pegado al borde.
          background:
            'linear-gradient(100deg, rgba(251,246,236,0.94) 0%, rgba(251,246,236,0.9) 48%, rgba(251,246,236,0.72) 66%, rgba(251,246,236,0.38) 82%, rgba(251,246,236,0.22) 92%, rgba(251,246,236,0.16) 100%)',
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
