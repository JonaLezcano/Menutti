import FadeIn from '../components/FadeIn';
import Eyebrow from '../components/Eyebrow';
import dashboardImg from '../assets/prueba/dashboard.webp';

/**
 * Reutiliza tal cual la estructura/markup del bloque de panel que ya
 * existe en Prueba.tsx (la tarjeta con el badge "Datos de ejemplo" + la
 * imagen de dashboard), copiada acá con el copy propio de esta sección
 * (eyebrow, h2 y body distintos al de Prueba.tsx) — sin tocar Prueba.tsx.
 */
export default function DemoPanelTransformacion() {
  return (
    <section className="px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <Eyebrow>Tu panel, tus números</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
            Vos mirás el panel y sabés exactamente qué pasó.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-dim">
            Qué se vendió más, cuánto es tu ticket promedio con los upsells adentro, y cuánto
            facturaste hoy, esta semana y este mes — todo en un solo lugar.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <div className="grid gap-6 rounded-3xl border border-ink-border bg-paper-card p-5 sm:grid-cols-[1fr_1.3fr] sm:p-7">
            <div className="flex flex-col justify-center gap-3">
              <span className="w-fit rounded-full bg-cash-pale px-3 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-wide text-cash">
                Datos de ejemplo
              </span>
              <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Todo tu negocio, en un solo panel.
              </h3>
              <p className="text-[14.5px] leading-relaxed text-ink-dim">
                Productos más vendidos, ticket promedio, ventas generadas por upsell, facturación
                y cierres diarios, semanales y mensuales — con datos de ejemplo, no los reales del
                local, por privacidad.
              </p>
            </div>
            <div className="max-h-[440px] overflow-y-auto rounded-2xl border border-ink-border-strong">
              <img
                src={dashboardImg}
                alt="Panel de métricas de Menutti: productos más vendidos, ticket promedio, ventas por upsell y facturación."
                width={390}
                height={2693}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
