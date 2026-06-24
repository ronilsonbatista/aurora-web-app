import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    whatsapp: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validations
    if (!formData.name || !formData.email || !formData.whatsapp) {
      setError('Por favor, preencha todos os campos obrigatórios (Nome, E-mail e WhatsApp).');
      return;
    }

    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        instagram: '',
        whatsapp: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section
      id="contato"
      className="py-28 md:py-36 px-6 md:px-12 bg-aurora-offwhite relative overflow-hidden"
    >
      {/* Background soft circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] rounded-full bg-aurora-wine/5 blur-[90px]" />
        <div className="absolute bottom-[10%] left-[-15%] w-[300px] h-[300px] rounded-full bg-aurora-gold/5 blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Info */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-aurora-wine font-semibold block">
              Processo de Curadoria
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-aurora-black font-light leading-tight text-balance">
              Sua imagem pode ser uma marca desejada.
            </h2>
            <div className="w-12 h-[1px] bg-aurora-gold" />
            <p className="text-aurora-taupe text-xs sm:text-sm md:text-base font-light leading-relaxed tracking-widest text-pretty pt-2">
              Se você quer crescer com estética, estratégia e uma operação profissional por trás, envie seu perfil para avaliação.
            </p>
            <p className="text-[10px] text-aurora-taupe/70 italic font-light tracking-wide pt-4 border-t border-aurora-bege/40">
              *Todas as informações enviadas são tratadas sob absoluto sigilo e confidencialidade profissional.
            </p>
          </div>

          {/* Right Block: Interactive Form */}
          <div className="lg:col-span-7 bg-aurora-bege/10 border border-aurora-bege/50 rounded-2xl p-6 md:p-10 shadow-sm relative">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[9px] uppercase tracking-[0.25em] font-semibold text-aurora-black/80 block">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                      className="w-full bg-aurora-offwhite border border-aurora-bege/80 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-xs text-aurora-black tracking-wider transition-all placeholder:text-aurora-taupe/40"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[9px] uppercase tracking-[0.25em] font-semibold text-aurora-black/80 block">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu.email@exemplo.com"
                      required
                      className="w-full bg-aurora-offwhite border border-aurora-bege/80 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-xs text-aurora-black tracking-wider transition-all placeholder:text-aurora-taupe/40"
                    />
                  </div>

                  {/* Instagram & Whatsapp Inline Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="instagram" className="text-[9px] uppercase tracking-[0.25em] font-semibold text-aurora-black/80 block">
                        Instagram / Rede Social
                      </label>
                      <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        placeholder="@seu_perfil"
                        className="w-full bg-aurora-offwhite border border-aurora-bege/80 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-xs text-aurora-black tracking-wider transition-all placeholder:text-aurora-taupe/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="whatsapp" className="text-[9px] uppercase tracking-[0.25em] font-semibold text-aurora-black/80 block">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        required
                        className="w-full bg-aurora-offwhite border border-aurora-bege/80 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-xs text-aurora-black tracking-wider transition-all placeholder:text-aurora-taupe/40"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[9px] uppercase tracking-[0.25em] font-semibold text-aurora-black/80 block">
                      Fale um pouco sobre você e seus objetivos
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte um pouco sobre sua trajetória atual de conteúdo ou seus objetivos futuros."
                      className="w-full bg-aurora-offwhite border border-aurora-bege/80 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-xs text-aurora-black tracking-wider transition-all resize-none placeholder:text-aurora-taupe/40"
                    />
                  </div>

                  {/* Error display */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-xs text-aurora-wine font-medium"
                    >
                      <AlertCircle size={14} />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-aurora-wine text-aurora-offwhite py-4 rounded-lg text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-300 hover:bg-aurora-wine-dark hover:shadow-lg hover:shadow-aurora-wine/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border border-aurora-wine-dark"
                  >
                    {loading ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <span>Enviar meu perfil</span>
                        <Send size={10} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-aurora-wine/10 flex items-center justify-center text-aurora-wine">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-aurora-black font-light">
                      Perfil Recebido!
                    </h3>
                    <p className="text-aurora-taupe text-xs sm:text-sm font-light max-w-sm mx-auto leading-relaxed tracking-wider">
                      Nossa equipe de curadoria analisará suas informações e entrará em contato de forma extremamente discreta em até 48 horas.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[9px] uppercase tracking-[0.2em] text-aurora-wine hover:text-aurora-gold font-semibold underline underline-offset-4 cursor-pointer"
                  >
                    Voltar ao formulário
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
