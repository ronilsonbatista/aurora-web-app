import { motion } from 'framer-motion';
import { 
  Link2, 
  Send, 
  Maximize2, 
  ShieldAlert, 
  HardDrive, 
  MessageSquareHeart, 
  LockKeyhole 
} from 'lucide-react';

const Instagram = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Structure() {
  const steps = [
    {
      icon: <Link2 size={18} className="text-aurora-wine" />,
      title: 'Bio Site Personalizado',
      detail: 'Seu hub centralizado de conversão rápida.'
    },
    {
      icon: <Instagram size={18} className="text-aurora-wine" />,
      title: 'Instagram Estratégico',
      detail: 'Produção focada em funil de atração orgânica.'
    },
    {
      icon: <Send size={18} className="text-aurora-wine" />,
      title: 'Telegram Prévia & VIP',
      detail: 'Retenção, aquecimento de leads e vendas diretas.'
    },
    {
      icon: <Maximize2 size={18} className="text-aurora-wine" />,
      title: 'TikTok, Twitter/X e Canais de Venda',
      detail: 'Presença multiplataforma e atração em massa.'
    },
    {
      icon: <ShieldAlert size={18} className="text-aurora-wine" />,
      title: 'OnlyFans, Privacy & Plataformas Adultas',
      detail: 'Onde o desejo se transforma em faturamento direto.'
    },
    {
      icon: <HardDrive size={18} className="text-aurora-wine" />,
      title: 'Google Drive Estruturado',
      detail: 'Backup seguro, organização de mídias e fluxo ágil.'
    },
    {
      icon: <MessageSquareHeart size={18} className="text-aurora-wine" />,
      title: 'Chat & Atendimento Comercial',
      detail: 'Comunicação diária ativa com foco em conversão.'
    },
    {
      icon: <LockKeyhole size={18} className="text-aurora-wine" />,
      title: 'Gestão Administrativa & Dashboard',
      detail: 'Relatórios claros e transparência financeira.'
    }
  ];

  return (
    <section
      id="estrutura"
      className="py-24 md:py-36 px-6 md:px-12 bg-aurora-offwhite relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-aurora-wine font-medium block">
              A Operação
            </span>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-aurora-black font-semibold leading-tight text-balance"
            >
              Tudo organizado para a criadora focar no que importa.
            </motion.h2>
            <div className="w-12 h-[1px] bg-aurora-wine/40" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-aurora-taupe text-sm md:text-base font-light leading-relaxed text-pretty"
            >
              Nós montamos e operamos uma estrutura digital integrada e blindada. Cada canal cumpre um papel estratégico dentro do funil de vendas, garantindo que nenhum fã em potencial se perca pelo caminho.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-aurora-taupe text-sm font-light leading-relaxed text-pretty"
            >
              Com um ecossistema seguro e relatórios transparentes, você tem total clareza do crescimento da sua marca.
            </motion.p>
          </div>

          {/* Right Column: Visual pipeline */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="bg-aurora-bege/20 border border-aurora-bege/40 hover:border-aurora-wine/30 rounded-lg p-5 flex gap-4 transition-all duration-300 group"
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-aurora-offwhite flex items-center justify-center shadow-sm group-hover:bg-aurora-wine/5 group-hover:scale-105 transition-all">
                    {step.icon}
                  </div>

                  {/* Text */}
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm font-semibold text-aurora-black group-hover:text-aurora-wine transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-aurora-taupe font-light leading-snug">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
