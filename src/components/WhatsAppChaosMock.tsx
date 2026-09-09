import WhatsAppIcon from './icons/WhatsAppIcon';

interface ChaosMessage {
  text: string;
  time: string;
  position: string;
  z: string;
}

/**
 * Los 5 mensajes del brief, deliberadamente "fuera de orden" en el
 * horario (21:32 → 21:11 → 21:26 → 21:08 → 21:34) para que el propio
 * timestamp refuerce el caos, no solo la superposición visual — nadie
 * respondió en el orden en que llegaron.
 */
const MESSAGES: ChaosMessage[] = [
  { text: 'Holaa tienen carta?', time: '21:32', position: 'left-[2%] top-[1%] rotate-[-3deg]', z: 'z-10' },
  { text: 'cuánto sale la de doble carne', time: '21:11', position: 'left-[16%] top-[19%] rotate-[2deg]', z: 'z-20' },
  { text: 'es sin cebolla porfa', time: '21:26', position: 'left-[1%] top-[38%] rotate-[-2deg]', z: 'z-30' },
  { text: 'ya pagué, en cuánto sale?', time: '21:08', position: 'left-[14%] top-[56%] rotate-[3deg]', z: 'z-40' },
  { text: 'hola siguen abiertos?', time: '21:34', position: 'left-[3%] top-[75%] rotate-[-4deg]', z: 'z-50' },
];

interface WhatsAppChaosMockProps {
  /** 'lg' (default, para el Hero) o 'sm' (versión chica del split Antes/Después). */
  size?: 'lg' | 'sm';
  className?: string;
}

/**
 * Mock ilustrativo de "así llega hoy": mensajes de WhatsApp sueltos,
 * superpuestos y desordenados (sin componente de chat previo en el
 * codebase — se construye acá, con los mismos tokens de tarjeta/borde/
 * sombra que ReceiptCard, para que lea como parte del mismo sistema
 * visual y no como un mockup de teléfono genérico). No es un chat
 * prolijo con burbujas alineadas: es intencionalmente caótico, con un
 * badge de no leídos y timestamps fuera de orden reforzando el caos.
 */
export default function WhatsAppChaosMock({ size = 'lg', className }: WhatsAppChaosMockProps) {
  const isSmall = size === 'sm';

  return (
    <div
      className={`relative mx-auto w-full ${isSmall ? 'max-w-[300px]' : 'max-w-[380px]'} ${className ?? ''}`}
    >
      <div
        className={`relative overflow-visible rounded-3xl border border-ink-border-strong bg-paper-soft shadow-[0_28px_50px_-22px_rgba(32,24,16,0.35)] ${
          isSmall ? 'p-3' : 'p-4'
        }`}
      >
        <div className="mb-2 flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-dimmer">
          <span className="flex items-center gap-1.5 font-semibold text-ink-dim">
            <WhatsAppIcon size={isSmall ? 12 : 14} />
            WhatsApp Business
          </span>
          <span className="flex items-center gap-1 rounded-full bg-flame px-2 py-0.5 text-[10px] font-bold text-flame-text">
            18 sin leer
          </span>
        </div>

        <div
          aria-hidden="true"
          className={`relative ${isSmall ? 'min-h-[230px]' : 'min-h-[320px] sm:min-h-[350px]'}`}
        >
          {MESSAGES.map((msg) => (
            <div
              key={msg.text}
              className={`absolute ${msg.position} ${msg.z} max-w-[76%] rounded-2xl rounded-tl-sm border border-ink-border-strong bg-paper-card px-3 py-2 shadow-[0_12px_22px_-16px_rgba(32,24,16,0.4)] ${
                isSmall ? '' : 'sm:px-3.5 sm:py-2.5'
              }`}
            >
              <p className={`leading-snug text-ink-soft ${isSmall ? 'text-[11.5px]' : 'text-[12.5px] sm:text-[13px]'}`}>
                {msg.text}
              </p>
              <span className="mt-1 block text-right font-mono text-[9px] text-ink-dimmer">{msg.time}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="sr-only">
        Mock ilustrativo de un chat de WhatsApp desordenado: varios mensajes de clientes
        superpuestos y sin responder en el orden en que llegaron.
      </p>
    </div>
  );
}
