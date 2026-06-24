import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Creators from './components/Creators';
import Manifesto from './components/Manifesto';
import Security from './components/Security';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-aurora-black min-h-screen text-aurora-offwhite font-sans antialiased">
      {/* Header Navigation */}
      <Header onJoinClick={() => scrollToSection('#contato')} />

      {/* Main Sections */}
      <main>
        {/* Hero Banner */}
        <Hero 
          onJoinClick={() => scrollToSection('#contato')} 
          onStructureClick={() => scrollToSection('#experiencia')} 
        />

        {/* Brand Mission & About */}
        <About />

        {/* Deliverables / "O que a Aurora entrega" */}
        <Services />

        {/* Experience / "A experiência por trás do desejo" */}
        <Experience />

        {/* Partner Creators Model */}
        <Creators />

        {/* Brand Manifesto center slide */}
        <Manifesto />

        {/* Security & Professionalism principles */}
        <Security />

        {/* Onboarding Form */}
        <CTA />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}

export default App;
