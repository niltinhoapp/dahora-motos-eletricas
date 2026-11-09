import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  ArrowRight,
  Wrench,
  Truck,
  Sparkles,
  MapPin,
  BatteryCharging,
  Compass
} from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { buildWhatsAppUrl, formatCurrency, buildProductWhatsAppMessage } from '../../lib/utils';
import { env } from '../../config/env';

interface VehicleVariant {
  id: string;
  category: string;
  shortLabel: string;
  name: string;
  tagline: string;
  power: string;
  range: string;
  maxSpeed: string;
  price: number;
  promotionalPrice?: number;
  pixPrice: number;
  installments: { count: number; value: number };
  image: string;
  slug: string;
  badge: string;
  swatchColor: string;
}

// 5 Veículos Reais do Catálogo Da Hora Motos Elétricas (Alta Definição)
const VEHICLE_VARIANTS: VehicleVariant[] = [
  {
    id: 'e80-speed',
    category: 'Moto Elétrica',
    shortLabel: 'Moto E80',
    name: 'Moto Elétrica E80 Speed',
    tagline: 'Potência esportiva de 2.000W para dominar qualquer subida urbana',
    power: '2.000W',
    range: '60 km',
    maxSpeed: '75 km/h',
    price: 10900,
    pixPrice: 10355,
    installments: { count: 12, value: 908.33 },
    image: 'https://static.wixstatic.com/media/acc37b_236b7762a73a4c7c85b51059c02394e2~mv2.jpeg/v1/fit/w_1200,h_1200,q_90/file.jpg',
    slug: 'moto-el%C3%A9trica-e80-speed',
    badge: 'Alta Performance',
    swatchColor: '#10b981',
  },
  {
    id: 'scooter-1822',
    category: 'Scooter Elétrica',
    shortLabel: 'Scooter',
    name: 'Scooter 1822 Bolin',
    tagline: 'Conforto supremo, assoalho plano e condução automática sem marcha',
    power: '1.500W',
    range: '55 km',
    maxSpeed: '60 km/h',
    price: 10900,
    pixPrice: 10355,
    installments: { count: 12, value: 908.33 },
    image: 'https://static.wixstatic.com/media/acc37b_eb9c73247f034b52962348510d92947f~mv2.jpeg/v1/fit/w_1200,h_1200,q_90/file.jpg',
    slug: 'scooter-1822-bolin',
    badge: 'Conforto Urbano',
    swatchColor: '#06b6d4',
  },
  {
    id: 'patinete-xm01',
    category: 'Patinete Elétrico',
    shortLabel: 'Patinete',
    name: 'Patinete Elétrico XM-01 350W',
    tagline: 'Leve, dobrável e ultra portátil para o primeiro e último quilômetro',
    power: '350W',
    range: '30 km',
    maxSpeed: '25 km/h',
    price: 1999,
    promotionalPrice: 1899,
    pixPrice: 1899,
    installments: { count: 12, value: 166.58 },
    image: 'https://static.wixstatic.com/media/acc37b_95c4cbea1ed04aaea084b4f435e052e6~mv2.webp/v1/fit/w_1200,h_1200,q_90/file.webp',
    slug: 'patinete-xm-01-350w',
    badge: 'Portátil & Dobrável',
    swatchColor: '#3b82f6',
  },
  {
    id: 'drift-201',
    category: 'Kart Drift 360°',
    shortLabel: 'Kart Drift',
    name: 'Kart Drift 201 Mini 350W',
    tagline: 'Curvas radicais de 360°, som Bluetooth integrado e luzes de LED',
    power: '350W',
    range: '15 km/h',
    maxSpeed: '15 km/h',
    price: 1999,
    promotionalPrice: 1899,
    pixPrice: 1899,
    installments: { count: 12, value: 166.58 },
    image: 'https://static.wixstatic.com/media/acc37b_5a4cb2df3d02449e8eaacbef968de5f5~mv2.jpeg/v1/fit/w_1200,h_1200,q_90/file.jpg',
    slug: 'drift-201-mini-350w',
    badge: 'Lazer & Adrenalina',
    swatchColor: '#ef4444',
  },
  {
    id: 'triciclo-t3',
    category: 'Triciclo Elétrico',
    shortLabel: 'Triciclo',
    name: 'Triciclo T3 Bolin',
    tagline: 'Máxima estabilidade com 3 rodas, assento anatômico e cesto de compras',
    power: '1.000W',
    range: '45 km',
    maxSpeed: '40 km/h',
    price: 10900,
    pixPrice: 10355,
    installments: { count: 12, value: 908.33 },
    image: 'https://static.wixstatic.com/media/acc37b_a80b268c792f4f1683c721de0b880486~mv2.jpg/v1/fit/w_1200,h_1200,q_90/file.jpg',
    slug: 'triciclo-t3-bolin',
    badge: 'Estabilidade & Família',
    swatchColor: '#f59e0b',
  },
];

export function HeroSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [typedTagline, setTypedTagline] = useState('');
  const [isBootDone, setIsBootDone] = useState(false);

  const heroSectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const badgeMotorRef = useRef<HTMLDivElement>(null);
  const badgeAutonomiaRef = useRef<HTMLDivElement>(null);
  const badgeSpecsRef = useRef<HTMLDivElement>(null);

  const rotRef = useRef({ currentX: 0, currentY: 0, targetX: 0, targetY: 0 });

  const activeVehicle = VEHICLE_VARIANTS[selectedIdx];

  const whatsappNumber = env.WHATSAPP_NUMBER || '5514998877886';
  const productUrl = `${window.location.origin}${import.meta.env.BASE_URL.replace(/\/$/, '')}/produto/${activeVehicle.slug}`;
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    buildProductWhatsAppMessage(activeVehicle.name, productUrl)
  );

  // Alternância automática do plano de fundo e palco de veículos a cada 5.5 segundos
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % VEHICLE_VARIANTS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Efeito de Inicialização Digital (Typewriter / Boot)
  useEffect(() => {
    const fullText = 'DESCUBRA A MOBILIDADE ELÉTRICA.';
    let charIdx = 0;
    const bootTimer = setInterval(() => {
      charIdx++;
      setTypedTagline(fullText.slice(0, charIdx));
      if (charIdx >= fullText.length) {
        clearInterval(bootTimer);
        setIsBootDone(true);
      }
    }, 45);
    return () => clearInterval(bootTimer);
  }, []);

  // Loop Suave de Lerp do Plano de Fundo e Palco 3D (60/120 FPS via requestAnimationFrame)
  useEffect(() => {
    let animId: number;

    const animate = () => {
      const r = rotRef.current;
      r.currentX += (r.targetX - r.currentX) * 0.08;
      r.currentY += (r.targetY - r.currentY) * 0.08;

      // Movimento 3D interativo da imagem de fundo da Hero inteira
      if (bgLayerRef.current) {
        bgLayerRef.current.style.transform = `scale(1.08) translate3d(${(-r.currentY * 1.8).toFixed(2)}px, ${(r.currentX * 1.8).toFixed(2)}px, 0)`;
      }

      if (cardRef.current) {
        cardRef.current.style.transform = `rotateX(${r.currentX.toFixed(2)}deg) rotateY(${r.currentY.toFixed(2)}deg)`;
      }
      if (photoRef.current) {
        photoRef.current.style.transform = `scale(1.04) translate(${(r.currentY * 0.9).toFixed(2)}px, ${(-r.currentX * 0.9).toFixed(2)}px)`;
      }
      if (badgeMotorRef.current) {
        badgeMotorRef.current.style.transform = `translateZ(65px) translate(${(r.currentY * 1.3).toFixed(2)}px, ${(-r.currentX * 1.3).toFixed(2)}px)`;
      }
      if (badgeAutonomiaRef.current) {
        badgeAutonomiaRef.current.style.transform = `translateZ(65px) translate(${(r.currentY * 1.3).toFixed(2)}px, ${(-r.currentX * 1.3).toFixed(2)}px)`;
      }
      if (badgeSpecsRef.current) {
        badgeSpecsRef.current.style.transform = `translateZ(85px) translate(${(r.currentY * 1.6).toFixed(2)}px, ${(-r.currentX * 1.6).toFixed(2)}px)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Manipulador de Mouse Move em toda a Primeira Dobra
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = (e.clientX - centerX) / (window.innerWidth / 2);
    const normY = (e.clientY - centerY) / (window.innerHeight / 2);

    rotRef.current.targetY = normX * 11;
    rotRef.current.targetX = -normY * 8;

    if (glareRef.current && stageRef.current) {
      const sRect = stageRef.current.getBoundingClientRect();
      const glareX = ((e.clientX - sRect.left) / sRect.width) * 100;
      const glareY = ((e.clientY - sRect.top) / sRect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(255,255,255,0.45) 0%, transparent 60%)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
    rotRef.current.targetX = 0;
    rotRef.current.targetY = 0;
    if (glareRef.current) {
      glareRef.current.style.background = 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)';
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLElement>) => {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = (touch.clientX - centerX) / (window.innerWidth / 2);
    const normY = (touch.clientY - centerY) / (window.innerHeight / 2);

    rotRef.current.targetY = normX * 8;
    rotRef.current.targetX = -normY * 5;
  }, []);

  return (
    <section
      ref={heroSectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      className="relative min-h-[calc(100vh-4rem)] bg-dahora-black text-white py-10 sm:py-14 lg:py-16 overflow-hidden border-b border-dahora-border-dark flex items-center"
    >
      {/* ===================================================================== */}
      {/* PLANO DE FUNDO DE ALTA DEFINIÇÃO COM OS VEÍCULOS REAIS (MOTO, SCOOTER, */}
      {/* PATINETE, DRIFT) ALTERNANDO E SE MOVENDO EM PARALLAX NO SEGUNDO PLANO */}
      {/* ===================================================================== */}
      <div
        ref={bgLayerRef}
        className="absolute inset-0 z-0 pointer-events-none select-none transition-transform duration-150 ease-out"
        style={{ transform: 'scale(1.08)' }}
      >
        {VEHICLE_VARIANTS.map((v, idx) => {
          const isCurrent = idx === selectedIdx;
          return (
            <div
              key={v.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isCurrent ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Camada de preenchimento de cor e ambiência da foto */}
              <img
                src={v.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-110"
              />
              {/* Fotografia em alta definição do veículo no plano de fundo da Hero */}
              <img
                src={v.image}
                alt=""
                aria-hidden="true"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[68%] h-[115%] object-contain opacity-35 lg:opacity-45 mix-blend-lighten filter contrast-125"
              />
            </div>
          );
        })}
      </div>

      {/* Gradiente Cinematográfico para Leitura Perfeita dos Textos Aplicados em Cima */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-dahora-black via-dahora-black/85 to-dahora-black/40 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-dahora-black via-transparent to-dahora-black/60 pointer-events-none" />

      {/* ===================================================================== */}
      {/* CONTEÚDO DA PRIMEIRA DOBRA (TEXTOS À ESQUERDA + PALCO 3D À DIREITA)    */}
      {/* ===================================================================== */}
      <div className="container-dahora relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* COLUNA ESQUERDA: TEXTOS COMERCIAIS APLICADOS SOBRE O FUNDO DO VEÍCULO */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dahora-emerald/40 bg-black/60 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-dahora-emerald animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-dahora-cyan font-bold">
                CONCESSIONÁRIA DIGITAL • MACATUBA/SP
              </span>
            </div>

            {/* Headline Principal */}
            <div className="space-y-2">
              <h1 className="font-display font-black text-3xl sm:text-5xl xl:text-6xl text-white tracking-tight leading-[1.06] drop-shadow-lg">
                SUA PRÓXIMA EXPERIÊNCIA <br className="hidden sm:inline" />
                <span className="text-gradient-emerald">COMEÇA AQUI.</span>
              </h1>

              {/* Painel Digital Inicializando */}
              <div className="font-display font-extrabold text-base sm:text-xl lg:text-2xl text-dahora-cyan tracking-tight flex items-center justify-center lg:justify-start min-h-[2rem]">
                <span>{typedTagline}</span>
                {!isBootDone && (
                  <span className="inline-block w-2 h-5 bg-dahora-emerald ml-1.5 animate-pulse shadow-glow-emerald" />
                )}
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow">
              Motos elétricas, scooters, patinetes, karts drift e triciclos. Escolha seu modelo com a segurança de duas lojas físicas em Macatuba, oficina própria e frete grátis até 150 km.
            </p>

            {/* Botões de Ação Principais */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <Link
                to="/veiculos"
                className="btn-primary btn-electric-arc w-full sm:w-auto px-7 py-3.5 shadow-glow-emerald hover:scale-[1.02] flex items-center justify-center gap-2 font-bold text-xs font-mono uppercase tracking-widest"
              >
                <span>Explorar Veículos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/25 hover:border-dahora-emerald text-white hover:bg-white/10 text-xs font-mono uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Faixa de Credibilidade Integrada na Primeira Dobra */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-black/55 backdrop-blur-md border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-dahora-emerald/20 flex items-center justify-center text-dahora-emerald shrink-0">
                  <MapPin className="w-4 h-4 animate-map-pulse" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-white block leading-tight">Duas Lojas Físicas</span>
                  <p className="text-[10px] text-gray-300">Macatuba/SP</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-black/55 backdrop-blur-md border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-dahora-cyan/20 flex items-center justify-center text-dahora-cyan shrink-0">
                  <Wrench className="w-4 h-4 animate-wrench-turn" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-white block leading-tight">Oficina Própria</span>
                  <p className="text-[10px] text-gray-300">Peças e revisão</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-black/55 backdrop-blur-md border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-dahora-emerald/20 flex items-center justify-center text-dahora-emerald shrink-0">
                  <Truck className="w-4 h-4 animate-truck-glide" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-white block leading-tight">Frete Grátis 150 km</span>
                  <p className="text-[10px] text-gray-300">100% montado</p>
                </div>
              </div>
            </div>

          </div>

          {/* COLUNA DIREITA: PALCO 3D INTERATIVO DO VEÍCULO VISÍVEL LOGO AO ABRIR */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Abas Rápidas de Categoria Acima do Palco */}
            <div className="flex items-center justify-center gap-1.5 flex-wrap mb-3 z-20">
              {VEHICLE_VARIANTS.map((v, idx) => {
                const isActive = idx === selectedIdx;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedIdx(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-dahora-emerald text-dahora-black shadow-glow-emerald scale-105'
                        : 'bg-black/60 text-gray-300 hover:text-white border border-white/15 backdrop-blur-md'
                    }`}
                  >
                    {v.shortLabel}
                  </button>
                );
              })}
            </div>

            {/* O Palco 3D Interativo com Perspectiva 1200px */}
            <div
              id="interactive-stage"
              ref={stageRef}
              className="w-full relative z-10 cursor-crosshair select-none"
              style={{ perspective: '1200px' }}
            >
              <div
                id="stage-card"
                ref={cardRef}
                className="relative rounded-3xl overflow-hidden glass-luxury border border-dahora-emerald/40 shadow-[0_25px_80px_rgba(0,0,0,0.9)] transition-transform duration-100 ease-out"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative h-[340px] sm:h-[410px] lg:h-[430px] w-full overflow-hidden bg-gradient-to-b from-slate-900/80 via-dahora-surface-dark/90 to-black flex items-center justify-center">
                  
                  {/* Aura do Veículo no Estúdio */}
                  <img
                    src={activeVehicle.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-45 select-none pointer-events-none"
                  />

                  {/* Fotografia Principal Real e Completa do Veículo */}
                  <img
                    id="stage-photo"
                    ref={photoRef}
                    src={activeVehicle.image}
                    alt={activeVehicle.name}
                    className="relative z-10 w-full h-full object-contain p-3 sm:p-5 pb-20 sm:pb-24 transition-transform duration-300 ease-out select-none"
                    style={{ transform: 'scale(1.04)' }}
                  />

                  {/* Vinheta de Contraste */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/25 pointer-events-none" />

                  {/* Reflexo Especular (Glare) que segue o Mouse */}
                  <div
                    id="stage-glare"
                    ref={glareRef}
                    className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
                    style={{
                      background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)',
                    }}
                  />

                  {/* Badge 3D Superior Esquerdo: Potência (translateZ 65px) */}
                  <div
                    ref={badgeMotorRef}
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-black/80 backdrop-blur-xl border border-dahora-emerald/60 shadow-2xl"
                    style={{ transform: 'translateZ(65px)' }}
                  >
                    <Zap className="w-4 h-4 text-dahora-emerald fill-dahora-emerald" />
                    <div>
                      <div className="text-[9px] font-mono text-emerald-400 uppercase font-bold leading-none">
                        Potência
                      </div>
                      <div className="text-xs text-white font-black">
                        {activeVehicle.power}
                      </div>
                    </div>
                  </div>

                  {/* Badge 3D Superior Direito: Autonomia (translateZ 65px) */}
                  <div
                    ref={badgeAutonomiaRef}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-black/80 backdrop-blur-xl border border-dahora-cyan/60 shadow-2xl"
                    style={{ transform: 'translateZ(65px)' }}
                  >
                    <BatteryCharging className="w-4 h-4 text-dahora-cyan" />
                    <div>
                      <div className="text-[9px] font-mono text-dahora-cyan uppercase font-bold leading-none">
                        Autonomia
                      </div>
                      <div className="text-xs text-white font-black">
                        {activeVehicle.range}
                      </div>
                    </div>
                  </div>

                  {/* Card Flutuante Inferior 3D: Especificações e Preço (translateZ 85px) */}
                  <div
                    ref={badgeSpecsRef}
                    className="absolute bottom-0 left-0 right-0 sm:bottom-3 sm:left-3 sm:right-3 z-20 flex items-center justify-between gap-3 p-3.5 sm:px-4 sm:py-3 sm:rounded-2xl bg-black/90 backdrop-blur-xl border-t sm:border border-white/20 shadow-2xl"
                    style={{ transform: 'translateZ(85px)' }}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold truncate">
                          {activeVehicle.category} • {activeVehicle.badge}
                        </span>
                      </div>
                      <h2 className="font-display font-extrabold text-sm sm:text-base text-white truncate">
                        {activeVehicle.name}
                      </h2>
                      <div className="text-[11px] font-mono text-gray-300">
                        <strong className="text-dahora-emerald">{formatCurrency(activeVehicle.pixPrice)}</strong> no Pix ou 12x de {formatCurrency(activeVehicle.installments.value)}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        to={`/produto/${activeVehicle.slug}`}
                        className="px-3.5 py-2 rounded-xl bg-dahora-emerald hover:bg-dahora-emerald-dark text-dahora-black text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-glow-emerald"
                      >
                        Ver
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Indicador de Movimento 3D e Seletor de Esferas */}
            <div className="mt-3 flex items-center justify-between w-full px-2">
              <div className="flex items-center gap-2">
                {VEHICLE_VARIANTS.map((v, idx) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedIdx(idx)}
                    className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                      idx === selectedIdx
                        ? 'w-7 bg-dahora-emerald shadow-glow-emerald'
                        : 'bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Selecionar ${v.name}`}
                  />
                ))}
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-gray-400">
                <Compass className="w-3.5 h-3.5 text-dahora-cyan animate-spin [animation-duration:8s]" />
                <span>Fundo e palco 3D interativos com o mouse</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
