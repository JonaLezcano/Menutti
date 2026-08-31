import FadeIn from '../components/FadeIn';
import Eyebrow from '../components/Eyebrow';
import DemoCta from '../components/DemoCta';

const PASOS = [
  {
    n: '01',
    title: 'El cliente entra a tu menú digital.',
    body: 'Con tu marca, tus fotos y tus precios — no una vidriera genérica.',
  },
  {
    n: '02',
    title: 'Arma su pedido y le aparecen sugerencias automáticas.',
    body: 'Una bebida, un extra, un combo más grande — en el momento justo del armado del pedido, sin que vos tengas que decir nada.',
  },
  {
    n: '03',
    title: 'Confirma y el pedido te llega directo al WhatsApp de siempre.',
    body: 'Armado, ordenado y con el upsell ya adentro — vos no cambiás cómo atendés.',
  },
  {
    n: '04',
    title: 'Vos mirás el panel y sabés exactamente qué pasó.',
    body: 'Qué se vendió más, cuánto subió el ticket promedio con los upsells, y cuánto facturaste hoy, esta semana y este mes.',
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <Eyebrow>De punta a punta</Eyebrow>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
            Así funciona, de punta a punta.
          </h2>
        </FadeIn>

        <div className="relative mt-10 flex flex-col gap-8">
          {/* Línea vertical punteada — la "cinta de comanda" conectando
              los 4 pasos, porque acá sí son un proceso real y ordenado
              (no un truco de numerar para decorar). */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-[19px] top-6 w-px border-l-2 border-dashed border-ink-border-strong sm:left-[23px]"
          />

          {PASOS.map((paso, i) => (
            <FadeIn key={paso.n} delay={i * 0.05}>
              <div className="relative flex gap-5">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-flame bg-paper-card font-mono text-[13px] font-semibold text-flame-deep sm:h-12 sm:w-12">
                  {paso.n}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                    {paso.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-[14.5px] leading-relaxed text-ink-dim">
                    {paso.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1} className="mt-12 flex justify-center sm:justify-start">
          <DemoCta />
        </FadeIn>
      </div>
    </section>
  );
}
