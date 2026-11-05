import { Link } from 'react-router-dom';
import {
  Zap,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Truck,
  MessageSquare,
  Sparkles,
  MapPin
} from 'lucide-react';
import { buildWhatsAppUrl } from '../../lib/utils';
import { env } from '../../config/env';

export function HeroSection() {
  const whatsappNumber = env.WHATSAPP_NUMBER || '5514998877886';
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    'Olá! Gostaria de falar com um especialista sobre as motos e veículos elétricos da Da Hora.'
  );

  const heroVehicleImg = 'https://static.wixstatic.com/media/acc37b_236b7762a73a4c7c85b51059c02394e2~mv2.jpeg/v1/fit/w_800,h_800,q_90/file.jpg';

  return (
    <section className="relative bg-gradient-to-b from-dahora-black via-dahora-midnight to-dahora-black text-white overflow-hidden py-16 md:py-24 lg:py-28 border-b border-dahora-border-dark">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-dahora-emerald/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-dahora-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-dahora relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Commercial Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-dahora-cyan text-xs font-semibold tracking-wide backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-dahora-cyan animate-pulse" />
              <span>DA HORA MOTOS ELÉTRICAS • 2 LOJAS EM MACATUBA/SP</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
              Uma nova forma de{' '}
              <span className="text-gradient-emerald">se movimentar.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Descubra motos, scooters, triciclos e patinetes elétricos selecionados para transformar sua rotina, zerar a dependência da gasolina e inaugurar uma nova experiência de mobilidade com revisão técnica garantida.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/veiculos"
                className="btn-primary w-full sm:w-auto text-base py-3.5 px-8 shadow-glow-emerald hover:scale-[1.02] flex items-center justify-center gap-2 group"
              >
                <span>EXPLORAR OS 23 VEÍCULOS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto text-base py-3.5 px-8 text-white border-white/20 hover:bg-white/5 hover:border-dahora-emerald flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-4 h-4 text-dahora-emerald" />
                <span>WHATSAPP (14) 99887-7886</span>
              </a>
            </div>

            {/* 3 Commercial Trust Pillars */}
            <div className="pt-6 border-t border-dahora-border-dark/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-dahora-emerald/15 flex items-center justify-center text-dahora-emerald shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">2 Lojas Físicas</span>
                  <p className="text-[11px] text-gray-400">Macatuba, SP</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-dahora-cyan/15 flex items-center justify-center text-dahora-cyan shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Preparação</span>
                  <p className="text-[11px] text-gray-400">Montado e revisado</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-dahora-emerald/15 flex items-center justify-center text-dahora-emerald shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Entrega</span>
                  <p className="text-[11px] text-gray-400">Envio para todo o Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase with Real Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full aspect-square max-w-md lg:max-w-none rounded-3xl bg-gradient-to-br from-dahora-surface-dark via-dahora-midnight to-dahora-surface-dark border border-dahora-border-dark overflow-hidden relative shadow-premium group">
              <img
                src={heroVehicleImg}
                alt="Moto Elétrica Da Hora"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
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
                  <span className="text-gray-300">ou 12x sem juros</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
