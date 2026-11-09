import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  ArrowRight,
  Wrench,
  Truck,
  Sparkles,
  MapPin,
  Flame,
  ChevronLeft,
  ChevronRight,
  Eye
} from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { buildWhatsAppUrl, formatCurrency } from '../../lib/utils';
import { env } from '../../config/env';

interface ShowroomVehicle {
  id: string;
  categoryLabel: string;
  categorySlug: string;
  name: string;
  tagline: string;
  power: string;
  range: string;
  price: number;
  promotionalPrice?: number;
  pixPrice: number;
  image: string;
  productSlug: string;
  badge: string;
}

// 5 Veículos Reais do Catálogo representando a Frota Completa Da Hora Motos
const fleetVehicles: ShowroomVehicle[] = [
  {
    id: 'motos',
    categoryLabel: 'Motos Elétricas',
    categorySlug: 'motos-eletricas-1001w-a-2000w',
    name: 'MOTO ELÉTRICA E80 SPEED',
    tagline: 'Potência, autonomia e esportividade para sua rotina urbana',
    power: '2.000W',
    range: '60 km',
    price: 10900,
    pixPrice: 10355,
    image: 'https://static.wixstatic.com/media/acc37b_236b7762a73a4c7c85b51059c02394e2~mv2.jpeg/v1/fit/w_800,h_800,q_90/file.jpg',
    productSlug: 'moto-el%C3%A9trica-e80-speed',
    badge: 'Alta Performance',
  },
  {
    id: 'scooters',
    categoryLabel: 'Scooters Elétricas',
    categorySlug: 'scooters-eletricas',
    name: 'SCOOTER 1822 BOLIN',
    tagline: 'Conforto supremo, assoalho plano e condução sem marcha',
    power: '1.500W',
    range: '55 km',
    price: 10900,
    pixPrice: 10355,
    image: 'https://static.wixstatic.com/media/acc37b_eb9c73247f034b52962348510d92947f~mv2.jpeg/v1/fit/w_800,h_800,q_90/file.jpg',
    productSlug: 'scooter-1822-bolin',
    badge: 'Conforto Urbano',
  },
  {
    id: 'drifts',
    categoryLabel: 'Karts Drift 360°',
    categorySlug: 'modelos-especiais',
    name: 'KART DRIFT 201 MINI 350W',
    tagline: 'Curvas radicais de 360°, som Bluetooth integrado e luzes de LED',
    power: '350W',
    range: '15 km/h',
    price: 1999,
    promotionalPrice: 1899,
    pixPrice: 1899,
    image: 'https://static.wixstatic.com/media/acc37b_5a4cb2df3d02449e8eaacbef968de5f5~mv2.jpeg/v1/fit/w_800,h_800,q_90/file.jpg',
    productSlug: 'drift-201-mini-350w',
    badge: 'Lazer & Adrenalina',
  },
  {
    id: 'patinetes',
    categoryLabel: 'Patinetes Elétricos',
    categorySlug: 'patinetes-eletricos',
    name: 'PATINETE ELÉTRICO XM-01 350W',
    tagline: 'Leve, dobrável e ultra portátil para o primeiro e último quilômetro',
    power: '350W',
    range: '30 km',
    price: 1999,
    promotionalPrice: 1899,
    pixPrice: 1899,
    image: 'https://static.wixstatic.com/media/acc37b_95c4cbea1ed04aaea084b4f435e052e6~mv2.webp/v1/fit/w_800,h_800,q_90/file.webp',
    productSlug: 'patinete-xm-01-350w',
    badge: 'Portátil & Dobrável',
  },
  {
    id: 'triciclos',
    categoryLabel: 'Triciclos & Especiais',
    categorySlug: 'modelos-especiais',
    name: 'TRICICLO T3 BOLIN',
    tagline: 'Máxima estabilidade, assento anatômico e transporte seguro',
    power: '1.000W',
    range: '45 km',
    price: 10900,
    pixPrice: 10355,
    image: 'https://static.wixstatic.com/media/acc37b_a80b268c792f4f1683c721de0b880486~mv2.jpg/v1/fit/w_800,h_800,q_90/file.jpg',
    productSlug: 'triciclo-t3-bolin',
    badge: 'Estabilidade & Família',
  },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const whatsappNumber = env.WHATSAPP_NUMBER || '5514998877886';
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    'Olá! Gostaria de falar com um especialista sobre a frota de veículos elétricos da Da Hora Motos.'
  );

  // Detecção de acessibilidade / redução de movimento
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Rotação suave automática do showroom (pausa quando o usuário interage)
  useEffect(() => {
    if (isHovered || prefersReducedMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % fleetVehicles.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isHovered, prefersReducedMotion]);

  // Parallax suave com movimento do mouse (apenas desktop)
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setParallaxOffset({ x: Math.round(x * 12), y: Math.round(y * 8) });
    },
    [prefersReducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setParallaxOffset({ x: 0, y: 0 });
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + fleetVehicles.length) % fleetVehicles.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % fleetVehicles.length);
  };

  const activeVehicle = fleetVehicles[activeIndex];

  // Índices dos veículos secundários para compor a cena em profundidade
  const leftFlankIndex = (activeIndex + 1) % fleetVehicles.length;
  const rightFlankIndex = (activeIndex + 2) % fleetVehicles.length;
  const topFlankIndex = (activeIndex + 3) % fleetVehicles.length;

  const leftVehicle = fleetVehicles[leftFlankIndex];
  const rightVehicle = fleetVehicles[rightFlankIndex];
  const topVehicle = fleetVehicles[topFlankIndex];

  return (
    <section className="relative bg-gradient-to-b from-dahora-black via-slate-950 to-dahora-black text-white overflow-hidden py-14 sm:py-20 lg:py-24 border-b border-dahora-border-dark">
      
      {/* Luzes ambiente de estúdio automotivo */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-dahora-emerald/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-dahora-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-dahora-emerald/5 via-dahora-cyan/5 to-transparent blur-[140px] pointer-events-none" />

      {/* Marca d'água ambiente do veículo no fundo da seção */}
      <div className="absolute -right-20 top-1/4 w-[650px] h-[650px] pointer-events-none opacity-10 select-none overflow-hidden hidden xl:block">
        <img
          src={activeVehicle.image}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain blur-sm scale-150"
        />
      </div>

      <div className="container-dahora relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LADO ESQUERDO: COMUNICAÇÃO COMERCIAL & AUTORIDADE */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Selo Promocional Black Friday & Identidade de Marca */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-dahora-cyan text-xs font-semibold tracking-wide backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-dahora-cyan animate-pulse" />
                <span>DA HORA • ELECTRIC WORLD</span>
              </div>

              <Link
                to="/black-friday/drift"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-600/30 to-amber-600/30 border border-red-500/50 text-red-200 text-xs font-black hover:scale-105 transition-all shadow-md"
              >
                <Flame className="w-3.5 h-3.5 text-red-400 fill-red-400 animate-pulse" />
                <span>ESQUENTA BLACK: ATÉ 21X NO CARTÃO [VER OFERTAS]</span>
                <ArrowRight className="w-3 h-3 text-amber-300" />
              </Link>
            </div>

            {/* Headline Principal e Linha de Destaque */}
            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.08] text-white animate-fade-in-up">
                SUA PRÓXIMA EXPERIÊNCIA <br className="hidden sm:inline" />
                <span className="text-white">COMEÇA AQUI.</span>
              </h1>
              <div className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-gradient-emerald tracking-tight animate-fade-in-up [animation-delay:100ms]">
                DESCUBRA A MOBILIDADE ELÉTRICA.
              </div>
            </div>

            {/* Subheadline Comercial */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light animate-fade-in-up [animation-delay:150ms]">
              Motos, scooters, patinetes, drifts e muito mais. Encontre o modelo ideal para você com a confiança da maior concessionária digital de Macatuba e região.
            </p>

            {/* Botões de Ação (CTAs Principais) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 animate-fade-in-up [animation-delay:250ms]">
              <Link
                to="/veiculos"
                className="btn-primary w-full sm:w-auto text-base py-3.5 px-8 shadow-glow-emerald hover:scale-[1.02] flex items-center justify-center gap-2 font-bold"
              >
                <span>EXPLORAR VEÍCULOS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/black-friday/drift"
                className="btn-secondary w-full sm:w-auto text-base py-3.5 px-8 text-white border-white/20 hover:bg-white/5 hover:border-dahora-emerald flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>CONFERIR OFERTAS</span>
              </Link>
            </div>

            {/* Link Direto para Atendimento no WhatsApp */}
            <div className="pt-1 animate-fade-in-up [animation-delay:300ms]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="Falar com consultor no WhatsApp oficial"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Tire dúvidas técnicas ou agende visita pelo WhatsApp (14) 99887-7886</span>
              </a>
            </div>

            {/* Linha Discreta de Credibilidade da Concessionária (Rodapé da Hero) */}
            <div className="pt-6 border-t border-dahora-border-dark/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left animate-fade-in-up [animation-delay:350ms]">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-dahora-emerald/15 flex items-center justify-center text-dahora-emerald shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Duas Lojas Físicas</span>
                  <p className="text-[11px] text-gray-400">Loja 1 (Vendas & Oficina) • Loja 2 (Showroom)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-dahora-cyan/15 flex items-center justify-center text-dahora-cyan shrink-0">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Oficina Especializada</span>
                  <p className="text-[11px] text-gray-400">Suporte técnico próprio e peças de reposição</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-dahora-emerald/15 flex items-center justify-center text-dahora-emerald shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Entrega Grátis 150 km</span>
                  <p className="text-[11px] text-gray-400">Veículo 100% montado e pronto para andar</p>
                </div>
              </div>
            </div>

          </div>

          {/* LADO DIREITO: CENA CINEMATOGRÁFICA MULTIVEÍCULOS EM PROFUNDIDADE */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Seletor de Categorias Estilo Showcase Interativo */}
            <div className="w-full flex items-center justify-between sm:justify-center gap-1.5 overflow-x-auto pb-3 mb-2 scrollbar-none z-20">
              {fleetVehicles.map((vehicle, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={vehicle.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-dahora-emerald text-dahora-black shadow-glow-emerald scale-105'
                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                    }`}
                    aria-label={`Ver modelo da categoria ${vehicle.categoryLabel}`}
                  >
                    <span>{vehicle.categoryLabel.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Palco do Showroom Multiveículos com Efeito de Profundidade */}
            <div
              className="w-full max-w-xl lg:max-w-none rounded-3xl bg-gradient-to-b from-slate-900/90 via-dahora-surface-dark to-slate-950 border border-dahora-border-dark shadow-2xl p-4 sm:p-6 relative overflow-hidden flex flex-col justify-between"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Feixe de Luz Deslizante (Iluminação de Estúdio Automotivo) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-light-sweep" />
              </div>

              {/* Botões de Navegação Anterior / Próximo */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center hover:bg-dahora-emerald hover:text-dahora-black transition-all cursor-pointer backdrop-blur-sm"
                aria-label="Ver veículo anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center hover:bg-dahora-emerald hover:text-dahora-black transition-all cursor-pointer backdrop-blur-sm"
                aria-label="Ver próximo veículo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* ARENA MULTIVEÍCULOS: CENÁRIO COMPLETO COM TODOS OS MODELOS VISÍVEIS EM PROFUNDIDADE */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden flex items-center justify-center">
                
                {/* Linha de Horizonte do Showroom & Holofote de Chão */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-14 bg-gradient-to-t from-dahora-emerald/25 via-dahora-cyan/15 to-transparent blur-xl rounded-full pointer-events-none" />
                <div className="absolute inset-x-8 bottom-12 h-[1px] bg-gradient-to-r from-transparent via-dahora-emerald/30 to-transparent pointer-events-none" />

                {/* Fundo Ambiente Suave com o Reflexo da Foto Ativa */}
                <img
                  key={`bg-${activeVehicle.id}`}
                  src={activeVehicle.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-3xl scale-125 opacity-25 brightness-75 select-none pointer-events-none animate-electric-aura transition-opacity duration-700"
                />

                {/* ---- VEÍCULO SECUNDÁRIO 1: FUNDO ESQUERDO (Ex: Scooter Bolin) ---- */}
                <div
                  onClick={() => setActiveIndex(leftFlankIndex)}
                  style={{
                    transform: `translate3d(${parallaxOffset.x * -0.5}px, ${parallaxOffset.y * -0.5}px, 0)`,
                  }}
                  className="absolute left-0 sm:left-2 bottom-8 sm:bottom-12 z-10 w-28 sm:w-44 h-24 sm:h-36 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 opacity-60 hover:opacity-100 hover:scale-105 group/left"
                  title={`Clique para destacar ${leftVehicle.name}`}
                >
                  <img
                    src={leftVehicle.image}
                    alt={leftVehicle.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] animate-float-delay-1"
                  />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gray-300 bg-black/80 px-2 py-0.5 rounded-full border border-white/10 mt-1 opacity-0 group-hover/left:opacity-100 transition-opacity">
                    {leftVehicle.categoryLabel.split(' ')[0]}
                  </span>
                </div>

                {/* ---- VEÍCULO SECUNDÁRIO 2: FUNDO DIREITO (Ex: Kart Drift 360°) ---- */}
                <div
                  onClick={() => setActiveIndex(rightFlankIndex)}
                  style={{
                    transform: `translate3d(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px, 0)`,
                  }}
                  className="absolute right-0 sm:right-2 bottom-8 sm:bottom-12 z-10 w-28 sm:w-44 h-24 sm:h-36 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 opacity-60 hover:opacity-100 hover:scale-105 group/right"
                  title={`Clique para destacar ${rightVehicle.name}`}
                >
                  <img
                    src={rightVehicle.image}
                    alt={rightVehicle.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] animate-float-delay-2"
                  />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gray-300 bg-black/80 px-2 py-0.5 rounded-full border border-white/10 mt-1 opacity-0 group-hover/right:opacity-100 transition-opacity">
                    {rightVehicle.categoryLabel.split(' ')[0]}
                  </span>
                </div>

                {/* ---- VEÍCULO SECUNDÁRIO 3: FUNDO SUPERIOR / TERCEIRO PLANO (Ex: Patinete Elétrico) ---- */}
                <div
                  onClick={() => setActiveIndex(topFlankIndex)}
                  style={{
                    transform: `translate3d(${parallaxOffset.x * -0.3}px, ${parallaxOffset.y * -0.3}px, 0)`,
                  }}
                  className="absolute right-12 sm:right-24 top-2 sm:top-4 z-5 w-20 sm:w-28 h-20 sm:h-28 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 opacity-45 hover:opacity-90 hover:scale-105 group/top"
                  title={`Clique para destacar ${topVehicle.name}`}
                >
                  <img
                    src={topVehicle.image}
                    alt={topVehicle.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] animate-float-delay-3"
                  />
                  <span className="text-[8px] font-bold uppercase tracking-wider text-gray-400 bg-black/80 px-1.5 py-0.5 rounded-full border border-white/10 mt-0.5 opacity-0 group-hover/top:opacity-100 transition-opacity">
                    {topVehicle.categoryLabel.split(' ')[0]}
                  </span>
                </div>

                {/* ---- VEÍCULO PROTAGONISTA EM PRIMEIRO PLANO (Centro da Cena) ---- */}
                <div
                  style={{
                    transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`,
                  }}
                  className="relative z-20 w-3/4 sm:w-2/3 h-full flex items-center justify-center transition-transform duration-300 ease-out"
                >
                  <img
                    key={`hero-${activeVehicle.id}`}
                    src={activeVehicle.image}
                    alt={`${activeVehicle.name} - Da Hora Motos Elétricas`}
                    width={600}
                    height={600}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-contain p-2 animate-float-vehicle filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
                  />
                </div>

              </div>

              {/* Barra de Informações do Modelo em Destaque */}
              <div className="mt-3 p-4 rounded-2xl border border-dahora-border-dark bg-dahora-black/80 space-y-2 relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-dahora-cyan bg-dahora-black/90 px-2.5 py-0.5 rounded-md border border-dahora-cyan/30">
                    {activeVehicle.badge}
                  </span>
                  <span className="text-dahora-emerald font-extrabold text-lg sm:text-xl tabular-nums">
                    {formatCurrency(activeVehicle.promotionalPrice || activeVehicle.price)}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-display font-extrabold text-sm sm:text-base text-white">
                      {activeVehicle.name}
                    </h3>
                    <p className="text-[11px] text-gray-400">
                      {activeVehicle.tagline}
                    </p>
                  </div>
                  <div className="text-[11px] text-gray-300 font-mono sm:text-right shrink-0">
                    <span className="text-dahora-cyan font-bold">{activeVehicle.power}</span> • {activeVehicle.range}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-gray-400 text-[11px]">
                    ou 12x sem juros • <strong className="text-emerald-400">{formatCurrency(activeVehicle.pixPrice)} à vista no Pix</strong>
                  </span>
                  <Link
                    to={`/produto/${activeVehicle.productSlug}`}
                    className="text-dahora-cyan hover:text-white font-bold inline-flex items-center gap-1 transition-colors text-[11px]"
                  >
                    <span>Ver detalhes</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Indicadores de Posição dos 5 Veículos da Frota */}
              <div className="flex items-center justify-center gap-1.5 mt-3">
                {fleetVehicles.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setActiveIndex(dotIdx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      dotIdx === activeIndex
                        ? 'w-6 bg-dahora-emerald'
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Ir para veículo ${dotIdx + 1}`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
