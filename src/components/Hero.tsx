import { motion } from 'framer-motion';

interface HeroProps {
  onJoinClick: () => void;
  onStructureClick: () => void;
}

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Telegram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.6 2.4c-.2-.2-.5-.3-.7-.2L2.4 9.5c-.4.2-.5.7-.3 1 .1.2.3.3.5.3l5.3 1.7 3.5 5.2c.2.4.7.5 1 .3.2-.1.3-.3.3-.5l1.7-5.3 7-2.5c.4-.2.5-.7.3-1z" />
    <line x1="8" x2="13" y1="12" y2="12" />
  </svg>
);

const WhatsApp = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Hero({ onJoinClick, onStructureClick }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-24 px-6 md:px-12 bg-aurora-black overflow-hidden select-none"
    >
      {/* ── BACKGROUND ART COMPOSITION (As seen in the reference print) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        
        {/* Left-aligned Red Velvet Curtain */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-[55%] sm:w-[45%] md:w-[38%] lg:w-[32%] bg-cover bg-left z-10 opacity-70 sm:opacity-90"
          style={{
            backgroundImage: 'url(/velvet_curtain.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'left center'
          }}
        />

        {/* Right-aligned Rim-lit Model Silhouette */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%] bg-cover bg-right z-10 opacity-60 sm:opacity-90"
          style={{
            backgroundImage: 'url(/model_hero_silhouette.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'right center'
          }}
        />

        {/* Soft center vignette to prioritize typography readability */}
        <div 
          className="absolute inset-0 z-15 bg-[radial-gradient(circle_at_center,_rgba(13,13,13,0.3)_0%,_rgba(13,13,13,0.92)_85%)]"
        />
      </div>

      {/* ── FAR-LEFT VERTICAL DECORATIVE LABEL ── */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20 hidden md:flex text-aurora-taupe/65 text-[7px] lg:text-[8px] uppercase tracking-[0.45em] select-none">
        <span className="text-aurora-gold text-[10px] animate-pulse">✦</span>
        <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          DESPRTE DESEJOS. VIVA INTENSAMENTE.
        </span>
      </div>

      {/* ── CENTER EDITORIAL CONTENT ── */}
      <div className="max-w-4xl mx-auto text-center z-20 flex flex-col items-center select-none pt-8">
        
        {/* Delicate A Ornament */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex items-center gap-4 mb-4 select-none"
        >
          <div className="w-8 h-[1px] bg-aurora-gold/25" />
          <span className="font-serif text-3xl font-light text-aurora-gold italic tracking-widest leading-none">A</span>
          <div className="w-8 h-[1px] bg-aurora-gold/25" />
        </motion.div>

        {/* Brand Name Title */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: '0.05em' }}
          animate={{ opacity: 1, letterSpacing: '0.12em' }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-light text-aurora-gold tracking-[0.12em] uppercase leading-none mb-6 select-none"
        >
          AURORA & Co.
        </motion.h1>

        {/* Gold Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
          className="font-sans text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.45em] text-aurora-gold/90 font-medium block"
        >
          GESTÃO PREMIUM PARA CRIADORAS.
        </motion.h2>

        {/* Delicate separator line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: 'easeInOut' }}
          className="w-12 h-[1px] bg-aurora-gold/20 my-6"
        />

        {/* Headline Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2, ease: 'easeOut' }}
          className="max-w-2xl text-[11px] sm:text-xs md:text-sm text-aurora-bege/85 font-light tracking-widest leading-relaxed mb-12 px-6 text-balance"
        >
          Estratégia, estética e operação para transformar presença em desejo, audiência e resultado.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.2, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-md px-6 z-20"
        >
          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto bg-[#5B0D18] hover:bg-[#3A0710] border border-[#5B0D18] text-aurora-offwhite px-10 py-4 rounded-full text-[9px] uppercase tracking-[0.25em] font-medium transition-all duration-300 hover:shadow-xl hover:shadow-aurora-wine/10 cursor-pointer"
          >
            Quero fazer parte
          </button>

          <button
            onClick={onStructureClick}
            className="w-full sm:w-auto bg-transparent text-aurora-offwhite border border-aurora-gold/60 hover:bg-aurora-gold hover:text-aurora-black px-10 py-4 rounded-full text-[9px] uppercase tracking-[0.25em] font-medium transition-all duration-300 cursor-pointer"
          >
            Conhecer a estrutura
          </button>
        </motion.div>
      </div>

      {/* ── BOTTOM CONTROLS & WARNINGS ── */}

      {/* Bottom-left: Circled 18+ warning */}
      <div className="absolute bottom-6 left-6 flex items-center gap-3 z-20 text-aurora-taupe/70 text-[8px] lg:text-[9px] font-light tracking-widest select-none">
        <span className="w-5 h-5 rounded-full border border-aurora-wine flex items-center justify-center text-[9px] font-semibold text-aurora-wine-light flex-shrink-0">18</span>
        <span className="hidden sm:inline">Conteúdo destinado apenas para maiores de 18 anos.</span>
        <span className="sm:hidden">Maiores de 18 anos.</span>
      </div>

      {/* Bottom-center: "Descubra" Mouse Wheel indicator */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-20 text-aurora-taupe/85 text-[8px] uppercase tracking-[0.45em] select-none cursor-pointer"
        onClick={onStructureClick}
      >
        <span>Descubra</span>
        <div className="w-4 h-7 rounded-full border border-aurora-taupe/20 flex justify-center p-1 bg-aurora-black/20">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-aurora-gold"
          />
        </div>
      </div>

      {/* Bottom-right: Gold Social Icons */}
      <div className="absolute bottom-6 right-6 flex items-center gap-5 z-20 text-aurora-gold/80 hidden sm:flex">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-aurora-offwhite transition-colors duration-300">
          <Instagram size={14} />
        </a>
        <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:text-aurora-offwhite transition-colors duration-300">
          <Telegram size={14} />
        </a>
        <a href="https://wa.me" target="_blank" rel="noreferrer" className="hover:text-aurora-offwhite transition-colors duration-300">
          <WhatsApp size={14} />
        </a>
      </div>
    </section>
  );
}
