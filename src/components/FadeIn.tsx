import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  /** Delay in seconds before the animation starts (for staggering siblings). */
  delay?: number;
  /** Vertical offset (px) the element travels in from. */
  y?: number;
  /** Duration in seconds. */
  duration?: number;
  className?: string;
}

/**
 * Reveal-on-scroll wrapper used across every section of the site.
 * Runs once per element (viewport once: true) so it never re-triggers
 * and never leaves content permanently invisible without JS — the
 * `initial` state is only opacity/translate, never `display: none`.
 */
export default function FadeIn({
  children,
  delay = 0,
  y = 28,
  duration = 0.7,
  className,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
