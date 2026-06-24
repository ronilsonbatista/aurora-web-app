import { motion } from 'framer-motion';
import { 
  FileText, 
  DollarSign, 
  ShieldCheck 
} from 'lucide-react';

export default function Security() {
  const securityItems = [
    {
      icon: <FileText className="text-aurora-gold" size={18} />,
      title: 'Segurança Jurídica',
      description: 'Contrato estruturado por assessoria legal, assegurando a formalidade e garantias da nossa parceria.'
    },
    {
      icon: <ShieldCheck className="text-aurora-gold" size={18} />,
      title: 'Blindagem de Identidade',
      description: 'Geobloqueio regional completo e blindagem de dados para garantir sua total privacidade.'
    },
    {
      icon: <DollarSign className="text-aurora-gold" size={18} />,
      title: 'Organização Financeira',
      description: 'Conciliação ágil, relatórios claros e repasses pontuais organizados de forma transparente.'
    }
  ];

  return (
    <section
      className="py-28 md:py-36 px-6 md:px-12 bg-aurora-black text-aurora-offwhite relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-[-30%] left-[-20%] w-[500px] h-[500px] rounded-full bg-aurora-wine/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-aurora-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-28 space-y-6">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-aurora-wine font-semibold block">
            Segurança & Blindagem
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl text-aurora-offwhite font-light leading-tight text-balance"
          >
            Discrição, contrato e estrutura corporativa.
          </motion.h2>
          <div className="w-12 h-[1px] bg-aurora-gold" />
          <p className="text-aurora-taupe text-xs sm:text-sm md:text-base font-light tracking-widest max-w-xl leading-relaxed pt-2">
            Toda a nossa operação é pautada pelo profissionalismo corporativo, assegurando a proteção integral da sua imagem e dos seus dados.
          </p>
        </div>

        {/* Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {securityItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              whileHover={{ 
                y: -3,
                borderColor: 'rgba(184, 155, 106, 0.35)', // gold highlight
                boxShadow: '0 12px 24px -10px rgba(184, 155, 106, 0.02)'
              }}
              className="bg-aurora-black-light border border-aurora-bege/5 hover:border-aurora-gold/20 rounded-xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-9 h-9 rounded-lg bg-aurora-wine/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-lg font-medium text-aurora-offwhite group-hover:text-aurora-wine transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-aurora-taupe text-[11px] sm:text-xs md:text-sm font-light leading-relaxed mt-4 tracking-wide">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
