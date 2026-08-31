import { Check } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Eyebrow from '../components/Eyebrow';

const BENEFICIOS = [
  'Subís tu ticket promedio sin vender a más clientes.',
  'No sumás un gasto fijo que tengas que justificar todos los meses.',
  'Vos no tocás código ni administrás nada técnico.',
  'El pedido te sigue llegando por WhatsApp, como siempre.',
];

export default function Mantenimiento() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <Eyebrow>Mantenimiento</Eyebrow>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
            El mantenimiento se paga solo.
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-ink-dim">
            <p>
              <strong className="text-ink">$50.000 ARS por mes</strong>, un solo pago, cubre los
              dos planes (Básico y Pro) y todo el mantenimiento técnico — vos no tocás una línea
              de código.
            </p>
            <p>
              No lo pienses como un gasto fijo nuevo: pensalo como lo que ya estás perdiendo hoy
              sin upsells. Cada pedido que armás sin sugerirle nada más al cliente es ticket
              promedio que dejaste en la mesa. Con upsells automáticos en cada pedido, el
              aumento de ventas es lo que paga el mantenimiento — no es una cuenta aparte.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-7 rounded-2xl border border-cash/25 bg-cash-pale p-5 sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-cash">
              Ejemplo ilustrativo
            </p>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
              Si tu local recibe <strong>300 pedidos al mes</strong> y en 1 de cada 3 el upsell
              suma <strong>$1.500</strong> al ticket, eso son{' '}
              <strong className="text-cash">$150.000 extra por mes</strong> — tres veces el
              costo del mantenimiento.
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-ink-dimmer">
              El número real depende de tu carta, tus precios y tu volumen de pedidos; no es una
              proyección de resultados garantizados. Lo que no cambia es que el mecanismo (upsell
              automático en cada pedido) es el mismo que ya funciona en Crunchy Burger.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {BENEFICIOS.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-ink-dim">
                <Check size={17} className="mt-0.5 shrink-0 text-cash" />
                {b}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 border-t border-dashed border-ink-border-strong pt-6 text-[13.5px] leading-relaxed text-ink-dimmer">
            Más adelante, si querés dar el siguiente paso, Menutti también suma control de stock
            y gestión de caja — no hace falta decidir eso ahora.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
