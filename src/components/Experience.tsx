import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Experience() {
  const items = [
    {
      title: 'Jornada do Assinante',
      desc: 'Experiência imersiva e de alto padrão desde o primeiro contato no canal privado.'
    },
    {
      title: 'Comunicação Estratégica',
      desc: 'Tom de voz refinado e interações que geram sentimento de exclusividade.'
    },
    {
      title: 'Conteúdo com Intenção',
      desc: 'Cronograma planejado para engajar e atiçar a curiosidade e antecipação.'
    },
    {
      title: 'Rotina de Relacionamento',
      desc: 'Ações de fidelização para transformar assinantes ocasionais em membros recorrentes.'
    },
    {
      title: 'Organização de Prévias & PPV',
      desc: 'Curadoria estratégica de catálogos premium sem expor a imagem de forma óbvia.'
    },
    {
      title: 'Retenção & Recorrência',
      desc: 'Análise diária para combater cancelamentos e estabilizar o faturamento mensal.'
    }
  ];

  return (
    <section
      id="experiencia"
      className="py-28 md:py-40 px-6 md:px-12 bg-aurora-black text-aurora-offwhite relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] rounded-full bg-aurora-wine/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, intro copy & list */}
          <div className="lg:col-span-6 space-y-8 z-10">
            <div className="space-y-4">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-aurora-wine font-semibold block">
                A Experiência
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-aurora-offwhite font-light leading-tight">
                A experiência por trás do desejo
              </h2>
            </div>
            
            <div className="w-12 h-[1px] bg-aurora-gold" />
            
            <p className="text-aurora-bege/80 text-xs sm:text-sm md:text-base font-light leading-relaxed tracking-widest text-pretty">
              Cada detalhe da jornada é pensado para aumentar conexão, retenção e percepção de valor. Da primeira impressão ao relacionamento contínuo, a Aurora organiza a experiência para que o público enxergue exclusividade, proximidade e desejo.
            </p>

            {/* List items - highly editorial and lightweight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-aurora-bege/5">
              {items.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={12} className="text-aurora-gold flex-shrink-0" />
                    <h3 className="font-serif text-sm font-medium text-aurora-offwhite">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-aurora-taupe text-[11px] sm:text-xs font-light leading-relaxed tracking-wide pl-5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Visual Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end z-10 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] lg:aspect-square bg-aurora-black-light rounded-xl overflow-hidden shadow-2xl border border-aurora-gold/15"
            >
              {/* Image asset loaded from public folder */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: 'url(/experience_silk.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Subtle visual overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-aurora-black/50 to-transparent pointer-events-none" />
              <div className="absolute inset-4 border border-aurora-gold/10 rounded-lg pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
