import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import HeroTransformacion from './sections/HeroTransformacion';
import TicketPromedioTransformacion from './sections/TicketPromedioTransformacion';
import Prueba from './sections/Prueba';
import PromesaTransformacion from './sections/PromesaTransformacion';
import ComoFunciona from './sections/ComoFunciona';
import Comparativa from './sections/Comparativa';
import Faq from './sections/Faq';
import CierreBand from './sections/CierreBand';
import Footer from './sections/Footer';
import CookieConsentBanner from './components/CookieConsentBanner';
import WhatsAppFloatingCta from './components/WhatsAppFloatingCta';

/**
 * Landing standalone, ángulo "transformación/ticket promedio" (ver brief
 * del cliente). Respeta el esqueleto de App.tsx sección por sección
 * —Hero oscuro con foto, bloque claro sobre `paper-soft`, caso real,
 * ComoFunciona, Comparativa, Faq, CierreBand— y solo cambia el copy y el
 * visual de las dos primeras: `HeroTransformacion` en el lugar de `Hero`
 * y `TicketPromedioTransformacion` en el de `Problema`.
 *
 * `Prueba` (el caso real de Crunchy Burger) se reutiliza tal cual y cubre
 * a la vez los bloques de "demo" e "historia" del brief, porque ya trae
 * el panel de métricas al final — por eso no hay un
 * `DemoPanelTransformacion` aparte: quedaba duplicado con ese panel.
 */
export default function AppTransformacion() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-full focus:bg-flame focus:px-4 focus:py-2 focus:font-semibold focus:text-flame-text"
      >
        Saltar al contenido
      </a>

      <CursorGlow />
      <Navbar />

      <main>
        <HeroTransformacion />
        <TicketPromedioTransformacion />
        <Prueba />
        <PromesaTransformacion />
        <ComoFunciona />
        <Comparativa />
        <Faq />
        <CierreBand />
      </main>

      <Footer />
      <CookieConsentBanner />
      <WhatsAppFloatingCta />
    </div>
  );
}
