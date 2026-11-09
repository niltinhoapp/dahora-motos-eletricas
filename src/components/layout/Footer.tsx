import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  MapPin,
  ChevronDown,
  Instagram,
  Truck,
  ArrowRight
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

        {/* Radar de Entrega Técnica - Raio de 150 km ao redor de Macatuba */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-dahora-surface-dark to-slate-950 border border-dahora-border-dark relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Texto Explicativo e Cidades Atendidas */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Truck className="w-3.5 h-3.5" />
                <span>LOGÍSTICA ESPECIALIZADA PRÓPRIA</span>
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                Frete Grátis em até 150 km de Macatuba/SP
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                Seu veículo elétrico chega 100% montado, revisado e pronto para andar. Atendemos Macatuba, Bauru, Jaú, Lençóis Paulista, Botucatu e toda a região central paulista com entrega técnica e frete grátis.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {['Macatuba', 'Lençóis Paulista', 'Bauru', 'Jaú', 'Botucatu', 'Pederneiras', 'Barra Bonita', 'Agudos'].map((city) => (
                  <span key={city} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                    {city}
                  </span>
                ))}
              </div>
              <div className="pt-2">
                <Link to="/entrega" className="text-xs font-bold text-dahora-emerald hover:text-white inline-flex items-center gap-1 transition-colors">
                  <span>Conferir regulamento da entrega técnica</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Radar Vetorial Animado em Tempo Real */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-dahora-border-dark bg-slate-900/80 flex items-center justify-center overflow-hidden">
                
                {/* Linhas de Mira e Eixos do Radar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-px bg-white/10" />
                  <div className="h-full w-px bg-white/10 absolute" />
                </div>

                {/* Anéis de Distância */}
                <div className="absolute w-44 h-44 rounded-full border border-dashed border-emerald-500/20 flex items-center justify-center">
                  <span className="absolute top-1 text-[9px] text-gray-500 font-mono">100 km</span>
                </div>
                <div className="absolute w-24 h-24 rounded-full border border-dashed border-emerald-500/25 flex items-center justify-center">
                  <span className="absolute top-1 text-[9px] text-gray-500 font-mono">50 km</span>
                </div>

                {/* Ondas Expansivas do Radar */}
                <span className="absolute w-20 h-20 rounded-full border-2 border-emerald-500/60 animate-radar-ring-1 pointer-events-none" />
                <span className="absolute w-20 h-20 rounded-full border-2 border-cyan-500/50 animate-radar-ring-2 pointer-events-none" />
                <span className="absolute w-20 h-20 rounded-full border-2 border-emerald-400/40 animate-radar-ring-3 pointer-events-none" />

                {/* Círculo Máximo 150 km */}
                <div className="absolute inset-3 rounded-full border border-emerald-500/40" />
                <span className="absolute top-2 text-[10px] text-emerald-400 font-mono font-bold tracking-wider">
                  RAIO 150 KM
                </span>

                {/* Centro: Macatuba */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-dahora-emerald text-dahora-black flex items-center justify-center shadow-glow-emerald">
                    <span className="w-2 h-2 rounded-full bg-dahora-black" />
                  </div>
                  <span className="mt-1 px-2 py-0.5 rounded bg-dahora-black/90 border border-dahora-emerald/40 text-[10px] font-black text-white uppercase tracking-wider">
                    Macatuba
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

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

            {/* WhatsApp e Instagram Oficiais */}
            <div className="pt-2 flex flex-wrap gap-2.5 items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs py-2 px-3.5 inline-flex items-center gap-2"
                aria-label="Falar com a Da Hora no WhatsApp oficial"
              >
                <WhatsAppIcon className="w-4 h-4 text-dahora-black" />
                <span>(14) 99887-7886</span>
              </a>
              <a
                href="https://www.instagram.com/dahoramotoseletricas/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white text-xs py-2 px-3.5 rounded-xl border border-white/15 inline-flex items-center gap-2 transition-colors"
                aria-label="Seguir Da Hora Motos Elétricas no Instagram oficial"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@dahoramotoseletricas</span>
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
                  Loja 1: Alameda Tiradentes, 348 (Vendas, Oficina & Peças)
                </Link>
              </li>
              <li>
                <Link to="/showroom" className="text-gray-400 hover:text-white transition-colors">
                  Loja 2: Rua José Cruzerá, 241, Jardim Planalto (Vendas & Showroom)
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
