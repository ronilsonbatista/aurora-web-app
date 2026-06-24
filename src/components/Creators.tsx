import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Creators() {
  const points = [
    'Gestão completa de canais e plataformas',
    'Assessoria estética e direção criativa',
    'Atendimento comercial dedicado (chatter)',
    'Contrato formal com segurança jurídica (18+)',
    'Investimento em tráfego e infraestrutura por conta da Aurora',
    'Absoluta confidencialidade e segurança de dados'
  ];

  return (
    <section
      id="para-criadoras"
      className="py-28 md:py-36 px-6 md:px-12 bg-aurora-bege/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-8 z-10">
            <div className="space-y-4">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-aurora-wine font-semibold block">
                Para Criadoras
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-4xl sm:text-5xl text-aurora-black font-light leading-tight text-balance"
              >
                Para criadoras que querem crescer com estrutura.
              </motion.h2>
            </div>
            
            <div className="w-12 h-[1px] bg-aurora-gold" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-aurora-taupe text-xs sm:text-sm md:text-base font-light leading-relaxed tracking-widest text-pretty"
            >
              A Aurora & Co. atua ao lado de criadoras selecionadas para estruturar marca, conteúdo, canais, atendimento e operação comercial. A modelo foca na presença e na criação. A Aurora cuida da estratégia, organização e crescimento.
            </motion.p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-3.5 h-3.5 rounded-full bg-aurora-wine/10 flex items-center justify-center">
                    <Check size={10} className="text-aurora-wine" />
                  </div>
                  <span className="text-[11px] sm:text-xs md:text-sm text-aurora-taupe font-light tracking-wide leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Division Split Card */}
          <div className="lg:col-span-6 flex justify-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md bg-aurora-black border border-aurora-gold/15 rounded-2xl p-8 md:p-12 shadow-2xl text-center overflow-hidden"
            >
              {/* Luxury gold/wine glow overlay */}
              <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-aurora-wine/25 blur-[60px]" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-aurora-gold/10 blur-[60px]" />

              <div className="relative z-10 space-y-6">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-aurora-gold font-semibold block">
                  Modelo de Sociedade
                </span>

                <h3 className="font-serif text-2xl md:text-3xl text-aurora-offwhite font-light">
                  Divisão de Parceria
                </h3>

                {/* Big Split Percentage Display */}
                <div className="grid grid-cols-2 gap-4 py-8 border-y border-aurora-offwhite/10 my-6">
                  <div className="space-y-2">
                    <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-aurora-offwhite block tracking-tighter">
                      50%
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-aurora-bege font-light block">
                      Criadora
                    </span>
                  </div>
                  <div className="space-y-2 border-l border-aurora-offwhite/10">
                    <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-aurora-gold block tracking-tighter">
                      50%
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-aurora-bege font-light block">
                      Aurora & Co.
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[11px] sm:text-xs text-aurora-bege/70 font-light leading-relaxed tracking-wider">
                    Parceria com contrato, alinhamento de expectativas e operação profissional.
                  </p>
                  <p className="text-[10px] text-aurora-gold/80 font-light uppercase tracking-[0.2em] border border-aurora-gold/20 py-2.5 rounded-full bg-aurora-gold/5 max-w-[280px] mx-auto">
                    Só lucramos quando você lucra.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
