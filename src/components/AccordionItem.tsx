import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * Single FAQ row. Height animates via a CSS grid-template-rows 0fr -> 1fr
 * transition (no JS height measurement needed, no layout thrash) —
 * exclusivity (only one open at a time) is controlled by the parent.
 */
export default function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  const [id] = useState(() => `faq-${Math.random().toString(36).slice(2, 9)}`);

  return (
    <div className="rounded-2xl border border-ink-border bg-paper-card">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={id}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-medium text-ink sm:px-6 sm:py-5"
        >
          {question}
          <ChevronDown
            size={18}
            className={`shrink-0 text-flame transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>
      <div
        id={id}
        role="region"
        className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-ink-dim sm:px-6 sm:pb-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
