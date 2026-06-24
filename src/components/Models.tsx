import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Models() {
  const points = [
    'Acompanhamento estratégico diário e individual',
    'Sem investimento inicial por parte da criadora',
    'Estrutura operacional completa (chatters, editores, designers)',
    'Contrato de parceria profissional registrado e seguro',
    'Divisão justa baseada em performance e performance real',
    'Privacidade total e segurança de identidade garantidas'
  ];

  return (
    <section
      id="modelos"
      className="py-24 md:py-36 px-6 md:px-12 bg-aurora-bege/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-8 z-10">
            <div className="space-y-4">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-aurora-wine font-medium block">
                Para Modelos
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-aurora-black font-semibold leading-tight text-balance"
              >
                Para criadoras que querem crescer com método.
              </motion.h2>
            </div>
            
            <div className="w-12 h-[1px] bg-aurora-wine/40" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-aurora-taupe text-sm md:text-base font-light leading-relaxed text-pretty"
            >
              A Aurora & Co. trabalha com um grupo seleto de criadoras de conteúdo. Oferecemos um modelo de negócios sustentável, transparente e livre de taxas escondidas ou surpresas contratuais.
            </motion.p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-aurora-wine/10 flex items-center justify-center">
                    <Check size={10} className="text-aurora-wine" />
                  </div>
                  <span className="text-xs sm:text-sm text-aurora-taupe font-light tracking-wide leading-snug">
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
              className="relative w-full max-w-md bg-aurora-black border border-aurora-wine/30 rounded-2xl p-8 md:p-12 shadow-2xl text-center overflow-hidden"
            >
              {/* Luxury gold/wine glow overlay */}
              <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-aurora-wine/20 blur-[60px]" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-aurora-wine/20 blur-[60px]" />

              <div className="relative z-10 space-y-6">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-aurora-wine font-semibold block">
                  Modelo de Parceria
                </span>

                <h3 className="font-serif text-2xl md:text-3xl text-aurora-offwhite font-medium">
                  Divisão Justa e Transparente
                </h3>

                {/* Big Split Percentage Display */}
                <div className="grid grid-cols-2 gap-4 py-8 border-y border-aurora-offwhite/10 my-6">
                  <div className="space-y-2">
                    <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-aurora-offwhite block tracking-tighter">
                      50%
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-aurora-bege font-light block">
                      Criadora
                    </span>
                  </div>
                  <div className="space-y-2 border-l border-aurora-offwhite/10">
                    <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-aurora-wine block tracking-tighter">
                      50%
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-aurora-bege font-light block">
                      Empresa
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[11px] sm:text-xs text-aurora-bege/70 font-light leading-relaxed tracking-wider">
                    **Observação:** Todo o investimento em infraestrutura, equipe, estratégias de tráfego pago e produção é financiado por nós.
                  </p>
                  <p className="text-[11px] sm:text-xs text-aurora-taupe font-medium uppercase tracking-[0.15em]">
                    Parceria alinhada: Só ganhamos se você ganhar.
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
