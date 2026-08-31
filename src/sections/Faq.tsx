import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import Eyebrow from '../components/Eyebrow';
import AccordionItem from '../components/AccordionItem';

const FAQS = [
  {
    q: '¿Tengo que dejar de usar WhatsApp?',
    a: 'No. El pedido te sigue llegando directo a tu WhatsApp — lo único que cambia es que llega mejor armado, con el upsell ya adentro.',
  },
  {
    q: '¿Es difícil de administrar?',
    a: 'No. No necesitás saber de tecnología ni tocar código — el mantenimiento corre por cuenta de Menutti, en los dos planes.',
  },
  {
    q: '¿Cuál es la diferencia entre Básico y Pro?',
    a: 'Básico es un subdominio propio de Menutti (rápido y barato para arrancar). Pro es el dominio propio de tu local, para tener identidad de marca completa.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'El mantenimiento es $50.000 ARS por mes y cubre ambos planes. Para el detalle de puesta en marcha, lo mejor es hablarlo directo por WhatsApp.',
  },
  {
    q: '¿Esto ya funciona en algún local de verdad?',
    a: 'Sí. Es el mismo sistema que ya toma pedidos todos los días en Crunchy Burger — no es una promesa ni un prototipo.',
  },
  {
    q: '¿Puedo probarlo antes de decidir?',
    a: 'Sí. La demo es interactiva y real: armás un pedido de prueba con el menú real de Crunchy Burger, con upsells y checkout incluidos, sin formularios y sin compromiso.',
  },
  {
    q: '¿Puedo sumar más funciones después?',
    a: 'Sí. Control de stock y gestión de caja están disponibles como upgrade cuando los necesites — no son parte de la decisión inicial.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold leading-tight text-ink">
            Preguntas antes de decidir.
          </h2>
        </FadeIn>

        <FadeIn delay={0.05} className="mt-8 flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((current) => (current === i ? null : i))}
            />
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
