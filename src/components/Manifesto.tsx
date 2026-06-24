import { motion } from 'framer-motion';

export default function Manifesto() {
  const words = ['Provoca.', 'Conecta.', 'Desperta.'];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      } 
    }
  };

  return (
    <section
      className="relative py-28 md:py-44 px-6 md:px-12 bg-gradient-to-b from-aurora-wine to-aurora-black text-aurora-offwhite text-center overflow-hidden"
    >
      {/* Abstract luxury texture overlays */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none silk-overlay"></div>
      
      {/* Asymmetric border overlay for a high fashion look */}
      <div className="absolute inset-6 md:inset-12 border border-aurora-bege/10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto z-10 relative flex flex-col items-center justify-center space-y-12">
        <span className="text-xs md:text-sm uppercase tracking-[0.5em] text-aurora-bege/60 font-medium block">
          Nosso Manifesto
        </span>

        {/* Big centered editorial words */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col space-y-4 md:space-y-6"
        >
          {words.map((word, i) => (
            <motion.h3
              key={i}
              variants={wordVariants}
              className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.08em] uppercase text-aurora-offwhite italic"
            >
              {word}
            </motion.h3>
          ))}
        </motion.div>

        {/* Small supporting paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-xl mx-auto pt-6 border-t border-aurora-bege/20"
        >
          <p className="text-base sm:text-lg md:text-xl text-aurora-bege font-light tracking-widest leading-relaxed text-pretty">
            A Aurora & Co nasce para transformar desejo em marca, estética em presença e presença em resultado.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
