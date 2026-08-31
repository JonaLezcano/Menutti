import { useRef, useState, type PointerEvent, type ReactNode } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagnetProps {
  children: ReactNode;
  /** How strongly the element follows the pointer (0-1). */
  strength?: number;
  /** Extra activation radius (px) around the element that starts pulling it in. */
  padding?: number;
  className?: string;
}

/**
 * Magnetic hover effect: while the pointer is within `padding` px of the
 * element, it eases toward the cursor; on pointer leave it springs back
 * to rest. Disabled automatically on coarse/touch pointers, where a
 * "magnet" makes no sense and would just feel broken.
 *
 * The activation area is an absolutely positioned, inset(-padding) hit
 * zone layered over the visible content — this widens the pointer
 * detection radius without using negative margins that would disturb
 * surrounding layout.
 */
export default function Magnet({
  children,
  strength = 0.45,
  padding = 100,
  className,
}: MagnetProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isTouch] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  );

  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.2 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.2 });

  if (isTouch) {
    return <div className={className}>{children}</div>;
  }

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = contentRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={`relative inline-flex ${className ?? ''}`}>
      <div
        aria-hidden="true"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="absolute"
        style={{ inset: -padding }}
      />
      <motion.div ref={contentRef} style={{ x, y }}>
        {children}
      </motion.div>
    </div>
  );
}
