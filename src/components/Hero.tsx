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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 bg-aurora-offwhite overflow-hidden silk-overlay"
    >
      {/* Background Decorative Folds & Glowing Silks */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft floating blur circles mimicking luxury lighting */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-96 md:w-[600px] h-96 md:h-[600px] rounded-full bg-aurora-wine/5 blur-[100px] md:blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 w-96 md:w-[700px] h-96 md:h-[700px] rounded-full bg-aurora-taupe/5 blur-[120px] md:blur-[180px]"
        />
        
        {/* Decorative thin elegant lines (editorial style) */}
        <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-aurora-bege/20 hidden md:block"></div>
        <div className="absolute top-0 bottom-0 right-1/4 w-[1px] bg-aurora-bege/20 hidden md:block"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Decorative Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-aurora-wine font-medium border-b border-aurora-wine/30 pb-2">
            Aurora & Co. • Management Agency
          </span>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: '0.05em' }}
          animate={{ opacity: 1, letterSpacing: '0.18em' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="font-serif text-5xl sm:text-7xl md:text-9xl font-bold text-aurora-black tracking-[0.18em] uppercase select-none leading-none"
        >
          Aurora
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="w-16 h-[1px] bg-aurora-wine my-6 md:my-8"
        />

        {/* Italic subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
          className="font-serif italic text-xl sm:text-2xl md:text-4xl text-aurora-wine tracking-wider font-light mb-8 text-balance"
        >
          Desperte desejo. Viva intensamente.
        </motion.h2>

        {/* Support text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: 'easeOut' }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-aurora-taupe font-light tracking-wide leading-relaxed mb-12 px-4 text-pretty"
        >
          Gestão estratégica para criadoras que querem transformar presença digital em marca, audiência e faturamento.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-md px-6"
        >
          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto bg-aurora-wine text-aurora-offwhite px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-aurora-wine-light hover:shadow-lg hover:shadow-aurora-wine/20 cursor-pointer"
          >
            Quero ser modelo
          </button>

          <button
            onClick={onStructureClick}
            className="w-full sm:w-auto bg-transparent text-aurora-black border border-aurora-black/25 px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-aurora-black hover:text-aurora-offwhite cursor-pointer"
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
          <span className="text-[9px] uppercase tracking-[0.3em] text-aurora-taupe">
            Role para descobrir
          </span>
          <ArrowDown size={14} className="text-aurora-taupe animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
