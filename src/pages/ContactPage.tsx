import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';
import { defaultStoreSettings } from '../data/demo';
import { env } from '../config/env';
import { buildWhatsAppUrl } from '../lib/utils';

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.title = 'Fale Conosco | Da Hora Motos Elétricas Macatuba';
    window.scrollTo(0, 0);
  }, []);

  const whatsappNumber = env.WHATSAPP_NUMBER || defaultStoreSettings.whatsapp || '5514999999999';
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    'Olá! Gostaria de falar com o atendimento da Da Hora Motos Elétricas.'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSent(true);
  };

  return (
    <div className="bg-dahora-ice min-h-screen py-12">
      <div className="container-dahora max-w-4xl space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-dahora-emerald">
            CANAIS DE ATENDIMENTO
          </span>
          <h1 className="font-display font-extrabold text-3xl text-dahora-text">
            Fale com a Da Hora Motos Elétricas
          </h1>
          <p className="text-sm text-dahora-gray max-w-md mx-auto">
            Estamos prontos para atender você com consultoria técnica, cotações de entrega e suporte pós-venda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-dahora-midnight text-white p-6 rounded-3xl border border-dahora-border-dark space-y-6 shadow-premium">
              <h2 className="font-display font-bold text-lg text-white">
                Contatos Diretos
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-dahora-cyan shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-wider">Showroom</h3>
                    <p className="text-gray-300 mt-0.5">Macatuba, São Paulo — Brasil</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-dahora-emerald shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-wider">Telefone Comercial</h3>
                    <p className="text-gray-300 mt-0.5">Consulte nosso número oficial via WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-dahora-cyan shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-wider">Horários</h3>
                    <p className="text-gray-300 mt-0.5">Segunda a Sexta-feira: 08h às 18h</p>
                    <p className="text-gray-400">Sábados: 08h às 12h</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full py-3 text-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="md:col-span-7 bg-white rounded-3xl border border-dahora-border p-6 sm:p-8 shadow-card">
            {sent ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-dahora-emerald flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-lg text-dahora-text">
                  Mensagem Enviada com Sucesso!
                </h3>
                <p className="text-xs text-dahora-gray max-w-xs mx-auto">
                  Recebemos sua mensagem e entraremos em contato o mais breve possível.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-secondary text-xs py-2 px-4 mt-2"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display font-bold text-base text-dahora-text mb-4">
                  Envie sua Mensagem
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-dahora-text mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="input-field text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-dahora-text mb-1">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="input-field text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dahora-text mb-1">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(14) 99999-9999"
                      className="input-field text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-dahora-text mb-1">
                    Mensagem ou Dúvida *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Como podemos te ajudar hoje?"
                    className="input-field text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3 text-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>ENVIAR MENSAGEM</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
