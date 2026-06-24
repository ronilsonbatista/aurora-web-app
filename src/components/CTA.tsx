import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

type FormType = 'model' | 'recommendation' | 'partner';

export default function CTA() {
  const [formType, setFormType] = useState<FormType>('model');
  const [formData, setFormData] = useState({
    // Criadora (Model)
    name: '',
    email: '',
    instagram: '',
    whatsapp: '',
    message: '',
    
    // Indicar Modelo (Recommendation)
    referrerName: '',
    referrerContact: '',
    modelName: '',
    modelInstagram: '',
    modelWhatsapp: '',
    recommendationNote: '',
    
    // Parceiro / Serviço (Partner)
    partnerName: '',
    partnerContact: '',
    serviceType: '',
    proposal: ''
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
    
    // Validations based on type
    if (formType === 'model') {
      if (!formData.name || !formData.email || !formData.whatsapp) {
        setError('Por favor, preencha todos os campos obrigatórios (Nome, E-mail e WhatsApp).');
        return;
      }
    } else if (formType === 'recommendation') {
      if (!formData.referrerName || !formData.referrerContact || !formData.modelName || !formData.modelInstagram) {
        setError('Por favor, preencha todos os campos obrigatórios (Seu Nome, Seu Contato, Nome da Modelo e Instagram da Modelo).');
        return;
      }
    } else if (formType === 'partner') {
      if (!formData.partnerName || !formData.partnerContact || !formData.serviceType || !formData.proposal) {
        setError('Por favor, preencha todos os campos obrigatórios (Seu Nome/Empresa, Contato, Tipo de Serviço e Detalhes da Proposta).');
        return;
      }
    }

    setLoading(true);

    // Format data payload for FormSubmit
    let dataToSubmit: Record<string, string> = {};
    if (formType === 'model') {
      dataToSubmit = {
        "Tipo de Cadastro": "Criadora / Modelo",
        "Nome": formData.name,
        "Email": formData.email,
        "Instagram": formData.instagram,
        "WhatsApp": formData.whatsapp,
        "Trajetória / Objetivos": formData.message
      };
    } else if (formType === 'recommendation') {
      dataToSubmit = {
        "Tipo de Cadastro": "Indicação de Modelo",
        "Nome do Indicador": formData.referrerName,
        "Contato do Indicador": formData.referrerContact,
        "Nome da Modelo Indicada": formData.modelName,
        "Instagram da Modelo": formData.modelInstagram,
        "WhatsApp da Modelo": formData.modelWhatsapp || "Não informado",
        "Observações / Nota": formData.recommendationNote || "Nenhuma"
      };
    } else if (formType === 'partner') {
      dataToSubmit = {
        "Tipo de Cadastro": "Prestador de Serviço / Parceiro",
        "Nome ou Empresa": formData.partnerName,
        "Contato (Email/WA)": formData.partnerContact,
        "Tipo de Serviço": formData.serviceType,
        "Mensagem / Proposta": formData.proposal
      };
    }

    // Submit via FormSubmit AJAX endpoint
    fetch("https://formsubmit.co/ajax/contatoauroraco26@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        ...dataToSubmit,
        _subject: `Aurora & Co - Novo Cadastro (${dataToSubmit["Tipo de Cadastro"]})`,
        _captcha: "false"
      })
    })
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      if (data.success === "true" || data.success) {
        setSubmitted(true);
        // Clear all fields
        setFormData({
          name: '',
          email: '',
          instagram: '',
          whatsapp: '',
          message: '',
          referrerName: '',
          referrerContact: '',
          modelName: '',
          modelInstagram: '',
          modelWhatsapp: '',
          recommendationNote: '',
          partnerName: '',
          partnerContact: '',
          serviceType: '',
          proposal: ''
        });
      } else {
        setError('Ocorreu um erro no servidor. Por favor, tente enviar novamente.');
      }
    })
    .catch(() => {
      setLoading(false);
      setError('Erro de conexão. Verifique sua rede e tente enviar novamente.');
    });
  };

  return (
    <section
      id="contato"
      className="py-28 md:py-36 px-6 md:px-12 bg-aurora-black relative overflow-hidden"
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
            <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-aurora-wine font-semibold block">
              Processo de Curadoria
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-aurora-offwhite font-light leading-tight text-balance">
              Sua imagem. <br />Uma marca de desejo.
            </h2>
            <div className="w-12 h-[1px] bg-aurora-gold" />
            <p className="text-aurora-bege/80 text-sm sm:text-base md:text-lg font-light leading-relaxed tracking-widest text-pretty pt-2">
              Envie seu perfil para avaliação da nossa curadoria. Analisamos cada candidatura de criadoras de conteúdo exclusivo sob estrito sigilo.
            </p>
            <p className="text-xs text-aurora-taupe/70 italic font-light tracking-wide pt-4 border-t border-aurora-bege/5">
              *Informações tratadas com absoluto sigilo profissional.
            </p>
          </div>

          {/* Right Block: Interactive Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-aurora-bege/5 rounded-2xl p-6 md:p-10 shadow-lg relative">
            
            {/* Tab Selector */}
            {!submitted && (
              <div className="flex border-b border-aurora-bege/10 pb-4 justify-between gap-2 overflow-x-auto select-none mb-6">
                <button
                  type="button"
                  onClick={() => { setFormType('model'); setError(''); }}
                  className={`text-xs uppercase tracking-wider pb-2 font-medium transition-all cursor-pointer whitespace-nowrap ${
                    formType === 'model' 
                      ? 'text-aurora-gold border-b-2 border-aurora-gold' 
                      : 'text-aurora-taupe hover:text-aurora-offwhite'
                  }`}
                >
                  Quero ser Criadora
                </button>
                <button
                  type="button"
                  onClick={() => { setFormType('recommendation'); setError(''); }}
                  className={`text-xs uppercase tracking-wider pb-2 font-medium transition-all cursor-pointer whitespace-nowrap ${
                    formType === 'recommendation' 
                      ? 'text-aurora-gold border-b-2 border-aurora-gold' 
                      : 'text-aurora-taupe hover:text-aurora-offwhite'
                  }`}
                >
                  Indicar Modelo
                </button>
                <button
                  type="button"
                  onClick={() => { setFormType('partner'); setError(''); }}
                  className={`text-xs uppercase tracking-wider pb-2 font-medium transition-all cursor-pointer whitespace-nowrap ${
                    formType === 'partner' 
                      ? 'text-aurora-gold border-b-2 border-aurora-gold' 
                      : 'text-aurora-taupe hover:text-aurora-offwhite'
                  }`}
                >
                  Oferecer Serviço
                </button>
              </div>
            )}

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key={formType}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* TAB 1: MODEL REGISTRATION */}
                  {formType === 'model' && (
                    <>
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-aurora-offwhite block">
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
                          className="w-full bg-aurora-black border border-aurora-bege/10 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-sm text-aurora-offwhite tracking-wider transition-all placeholder:text-aurora-taupe/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-aurora-offwhite block">
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
                          className="w-full bg-aurora-black border border-aurora-bege/10 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-sm text-aurora-offwhite tracking-wider transition-all placeholder:text-aurora-taupe/40"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="instagram" className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-aurora-offwhite block">
                            Instagram / Rede Social
                          </label>
                          <input
                            type="text"
                            id="instagram"
                            name="instagram"
                            value={formData.instagram}
                            onChange={handleChange}
                            placeholder="@seu_perfil"
                            className="w-full bg-aurora-black border border-aurora-bege/10 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-sm text-aurora-offwhite tracking-wider transition-all placeholder:text-aurora-taupe/40"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="whatsapp" className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-aurora-offwhite block">
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
                            className="w-full bg-aurora-black border border-aurora-bege/10 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-sm text-aurora-offwhite tracking-wider transition-all placeholder:text-aurora-taupe/40"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-aurora-offwhite block">
                          Fale um pouco sobre você e seus objetivos
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Conte sobre sua trajetória de conteúdo e objetivos."
                          className="w-full bg-aurora-black border border-aurora-bege/10 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-sm text-aurora-offwhite tracking-wider transition-all resize-none placeholder:text-aurora-taupe/40"
                        />
                      </div>
                    </>
                  )}

                  {/* TAB 2: MODEL RECOMMENDATION */}
                  {formType === 'recommendation' && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="referrerName" className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-aurora-offwhite block">
                            Seu Nome *
                          </label>
                          <input
                            type="text"
                            id="referrerName"
                            name="referrerName"
                            value={formData.referrerName}
                            onChange={handleChange}
                            placeholder="Seu nome"
                            required
                            className="w-full bg-aurora-black border border-aurora-bege/10 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-sm text-aurora-offwhite tracking-wider transition-all placeholder:text-aurora-taupe/40"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="referrerContact" className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-aurora-offwhite block">
                            Seu Contato *
                          </label>
                          <input
                            type="text"
                            id="referrerContact"
                            name="referrerContact"
                            value={formData.referrerContact}
                            onChange={handleChange}
                            placeholder="Email ou WhatsApp"
                            required
                            className="w-full bg-aurora-black border border-aurora-bege/10 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-sm text-aurora-offwhite tracking-wider transition-all placeholder:text-aurora-taupe/40"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="modelName" className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-aurora-offwhite block">
                          Nome da Modelo Indicada *
                        </label>
                        <input
                          type="text"
                          id="modelName"
                          name="modelName"
                          value={formData.modelName}
                          onChange={handleChange}
                          placeholder="Nome da modelo que deseja indicar"
                          required
                          className="w-full bg-aurora-black border border-aurora-bege/10 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-sm text-aurora-offwhite tracking-wider transition-all placeholder:text-aurora-taupe/40"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="modelInstagram" className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-aurora-offwhite block">
                            Instagram da Modelo *
                          </label>
                          <input
                            type="text"
                            id="modelInstagram"
                            name="modelInstagram"
                            value={formData.modelInstagram}
                            onChange={handleChange}
                            placeholder="@perfil_da_modelo"
                            required
                            className="w-full bg-aurora-black border border-aurora-bege/10 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-sm text-aurora-offwhite tracking-wider transition-all placeholder:text-aurora-taupe/40"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="modelWhatsapp" className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-aurora-offwhite block">
                            WhatsApp da Modelo
                          </label>
                          <input
                            type="tel"
                            id="modelWhatsapp"
                            name="modelWhatsapp"
                            value={formData.modelWhatsapp}
                            onChange={handleChange}
                            placeholder="(11) 99999-9999"
                            className="w-full bg-aurora-black border border-aurora-bege/10 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-sm text-aurora-offwhite tracking-wider transition-all placeholder:text-aurora-taupe/40"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="recommendationNote" className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-aurora-offwhite block">
                          Observações / Por que está indicando?
                        </label>
                        <textarea
                          id="recommendationNote"
                          name="recommendationNote"
                          rows={3}
                          value={formData.recommendationNote}
                          onChange={handleChange}
                          placeholder="Detalhes adicionais sobre a indicação."
                          className="w-full bg-aurora-black border border-aurora-bege/10 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-sm text-aurora-offwhite tracking-wider transition-all resize-none placeholder:text-aurora-taupe/40"
                        />
                      </div>
                    </>
                  )}

                  {/* TAB 3: PARTNER / SERVICE PROVIDER */}
                  {formType === 'partner' && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="partnerName" className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-aurora-offwhite block">
                            Seu Nome / Empresa *
                          </label>
                          <input
                            type="text"
                            id="partnerName"
                            name="partnerName"
                            value={formData.partnerName}
                            onChange={handleChange}
                            placeholder="Seu nome ou nome da empresa"
                            required
                            className="w-full bg-aurora-black border border-aurora-bege/10 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-sm text-aurora-offwhite tracking-wider transition-all placeholder:text-aurora-taupe/40"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="partnerContact" className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-aurora-offwhite block">
                            Contato (Email/WhatsApp) *
                          </label>
                          <input
                            type="text"
                            id="partnerContact"
                            name="partnerContact"
                            value={formData.partnerContact}
                            onChange={handleChange}
                            placeholder="Email ou WhatsApp"
                            required
                            className="w-full bg-aurora-black border border-aurora-bege/10 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-sm text-aurora-offwhite tracking-wider transition-all placeholder:text-aurora-taupe/40"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="serviceType" className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-aurora-offwhite block">
                          Tipo de Serviço Oferecido *
                        </label>
                        <input
                          type="text"
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          placeholder="Ex: Tráfego Pago, Produção de Vídeo, Fotografia, Design, etc."
                          required
                          className="w-full bg-aurora-black border border-aurora-bege/10 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-sm text-aurora-offwhite tracking-wider transition-all placeholder:text-aurora-taupe/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="proposal" className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-aurora-offwhite block">
                          Detalhes da Proposta *
                        </label>
                        <textarea
                          id="proposal"
                          name="proposal"
                          rows={4}
                          value={formData.proposal}
                          onChange={handleChange}
                          placeholder="Apresente brevemente seu serviço e como sua proposta pode agregar valor à Aurora & Co."
                          required
                          className="w-full bg-aurora-black border border-aurora-bege/10 focus:border-aurora-gold focus:outline-none rounded-lg px-4 py-3.5 text-sm text-aurora-offwhite tracking-wider transition-all resize-none placeholder:text-aurora-taupe/40"
                        />
                      </div>
                    </>
                  )}

                  {/* Error display */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-sm text-aurora-wine font-medium"
                    >
                      <AlertCircle size={14} />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#5B0D18] hover:bg-[#3A0710] text-aurora-offwhite py-4 rounded-lg text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-wine/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border border-aurora-wine-dark"
                  >
                    {loading ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <span>Enviar Solicitação</span>
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
                    <h3 className="font-serif text-3xl text-aurora-offwhite font-light">
                      {formType === 'model' ? 'Perfil Recebido!' : formType === 'recommendation' ? 'Indicação Recebida!' : 'Mensagem Recebida!'}
                    </h3>
                    <p className="text-aurora-bege/85 text-sm sm:text-base font-light max-w-sm mx-auto leading-relaxed tracking-wider">
                      {formType === 'model' && 'Nossa equipe de curadoria analisará suas informações e entrará em contato de forma extremamente discreta em até 48 horas.'}
                      {formType === 'recommendation' && 'Agradecemos a indicação de modelo. Analisaremos o perfil indicado e entraremos em contato sob absoluto sigilo.'}
                      {formType === 'partner' && 'Agradecemos sua proposta de parceria. Nossa equipe de operação avaliará os detalhes e entrará em contato em breve.'}
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-aurora-gold hover:text-aurora-offwhite font-semibold underline underline-offset-4 cursor-pointer"
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
