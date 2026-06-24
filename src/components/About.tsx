import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="sobre"
      className="py-28 md:py-40 px-6 md:px-12 bg-aurora-black text-aurora-offwhite relative overflow-hidden"
    >
      {/* Subtle wine-colored light bloom behind text */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-aurora-wine/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Text content - taking 7 cols on desktop */}
          <div className="lg:col-span-7 space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-aurora-wine font-semibold block">
                Sobre a Aurora & Co.
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-aurora-offwhite font-light leading-[1.15] text-balance">
                Uma gestão feita para transformar <span className="italic text-aurora-gold">presença em desejo</span>.
              </h2>
            </motion.div>

            <div className="w-12 h-[1px] bg-aurora-gold" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6 text-aurora-bege/80 text-sm sm:text-base font-light leading-relaxed max-w-2xl tracking-wide text-pretty"
            >
              <p>
                A Aurora & Co. une posicionamento, estratégia, produção, operação e acompanhamento contínuo para criadoras que desejam crescer com segurança, estética e performance.
              </p>
              <p>
                Não acreditamos em soluções genéricas ou crescimento sem controle. A nossa missão é construir marcas sólidas, elevar o valor percebido de cada criadora e criar ecossistemas que traduzem conexão genuína em faturamento de alto nível.
              </p>
            </motion.div>
          </div>

          {/* Asymmetric Elegant Poster / Abstract Visual - taking 5 cols on desktop */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-sm aspect-[4/5] bg-aurora-black-light p-8 md:p-12 flex flex-col justify-between shadow-2xl rounded-sm border border-aurora-gold/15 overflow-hidden"
            >
              {/* Inner subtle gold/wine glow */}
              <div className="absolute top-[-50%] right-[-50%] w-[300px] h-[300px] rounded-full bg-aurora-wine/15 blur-[80px]" />
              <div className="absolute bottom-[-30%] left-[-30%] w-[250px] h-[250px] rounded-full bg-aurora-gold/5 blur-[70px]" />
              
              <div className="z-10">
                <span className="font-serif text-4xl text-aurora-gold italic font-light">A.</span>
                <div className="w-8 h-[1px] bg-aurora-wine my-4" />
              </div>

              <div className="z-10 space-y-4">
                <p className="font-serif text-xl sm:text-2xl text-aurora-offwhite/90 tracking-wide italic leading-relaxed font-light">
                  "A beleza do mistério atrai mais do que a obviedade da exposição."
                </p>
                <p className="text-[9px] tracking-[0.25em] uppercase text-aurora-gold/80 font-medium">
                  Estratégia & Sofisticação
                </p>
              </div>

              {/* Decorative gold line in the poster */}
              <div className="absolute bottom-0 right-0 left-0 h-[2px] bg-gradient-to-r from-aurora-wine via-aurora-gold to-aurora-wine" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
