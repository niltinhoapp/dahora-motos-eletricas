import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { defaultStoreSettings, demoCategories, macatubaStores } from '../../data/demo';
import { env } from '../../config/env';
import { buildWhatsAppUrl } from '../../lib/utils';

export function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const whatsappNumber = env.WHATSAPP_NUMBER || defaultStoreSettings.whatsapp || '5514998877886';
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    'Olá! Estou navegando pelo site da Da Hora Motos Elétricas e gostaria de tirar dúvidas.'
  );

  return (
    <footer className="bg-dahora-black text-gray-300 border-t border-dahora-border-dark pt-16 pb-12">
      <div className="container-dahora">
        <h2 className="sr-only">Informações da Concessionária e Navegação</h2>
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-dahora-border-dark">
          {/* Column 1: Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-dahora-emerald to-dahora-cyan flex items-center justify-center text-dahora-black shadow-glow-emerald">
                <Zap className="w-6 h-6 fill-dahora-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight text-white leading-none">
                  DA HORA
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-dahora-cyan leading-tight mt-0.5">
                  Motos Elétricas
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Sua concessionária digital de veículos elétricos leves. Duas lojas físicas em Macatuba/SP e entregas com segurança para todo o Brasil.
            </p>

            {/* As 2 Lojas Físicas em Macatuba */}
            <div className="space-y-3 text-xs text-gray-400 pt-2 border-t border-dahora-border-dark/60">
              {macatubaStores.map((store) => (
                <div key={store.id} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-dahora-emerald shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">{store.name}:</strong>
                    <span>{store.street}, {store.number} {store.complement ? `(${store.complement})` : ''} - {store.neighborhood}, {store.city} - {store.state}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs py-2.5 px-4 inline-flex items-center gap-2"
                aria-label="Falar com a Da Hora no WhatsApp oficial"
              >
                <WhatsAppIcon className="w-4 h-4 text-dahora-black" />
                <span>WhatsApp: (14) 99887-7886</span>
              </a>
            </div>
          </div>

          {/* Column 2: Categorias */}
          <div className="space-y-4">
            <button
              onClick={() => toggleSection('categorias')}
              className="w-full flex items-center justify-between text-left md:pointer-events-none"
            >
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
                Categorias
              </h3>
              <ChevronDown
                className={`w-4 h-4 md:hidden transition-transform ${
                  openSections.categorias ? 'rotate-180' : ''
                }`}
              />
            </button>
            <ul
              className={`space-y-2 text-sm ${
                openSections.categorias ? 'block' : 'hidden md:block'
              }`}
            >
              {demoCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/categoria/${cat.slug}`}
                    className="text-gray-400 hover:text-dahora-cyan transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/veiculos"
                  className="text-xs text-dahora-emerald font-semibold hover:underline"
                >
                  Ver todos os 23 veículos &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Concessionária & Showrooms */}
          <div className="space-y-4">
            <button
              onClick={() => toggleSection('atendimento')}
              className="w-full flex items-center justify-between text-left md:pointer-events-none"
            >
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
                Nossas Lojas
              </h3>
              <ChevronDown
                className={`w-4 h-4 md:hidden transition-transform ${
                  openSections.atendimento ? 'rotate-180' : ''
                }`}
              />
            </button>
            <ul
              className={`space-y-2 text-sm ${
                openSections.atendimento ? 'block' : 'hidden md:block'
              }`}
            >
              <li>
                <Link to="/showroom" className="text-gray-400 hover:text-white transition-colors">
                  Loja 1: Alameda Tiradentes, 348 (Assistência Técnica)
                </Link>
              </li>
              <li>
                <Link to="/showroom" className="text-gray-400 hover:text-white transition-colors">
                  Loja 2: Rua Lucilo Dellamura (Vendas & Showroom)
                </Link>
              </li>
              <li>
                <Link to="/simulador-economia" className="text-gray-400 hover:text-white transition-colors">
                  Simulador de Economia
                </Link>
              </li>
              <li>
                <Link to="/comparar" className="text-gray-400 hover:text-white transition-colors">
                  Comparador de Modelos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre a Da Hora
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Políticas & Suporte */}
          <div className="space-y-4">
            <button
              onClick={() => toggleSection('politicas')}
              className="w-full flex items-center justify-between text-left md:pointer-events-none"
            >
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
                Políticas e Suporte
              </h3>
              <ChevronDown
                className={`w-4 h-4 md:hidden transition-transform ${
                  openSections.politicas ? 'rotate-180' : ''
                }`}
              />
            </button>
            <ul
              className={`space-y-2 text-sm ${
                openSections.politicas ? 'block' : 'hidden md:block'
              }`}
            >
              <li>
                <Link to="/entrega" className="text-gray-400 hover:text-white transition-colors">
                  Envio e Entrega Técnica
                </Link>
              </li>
              <li>
                <Link to="/garantia" className="text-gray-400 hover:text-white transition-colors">
                  Garantia e Revisão
                </Link>
              </li>
              <li>
                <Link to="/documentacao" className="text-gray-400 hover:text-white transition-colors">
                  Legislação Contran 996
                </Link>
              </li>
              <li>
                <Link to="/trocas-e-devolucoes" className="text-gray-400 hover:text-white transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-gray-400 hover:text-white transition-colors">
                  Privacidade (LGPD)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} Da Hora Motos Elétricas — CNPJ: 65.283.458/0001-40. Macatuba - SP.
          </div>
          <div className="flex items-center gap-4">
            <span>2 Unidades em Macatuba</span>
            <span>•</span>
            <Link to="/admin" className="hover:text-white transition-colors">
              Painel Administrativo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
