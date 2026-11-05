import { useState, useEffect } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { buildWhatsAppUrl } from '../../lib/utils';
import { env } from '../../config/env';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappNumber = env.WHATSAPP_NUMBER || '5514998877886';
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    'Olá! Estou navegando no site da Da Hora Motos Elétricas e gostaria de atendimento.'
  );

  useEffect(() => {
    // Show inviting tooltip after 3 seconds on page
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside aria-label="Atendimento rápido por WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Informative bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-dahora-midnight text-white text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-premium border border-dahora-border-dark animate-fade-in relative">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Fale conosco no WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white ml-1 text-xs"
            aria-label="Fechar aviso"
          >
            ×
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Iniciar conversa no WhatsApp oficial da Da Hora Motos Elétricas"
        className="w-14 h-14 rounded-full bg-[#25D366] text-dahora-black hover:bg-[#20bd5a] flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <WhatsAppIcon className="w-8 h-8 fill-dahora-black" />
      </a>
    </aside>
  );
}

export default FloatingWhatsApp;
