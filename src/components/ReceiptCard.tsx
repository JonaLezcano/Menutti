import { motion } from 'framer-motion';

/**
 * El elemento de firma del sitio: una comanda digital estilizada, no una
 * captura ni un mockup de teléfono. Visualiza el mecanismo central de la
 * oferta (un upsell agrega una línea al pedido y el total sube) en el
 * primer segundo de la página — el "hero como tesis" que pide
 * frontend-design, con contenido real del mundo de Menutti (una comanda)
 * en vez de una ilustración genérica.
 *
 * Es explícitamente una pieza ilustrativa (números de ejemplo, redondeados
 * y no ligados a una captura real) — la prueba con capturas reales de
 * Crunchy Burger vive aparte, en la sección "Prueba".
 */
export default function ReceiptCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -5 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[300px] motion-safe:animate-ticket-float sm:max-w-[320px]"
    >
      <div className="ticket-perf" aria-hidden="true" />
      <div className="border-x border-ink-border-strong bg-paper-card px-5 pb-5 pt-4 shadow-[0_28px_50px_-20px_rgba(32,24,16,0.35)]">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.15em] text-ink-dimmer">
          <span className="font-semibold text-ink">Menutti</span>
          <span>Pedido #043</span>
        </div>

        <div className="my-3 border-t border-dashed border-ink-border-strong" />

        <ul className="flex flex-col gap-1.5 font-mono text-[12.5px] text-ink-soft">
          <li className="flex items-center justify-between">
            <span>1x Combo Doble Cheddar</span>
            <span className="tabular-nums">$8.900</span>
          </li>
          <li className="flex items-center justify-between">
            <span>1x Papas grandes</span>
            <span className="tabular-nums">$3.200</span>
          </li>
        </ul>

        <div className="my-3 border-t border-dashed border-ink-border-strong" />

        <div className="flex items-center justify-between rounded-lg bg-flame/10 px-2.5 py-2 font-mono text-[12.5px] text-flame-deep">
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-flame" />
            </span>
            + Upsell: Bebida 500ml
          </span>
          <span className="tabular-nums">$1.500</span>
        </div>

        <div className="my-3 border-t border-dashed border-ink-border-strong" />

        <div className="flex items-center justify-between font-mono text-[11px] text-ink-dimmer">
          <span>Total sin upsell</span>
          <span className="tabular-nums line-through">$12.100</span>
        </div>
        <div className="mt-1 flex items-center justify-between font-mono text-base font-semibold text-cash">
          <span className="text-ink">Total con Menutti</span>
          <span className="tabular-nums">$13.600</span>
        </div>

        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-cash-pale px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-wide text-cash">
          ↑ +12% ticket promedio
        </div>
      </div>
      <div className="ticket-perf" aria-hidden="true" />
    </motion.div>
  );
}
