import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Gauge,
  BatteryCharging,
  ArrowRight,
  ShieldCheck,
  Flame,
  Truck
} from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { formatCurrency, buildWhatsAppUrl, buildProductWhatsAppMessage } from '../../lib/utils';
import { env } from '../../config/env';

export function HighPerformanceFeature() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [watts, setWatts] = useState(0);
  const [range, setRange] = useState(0);
  const [speed, setSpeed] = useState(0);

  // E80 Speed - Dados Reais Auditados do Catálogo
  const product = {
    name: 'Moto Elétrica E80 Speed',
    slug: 'moto-el%C3%A9trica-e80-speed',
    powerWatts: 2000,
    rangeKm: 60,
    speedKmh: 75,
    price: 10900,
    pixPrice: 10355,
    installments: { count: 12, value: 908.33 },
    image: 'https://static.wixstatic.com/media/acc37b_236b7762a73a4c7c85b51059c02394e2~mv2.jpeg/v1/fit/w_800,h_800,q_90/file.jpg',
  };

  const whatsappNumber = env.WHATSAPP_NUMBER || '5514998877886';
  const productUrl = `${window.location.origin}${import.meta.env.BASE_URL.replace(/\/$/, '')}/produto/${product.slug}`;
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    buildProductWhatsAppMessage(product.name, productUrl)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animação Progressiva dos Contadores Numéricos
  useEffect(() => {
    if (!isVisible) return;

    // Contador de Watts: 0 a 2000
    const duration = 1600;
    const steps = 40;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setWatts(Math.round(easeOut * product.powerWatts));
      setRange(Math.round(easeOut * product.rangeKm));
      setSpeed(Math.round(easeOut * product.speedKmh));

      if (stepCount >= steps) {
        clearInterval(timer);
        setWatts(product.powerWatts);
        setRange(product.rangeKm);
        setSpeed(product.speedKmh);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-dahora-black via-slate-950 to-dahora-black text-white py-20 lg:py-28 overflow-hidden border-b border-dahora-border-dark"
    >
      {/* Speed Lines Horizontais e Verticais em Perspectiva */}
      <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-48 h-0.5 bg-gradient-to-r from-transparent via-dahora-emerald to-transparent animate-speed-line" />
        <div className="absolute top-1/2 right-20 w-64 h-0.5 bg-gradient-to-r from-transparent via-dahora-cyan to-transparent animate-speed-line [animation-delay:400ms]" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-0.5 bg-gradient-to-r from-transparent via-dahora-emerald to-transparent animate-speed-line [animation-delay:800ms]" />
        <div className="absolute top-10 right-1/4 w-56 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-speed-line [animation-delay:1200ms]" />
      </div>

      {/* Halo de luzes do estúdio */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-dahora-emerald/15 via-dahora-cyan/15 to-transparent blur-[120px] pointer-events-none" />

      <div className="container-dahora relative z-10">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-black tracking-wider uppercase mb-3 animate-pulse">
            <Flame className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            <span>DESTAQUE ALTA PERFORMANCE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            POTÊNCIA PURA. AUTONOMIA REAL.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2">
            A Moto Elétrica E80 Speed combina 2.000W de torque instantâneo com até 60 km de autonomia para dominar qualquer subida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Lado Esquerdo: Imagem Fotográfica Real em Destaque 3D */}
          <div className="lg:col-span-7 relative flex justify-center">
            
            {/* Base Iluminada de Showroom */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-gradient-to-r from-transparent via-dahora-emerald/30 to-transparent blur-xl pointer-events-none" />
            
            <div className="relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-slate-900/90 border border-dahora-border-dark overflow-hidden flex items-center justify-center shadow-2xl p-4">
              
              {/* Fundo ambiente desfocado sem abas pretas duras */}
              <img
                src={product.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-35 brightness-75 select-none pointer-events-none"
              />

              {/* Veículo com animação suave de flutuação */}
              <img
                src={product.image}
                alt={product.name}
                className="relative z-10 w-full h-full object-contain p-2 animate-float-vehicle select-none"
                loading="lazy"
                decoding="async"
              />

              {/* Rastro luminoso atrás da roda */}
              <div className="absolute bottom-6 right-16 w-24 h-6 bg-dahora-emerald/40 blur-lg rounded-full pointer-events-none animate-pulse" />
            </div>
          </div>

          {/* Lado Direito: Métricas Animadas, Telemetria e Conversão */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Grid dos 3 Indicadores Digitais Dinâmicos */}
            <div className="grid grid-cols-3 gap-3">
              
              {/* Potência */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-dahora-emerald/40 transition-colors">
                <div className="flex items-center gap-1.5 text-dahora-emerald text-xs font-bold mb-1">
                  <Zap className="w-4 h-4" />
                  <span>MOTOR</span>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-black text-white tabular-nums">
                  {watts.toLocaleString('pt-BR')}W
                </div>
                <span className="text-[10px] text-gray-400 uppercase font-semibold">Potência Nominal</span>
              </div>

              {/* Autonomia */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-dahora-cyan/40 transition-colors">
                <div className="flex items-center gap-1.5 text-dahora-cyan text-xs font-bold mb-1">
                  <BatteryCharging className="w-4 h-4" />
                  <span>ALCANCE</span>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-black text-white tabular-nums">
                  {range} km
                </div>
                <span className="text-[10px] text-gray-400 uppercase font-semibold">Por Carga Total</span>
              </div>

              {/* Velocidade */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-dahora-emerald/40 transition-colors">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold mb-1">
                  <Gauge className="w-4 h-4" />
                  <span>VELOCIDADE</span>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-black text-white tabular-nums">
                  {speed} km/h
                </div>
                <span className="text-[10px] text-gray-400 uppercase font-semibold">Desempenho Real</span>
              </div>

            </div>

            {/* Barra Interativa de Autonomia de Bateria */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-300 font-bold flex items-center gap-1.5">
                  <BatteryCharging className="w-4 h-4 text-dahora-emerald" />
                  <span>Simulação de Autonomia Contínua</span>
                </span>
                <span className="text-dahora-cyan font-mono font-bold">
                  {range} km de 60 km
                </span>
              </div>

              {/* Barra de Progresso com Preenchimento Dinâmico */}
              <div className="w-full h-3 rounded-full bg-slate-900 border border-white/10 overflow-hidden p-0.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-dahora-emerald via-dahora-cyan to-emerald-400 shadow-glow-emerald transition-all duration-1000 ease-out"
                  style={{ width: `${(range / product.rangeKm) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
                <span>0 km (Esgotada)</span>
                <span>Bateria de Lítio Removível</span>
                <span className="text-dahora-emerald font-semibold">60 km (100% Carga)</span>
              </div>
            </div>

            {/* Caixa Comercial de Preço & Condições de Pagamento */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-slate-900/90 border border-dahora-emerald/30 space-y-3">
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <span className="text-xs text-gray-400 line-through block">
                    {formatCurrency(product.price)}
                  </span>
                  <div className="text-2xl sm:text-3xl font-display font-black text-white tabular-nums">
                    {formatCurrency(product.pixPrice)}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black uppercase">
                  5% OFF NO PIX À VISTA
                </span>
              </div>

              <div className="text-xs text-gray-300">
                ou parcelado em <strong className="text-white">12x de {formatCurrency(product.installments.value)} sem juros</strong> no cartão • até 21x
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-wrap gap-4 text-[11px] text-gray-300">
                <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Garantia e Revisão de Fábrica
                </span>
                <span className="inline-flex items-center gap-1 text-dahora-cyan font-semibold">
                  <Truck className="w-3.5 h-3.5" />
                  Frete Grátis até 150 km de Macatuba
                </span>
              </div>

              {/* Botões de Ação para o Modelo */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/produto/${product.slug}`}
                  className="btn-primary btn-electric-arc flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 shadow-glow-emerald"
                >
                  <span>CONHECER A E80 SPEED</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp py-3 px-5 text-sm font-bold flex items-center justify-center gap-2"
                  aria-label="Tirar dúvidas sobre a E80 Speed no WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
