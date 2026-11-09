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
  ShieldCheck
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

// 5 Veículos Reais do Catálogo representando as 5 Categorias Oficiais
const showroomVehicles: ShowroomVehicle[] = [
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
    badge: 'Oferta Black Friday',
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
    'Olá! Gostaria de falar com um especialista sobre o catálogo de veículos elétricos da Da Hora Motos.'
  );

  // Detecção de preferência de movimento reduzido
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
      setActiveIndex((prev) => (prev + 1) % showroomVehicles.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isHovered, prefersReducedMotion]);

  // Parallax suave com mouse (apenas desktop)
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setParallaxOffset({ x: Math.round(x * 10), y: Math.round(y * 6) });
    },
    [prefersReducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setParallaxOffset({ x: 0, y: 0 });
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + showroomVehicles.length) % showroomVehicles.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % showroomVehicles.length);
  };

  const currentVehicle = showroomVehicles[activeIndex];

  return (
    <section className="relative bg-gradient-to-b from-dahora-black via-slate-950 to-dahora-black text-white overflow-hidden py-14 sm:py-20 lg:py-24 border-b border-dahora-border-dark">
      {/* Luzes ambiente de estúdio automotivo */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-dahora-emerald/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-dahora-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-dahora-emerald/5 via-dahora-cyan/5 to-transparent blur-[140px] pointer-events-none" />

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

          {/* LADO DIREITO: SHOWROOM DIGITAL CINEMATOGRÁFICO MULTICATEGORIA */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Seletor de Categorias Estilo Showcase Interativo */}
            <div className="w-full flex items-center justify-between sm:justify-center gap-1.5 overflow-x-auto pb-3 mb-2 scrollbar-none z-20">
              {showroomVehicles.map((vehicle, idx) => {
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

            {/* Palco do Showroom com Efeito de Profundidade */}
            <div
              className="w-full max-w-lg lg:max-w-none rounded-3xl bg-gradient-to-b from-slate-900/90 via-dahora-surface-dark to-slate-950 border border-dahora-border-dark shadow-2xl p-4 sm:p-6 relative overflow-hidden flex flex-col justify-between"
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
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-dahora-emerald hover:text-dahora-black transition-all cursor-pointer backdrop-blur-sm"
                aria-label="Ver veículo anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-dahora-emerald hover:text-dahora-black transition-all cursor-pointer backdrop-blur-sm"
                aria-label="Ver próximo veículo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Arena Visual com Fundo Ambiente e Veículo Protagonista */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden flex items-center justify-center">
                
                {/* Holofote de Chão de Concessionária */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-gradient-to-t from-dahora-emerald/25 via-dahora-cyan/15 to-transparent blur-xl rounded-full pointer-events-none" />

                {/* Fundo Ambiente Suave com Reflexo da Própria Foto */}
                <img
                  key={`bg-${currentVehicle.id}`}
                  src={currentVehicle.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-3xl scale-125 opacity-30 brightness-75 select-none pointer-events-none animate-electric-aura transition-opacity duration-700"
                />

                {/* Veículo Protagonista em Primeiro Plano — 100% visível, nítido e sem corte */}
                <img
                  key={`veh-${currentVehicle.id}`}
                  src={currentVehicle.image}
                  alt={`${currentVehicle.name} - Da Hora Motos Elétricas`}
                  width={600}
                  height={600}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  style={{
                    transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`,
                  }}
                  className="relative z-10 w-full h-full object-contain p-2 sm:p-4 animate-float-vehicle transition-transform duration-300 ease-out"
                />
              </div>

              {/* Barra de Informações do Modelo em Destaque */}
              <div className="mt-3 p-4 rounded-2xl border border-dahora-border-dark bg-dahora-black/80 space-y-2 relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-dahora-cyan bg-dahora-black/90 px-2.5 py-0.5 rounded-md border border-dahora-cyan/30">
                    {currentVehicle.badge}
                  </span>
                  <span className="text-dahora-emerald font-extrabold text-lg sm:text-xl tabular-nums">
                    {formatCurrency(currentVehicle.promotionalPrice || currentVehicle.price)}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-display font-extrabold text-sm sm:text-base text-white">
                      {currentVehicle.name}
                    </h3>
                    <p className="text-[11px] text-gray-400">
                      {currentVehicle.tagline}
                    </p>
                  </div>
                  <div className="text-[11px] text-gray-300 font-mono sm:text-right shrink-0">
                    <span className="text-dahora-cyan font-bold">{currentVehicle.power}</span> • {currentVehicle.range}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-gray-400 text-[11px]">
                    ou 12x sem juros • <strong className="text-emerald-400">{formatCurrency(currentVehicle.pixPrice)} à vista no Pix</strong>
                  </span>
                  <Link
                    to={`/produto/${currentVehicle.productSlug}`}
                    className="text-dahora-cyan hover:text-white font-bold inline-flex items-center gap-1 transition-colors text-[11px]"
                  >
                    <span>Ver detalhes</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Indicadores de Posição dos 5 Veículos */}
              <div className="flex items-center justify-center gap-1.5 mt-3">
                {showroomVehicles.map((_, dotIdx) => (
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
