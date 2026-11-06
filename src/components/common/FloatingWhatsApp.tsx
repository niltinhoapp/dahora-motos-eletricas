import { WhatsAppIcon } from './WhatsAppIcon';
import { buildWhatsAppUrl } from '../../lib/utils';
import { env } from '../../config/env';

export function FloatingWhatsApp() {
  const whatsappNumber = env.WHATSAPP_NUMBER || '5514998877886';
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    'Olá! Estou navegando no site da Da Hora Motos Elétricas e gostaria de atendimento.'
  );

  return (
    <aside aria-label="Atendimento por WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp da Da Hora Motos Elétricas"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <WhatsAppIcon className="w-8 h-8 fill-white text-white" />
      </a>
    </aside>
  );
}

export default FloatingWhatsApp;
