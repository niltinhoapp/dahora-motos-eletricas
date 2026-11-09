import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  BatteryCharging,
  Gauge,
  MapPin,
  Wrench,
  Truck
} from 'lucide-react';
import { formatCurrency } from '../../lib/utils';

interface VehicleVariant {
  id: string;
  category: string;
  shortLabel: string;
  name: string;
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
}

// 5 Veículos Reais do Catálogo Da Hora Motos Elétricas (Alta Definição e Brilho Total)
const VEHICLE_VARIANTS: VehicleVariant[] = [
  {
    id: 'e80-speed',
    category: 'Moto Elétrica',
    shortLabel: 'Moto E80',
    name: 'Moto Elétrica E80 Speed',
    power: '2.000W',
    range: '60 km',
    maxSpeed: '75 km/h',
    price: 10900,
    pixPrice: 10355,
    installments: { count: 12, value: 908.33 },
    image: 'https://static.wixstatic.com/media/acc37b_236b7762a73a4c7c85b51059c02394e2~mv2.jpeg/v1/fit/w_1400,h_1400,q_95/file.jpg',
    slug: 'moto-el%C3%A9trica-e80-speed',
    badge: 'Alta Performance',
  },
  {
    id: 'scooter-1822',
    category: 'Scooter Elétrica',
    shortLabel: 'Scooter',
    name: 'Scooter 1822 Bolin',
    power: '1.500W',
    range: '55 km',
    maxSpeed: '60 km/h',
    price: 10900,
    pixPrice: 10355,
    installments: { count: 12, value: 908.33 },
    image: 'https://static.wixstatic.com/media/acc37b_eb9c73247f034b52962348510d92947f~mv2.jpeg/v1/fit/w_1400,h_1400,q_95/file.jpg',
    slug: 'scooter-1822-bolin',
    badge: 'Conforto Urbano',
  },
  {
    id: 'patinete-xm01',
    category: 'Patinete Elétrico',
    shortLabel: 'Patinete',
    name: 'Patinete Elétrico XM-01 350W',
    power: '350W',
    range: '30 km',
    maxSpeed: '25 km/h',
    price: 1999,
    promotionalPrice: 1899,
    pixPrice: 1899,
    installments: { count: 12, value: 166.58 },
    image: 'https://static.wixstatic.com/media/acc37b_95c4cbea1ed04aaea084b4f435e052e6~mv2.webp/v1/fit/w_1400,h_1400,q_95/file.webp',
    slug: 'patinete-xm-01-350w',
    badge: 'Portátil & Dobrável',
  },
  {
    id: 'drift-201',
    category: 'Kart Drift 360°',
    shortLabel: 'Kart Drift',
    name: 'Kart Drift 201 Mini 350W',
    power: '350W',
    range: '15 km/h',
    maxSpeed: '15 km/h',
    price: 1999,
    promotionalPrice: 1899,
    pixPrice: 1899,
    installments: { count: 12, value: 166.58 },
    image: 'https://static.wixstatic.com/media/acc37b_5a4cb2df3d02449e8eaacbef968de5f5~mv2.jpeg/v1/fit/w_1400,h_1400,q_95/file.jpg',
    slug: 'drift-201-mini-350w',
    badge: 'Lazer & Adrenalina',
  },
  {
    id: 'triciclo-t3',
    category: 'Triciclo Elétrico',
    shortLabel: 'Triciclo',
    name: 'Triciclo T3 Bolin',
    power: '1.000W',
    range: '45 km',
    maxSpeed: '40 km/h',
    price: 10900,
    pixPrice: 10355,
    installments: { count: 12, value: 908.33 },
    image: 'https://static.wixstatic.com/media/acc37b_a80b268c792f4f1683c721de0b880486~mv2.jpg/v1/fit/w_1400,h_1400,q_95/file.jpg',
    slug: 'triciclo-t3-bolin',
    badge: 'Estabilidade & Família',
  },
];

export function HeroSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Duplo Texto Interativo Typewriter
  const [typedTitle, setTypedTitle] = useState('');
  const [typedSub, setTypedSub] = useState('');
  const [titleDone, setTitleDone] = useState(false);
  const [subDone, setSubDone] = useState(false);

  const heroSectionRef = useRef<HTMLElement>(null);
  const bgVehicleRef = useRef<HTMLDivElement>(null);
  const rotRef = useRef({ currentX: 0, currentY: 0, targetX: 0, targetY: 0 });

  const activeVehicle = VEHICLE_VARIANTS[selectedIdx];

  // Alternância automática dos veículos no fundo a cada 5 segundos
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % VEHICLE_VARIANTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Efeito Typewriter Sequencial (Frase 1 depois Frase 2)
  useEffect(() => {
    const titleText = 'SUA PRÓXIMA EXPERIÊNCIA COMEÇA AQUI.';
    const subText = 'DESCUBRA A MOBILIDADE ELÉTRICA.';
    let charI = 0;
    let charJ = 0;

    setTypedTitle('');
    setTypedSub('');
    setTitleDone(false);
    setSubDone(false);

    const titleTimer = setInterval(() => {
      charI++;
      setTypedTitle(titleText.slice(0, charI));
      if (charI >= titleText.length) {
        clearInterval(titleTimer);
        setTitleDone(true);

        const subTimer = setInterval(() => {
          charJ++;
          setTypedSub(subText.slice(0, charJ));
          if (charJ >= subText.length) {
            clearInterval(subTimer);
            setSubDone(true);
          }
        }, 35);
      }
    }, 35);

    return () => {
      clearInterval(titleTimer);
    };
  }, []);

  // Parallax suave com aceleração por hardware
  useEffect(() => {
    let animId: number;

    const animate = () => {
      const r = rotRef.current;
      r.currentX += (r.targetX - r.currentX) * 0.08;
      r.currentY += (r.targetY - r.currentY) * 0.08;

      if (bgVehicleRef.current) {
        bgVehicleRef.current.style.transform = `scale(1.04) translate3d(${(-r.currentY * 2.2).toFixed(2)}px, ${(r.currentX * 1.6).toFixed(2)}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = (e.clientX - centerX) / (window.innerWidth / 2);
    const normY = (e.clientY - centerY) / (window.innerHeight / 2);

    rotRef.current.targetY = normX * 12;
    rotRef.current.targetX = -normY * 8;
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
    rotRef.current.targetX = 0;
    rotRef.current.targetY = 0;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLElement>) => {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = (touch.clientX - centerX) / (window.innerWidth / 2);
    const normY = (touch.clientY - centerY) / (window.innerHeight / 2);

    rotRef.current.targetY = normX * 10;
    rotRef.current.targetX = -normY * 6;
  }, []);

  return (
    <section
      ref={heroSectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      className="relative min-h-[85vh] lg:min-h-[92vh] bg-dahora-black text-white overflow-hidden flex flex-col justify-between"
    >
      {/* ===================================================================== */}
      {/* FOTOGRAFIA DO VEÍCULO EM ALTA DEFINIÇÃO: CLARA, VÍVIDA E TOTALMENTE VISÍVEL */}
      {/* ===================================================================== */}
      <div
        ref={bgVehicleRef}
        className="absolute inset-0 z-0 pointer-events-none select-none transition-transform duration-150 ease-out"
        style={{ transform: 'scale(1.04)' }}
      >
        {VEHICLE_VARIANTS.map((v, idx) => {
          const isCurrent = idx === selectedIdx;
          return (
            <div
              key={v.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isCurrent ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Imagem do Veículo em Alta Nitidez e Brilho Total (Foco nas Máquinas) */}
              <picture className="w-full h-full block">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-contain sm:object-contain lg:object-right-bottom p-2 sm:p-6 lg:p-8 filter brightness-115 contrast-115 saturate-130 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                />
              </picture>
            </div>
          );
        })}
      </div>

      {/* Gradientes Suaves: Asseguram Leitura Perfeita dos Textos Sem Apagar o Veículo */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/50 to-transparent z-[1] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent z-[1] pointer-events-none" />

      {/* ===================================================================== */}
      {/* PRIMEIRA DOBRA LIMPA: DUPLO TEXTO INTERATIVO + CARD DE IDENTIFICAÇÃO  */}
      {/* ===================================================================== */}
      <div className="container-dahora relative z-10 w-full pt-8 sm:pt-12 pb-4">
        <div className="max-w-2xl space-y-4">
          
          {/* Seletor Rápido de Categorias dos Veículos */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {VEHICLE_VARIANTS.map((v, idx) => {
              const isActive = idx === selectedIdx;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-dahora-emerald text-dahora-black shadow-glow-emerald scale-105'
                      : 'bg-black/60 text-gray-300 hover:text-white border border-white/20 backdrop-blur-md'
                  }`}
                >
                  {v.shortLabel}
                </button>
              );
            })}
          </div>

          {/* Duplo Texto Interativo com Digitação Digital */}
          <div className="space-y-2">
            
            {/* Frase 1 Interativa */}
            <h1 className="font-display font-black text-2xl sm:text-4xl xl:text-5xl text-white tracking-tight leading-[1.08] min-h-[3rem] sm:min-h-[4rem] flex items-center">
              <span>{typedTitle}</span>
              {!titleDone && (
                <span className="inline-block w-2 sm:w-2.5 h-6 sm:h-8 bg-dahora-emerald ml-1.5 animate-pulse shadow-glow-emerald" />
              )}
            </h1>

            {/* Frase 2 Interativa */}
            <div className="font-display font-extrabold text-lg sm:text-2xl text-gradient-emerald tracking-tight min-h-[2rem] flex items-center">
              <span>{typedSub}</span>
              {titleDone && !subDone && (
                <span className="inline-block w-2 h-5 bg-dahora-cyan ml-1.5 animate-pulse shadow-glow-emerald" />
              )}
            </div>

          </div>

          {/* Card Flutuante de Identificação Imediata da Máquina em Exibição */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/20 shadow-2xl max-w-md space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono font-black text-dahora-emerald uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {activeVehicle.category} • {activeVehicle.badge}
              </span>
              <span className="text-[11px] font-mono text-gray-400">
                100% Elétrico
              </span>
            </div>

            <div className="font-display font-black text-lg sm:text-xl text-white">
              {activeVehicle.name}
            </div>

            {/* Métricas do Veículo */}
            <div className="flex items-center gap-4 text-xs font-mono text-gray-200">
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-dahora-emerald" />
                <strong>{activeVehicle.power}</strong>
              </span>
              <span className="flex items-center gap-1">
                <BatteryCharging className="w-3.5 h-3.5 text-dahora-cyan" />
                <strong>{activeVehicle.range}</strong>
              </span>
              <span className="flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5 text-white" />
                <strong>{activeVehicle.maxSpeed}</strong>
              </span>
            </div>

            {/* Preço e Link Direto para o Veículo */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-3">
              <div>
                <div className="text-base sm:text-xl font-display font-black text-dahora-emerald tabular-nums">
                  {formatCurrency(activeVehicle.pixPrice)} à vista
                </div>
                <div className="text-[10px] text-gray-300 font-mono">
                  ou 12x de {formatCurrency(activeVehicle.installments.value)} sem juros
                </div>
              </div>

              <Link
                to={`/produto/${activeVehicle.slug}`}
                className="px-4 py-2 rounded-xl bg-dahora-emerald hover:bg-dahora-emerald-dark text-dahora-black text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-glow-emerald"
              >
                Ver Detalhes
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ===================================================================== */}
      {/* BARRA DE CREDIBILIDADE DA CONCESSIONÁRIA NA BASE DA PRIMEIRA DOBRA    */}
      {/* ===================================================================== */}
      <div className="relative z-10 w-full border-t border-white/15 bg-black/60 backdrop-blur-md py-3">
        <div className="container-dahora">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 text-xs">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-dahora-emerald shrink-0" />
              <span className="text-gray-200"><strong>2 Lojas Físicas</strong> em Macatuba/SP</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Wrench className="w-4 h-4 text-dahora-cyan shrink-0" />
              <span className="text-gray-200"><strong>Oficina Própria</strong> e Peças</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-dahora-emerald shrink-0" />
              <span className="text-gray-200"><strong>Frete Grátis 150 km</strong> 100% montado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
