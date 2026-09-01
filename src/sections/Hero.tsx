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
      className="relative min-h-[600px] overflow-hidden bg-ink px-4 pb-16 pt-32 sm:min-h-[620px] sm:pt-40 lg:min-h-[680px]"
    >
      {/* Fondo real: foto profesional (IA) de una hamburguesa con bacon,
          moody food photography — plato oscuro sobre fondo negro, muy
          distinta a la foto real de cocina (fondo claro/madera) que este
          Hero usaba antes. Con un fondo así de oscuro, fundirla hacia un
          scrim claro (como se hacía antes, ver git history) generaba un
          corte duro entre el negro de la foto y el crema del scrim, o un
          gris sucio en la transición — se probó y se veía mal. En vez de
          pelear contra la foto, el Hero pasa a ser el segundo "momento
          oscuro" del sitio (el otro es CierreBand, ver su comentario):
          mismo texto claro (`text-paper`) y mismos tokens `ink`/`paper`
          que ya existían para esto, ningún color nuevo.
          Dos archivos por breakpoint, igual que antes: `demo-hero-mobile.webp`
          es un recorte angosto (640×768 del original 1408×768, centrado en
          la hamburguesa) para que en pantallas angostas no sobre negro de
          los costados; `demo-hero.webp` es el frame completo escalado para
          tablet/desktop, donde el objectPosition solo recorta un poco de
          alto. Blur mínimo + `scale` para tapar el halo, igual criterio que
          antes. */}
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

      {/* Scrim sobre el área donde vive el texto — mismo criterio de
          concentrarse donde está el bloque de texto y abrirse rápido hacia
          el resto del frame (para que la foto se vea cruda ahí, no lavada
          de punta a punta), pero ahora fundiendo hacia `ink` (oscuro) en
          vez de `paper` (claro): como la foto ya es casi negra de fondo,
          el scrim oscuro se integra sin costura en vez de generar el corte
          duro negro→crema que daba la versión clara. Texto en `paper`
          encima. Dos variantes: mobile (radial, centrado) y desktop
          (lineal, fuerte a la izquierda donde arranca el texto,
          transparente hacia la derecha donde solo queda hamburguesa). */}
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
        <FadeIn>
          <Eyebrow tone="ink">Para locales gastronómicos que ya venden por WhatsApp</Eyebrow>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="font-display text-[clamp(2.3rem,6.4vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-paper">
            El menú online que hace crecer tu negocio
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="max-w-xl text-balance text-[15.5px] leading-relaxed text-paper/70 sm:text-base">
            Menutti ayuda a convertir esas ventas en tickets más altos, con upsells automáticos
            que aumentan tus ganancias.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <CtaGroup tone="paper" />
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="flex items-center gap-2 text-[13.5px] text-paper/60">
            <CheckCircle2 size={16} className="shrink-0 text-cash-soft" />
            Ya funcionando en un local real — no es una promesa, es un caso real.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
