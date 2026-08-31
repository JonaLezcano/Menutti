import Magnet from './Magnet';
import DemoCta from './DemoCta';
import WhatsAppTextCta from './WhatsAppTextCta';

interface CtaGroupProps {
  className?: string;
  tone?: 'ink' | 'paper';
  demoVariant?: 'flame' | 'ink';
}

/**
 * El CTA doble que se repite en Hero y Cierre (ver estructura-landing.md,
 * secciones 1 y 8): primario "Pedir DEMO AHORA" con el pull magnético de
 * Magnet.tsx, secundario de WhatsApp al lado, en texto/outline.
 */
export default function CtaGroup({ className, tone = 'ink', demoVariant = 'flame' }: CtaGroupProps) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className ?? ''}`}>
      <Magnet padding={60} strength={0.3}>
        <DemoCta variant={demoVariant} />
      </Magnet>
      <WhatsAppTextCta tone={tone} />
    </div>
  );
}
