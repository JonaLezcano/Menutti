import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import Eyebrow from '../components/Eyebrow';
import AccordionItem from '../components/AccordionItem';

const FAQS = [
  {
    q: '¿Tengo que dejar de usar WhatsApp?',
    a: 'No. El pedido te sigue llegando directo a tu WhatsApp, igual que ahora — lo único que cambia es que llega mejor armado, con el upsell ya incluido.',
  },
  {
    q: '¿Es difícil de administrar?',
    a: 'No. No necesitás saber de tecnología ni tocar código: la gestión del sistema corre por cuenta de Menutti, vos solo mirás los pedidos entrar y el panel de métricas.',
  },
  {
    q: '¿Qué incluye el servicio mes a mes?',
    a: 'Una revisión de producto por mes, para que el sistema se mantenga actualizado y funcionando bien, sin que vos tengas que ocuparte de nada técnico.',
  },
  {
    q: '¿Puedo sumar más funciones después?',
    a: 'Sí. Más adelante podés incorporar gestión integral de redes sociales, bots para Instagram y WhatsApp, y sistemas de comandas y caja diaria — se suman cuando los necesites, no son parte de la decisión inicial.',
  },
  {
    q: '¿Esto ya funciona en algún local de verdad?',
    a: 'Sí. Es el mismo sistema que ya toma pedidos todos los días en un local real — no es una promesa ni un prototipo.',
  },
  {
    q: '¿Puedo probarlo antes de decidir?',
    a: 'Sí. La demo es interactiva y real: armás un pedido de prueba con el menú real de un local que ya lo usa, con upsells y checkout incluidos, sin formularios y sin compromiso.',
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
