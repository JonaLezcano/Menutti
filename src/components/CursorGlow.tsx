import { useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion';

/**
 * Halo cálido (flame) que sigue al mouse por toda la página. A
 * diferencia de la versión oscura de jflit.online (que usaba
 * mix-blend-mode: screen para aclarar sobre negro), acá el fondo ya es
 * casi blanco — "screen" no haría nada visible — así que este usa blend
 * normal con muy baja opacidad, como si el cursor calentara levemente el
 * papel. useSpring para que el glow "persiga" al cursor con inercia,
 * mismo mecanismo que Magnet.tsx. Desactivado en touch (no hay cursor
 * que seguir) y oculto bajo `sm:` para no gastar ciclos en mobile.
 */
export default function CursorGlow() {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 26, mass: 0.4 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 26, mass: 0.4 });
  const background = useMotionTemplate`radial-gradient(600px circle at ${glowX}px ${glowY}px, rgba(227,80,42,0.07), transparent 65%)`;

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] hidden sm:block"
      style={{ background }}
    />
  );
}
