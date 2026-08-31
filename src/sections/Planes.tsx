import { Check } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Eyebrow from '../components/Eyebrow';
import DemoCta from '../components/DemoCta';
import { WHATSAPP_HREF } from '../lib/whatsapp';

export default function Planes() {
  return (
    <section id="planes" className="bg-paper-soft px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <Eyebrow>Planes</Eyebrow>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
            Elegí cómo entrar.
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <FadeIn>
            <div className="flex h-full flex-col gap-3 rounded-3xl border border-ink-border bg-paper-card p-6 sm:p-7">
              <span className="font-display text-lg font-bold text-ink">Básico</span>
              <p className="text-[14.5px] leading-relaxed text-ink-dim">
                Tu menú en un subdominio propio de Menutti (<code className="font-mono text-[13px] text-ink-soft">tulocal.menutti.online</code>).
              </p>
              <p className="text-[14.5px] leading-relaxed text-ink-dim">
                La entrada rápida y barata para arrancar ya, sin vueltas.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="relative flex h-full flex-col gap-3 rounded-3xl border-2 border-flame bg-paper-card p-6 shadow-[0_20px_40px_-24px_rgba(227,80,42,0.4)] sm:p-7">
              <span className="absolute -top-3 left-6 rounded-full bg-flame px-3 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-wide text-flame-text">
                Identidad completa
              </span>
              <span className="font-display text-lg font-bold text-ink">Pro</span>
              <p className="text-[14.5px] leading-relaxed text-ink-dim">
                Tu menú en el dominio propio de tu local.
              </p>
              <p className="text-[14.5px] leading-relaxed text-ink-dim">
                El diferencial de marca — tu local, tu URL, tu identidad completa.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <p className="mt-6 flex items-start gap-2.5 text-[14px] leading-relaxed text-ink-dim">
            <Check size={17} className="mt-0.5 shrink-0 text-cash" />
            A diferencia de otras soluciones que te mezclan en un link compartido con decenas de
            locales, el plan Pro te da una dirección 100% tuya.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-10 flex flex-col items-center gap-3 text-center">
          <DemoCta />
          <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer noopener" className="text-[13.5px] text-ink-dimmer underline decoration-ink-border-strong underline-offset-2 hover:text-flame-deep">
            ¿No sabés cuál te conviene? Hablalo por WhatsApp antes de decidir.
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
