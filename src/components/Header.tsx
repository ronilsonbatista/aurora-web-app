import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onJoinClick: () => void;
}

export default function Header({ onJoinClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Gestão', href: '#gestao' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Modelos', href: '#modelos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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
          ? 'bg-aurora-offwhite/90 backdrop-blur-md py-4 border-b border-aurora-bege/30 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="font-serif text-xl md:text-2xl font-semibold tracking-[0.2em] text-aurora-wine hover:opacity-85 transition-opacity"
        >
          AURORA & CO.
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs uppercase tracking-[0.2em] text-aurora-black/70 hover:text-aurora-wine transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <button
            onClick={onJoinClick}
            className="group relative overflow-hidden bg-aurora-wine text-aurora-offwhite px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:bg-aurora-wine-light hover:shadow-lg hover:shadow-aurora-wine/10 flex items-center gap-2 cursor-pointer"
          >
            <span>Quero fazer parte</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-aurora-black focus:outline-none hover:text-aurora-wine transition-colors cursor-pointer"
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-aurora-offwhite border-l border-aurora-bege/35 shadow-2xl z-40 lg:hidden transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between p-8 pt-24">
          <nav className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm uppercase tracking-[0.25em] text-aurora-black hover:text-aurora-wine transition-colors duration-300 font-medium border-b border-aurora-bege/20 pb-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto">
            <button
              onClick={() => {
                setIsOpen(false);
                onJoinClick();
              }}
              className="w-full text-center bg-aurora-wine text-aurora-offwhite py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-aurora-wine-light transition-all flex justify-center items-center gap-2 cursor-pointer"
            >
              <span>Quero fazer parte</span>
              <ArrowRight size={14} />
            </button>
            <p className="text-[10px] text-aurora-taupe text-center mt-6 tracking-widest uppercase">
              Aurora & Co. • Desperte Desejo
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
