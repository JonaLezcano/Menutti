import FadeIn from '../components/FadeIn';
import Eyebrow from '../components/Eyebrow';
import DemoCta from '../components/DemoCta';
import menuImg from '../assets/prueba/menu.webp';
import upsellImg from '../assets/prueba/upsell.webp';
import carritoImg from '../assets/prueba/carrito.webp';
import checkoutImg from '../assets/prueba/checkout.webp';
import dashboardImg from '../assets/prueba/dashboard.webp';

const PASOS = [
  { src: menuImg, alt: 'Menú digital de Menutti en un local real, con categorías, fotos y precios reales.', caption: 'Categorías, fotos y precios reales de un local que ya usa el sistema.' },
  { src: upsellImg, alt: 'Popup de upsell sugiriendo sumar un producto al pedido.', caption: 'El momento exacto en que se le sugiere al cliente sumar algo más.' },
  { src: carritoImg, alt: 'Carrito de compra con la tira de upsells ya sumados al pedido.', caption: 'El pedido armándose, con los extras ya sumados.' },
  { src: checkoutImg, alt: 'Pantalla de checkout, paso previo a redirigir a WhatsApp.', caption: 'El paso final antes de redirigir a WhatsApp.' },
];

export default function Prueba() {
  return (
    <section id="prueba" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <Eyebrow>Caso real</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
            No es una promesa. Ya está funcionando en un local real.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-dim">
            Menutti no es una idea ni un mockup — es el mismo sistema que ya toma pedidos todos
            los días en un local real, con las 54 hamburguesas, papas, combos y bebidas reales
            de su carta. Podés probarlo vos mismo: armá un pedido de prueba en la demo, con
            upsells reales, y vas a ver exactamente lo que vería un cliente tuyo.
          </p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {PASOS.map((paso, i) => (
            <FadeIn key={paso.alt} delay={i * 0.05}>
              <figure className="flex flex-col gap-2.5">
                <div className="overflow-hidden rounded-2xl border border-ink-border-strong bg-paper-card shadow-[0_18px_36px_-22px_rgba(32,24,16,0.35)]">
                  <img
                    src={paso.src}
                    alt={paso.alt}
                    width={390}
                    height={694}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="text-[12.5px] leading-snug text-ink-dimmer">
                  {paso.caption}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15} className="mt-10">
          <div className="grid gap-6 rounded-3xl border border-ink-border bg-paper-card p-5 sm:grid-cols-[1fr_1.3fr] sm:p-7">
            <div className="flex flex-col justify-center gap-3">
              <span className="w-fit rounded-full bg-cash-pale px-3 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-wide text-cash">
                Datos de ejemplo
              </span>
              <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Vos mirás el panel y sabés exactamente qué pasó.
              </h3>
              <p className="text-[14.5px] leading-relaxed text-ink-dim">
                Productos más vendidos, ticket promedio, ventas generadas por upsell,
                facturación y cierres diarios, semanales y mensuales — con datos de ejemplo, no
                los reales del local, por privacidad.
              </p>
            </div>
            <div className="max-h-[440px] overflow-y-auto rounded-2xl border border-ink-border-strong">
              <img
                src={dashboardImg}
                alt="Panel de métricas de Menutti: productos más vendidos, ticket promedio, ventas por upsell y facturación."
                width={390}
                height={2346}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12 flex justify-center">
          <DemoCta label="PEDIR DEMO AHORA — probá el pedido real, sin compromiso" />
        </FadeIn>
      </div>
    </section>
  );
}
