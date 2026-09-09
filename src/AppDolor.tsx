import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import HeroDolor from './sections/HeroDolor';
import HistoriaDolor from './sections/HistoriaDolor';
import DemoSplitDolor from './sections/DemoSplitDolor';
import PromesaDolor from './sections/PromesaDolor';
import ComoFunciona from './sections/ComoFunciona';
import Comparativa from './sections/Comparativa';
import Faq from './sections/Faq';
import CierreBand from './sections/CierreBand';
import Footer from './sections/Footer';
import CookieConsentBanner from './components/CookieConsentBanner';
import WhatsAppFloatingCta from './components/WhatsAppFloatingCta';

/**
 * Landing standalone, ángulo "dolor/problema" (ver brief del cliente).
 * Respeta el esqueleto de App.tsx: Hero oscuro con foto, bloque claro
 * sobre `paper-soft` con el problema, y de ahí en adelante la misma
 * alternancia de fondos. `HeroDolor` ocupa el lugar de `Hero` y
 * `HistoriaDolor` el de `Problema`; `DemoSplitDolor` y `PromesaDolor` se
 * suman antes de ComoFunciona, que es donde el original ya venía
 * explicando el mecanismo.
 *
 * `Prueba` queda afuera a propósito (ver brief): el caso real de Crunchy
 * Burger es la prueba social del ángulo de transformación, no de este.
 */
export default function AppDolor() {
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
        <HeroDolor />
        <HistoriaDolor />
        <DemoSplitDolor />
        <PromesaDolor />
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
