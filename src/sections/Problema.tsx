import { TriangleAlert } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const AGITACION = [
  'Sin upsells sistemáticos, tu ticket promedio depende de la memoria de quien atiende.',
  'Sin métricas, tomás decisiones de tu local a ciegas — no sabés qué vender más ni cuándo.',
  'Mientras tanto, tu competencia ya le ofrece a sus clientes una experiencia de pedido más completa.',
];

export default function Problema() {
  return (
    <section className="relative bg-paper-soft px-4 py-16 sm:py-24">
      <div className="ticket-perf ticket-perf--soft absolute inset-x-0 -top-1" aria-hidden="true" />

      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
            Cada pedido que armás a mano por WhatsApp es una venta que se quedó corta.
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-ink-dim">
            <p>
              Tomás el pedido, confirmás el total, listo. No hay nada que le sugiera al cliente
              sumar una bebida, un extra o pasar a un combo más grande — salvo que alguien se
              acuerde de ofrecerlo en el momento. Y al final del día no sabés cuánto vendiste de
              más, qué producto se agotó primero, ni si hoy facturaste más o menos que el viernes
              pasado.
            </p>
            <p>
              No es que falte esfuerzo — es que falta un sistema. Cada pedido sin upsell es
              ticket promedio que quedó arriba de la mesa. Y esa plata no vuelve con el pedido
              siguiente: se pierde pedido por pedido, todos los días, sin que lo veas como una
              pérdida activa.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="mt-8 flex flex-col gap-3">
            {AGITACION.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-ink-border bg-paper-card px-4 py-3.5 text-[14.5px] leading-relaxed text-ink-soft"
              >
                <TriangleAlert size={18} className="mt-0.5 shrink-0 text-flame" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
