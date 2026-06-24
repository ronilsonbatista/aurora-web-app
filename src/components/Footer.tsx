import React from 'react';
import { Mail, Phone, ShieldCheck } from 'lucide-react';

const Instagram = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-aurora-black text-aurora-offwhite border-t border-aurora-bege/5 pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-aurora-bege/5">
          
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <a 
              href="#inicio" 
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="font-serif text-2xl tracking-[0.25em] text-aurora-wine hover:text-aurora-gold transition-colors duration-300 uppercase font-semibold block"
            >
              Aurora & Co.
            </a>
            <p className="font-serif italic text-base text-aurora-bege/80 max-w-sm tracking-wide font-light">
              Desperte desejos. Viva intensamente.
            </p>
            <p className="text-xs text-aurora-taupe font-light leading-relaxed max-w-sm tracking-widest uppercase">
              Gestão, estética e crescimento para criadoras.
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold text-aurora-wine">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Sobre a Marca', href: '#sobre' },
                { label: 'O que Fazemos', href: '#gestao' },
                { label: 'Experiência', href: '#experiencia' },
                { label: 'Para Criadoras', href: '#para-criadoras' },
                { label: 'Contato', href: '#contato' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs text-aurora-taupe hover:text-aurora-offwhite transition-colors tracking-widest uppercase font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials / Contacts (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold text-aurora-wine">
              Contato & Redes
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-xs text-aurora-taupe hover:text-aurora-offwhite transition-colors font-light tracking-wide"
                >
                  <Instagram size={14} className="text-aurora-wine" />
                  <span>@aurora.management</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@aurora-co.com"
                  className="flex items-center gap-3 text-xs text-aurora-taupe hover:text-aurora-offwhite transition-colors font-light tracking-wide"
                >
                  <Mail size={14} className="text-aurora-wine" />
                  <span>contato@aurora-co.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-xs text-aurora-taupe hover:text-aurora-offwhite transition-colors font-light tracking-wide"
                >
                  <Phone size={14} className="text-aurora-wine" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Compliance Banner (11. Conteúdo legal e profissional) */}
        <div className="py-8 border-b border-aurora-bege/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[10px] text-aurora-taupe tracking-widest uppercase font-light">
          <div className="flex items-start gap-2">
            <ShieldCheck size={12} className="text-aurora-gold mt-0.5 flex-shrink-0" />
            <span>Atuação exclusiva com criadoras maiores de 18 anos (18+)</span>
          </div>
          <div className="flex items-start gap-2">
            <ShieldCheck size={12} className="text-aurora-gold mt-0.5 flex-shrink-0" />
            <span>Contratos formais de prestação de serviço registrados</span>
          </div>
          <div className="flex items-start gap-2">
            <ShieldCheck size={12} className="text-aurora-gold mt-0.5 flex-shrink-0" />
            <span>Garantia absoluta de privacidade e segurança digital</span>
          </div>
          <div className="flex items-start gap-2">
            <ShieldCheck size={12} className="text-aurora-gold mt-0.5 flex-shrink-0" />
            <span>Gestão profissional livre de linguagem ou imagens explícitas</span>
          </div>
        </div>

        {/* Copyrights and Terms */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[10px] text-aurora-taupe/80 tracking-widest font-light gap-4">
          <p>© {currentYear} Aurora & Co. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#termos" className="hover:text-aurora-offwhite transition-colors uppercase">
              Termos de Uso
            </a>
            <a href="#privacidade" className="hover:text-aurora-offwhite transition-colors uppercase">
              Políticas de Privacidade
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
