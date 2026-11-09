import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  ArrowRight,
  Wrench,
  Truck,
  Sparkles,
  MapPin,
  Flame,
  BatteryCharging,
  Gauge,
  Compass
} from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { buildWhatsAppUrl, formatCurrency, buildProductWhatsAppMessage } from '../../lib/utils';
import { env } from '../../config/env';

interface VehicleVariant {
  id: string;
  category: string;
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
  auraGradient: string;
}

// 5 Veículos Reais do Catálogo Da Hora Motos Elétricas
const VEHICLE_VARIANTS: VehicleVariant[] = [
  {
    id: 'e80-speed',
    category: 'Moto Elétrica',
    name: 'Moto Elétrica E80 Speed',
    tagline: 'Potência esportiva de 2.000W para dominar qualquer subida urbana',
    power: '2.000W',
    range: '60 km',
    maxSpeed: '75 km/h',
    price: 10900,
    pixPrice: 10355,
    installments: { count: 12, value: 908.33 },
    image: 'https://static.wixstatic.com/media/acc37b_236b7762a73a4c7c85b51059c02394e2~mv2.jpeg/v1/fit/w_800,h_800,q_90/file.jpg',
    slug: 'moto-el%C3%A9trica-e80-speed',
    badge: 'Alta Performance',
    auraGradient: 'radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(6, 182, 212, 0.08) 45%, transparent 75%)',
  },
  {
    id: 'scooter-1822',
    category: 'Scooter Elétrica',
    name: 'Scooter 1822 Bolin',
    tagline: 'Conforto supremo, assoalho plano e condução automática sem marcha',
    power: '1.500W',
    range: '55 km',
    maxSpeed: '60 km/h',
    price: 10900,
    pixPrice: 10355,
    installments: { count: 12, value: 908.33 },
    image: 'https://static.wixstatic.com/media/acc37b_eb9c73247f034b52962348510d92947f~mv2.jpeg/v1/fit/w_800,h_800,q_90/file.jpg',
    slug: 'scooter-1822-bolin',
    badge: 'Conforto Urbano',
    auraGradient: 'radial-gradient(circle, rgba(6, 182, 212, 0.22) 0%, rgba(16, 185, 129, 0.08) 45%, transparent 75%)',
  },
  {
    id: 'drift-201',
    category: 'Kart Drift 360°',
    name: 'Kart Drift 201 Mini 350W',
    tagline: 'Curvas radicais de 360°, som Bluetooth integrado e luzes de LED',
    power: '350W',
    range: '15 km/h',
    maxSpeed: '15 km/h',
    price: 1999,
    promotionalPrice: 1899,
    pixPrice: 1899,
    installments: { count: 12, value: 166.58 },
    image: 'https://static.wixstatic.com/media/acc37b_5a4cb2df3d02449e8eaacbef968de5f5~mv2.jpeg/v1/fit/w_800,h_800,q_90/file.jpg',
    slug: 'drift-201-mini-350w',
    badge: 'Lazer & Adrenalina',
    auraGradient: 'radial-gradient(circle, rgba(239, 68, 68, 0.22) 0%, rgba(245, 158, 11, 0.08) 45%, transparent 75%)',
  },
  {
    id: 'patinete-xm01',
    category: 'Patinete Elétrico',
    name: 'Patinete Elétrico XM-01 350W',
    tagline: 'Leve, dobrável e ultra portátil para o primeiro e último quilômetro',
    power: '350W',
    range: '30 km',
    maxSpeed: '25 km/h',
    price: 1999,
    promotionalPrice: 1899,
    pixPrice: 1899,
    installments: { count: 12, value: 166.58 },
    image: 'https://static.wixstatic.com/media/acc37b_95c4cbea1ed04aaea084b4f435e052e6~mv2.webp/v1/fit/w_800,h_800,q_90/file.webp',
    slug: 'patinete-xm-01-350w',
    badge: 'Portátil & Dobrável',
    auraGradient: 'radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(59, 130, 246, 0.08) 45%, transparent 75%)',
  },
  {
    id: 'triciclo-t3',
    category: 'Triciclo & Especiais',
    name: 'Triciclo T3 Bolin',
    tagline: 'Máxima estabilidade com 3 rodas, assento anatômico e cesto de compras',
    power: '1.000W',
    range: '45 km',
    maxSpeed: '40 km/h',
    price: 10900,
    pixPrice: 10355,
    installments: { count: 12, value: 908.33 },
    image: 'https://static.wixstatic.com/media/acc37b_a80b268c792f4f1683c721de0b880486~mv2.jpg/v1/fit/w_800,h_800,q_90/file.jpg',
    slug: 'triciclo-t3-bolin',
    badge: 'Estabilidade & Família',
    auraGradient: 'radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(16, 185, 129, 0.08) 45%, transparent 75%)',
  },
];

export function HeroSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [typedTagline, setTypedTagline] = useState('');
  const [isBootDone, setIsBootDone] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);
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

  // Loop Suave de Lerp do Palco 3D (60/120 FPS via requestAnimationFrame)
  useEffect(() => {
    let animId: number;

    const animate = () => {
      const r = rotRef.current;
      r.currentX += (r.targetX - r.currentX) * 0.08;
      r.currentY += (r.targetY - r.currentY) * 0.08;

      if (cardRef.current) {
        cardRef.current.style.transform = `rotateX(${r.currentX.toFixed(2)}deg) rotateY(${r.currentY.toFixed(2)}deg)`;
      }
      if (photoRef.current) {
        photoRef.current.style.transform = `scale(1.05) translate(${(r.currentY * 0.9).toFixed(2)}px, ${(-r.currentX * 0.9).toFixed(2)}px)`;
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

  // Manipulador de Mouse Move com Perspectiva 3D e Glare Especular
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = (e.clientX - centerX) / (window.innerWidth / 2);
    const normY = (e.clientY - centerY) / (window.innerHeight / 2);

    rotRef.current.targetY = normX * 12; // graus
    rotRef.current.targetX = -normY * 9;

    if (glareRef.current) {
      const glareX = ((e.clientX - rect.left) / rect.width) * 100;
      const glareY = ((e.clientY - rect.top) / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(255,255,255,0.45) 0%, transparent 60%)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    rotRef.current.targetX = 0;
    rotRef.current.targetY = 0;
    if (glareRef.current) {
      glareRef.current.style.background = 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)';
    }
  }, []);

  // Suporte a Touch Parallax em Dispositivos Móveis
  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 0 || !stageRef.current) return;
    const touch = e.touches[0];
    const rect = stageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = (touch.clientX - centerX) / (window.innerWidth / 2);
    const normY = (touch.clientY - centerY) / (window.innerHeight / 2);

    rotRef.current.targetY = normX * 9;
    rotRef.current.targetX = -normY * 6;
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-dahora-black via-slate-950 to-dahora-black text-white pt-24 sm:pt-28 pb-16 px-4 overflow-hidden border-b border-dahora-border-dark flex flex-col items-center">
      
      {/* Luzes ambiente de estúdio automotivo dinâmico */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] blur-[150px] pointer-events-none transition-all duration-700"
        style={{ background: activeVehicle.auraGradient }}
      />

      {/* Linhas de Fluxo de Energia SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20 select-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-50,220 Q300,70 650,230 T1350,150 T2050,280"
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          className="animate-electric-stream"
        />
        <path
          d="M100,-20 Q500,290 900,90 T1550,330 T2150,100"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="1"
          className="animate-electric-stream-fast"
        />
      </svg>

      <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Eyebrow Badge de Autoridade */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dahora-emerald/30 bg-dahora-emerald/10 backdrop-blur-md mb-6 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-dahora-emerald animate-pulse" />
          <span className="text-xs font-mono tracking-widest uppercase text-dahora-cyan font-bold">
            DA HORA • CONCESSIONÁRIA DIGITAL EM MACATUBA/SP
          </span>
        </div>

        {/* Headline Principal e Chamada Emocional */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white text-center tracking-tight leading-[1.08] mb-4 max-w-4xl">
          O Futuro Não Espera. <br />
          <span className="text-gradient-emerald">Acelere Sua Escolha.</span>
        </h1>

        {/* Subtítulo Estilo Painel Digital Inicializando */}
        <div className="font-display font-black text-lg sm:text-2xl text-dahora-cyan tracking-tight flex items-center justify-center min-h-[2.2rem] mb-4">
          <span>{typedTagline}</span>
          {!isBootDone && (
            <span className="inline-block w-2 sm:w-2.5 h-5 sm:h-6 bg-dahora-emerald ml-1.5 animate-pulse shadow-glow-emerald" />
          )}
        </div>

        <p className="max-w-2xl text-sm sm:text-base text-gray-300 font-light text-center leading-relaxed mb-8">
          Motos, scooters, patinetes e karts drift com a segurança de duas lojas físicas em Macatuba, oficina própria e entrega técnica grátis até 150 km.
        </p>

        {/* CTAs de Conversão Imediata */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <Link
            to="/veiculos"
            className="btn-primary btn-electric-arc w-full sm:w-auto px-8 py-3.5 shadow-glow-emerald hover:scale-[1.02] flex items-center justify-center gap-2 font-bold text-xs font-mono uppercase tracking-widest"
          >
            <span>Explorar Veículos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/20 hover:border-dahora-emerald text-gray-300 hover:text-white hover:bg-white/5 text-xs font-mono uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>Atendimento WhatsApp</span>
          </a>
        </div>

        {/* ============================================================== */}
        {/* PALCO FOTOGRÁFICO 3D INTERATIVO (Inspirado no ConectWeb)       */}
        {/* ============================================================== */}
        <div className="w-full max-w-5xl relative">
          
          {/* Texto Monumental Contornado em Camada de Fundo (u-outline) */}
          <div className="pointer-events-none select-none text-center -mb-5 sm:-mb-8 relative z-0" aria-hidden="true">
            <div className="font-display font-black text-3xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none text-white/90">
              MOBILIDADE <span className="u-outline-emerald">3D INTERATIVA.</span>
            </div>
          </div>

          {/* O Palco 3D Interativo */}
          <div
            id="interactive-stage"
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            className="w-full relative z-10 cursor-crosshair select-none"
            style={{ perspective: '1200px' }}
          >
            <div
              id="stage-card"
              ref={cardRef}
              className="relative rounded-3xl overflow-hidden glass-luxury border border-dahora-emerald/40 shadow-[0_30px_100px_rgba(0,0,0,0.9)] transition-transform duration-100 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              
              {/* Contêiner da Fotografia Real do Veículo com Profundidade */}
              <div className="relative h-[380px] sm:h-[480px] md:h-[530px] w-full overflow-hidden bg-gradient-to-b from-slate-900/90 via-dahora-surface-dark to-slate-950 flex items-center justify-center">
                
                {/* Malha Tecnológica de Fundo */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Fundo Ambiente Desfocado Preenchendo as Laterais Naturalmente */}
                <img
                  src={activeVehicle.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-3xl scale-150 opacity-40 select-none pointer-events-none"
                />

                {/* Veículo Fotográfico Real Protagonista (100% Nítido, Sem Corte de Rodas ou Guidão) */}
                <img
                  id="stage-photo"
                  ref={photoRef}
                  src={activeVehicle.image}
                  alt={activeVehicle.name}
                  className="relative z-10 w-full h-full object-contain p-4 sm:p-6 transition-transform duration-300 ease-out select-none"
                  style={{ transform: 'scale(1.05)' }}
                />

                {/* Vinheta Noturna de Iluminação */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/30 pointer-events-none" />

                {/* Reflexo Especular de Brilho Dinâmico (Segue o Mouse) */}
                <div
                  id="stage-glare"
                  ref={glareRef}
                  className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)',
                  }}
                />

                {/* Badge Flutuante 1 (Top Left): Potência & Motor (translateZ 65px) */}
                <div
                  id="badge-motor"
                  ref={badgeMotorRef}
                  className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2.5 sm:gap-3 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-black/80 backdrop-blur-xl border border-dahora-emerald/60 shadow-2xl transition-transform duration-150"
                  style={{ transform: 'translateZ(65px)' }}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-dahora-emerald">
                    <Zap className="w-4 h-4 fill-dahora-emerald" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                      Motor Elétrico
                    </div>
                    <div className="text-xs sm:text-sm text-white font-black">
                      {activeVehicle.power} Potência
                    </div>
                  </div>
                </div>

                {/* Badge Flutuante 2 (Top Right): Alcance & Autonomia (translateZ 65px) */}
                <div
                  id="badge-autonomia"
                  ref={badgeAutonomiaRef}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-2.5 sm:gap-3 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-black/80 backdrop-blur-xl border border-dahora-cyan/60 shadow-2xl transition-transform duration-150"
                  style={{ transform: 'translateZ(65px)' }}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-dahora-cyan">
                    <BatteryCharging className="w-4 h-4 text-dahora-cyan" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-dahora-cyan uppercase tracking-wider font-bold">
                      Autonomia Real
                    </div>
                    <div className="text-xs sm:text-sm text-white font-black">
                      {activeVehicle.range}
                    </div>
                  </div>
                </div>

                {/* Card Flutuante Inferior 3 (Bottom Center): Telemetria, Preço e Conversão (translateZ 85px) */}
                <div
                  id="badge-specs"
                  ref={badgeSpecsRef}
                  className="absolute bottom-0 left-0 right-0 sm:bottom-6 sm:left-6 sm:right-6 z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 sm:px-6 sm:py-4 sm:rounded-2xl bg-black/90 md:bg-black/85 backdrop-blur-xl border-t sm:border border-white/20 shadow-2xl transition-transform duration-150"
                  style={{ transform: 'translateZ(85px)' }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                        {activeVehicle.category}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-gray-400">
                        • {activeVehicle.badge}
                      </span>
                    </div>
                    <h2 className="font-display font-extrabold text-base sm:text-xl text-white">
                      {activeVehicle.name}
                    </h2>
                    <div className="text-[11px] sm:text-xs font-mono text-gray-300 mt-1 flex flex-wrap gap-2 sm:gap-4">
                      <span>{activeVehicle.power} Potência</span>
                      <span>•</span>
                      <span>{activeVehicle.range} Autonomia</span>
                      <span>•</span>
                      <span>Até {activeVehicle.maxSpeed}</span>
                    </div>
                  </div>

                  {/* Preços e Ações */}
                  <div className="flex items-center justify-between md:justify-start gap-4 md:border-l md:border-white/10 md:pl-6 w-full md:w-auto pt-2 md:pt-0 border-t border-white/10 md:border-t-0">
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                        À Vista no Pix (5% OFF)
                      </span>
                      <div className="font-display text-lg sm:text-2xl text-dahora-emerald font-black tabular-nums">
                        {formatCurrency(activeVehicle.pixPrice)}
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono">
                        ou 12x de {formatCurrency(activeVehicle.installments.value)} sem juros
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/produto/${activeVehicle.slug}`}
                        className="px-4 py-2.5 rounded-xl bg-dahora-emerald hover:bg-dahora-emerald-dark text-dahora-black text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-glow-emerald"
                      >
                        Ver Detalhes
                      </Link>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-md"
                        title="Tirar dúvidas deste modelo no WhatsApp"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Dica Interativa de Perspectiva 3D */}
                <div className="absolute bottom-3 right-6 hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-dahora-cyan border border-white/10 z-20 pointer-events-none">
                  <Compass className="w-3.5 h-3.5 text-dahora-cyan animate-spin [animation-duration:8s]" />
                  <span>Mova o mouse para perspectiva 3D</span>
                </div>

              </div>

            </div>
          </div>

          {/* ============================================================== */}
          {/* SELETOR DE VEÍCULOS 3D AO VIVO (Swatches Interativos)           */}
          {/* ============================================================== */}
          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <div className="text-xs sm:text-sm font-mono font-bold text-white tracking-wide">
              Veículo Selecionado: <span className="text-dahora-emerald">{activeVehicle.name}</span>
            </div>

            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              {VEHICLE_VARIANTS.map((v, idx) => {
                const isActive = idx === selectedIdx;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedIdx(idx)}
                    className={`aura-swatch relative flex items-center justify-center group ${
                      isActive ? 'is-active' : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{
                      background: idx === 0 ? '#10b981' : idx === 1 ? '#06b6d4' : idx === 2 ? '#ef4444' : idx === 3 ? '#3b82f6' : '#f59e0b',
                    }}
                    title={`Ver ${v.name}`}
                    aria-label={`Ver ${v.name}`}
                  >
                    <span className="sr-only">{v.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="text-[11px] font-mono text-gray-400">
              Clique nas esferas para alternar entre Motos, Scooters, Drifts, Patinetes e Triciclos
            </div>
          </div>

          {/* ============================================================== */}
          {/* FAIXA DE CREDIBILIDADE DA CONCESSIONÁRIA (Base da Hero)        */}
          {/* ============================================================== */}
          <div className="mt-12 pt-8 border-t border-dahora-border-dark/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-dahora-emerald/30 hover:bg-white/10 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-dahora-emerald/15 flex items-center justify-center text-dahora-emerald shrink-0">
                <MapPin className="w-4 h-4 animate-map-pulse" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Duas Lojas Físicas</span>
                <p className="text-[11px] text-gray-400">Loja 1 (Vendas & Oficina) • Loja 2 (Showroom)</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-dahora-cyan/30 hover:bg-white/10 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-dahora-cyan/15 flex items-center justify-center text-dahora-cyan shrink-0">
                <Wrench className="w-4 h-4 animate-wrench-turn" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Oficina Especializada</span>
                <p className="text-[11px] text-gray-400">Suporte técnico próprio e peças de reposição</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-dahora-emerald/30 hover:bg-white/10 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-dahora-emerald/15 flex items-center justify-center text-dahora-emerald shrink-0">
                <Truck className="w-4 h-4 animate-truck-glide" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Entrega Grátis 150 km</span>
                <p className="text-[11px] text-gray-400">Veículo 100% montado e pronto para andar</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
