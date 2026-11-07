import { Link } from 'react-router-dom';
import {
  Zap,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Truck,
  Sparkles,
  MapPin,
  Flame
} from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { buildWhatsAppUrl } from '../../lib/utils';
import { env } from '../../config/env';

export function HeroSection() {
  const whatsappNumber = env.WHATSAPP_NUMBER || '5514998877886';
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    'Olá! Gostaria de falar com um especialista sobre as motos e veículos elétricos da Da Hora.'
  );

  const heroVehicleImg = 'https://static.wixstatic.com/media/acc37b_236b7762a73a4c7c85b51059c02394e2~mv2.jpeg/v1/fit/w_600,h_600,q_80/file.webp';

  return (
    <section className="relative bg-gradient-to-b from-dahora-black via-dahora-midnight to-dahora-black text-white overflow-hidden py-16 md:py-24 lg:py-28 border-b border-dahora-border-dark">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-dahora-emerald/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-dahora-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-dahora relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Commercial Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Promo Banner Pill */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-dahora-cyan text-xs font-semibold tracking-wide backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-dahora-cyan animate-pulse" />
                <span>DA HORA MOTOS • LOJA 1 ASSISTÊNCIA • LOJA 2 SHOWROOM</span>
              </div>

              <Link
                to="/black-friday/drift"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-600/30 to-amber-600/30 border border-red-500/50 text-red-200 text-xs font-black hover:scale-105 transition-all shadow-md"
              >
                <Flame className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                <span>ESQUENTA BLACK: ATÉ 21X NO CARTÃO [VER OFERTAS]</span>
                <ArrowRight className="w-3 h-3 text-amber-300" />
              </Link>
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
              A evolução da sua{' '}
              <span className="text-gradient-emerald">mobilidade começa aqui.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Motos, scooters, triciclos e patinetes elétricos 0km selecionados para sua economia diária e lazer. <strong>Entrega grátis em até 150 km de Macatuba/SP</strong> com veículo 100% montado, revisado e suporte técnico da nossa oficina própria.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto text-base py-3.5 px-8 shadow-glow-emerald hover:scale-[1.02] flex items-center justify-center gap-2.5 font-bold"
                aria-label="Falar com consultor no WhatsApp oficial"
              >
                <WhatsAppIcon className="w-5 h-5 text-dahora-black" />
                <span>FALAR COM CONSULTOR NO WHATSAPP</span>
              </a>

              <Link
                to="/veiculos"
                className="btn-secondary w-full sm:w-auto text-base py-3.5 px-8 text-white border-white/20 hover:bg-white/5 hover:border-dahora-emerald flex items-center justify-center gap-2"
              >
                <span>EXPLORAR CATEGORIAS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 Commercial Trust Pillars */}
            <div className="pt-6 border-t border-dahora-border-dark/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-dahora-emerald/15 flex items-center justify-center text-dahora-emerald shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">2 Lojas Físicas</span>
                  <p className="text-[11px] text-gray-400">Oficina (Loja 1) e Showroom (Loja 2)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-dahora-cyan/15 flex items-center justify-center text-dahora-cyan shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Até 21x no Cartão</span>
                  <p className="text-[11px] text-gray-400">Ou 5% de desconto no Pix</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-dahora-emerald/15 flex items-center justify-center text-dahora-emerald shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Frete Grátis 150 km</span>
                  <p className="text-[11px] text-gray-400">Montado, revisado e com garantia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase with Real Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full aspect-square max-w-md lg:max-w-none rounded-3xl bg-gradient-to-br from-dahora-surface-dark via-dahora-midnight to-dahora-surface-dark border border-dahora-border-dark overflow-hidden relative shadow-premium group">
              <img
                src={heroVehicleImg}
                alt="Moto Elétrica E80 Speed Da Hora Motos"
                width={600}
                height={600}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dahora-black via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 z-10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-dahora-cyan bg-dahora-black/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-dahora-cyan/30">
                  DESTAQUE DA CONCESSIONÁRIA
                </span>
                <p className="font-display font-extrabold text-xl text-white">
                  MOTO ELÉTRICA E80 SPEED
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-dahora-emerald font-extrabold text-lg tabular-nums">
                    R$ 10.900
                  </span>
                  <span className="text-gray-300">ou 12x sem juros • até 21x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
