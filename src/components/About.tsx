import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 md:py-36 px-6 md:px-12 bg-aurora-offwhite relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text content - taking 7 cols on desktop */}
          <div className="lg:col-span-7 space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-aurora-wine font-medium block">
                Sobre a Aurora & Co.
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-aurora-black font-semibold leading-[1.15] text-balance">
                Uma gestão feita para transformar presença em desejo.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6 text-aurora-taupe text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl text-pretty"
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
              className="relative w-full max-w-sm aspect-[4/5] bg-aurora-black p-8 md:p-12 flex flex-col justify-between shadow-2xl rounded-sm border border-aurora-bege/20 overflow-hidden"
            >
              {/* Inner subtle glow */}
              <div className="absolute top-[-50%] right-[-50%] w-[300px] h-[300px] rounded-full bg-aurora-wine/10 blur-[80px]" />
              
              <div className="z-10">
                <span className="font-serif text-3xl text-aurora-bege italic">A.</span>
                <div className="w-8 h-[1px] bg-aurora-wine my-4" />
              </div>

              <div className="z-10 space-y-4">
                <p className="font-serif text-lg sm:text-xl text-aurora-offwhite tracking-wide italic leading-relaxed">
                  "A beleza do mistério atrai mais do que a obviedade da exposição."
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-aurora-taupe">
                  Estratégia & Sofisticação
                </p>
              </div>

              {/* Decorative line in the poster */}
              <div className="absolute bottom-0 right-0 left-0 h-1 bg-aurora-wine" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
