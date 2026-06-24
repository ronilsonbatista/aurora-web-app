import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Sparkles, 
  Compass, 
  Layers, 
  Share2, 
  Heart, 
  MessageSquare, 
  Eye, 
  TrendingUp 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      num: '01',
      icon: <Sparkles size={18} className="text-aurora-wine" />,
      title: 'Posicionamento de Marca',
      description: 'Construímos uma presença desejável, coerente e estratégica para que a criadora seja percebida como uma marca de luxo, elevando seu valor de mercado.'
    },
    {
      num: '02',
      icon: <Compass size={18} className="text-aurora-wine" />,
      title: 'Estratégia de Conteúdo',
      description: 'Desenvolvemos narrativas envolventes e roteiros sob medida, desenhando funis de conteúdo que geram conexão genuína e despertam o desejo de assinatura.'
    },
    {
      num: '03',
      icon: <Layers size={18} className="text-aurora-wine" />,
      title: 'Organização da Operação',
      description: 'Estruturamos toda a parte técnica, rotinas administrativas e ferramentas digitais para que a criadora tenha total liberdade de focar exclusivamente na criação.'
    },
    {
      num: '04',
      icon: <Share2 size={18} className="text-aurora-wine" />,
      title: 'Gestão de Canais',
      description: 'Gerenciamento ativo e diário das plataformas de atração e monetização privada, maximizando o fluxo de conversão e a eficiência operacional.'
    },
    {
      num: '05',
      icon: <Heart size={18} className="text-aurora-wine" />,
      title: 'Experiência do Assinante',
      description: 'Desenhamos uma jornada exclusiva e premium para o fã, integrando mimos digitais e mensagens personalizadas que elevam a retenção de longo prazo.'
    },
    {
      num: '06',
      icon: <MessageSquare size={18} className="text-aurora-wine" />,
      title: 'Atendimento & Relacionamento',
      description: 'Equipe altamente treinada para gerir mensagens privadas de forma discreta, aplicando técnicas sofisticadas de venda de alto ticket (cross-sell e upsell).'
    },
    {
      num: '07',
      icon: <Eye size={18} className="text-aurora-wine" />,
      title: 'Direção Criativa',
      description: 'Curadoria estética visual de luxo, moodboards de referências exclusivas e direcionamento artístico para garantir a sofisticação da sua imagem.'
    },
    {
      num: '08',
      icon: <TrendingUp size={18} className="text-aurora-wine" />,
      title: 'Crescimento & Monetização',
      description: 'Planejamento estratégico de metas financeiras, campanhas sazonais exclusivas e otimização contínua das fontes de faturamento recorrente.'
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } }
  };

  return (
    <section
      id="gestao"
      className="py-28 md:py-36 px-6 md:px-12 bg-aurora-bege/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 space-y-4">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-aurora-wine font-semibold block">
            Entregáveis Aurora
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-aurora-black font-light leading-tight">
            O que a Aurora entrega
          </h2>
          <div className="w-12 h-[1px] bg-aurora-gold mx-auto mt-6" />
          <p className="text-aurora-taupe text-xs sm:text-sm md:text-base font-light tracking-widest max-w-xl mx-auto leading-relaxed pt-2">
            Cuidamos de toda a inteligência estratégica e operacional para que sua imagem atinja o mais alto patamar de percepção de valor.
          </p>
        </div>

        {/* Grid of services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -4,
                borderColor: 'rgba(184, 155, 106, 0.45)', // gold outline on hover
                boxShadow: '0 15px 30px -10px rgba(91, 13, 24, 0.03)'
              }}
              className="bg-aurora-offwhite border border-aurora-bege/70 rounded-lg p-6 md:p-8 flex flex-col justify-between transition-all duration-300 group h-full relative"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  {/* Delicate Icon wrapper */}
                  <div className="w-9 h-9 rounded-lg bg-aurora-wine/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Editorial Index Number */}
                  <span className="font-serif text-sm italic text-aurora-gold/60 font-light">
                    {service.num}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-lg font-medium text-aurora-black mb-3">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-aurora-taupe text-[11px] sm:text-xs md:text-sm font-light leading-relaxed tracking-wide mt-2">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
