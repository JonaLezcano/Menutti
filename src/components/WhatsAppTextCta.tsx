import { WHATSAPP_HREF } from '../lib/whatsapp';
import WhatsAppIcon from './icons/WhatsAppIcon';

interface WhatsAppTextCtaProps {
  className?: string;
  /** 'ink' (default, sobre fondo claro) o 'paper' (sobre fondo oscuro, ej. CierreBand). */
  tone?: 'ink' | 'paper';
}

/**
 * CTA secundario, texto/outline (no pearl button, a propósito: tiene que
 * leerse claramente como la opción "menos comprometida" al lado del CTA
 * principal) — "Prefiero escribir antes → Hablar por WhatsApp", mismo
 * texto en Hero y Cierre (ver estructura-landing.md).
 */
export default function WhatsAppTextCta({ className, tone = 'ink' }: WhatsAppTextCtaProps) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer noopener"
      className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-[13.5px] font-medium transition-colors ${
        tone === 'paper'
          ? 'border-paper/25 text-paper/90 hover:border-paper hover:text-paper'
          : 'border-ink-border-strong text-ink-dim hover:border-flame hover:text-flame-deep'
      } ${className ?? ''}`}
    >
      <WhatsAppIcon size={16} />
      Prefiero escribir antes <span className="opacity-70">→</span> Hablar por WhatsApp
    </a>
  );
}
