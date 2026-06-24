import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Sparkles, 
  Layers, 
  Compass, 
  Share2, 
  Film, 
  MessageSquare, 
  FolderLock, 
  TrendingUp 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="text-aurora-wine" size={24} />,
      title: 'Branding Pessoal',
      description: 'Estratégia de posicionamento de imagem de alto valor, criando uma identidade única, magnética e profissional.'
    },
    {
      icon: <Layers className="text-aurora-wine" size={24} />,
      title: 'Gestão de Plataformas',
      description: 'Configuração completa, otimização de perfil e gerenciamento técnico de canais de monetização e assinaturas.'
    },
    {
      icon: <Compass className="text-aurora-wine" size={24} />,
      title: 'Estratégia de Conteúdo',
      description: 'Direcionamento estratégico, funis de conversão, scripts detalhados e storytelling focado em retenção.'
    },
    {
      icon: <Share2 className="text-aurora-wine" size={24} />,
      title: 'Administração de Redes Sociais',
      description: 'Gestão operacional de canais de atração (Instagram, TikTok, Twitter/X) para alimentar o funil de tráfego.'
    },
    {
      icon: <Film className="text-aurora-wine" size={24} />,
      title: 'Produção & Direção Criativa',
      description: 'Roteiros de fotos e vídeos, moodboards de referências visuais de luxo e curadoria estética de alto nível.'
    },
    {
      icon: <MessageSquare className="text-aurora-wine" size={24} />,
      title: 'Atendimento & Chat',
      description: 'Gestão profissional de chat por equipe treinada com foco em cross-selling, upsell e conversão diária de alto ticket.'
    },
    {
      icon: <FolderLock className="text-aurora-wine" size={24} />,
      title: 'Organização de Mídia',
      description: 'Estruturação segura de pastas de backups (Google Drive), garantindo o controle e facilidade no fluxo criativo.'
    },
    {
      icon: <TrendingUp className="text-aurora-wine" size={24} />,
      title: 'Crescimento & Monetização',
      description: 'Análise de métricas, diversificação de receitas e campanhas sazonais focadas na maximização de faturamento.'
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
  };

  return (
    <section
      id="gestao"
      className="py-24 md:py-32 px-6 md:px-12 bg-aurora-bege/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-aurora-wine font-medium block">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-aurora-black font-semibold leading-tight">
            Gestão 360° para elevar sua presença digital.
          </h2>
          <div className="w-12 h-[1px] bg-aurora-wine/40 mx-auto mt-6" />
          <p className="text-aurora-taupe text-sm md:text-base font-light tracking-wide max-w-xl mx-auto">
            Cuidamos de toda a operação e burocracia para que sua única preocupação seja expressar a sua autenticidade.
          </p>
        </div>

        {/* Grid of services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                borderColor: 'rgba(91, 13, 24, 0.4)',
                boxShadow: '0 20px 40px -15px rgba(91, 13, 24, 0.05)'
              }}
              className="bg-aurora-offwhite border border-aurora-bege/60 rounded-lg p-8 flex flex-col justify-between transition-all duration-300 group h-full"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-full bg-aurora-wine/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-lg font-medium text-aurora-black mb-3">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-aurora-taupe text-xs sm:text-sm font-light leading-relaxed tracking-wide">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
