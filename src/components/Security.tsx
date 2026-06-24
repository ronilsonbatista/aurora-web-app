import { motion } from 'framer-motion';
import { 
  FileText, 
  DollarSign, 
  EyeOff, 
  ShieldCheck, 
  Headphones, 
  LineChart 
} from 'lucide-react';

export default function Security() {
  const securityItems = [
    {
      icon: <FileText className="text-aurora-wine" size={20} />,
      title: 'Contrato Formal',
      description: 'Segurança jurídica para ambas as partes. Acordos claros, transparentes e registrados.'
    },
    {
      icon: <DollarSign className="text-aurora-wine" size={20} />,
      title: 'Organização Financeira',
      description: 'Relatórios de faturamento transparentes e repasses pontuais programados.'
    },
    {
      icon: <EyeOff className="text-aurora-wine" size={20} />,
      title: 'Gestão de Conteúdo',
      description: 'Armazenamento seguro, backup e assessoria contra vazamentos e proteção de marca.'
    },
    {
      icon: <ShieldCheck className="text-aurora-wine" size={20} />,
      title: 'Privacidade e Segurança',
      description: 'Preservação da sua identidade real através de estratégias de geobloqueio.'
    },
    {
      icon: <Headphones className="text-aurora-wine" size={20} />,
      title: 'Comunicação Profissional',
      description: 'Suporte humanizado e dedicado. Canais rápidos de contato diário com a gerência.'
    },
    {
      icon: <LineChart className="text-aurora-wine" size={20} />,
      title: 'Planejamento de Crescimento',
      description: 'Definição conjunta de metas, benchmarks de mercado e plano estratégico de carreira.'
    }
  ];

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 bg-aurora-black text-aurora-offwhite relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-[-30%] left-[-20%] w-[500px] h-[500px] rounded-full bg-aurora-wine/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-6">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-aurora-wine font-medium block">
            Segurança & Blindagem
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-aurora-offwhite font-semibold leading-tight text-balance"
          >
            Discrição, contrato e estrutura.
          </motion.h2>
          <div className="w-12 h-[1px] bg-aurora-wine" />
          <p className="text-aurora-taupe text-sm md:text-base font-light tracking-wide max-w-xl">
            Toda a nossa operação é pautada pelo profissionalismo corporativo, assegurando a proteção da sua imagem e dos seus dados.
          </p>
        </div>

        {/* Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className="bg-aurora-black-light border border-aurora-bege/5 hover:border-aurora-wine/30 rounded-xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-lg bg-aurora-wine/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-lg font-medium text-aurora-offwhite group-hover:text-aurora-wine transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-aurora-taupe text-xs sm:text-sm font-light leading-relaxed mt-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
