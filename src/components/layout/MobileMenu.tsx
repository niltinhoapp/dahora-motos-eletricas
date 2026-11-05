import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronRight, Phone, MapPin, ShieldCheck, Zap } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { demoCategories, defaultStoreSettings } from '../../data/demo';
import { buildWhatsAppUrl } from '../../lib/utils';
import { env } from '../../config/env';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappNumber = env.WHATSAPP_NUMBER || defaultStoreSettings.whatsapp || '5514998877886';
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    'Olá! Estou navegando pelo site da Da Hora Motos Elétricas e gostaria de mais informações.'
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden md:hidden" role="dialog" aria-modal="true" aria-label="Menu principal">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Menu Drawer */}
      <div className="fixed inset-y-0 left-0 max-w-[85%] w-80 bg-dahora-surface-dark border-r border-dahora-border-dark text-white flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-dahora-border-dark flex items-center justify-between">
          <Link to="/" onClick={onClose} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-dahora-emerald/15 border border-dahora-emerald/30 flex items-center justify-center text-dahora-emerald">
              <Zap className="w-4 h-4 fill-dahora-emerald" />
            </div>
            <span className="font-display font-extrabold text-base tracking-wider">
              DA HORA <span className="text-dahora-cyan text-xs font-normal">MOTOS</span>
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg focus-visible:outline-dahora-cyan"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Oferta Especial de Natal & Black Friday */}
          <Link
            to="/black-friday"
            onClick={onClose}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 text-white border border-red-400/40 shadow-lg"
          >
            <div>
              <span className="text-[10px] bg-black/40 text-amber-200 px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
                🎁 Especial de Natal
              </span>
              <p className="font-extrabold text-sm mt-1 text-white">Triciclo Drift Infantil 360°</p>
              <p className="text-[11px] text-red-100">Frete Grátis 150km • 100% Montado</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white" />
          </Link>

          {/* Main Links */}
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-3 mb-2">
              Navegação
            </p>
            <Link
              to="/veiculos"
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors"
            >
              <span>Todos os Veículos</span>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </Link>
            <Link
              to="/comparar"
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors"
            >
              <span>Comparar Modelos</span>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </Link>
            <Link
              to="/simulador-economia"
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors text-dahora-emerald"
            >
              <span>Simulador de Economia</span>
              <ChevronRight className="w-4 h-4 text-dahora-emerald/50" />
            </Link>
          </div>

          {/* Categories */}
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-3 mb-2">
              Categorias
            </p>
            {demoCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/categoria/${cat.slug}`}
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>{cat.name}</span>
                <span className="text-xs text-gray-400">({cat.productCount})</span>
              </Link>
            ))}
          </div>

          {/* Institutional */}
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-3 mb-2">
              Institucional
            </p>
            <Link
              to="/showroom"
              onClick={onClose}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5"
            >
              <MapPin className="w-4 h-4 text-dahora-cyan" />
              <span>Showroom Macatuba</span>
            </Link>
            <Link
              to="/sobre"
              onClick={onClose}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5"
            >
              <ShieldCheck className="w-4 h-4 text-dahora-emerald" />
              <span>Sobre a Da Hora</span>
            </Link>
            <Link
              to="/entrega"
              onClick={onClose}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5"
            >
              <span>Entrega e Prazos</span>
            </Link>
            <Link
              to="/garantia"
              onClick={onClose}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5"
            >
              <span>Garantia e Revisão</span>
            </Link>
            <Link
              to="/documentacao"
              onClick={onClose}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5"
            >
              <span>Orientações de Legislação</span>
            </Link>
            <Link
              to="/contato"
              onClick={onClose}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5"
            >
              <Phone className="w-4 h-4 text-gray-400" />
              <span>Fale Conosco</span>
            </Link>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-dahora-border-dark space-y-3 bg-dahora-midnight/80">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full py-2.5 text-sm flex items-center justify-center gap-2"
            aria-label="Falar com a Da Hora no WhatsApp oficial"
          >
            <WhatsAppIcon className="w-5 h-5 text-dahora-black" />
            <span>Falar no WhatsApp</span>
          </a>
          <Link
            to="/admin"
            onClick={onClose}
            className="block text-center text-xs text-gray-400 hover:text-gray-300 py-1"
          >
            Acesso Administrativo
          </Link>
        </div>
      </div>
    </div>
  );
}
