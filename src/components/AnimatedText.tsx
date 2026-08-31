import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface CharProps {
  progress: MotionValue<number>;
  range: [number, number];
  children: string;
}

function Char({ progress, range, children }: CharProps) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

/**
 * Splits `text` into characters and ties each one's opacity to how far
 * the paragraph has scrolled through the viewport (scroll-linked reveal,
 * not time-linked) — scrubbing the page "types" the paragraph in.
 *
 * Characters are grouped by word (each word is its own `whitespace-nowrap`
 * wrapper) so the browser only ever line-breaks between words, never
 * mid-word — splitting into bare character spans with no grouping lets
 * the line wrap land inside a word (e.g. "promed-io").
 */
export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = text.split(' ');
  const total = text.length; // incluye espacios, para que el progreso quede parejo
  let cursor = 0;

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, wi) => {
        const chars = Array.from(word);
        const startAt = cursor;
        cursor += chars.length + 1; // +1 por el espacio que sigue
        return (
          <span key={wi} className="inline-block whitespace-nowrap">
            {chars.map((char, ci) => {
              const i = startAt + ci;
              return (
                <Char key={ci} progress={scrollYProgress} range={[i / total, (i + 1) / total]}>
                  {char}
                </Char>
              );
            })}
            {wi < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </p>
  );
}
