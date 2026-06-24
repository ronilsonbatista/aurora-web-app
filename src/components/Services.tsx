import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Sparkles, 
  Compass, 
  Layers, 
  MessageSquare 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      num: '01',
      icon: <Sparkles size={16} className="text-aurora-gold" />,
      title: 'Branding & Imagem',
      description: 'Direção artística e posicionamento de luxo para elevar a percepção de valor do seu perfil.'
    },
    {
      num: '02',
      icon: <Compass size={16} className="text-aurora-gold" />,
      title: 'Conteúdo & Narrativa',
      description: 'Estratégia narrativa personalizada e funis que despertam desejo imediato e conversão.'
    },
    {
      num: '03',
      icon: <Layers size={16} className="text-aurora-gold" />,
      title: 'Operação & Blindagem',
      description: 'Gestão técnica e administrativa completa para blindar sua rotina de criação.'
    },
    {
      num: '04',
      icon: <MessageSquare size={16} className="text-aurora-gold" />,
      title: 'Vendas & Relacionamento',
      description: 'Relacionamento privado de alto ticket conduzido por profissionais qualificados.'
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
      className="py-28 md:py-36 px-6 md:px-12 bg-aurora-black relative overflow-hidden"
    >
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(91,13,24,0.03)_0%,_transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 space-y-4">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-aurora-wine font-semibold block">
            Nossos Pilares
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-aurora-offwhite font-light leading-tight">
            O que a Aurora entrega
          </h2>
          <div className="w-12 h-[1px] bg-aurora-gold mx-auto mt-6" />
          <p className="text-aurora-bege/60 text-xs sm:text-sm md:text-base font-light tracking-widest max-w-xl mx-auto leading-relaxed pt-2">
            Cuidamos de toda a inteligência estratégica e operacional para que sua imagem atinja o mais alto patamar de desejo.
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
                borderColor: 'rgba(184, 155, 106, 0.4)', // Gold hover border
                boxShadow: '0 15px 30px -10px rgba(184, 155, 106, 0.02)'
              }}
              className="bg-[#121212] border border-aurora-bege/5 rounded-lg p-6 md:p-8 flex flex-col justify-between transition-all duration-300 group h-full relative"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  {/* Delicate Icon wrapper */}
                  <div className="w-8 h-8 rounded-lg bg-aurora-wine/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Editorial Index Number */}
                  <span className="font-serif text-xs italic text-aurora-gold/60 font-light">
                    {service.num}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-lg font-medium text-aurora-offwhite mb-3">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-aurora-bege/60 text-[11px] sm:text-xs md:text-sm font-light leading-relaxed tracking-wide mt-2">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
