import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onJoinClick: () => void;
}

export default function Header({ onJoinClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');

  useEffect(() => {
    const handleScroll = () => {
      // Background scroll check
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section check for underline
      const sections = ['inicio', 'sobre', 'gestao', 'experiencia', 'para-criadoras', 'contato'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Gestão', href: '#gestao' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Para criadoras', href: '#para-criadoras' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(href);
    const target = document.querySelector(href);
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-aurora-black/85 backdrop-blur-md py-4 border-b border-aurora-bege/5 shadow-lg'
          : 'bg-transparent py-7 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">
        {/* Left: Brand Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="font-serif text-xl tracking-[0.25em] font-medium text-aurora-offwhite hover:text-aurora-gold transition-colors duration-300 uppercase flex items-center gap-2"
        >
          <span className="text-aurora-gold font-light">✦</span> AURORA & CO
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-[11px] sm:text-xs uppercase tracking-[0.25em] font-light transition-all duration-300 relative py-1 ${
                  isActive ? 'text-aurora-offwhite font-medium' : 'text-aurora-taupe hover:text-aurora-offwhite'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-aurora-gold" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Gold bordered CTA button */}
        <div className="hidden lg:block">
          <button
            onClick={onJoinClick}
            className="group bg-transparent text-aurora-gold border border-aurora-gold/60 px-6 py-2.5 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-aurora-gold hover:text-aurora-black flex items-center gap-2 cursor-pointer"
          >
            <span>Quero fazer parte</span>
            <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-aurora-offwhite focus:outline-none hover:text-aurora-gold transition-colors cursor-pointer p-1"
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-aurora-black/98 backdrop-blur-lg border-l border-aurora-bege/5 shadow-2xl z-40 lg:hidden transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between p-8 pt-24">
          <nav className="flex flex-col space-y-6">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm uppercase tracking-[0.25em] font-light transition-colors duration-300 pb-3 border-b ${
                    isActive 
                      ? 'text-aurora-gold border-aurora-gold/30 font-medium' 
                      : 'text-aurora-taupe border-aurora-bege/5 hover:text-aurora-offwhite'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-auto">
            <button
              onClick={() => {
                setIsOpen(false);
                onJoinClick();
              }}
              className="w-full text-center bg-transparent text-aurora-gold border border-aurora-gold py-3.5 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium hover:bg-aurora-gold hover:text-aurora-black transition-all flex justify-center items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Quero fazer parte</span>
              <ArrowRight size={10} />
            </button>
            <p className="text-[10px] text-aurora-taupe/40 text-center mt-6 tracking-[0.3em] uppercase">
              Aurora & Co • Desperte Desejo
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
