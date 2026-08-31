import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  /** 'flame' (default, la mayoría de las secciones) o 'ink' (sobre fondo oscuro, ej. CierreBand). */
  tone?: 'flame' | 'ink';
}

/**
 * Etiqueta chica tipo "encabezado de comanda": mono, mayúsculas, tracking
 * ancho, con un guioncito antes — el mismo lenguaje tipográfico en toda
 * la página para introducir cada bloque (Hero, Problema, Cómo funciona,
 * etc.), ligado al motivo de "ticket impreso" del sitio.
 */
export default function Eyebrow({ children, className, tone = 'flame' }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] ${
        tone === 'flame' ? 'text-flame-deep' : 'text-paper/80'
      } ${className ?? ''}`}
    >
      <span aria-hidden="true" className={tone === 'flame' ? 'text-flame' : 'text-paper/50'}>
        --
      </span>
      {children}
    </p>
  );
}
