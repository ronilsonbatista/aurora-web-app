import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Sparkles, 
  HeartHandshake, 
  Grid, 
  RefreshCw 
} from 'lucide-react';

export default function Experience() {
  const items = [
    {
      icon: <Users size={16} className="text-aurora-wine" />,
      title: 'Jornada do Assinante',
      desc: 'Construção de uma experiência imersiva e de alto padrão desde o primeiro contato no canal privado, elevando a percepção de valor.'
    },
    {
      icon: <MessageCircle size={16} className="text-aurora-wine" />,
      title: 'Comunicação Estratégica',
      desc: 'Tom de voz refinado e interações personalizadas que criam sentimentos profundos de exclusividade e proximidade.'
    },
    {
      icon: <Sparkles size={16} className="text-aurora-wine" />,
      title: 'Conteúdo com Intenção',
      desc: 'Planejamento estratégico de cronograma de postagens desenhado para engajar, atiçar a curiosidade e gerar desejo constante.'
    },
    {
      icon: <HeartHandshake size={16} className="text-aurora-wine" />,
      title: 'Rotina de Relacionamento',
      desc: 'Desenvolvimento de ações contínuas de fidelização para transformar assinantes ocasionais em membros recorrentes de longo prazo.'
    },
    {
      icon: <Grid size={16} className="text-aurora-wine" />,
      title: 'Organização de Prévias & PPV',
      desc: 'Curadoria estratégica de catálogos e planejamento de campanhas premium sem expor desnecessariamente a imagem da criadora.'
    },
    {
      icon: <RefreshCw size={16} className="text-aurora-wine" />,
      title: 'Retenção & Recorrência',
      desc: 'Análise diária de dados de assinatura para combater cancelamentos e maximizar a estabilidade do faturamento mensal recorrente.'
    }
  ];

  return (
    <section
      id="experiencia"
      className="py-28 md:py-36 px-6 md:px-12 bg-aurora-offwhite relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and intro copy */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-aurora-wine font-semibold block">
              A Experiência
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-aurora-black font-light leading-tight">
              A experiência por trás do desejo
            </h2>
            <div className="w-12 h-[1px] bg-aurora-gold" />
            
            <p className="text-aurora-taupe text-xs sm:text-sm md:text-base font-light leading-relaxed tracking-widest text-pretty pt-2">
              Cada detalhe da jornada é pensado para aumentar conexão, retenção e percepção de valor. Da primeira impressão ao relacionamento contínuo, a Aurora organiza a experiência para que o público enxergue exclusividade, proximidade e desejo.
            </p>
          </div>

          {/* Right Column: Cards grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.7, ease: 'easeOut' }}
                  whileHover={{ 
                    y: -3,
                    borderColor: 'rgba(91, 13, 24, 0.3)',
                    boxShadow: '0 12px 24px -10px rgba(91, 13, 24, 0.03)'
                  }}
                  className="bg-aurora-bege/15 border border-aurora-bege/50 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 group h-full"
                >
                  <div className="space-y-4">
                    {/* Icon container */}
                    <div className="w-8 h-8 rounded-lg bg-aurora-wine/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {item.icon}
                    </div>

                    <h3 className="font-serif text-base font-medium text-aurora-black group-hover:text-aurora-wine transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-aurora-taupe text-[11px] sm:text-xs md:text-sm font-light leading-relaxed tracking-wide mt-3">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
