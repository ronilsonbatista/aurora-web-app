import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Structure from './components/Structure';
import Models from './components/Models';
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
    <div className="bg-aurora-offwhite min-h-screen text-aurora-black font-sans antialiased">
      {/* Header Navigation */}
      <Header onJoinClick={() => scrollToSection('#contato')} />

      {/* Main Sections */}
      <main>
        {/* Hero Banner */}
        <Hero 
          onJoinClick={() => scrollToSection('#contato')} 
          onStructureClick={() => scrollToSection('#estrutura')} 
        />

        {/* Brand Mission & About */}
        <About />

        {/* 8 Operational Pillars */}
        <Services />

        {/* Pipeline & Operation Structure */}
        <Structure />

        {/* 50/50 Partnership Split Details */}
        <Models />

        {/* Brand Manifesto center slide */}
        <Manifesto />

        {/* Security & Professionalism principles */}
        <Security />

        {/* Onboarding onboarding form */}
        <CTA />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}

export default App;
