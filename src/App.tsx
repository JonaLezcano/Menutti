import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import Hero from './sections/Hero';
import Problema from './sections/Problema';
import ComoFunciona from './sections/ComoFunciona';
import Prueba from './sections/Prueba';
import Planes from './sections/Planes';
import Mantenimiento from './sections/Mantenimiento';
import Faq from './sections/Faq';
import CierreBand from './sections/CierreBand';
import Footer from './sections/Footer';
import CookieConsentBanner from './components/CookieConsentBanner';
import WhatsAppFloatingCta from './components/WhatsAppFloatingCta';

export default function App() {
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
        <Hero />
        <Problema />
        <ComoFunciona />
        <Prueba />
        <Planes />
        <Mantenimiento />
        <Faq />
        <CierreBand />
      </main>

      <Footer />
      <CookieConsentBanner />
      <WhatsAppFloatingCta />
    </div>
  );
}
