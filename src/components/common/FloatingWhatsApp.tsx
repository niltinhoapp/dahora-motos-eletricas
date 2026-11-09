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
    <aside aria-label="Atendimento por WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Balão sutil de chamada */}
      <span className="hidden md:inline-flex items-center gap-1.5 mr-3 py-1.5 px-3 rounded-full bg-slate-900/90 text-white text-xs font-bold border border-white/10 shadow-lg backdrop-blur-sm pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Atendimento Online</span>
      </span>

      <div className="relative">
        {/* Anéis de Pulso Contínuo (Efeito Sonar Elétrico) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-sonar-ring-1 pointer-events-none" />
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-sonar-ring-2 pointer-events-none" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar pelo WhatsApp da Da Hora Motos Elétricas"
          className="relative z-10 w-14 h-14 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
        >
          <WhatsAppIcon className="w-8 h-8 fill-white text-white" />
        </a>
      </div>
    </aside>
  );
}

export default FloatingWhatsApp;
