import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
  onStructureClick: () => void;
}

export default function Hero({ onJoinClick, onStructureClick }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12 bg-aurora-offwhite overflow-hidden silk-overlay"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle top wine light bloom */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-7xl h-[45%] opacity-[0.08]"
          style={{
            background: 'radial-gradient(50% 50% at 50% 0%, #5B0D18 0%, transparent 100%)',
          }}
        />

        {/* Soft floating blur circles mimicking luxury lighting */}
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-60 -left-60 w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full bg-aurora-wine/5 blur-[120px] md:blur-[180px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-60 -right-60 w-[500px] md:w-[900px] h-[500px] md:h-[900px] rounded-full bg-aurora-gold/5 blur-[120px] md:blur-[200px]"
        />
        
        {/* Decorative thin elegant lines (editorial style) */}
        <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-aurora-bege/25 hidden md:block"></div>
        <div className="absolute top-0 bottom-0 right-1/4 w-[1px] bg-aurora-bege/25 hidden md:block"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center select-none">
        {/* Decorative Tag with discrete gold accent */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-8 md:mb-10 flex items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.45em] text-aurora-wine font-semibold block border-b border-aurora-gold/40 pb-2">
            AURORA & CO. <span className="text-aurora-gold ml-1">•</span> MANAGEMENT
          </span>
        </motion.div>

        {/* Brand Name with Cormorant Garamond */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="font-serif text-6xl sm:text-8xl md:text-9xl font-medium text-aurora-black tracking-[0.15em] uppercase leading-none mb-6"
        >
          Aurora
        </motion.h1>

        {/* Delicate divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
          className="w-16 h-[1px] bg-aurora-gold my-6"
        />

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.2, ease: 'easeOut' }}
          className="font-serif italic text-2xl sm:text-3xl md:text-[2.6rem] text-aurora-wine-dark tracking-wide font-light max-w-4xl leading-tight mb-8 text-balance"
        >
          Gestão premium para criadoras que querem transformar presença em desejo, audiência e resultado.
        </motion.h2>

        {/* Support text (smaller, sophisticated, and well-spaced) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1.2, ease: 'easeOut' }}
          className="max-w-2xl text-xs sm:text-sm md:text-base text-aurora-taupe font-light tracking-widest leading-relaxed mb-12 px-4 text-pretty"
        >
          Estratégia, estética, operação e experiência para construir uma marca desejada, profissional e lucrativa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1.2, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-md px-6"
        >
          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto bg-aurora-wine text-aurora-offwhite border border-aurora-wine-dark px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-300 hover:bg-aurora-wine-dark hover:shadow-xl hover:shadow-aurora-wine/10 cursor-pointer"
          >
            Quero fazer parte
          </button>

          <button
            onClick={onStructureClick}
            className="w-full sm:w-auto bg-transparent text-aurora-black border border-aurora-black/20 px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-300 hover:bg-aurora-black hover:text-aurora-offwhite hover:border-aurora-black cursor-pointer"
          >
            Conhecer a estrutura
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 2, duration: 3, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
          onClick={onStructureClick}
        >
          <span className="text-[8px] uppercase tracking-[0.4em] text-aurora-taupe/80">
            Descobrir
          </span>
          <ArrowDown size={12} className="text-aurora-taupe/70 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
