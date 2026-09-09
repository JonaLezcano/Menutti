import FadeIn from '../components/FadeIn';
import Eyebrow from '../components/Eyebrow';
import WhatsAppChaosMock from '../components/WhatsAppChaosMock';
import ReceiptCard from '../components/ReceiptCard';

/**
 * Split "Antes / Después": el mock de chat caótico a la izquierda y la
 * comanda ilustrada (ReceiptCard, ya existente en el codebase y libre de
 * uso) a la derecha — el contraste caos → orden es el argumento visual
 * completo de la sección. Va sobre fondo claro plano, entre dos secciones
 * `paper-soft`, para sostener la misma alternancia de fondos que la
 * página principal.
 */
export default function DemoSplitDolor() {
  return (
    <section className="relative px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <Eyebrow>Antes / Después</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
            Ponemos en orden lo que hoy es un caos de WhatsApp.
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-8">
          <FadeIn delay={0.05} className="flex flex-col items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-dimmer">
              Así llega hoy
            </span>
            <WhatsAppChaosMock size="sm" />
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-flame-deep">
              Así entra con Menutti
            </span>
            <ReceiptCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
