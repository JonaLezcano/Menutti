/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Arquitectura de tokens semánticos (misma idea que el patrón
        // JFLIT.online: ink/paper/accent, swap centralizado acá adentro
        // — ningún componente tiene hex sueltos). v1 clara/blanca:
        // `paper` es el fondo (papel de comanda), `ink` es el texto
        // oscuro. Reestilizar más adelante (con los modelos de Claude
        // Design) implica tocar solo estos valores.
        paper: {
          DEFAULT: '#FBF6EC', // fondo principal, hueso cálido (papel de ticket)
          card: '#FFFFFF', // tarjetas/superficies elevadas sobre el fondo
          soft: '#F1E8D8', // franjas alternadas / footer
        },
        ink: {
          DEFAULT: '#201810', // texto principal, negro cálido tipo espresso
          soft: '#3B2E22', // subtítulos
          dim: '#6B5D4E', // cuerpo de texto secundario
          dimmer: '#9C8F7E', // texto terciario / metadatos
          border: 'rgba(32,24,16,0.10)',
          'border-strong': 'rgba(32,24,16,0.20)',
        },
        // Acento primario de marca — usado en CTAs, resaltados y el
        // "sello" visual de la comanda. Punchy, cálido, no genérico
        // dorado/terracota.
        flame: {
          DEFAULT: '#E3502A',
          soft: '#F0805A',
          deep: '#B93C1D',
          text: '#2B0D02', // texto oscuro sobre flame (contraste AA)
        },
        // Acento secundario, solo para "la plata que sube": ticket
        // promedio, upsells, resultados — nunca decorativo, siempre
        // ligado a un número que crece.
        cash: {
          DEFAULT: '#1F7A4D',
          soft: '#3FA873',
          pale: '#E7F4EC',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        'ticket-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        'marquee-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-25%)' },
        },
      },
      animation: {
        'ticket-float': 'ticket-float 6s ease-in-out infinite',
        'marquee-left': 'marquee-left 46s linear infinite',
      },
    },
  },
  plugins: [],
}
