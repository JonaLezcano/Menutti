import FadeIn from '../components/FadeIn';

export default function Problema() {
  return (
    <section className="relative bg-paper-soft px-4 py-10 sm:py-16">
      <div className="ticket-perf ticket-perf--soft absolute inset-x-0 -top-1" aria-hidden="true" />

      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
            ¿Seguís pensando en cómo facturar más?
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-ink-dim">
            <p>
              Da igual si tomás los pedidos a mano por WhatsApp o si ya tenés un menú online con
              link: los dos hacen exactamente lo mismo. El cliente entra, elige lo que ya venía a
              buscar, confirma el total y listo. Nadie le sugiere la bebida, el extra o el combo
              más grande, salvo que alguien se acuerde de ofrecerlo en el momento.
            </p>
            <p>
              Y al cierre del día pasa lo mismo en los dos casos: no sabés cuánto vendiste de
              más, qué producto se agotó primero, ni si hoy facturaste mejor o peor que el
              viernes pasado. La mayoría de los menús online son un catálogo con botón de
              WhatsApp. Digitalizan el pedido, pero no cambian el ticket.
            </p>
            <p>
              No es que falte esfuerzo, es que falta un sistema que trabaje mientras el cliente
              pide. Cada pedido sin upsell es menos plata en tu bolsillo.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
