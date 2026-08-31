import { ArrowUpRight } from 'lucide-react';
import { DEMO_URL } from '../config';

interface DemoCtaProps {
  label?: string;
  className?: string;
  /** 'flame' (default, shell claro) o 'ink' (shell oscuro, para fondos flame). */
  variant?: 'flame' | 'ink';
}

/**
 * CTA principal del sitio: "Pedir DEMO AHORA", siempre al mismo destino
 * (DEMO_URL en src/config.ts — placeholder hasta que la demo tenga su
 * propio deploy). Aparece en Hero, Cómo funciona, Prueba, Planes y
 * Cierre con el mismo texto reconocible (ver estructura-landing.md).
 * Reutiliza el "pearl button" glossy/3D — mecanismo intacto, recoloreado
 * en index.css.
 */
export default function DemoCta({ label = 'Pedir DEMO AHORA', className, variant = 'flame' }: DemoCtaProps) {
  return (
    <a
      href={DEMO_URL}
      target="_blank"
      rel="noreferrer noopener"
      className={`pearl-button ${variant === 'ink' ? 'pearl-button--ink' : ''} ${className ?? ''}`}
    >
      <span className="pearl-wrap">
        <span className="pearl-label">
          {label}
          <ArrowUpRight size={18} strokeWidth={2.2} />
        </span>
      </span>
    </a>
  );
}
