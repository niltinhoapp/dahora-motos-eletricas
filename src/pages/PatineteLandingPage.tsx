import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Zap,
  Truck,
  Sparkles,
  Clock,
  Star,
  ArrowRight,
  Check,
  ChevronDown,
  BatteryCharging,
  Gauge,
  Flame,
  Award,
  MapPin,
  Tag,
  Minimize2,
  Sliders,
  Compass,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { demoProducts } from '../data/demo';

const patineteProduct = demoProducts.find((p) => p.slug === 'patinete-xm-01-350w') || demoProducts[1];

const patineteImages = [
  {
    id: 'img-1',
    title: 'Visão Geral Black Edition',
    subtitle: 'Design moderno e aerodinâmico',
    url: 'https://static.wixstatic.com/media/acc37b_95c4cbea1ed04aaea084b4f435e052e6~mv2.webp/v1/fit/w_800,h_800,q_90/file.webp',
  },
  {
    id: 'img-2',
    title: 'Display Digital & Guidão',
    subtitle: 'Painel com velocímetro e bateria',
    url: 'https://static.wixstatic.com/media/acc37b_be6f605317604e73a629eed38dcf8991~mv2.webp/v1/fit/w_800,h_800,q_90/file.webp',
  },
  {
    id: 'img-3',
    title: 'Sistema Dobrável Rápido',
    subtitle: 'Dobre em 3 segundos e leve no carro',
    url: 'https://static.wixstatic.com/media/acc37b_2fe8ad0b1fec47479ae7f656945c7052~mv2.webp/v1/fit/w_800,h_800,q_90/file.webp',
  },
  {
    id: 'img-4',
    title: 'Freio a Disco & Farol LED',
    subtitle: 'Segurança total para passeios dia e noite',
    url: 'https://static.wixstatic.com/media/acc37b_42fdbdeb344948b8949c4f8c8c8dc8e3~mv2.webp/v1/fit/w_800,h_800,q_90/file.webp',
  },
];

export function PatineteLandingPage() {
  const [selectedImage, setSelectedImage] = useState(patineteImages[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Countdown timer para o lote de Black Friday
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 14,
    minutes: 36,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const whatsappMessage = encodeURIComponent(
    `Olá Da Hora Motos! Vi a oferta oficial de BLACK FRIDAY do PATINETE ELÉTRICO XM-01 350W por R$ 1.899 no Pix (ou 12x de R$ 166,58 sem juros). Gostaria de garantir minha unidade com Frete Grátis até 150km!`
  );
  const whatsappUrl = `https://wa.me/5514998877886?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-dahora-emerald selection:text-slate-950">
      
      {/* 1. TOP ANNOUNCEMENT BAR BLACK FRIDAY */}
      <div className="bg-gradient-to-r from-red-700 via-slate-950 to-red-800 text-white py-2.5 px-4 sm:px-6 lg:px-8 text-center text-xs md:text-sm font-bold tracking-wide border-b border-red-500/50 shadow-lg">
        <div className="container-dahora flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-red-600 text-white px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wider font-black animate-pulse">
            <Flame className="w-3.5 h-3.5 fill-white" /> BLACK FRIDAY OFICIAL 2026
          </span>
          <span>
            Desconto histórico de <strong>R$ 591,00</strong> no Patinete Elétrico XM-01 350W • <strong>Frete Grátis até 150 km</strong> • Veículo 100% Montado!
          </span>
        </div>
      </div>

      {/* 2. HEADER SIMPLIFICADO DE ALTA CONVERSÃO */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="container-dahora flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Voltar para a página inicial da Da Hora Motos">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-dahora-emerald to-teal-500 flex items-center justify-center shadow-glow-emerald">
              <Zap className="w-5 h-5 text-slate-950 font-black" />
            </div>
            <div>
              <span className="text-base md:text-lg font-black tracking-tight text-white block leading-tight">
                DA HORA <span className="text-dahora-emerald">MOTOS</span>
              </span>
              <span className="text-[10px] text-red-400 uppercase tracking-widest block font-bold">
                Black Friday • Patinete XM-01 350W
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-xs text-slate-400 font-medium">Plantão de Vendas:</span>
              <span className="text-xs font-bold text-dahora-emerald">(14) 99887-7886</span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-black text-xs md:text-sm py-2 px-4 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95"
              aria-label="Falar com especialista no WhatsApp sobre o Patinete Elétrico"
            >
              <WhatsAppIcon className="w-4 h-4 text-slate-950" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. SWITCHER DE OFERTAS: PATINETE X DRIFT */}
      <div className="bg-slate-900/80 border-b border-slate-800 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="container-dahora flex flex-wrap items-center justify-center gap-4 text-xs">
          <span className="text-slate-400 font-medium">Outra oferta oficial de Black Friday:</span>
          <Link
            to="/black-friday/drift"
            className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white font-bold underline transition-colors"
          >
            <span>Kart Drift Trike 201 Mini 350W (R$ 1.899)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 4. HERO SECTION - PATINETE XM-01 350W */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-dahora-emerald/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container-dahora relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Coluna de Texto e Oferta */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/40 text-red-400 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5 text-red-400" />
                <span>Campeão em Praticidade e Mobilidade Urbana</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
                Black Friday Oficial: <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-dahora-emerald">
                  Patinete Elétrico XM-01 350W
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A agilidade e autonomia perfeitas para jovens e adultos: <strong>dobra em apenas 3 segundos</strong>, 
                alcança até 25 km/h com autonomia de até 25 km, freio a disco, farol de LED e <strong>bateria recarregável em tomada comum</strong>. 
                Chega de trânsito ou cansaço no dia a dia!
              </p>

              {/* Box de Preço Black Friday */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-red-500/30 shadow-2xl relative overflow-hidden max-w-xl mx-auto lg:mx-0">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-red-600 to-amber-600 text-white text-[11px] font-black uppercase py-1 px-4 rounded-bl-xl shadow-md">
                  Economia de R$ 591,00
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
                  <span className="text-sm text-slate-400 line-through">De R$ 2.490,00</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-red-400 font-bold uppercase">Preço Black Friday:</span>
                    <span className="text-3xl sm:text-4xl font-black text-white">R$ 1.899,00</span>
                    <span className="text-xs font-bold text-dahora-emerald bg-dahora-emerald/10 px-2 py-0.5 rounded-md">no Pix</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 font-medium">
                  Ou parcelado em até <strong className="text-white">12x de R$ 166,58 sem juros</strong> em todos os cartões.
                </p>

                {/* Contador Regressivo da Black Friday */}
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-bold text-red-400">
                    <Clock className="w-4 h-4" /> Lote Black Friday Encerra em:
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-white font-bold">
                    <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">{String(timeLeft.days).padStart(2, '0')}d</span> :
                    <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">{String(timeLeft.hours).padStart(2, '0')}h</span> :
                    <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">{String(timeLeft.minutes).padStart(2, '0')}m</span> :
                    <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700 text-red-400">{String(timeLeft.seconds).padStart(2, '0')}s</span>
                  </div>
                </div>

                {/* CTAs de Conversão */}
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-black text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-glow-emerald transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                    aria-label="Garantir Patinete Elétrico na Black Friday pelo WhatsApp"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-slate-950" />
                    <span>GARANTIR PREÇO BLACK FRIDAY</span>
                  </a>

                  <Link
                    to="/produto/patinete-xm-01-350w"
                    className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm py-3.5 px-6 rounded-xl border border-slate-700 transition-colors"
                  >
                    <span>Ficha Técnica</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* 4 Pilares de Confiança */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-left">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Truck className="w-4 h-4 text-dahora-emerald shrink-0" />
                  <span><strong>Frete Grátis</strong> até 150 km</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Minimize2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Dobra Fácil</strong> em 3s</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                  <span><strong>Garantia & Oficina</strong> Loja 1</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Zap className="w-4 h-4 text-dahora-gold shrink-0" />
                  <span><strong>Bateria Bivolt</strong> Inclusa</span>
                </div>
              </div>

            </div>

            {/* Coluna da Imagem e Galeria */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl relative">
                
                {/* Header da Foto com Subtítulo */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block">
                      Detalhe: <strong className="text-white">{selectedImage.title}</strong>
                    </span>
                    <span className="text-[11px] text-emerald-400 font-medium">
                      {selectedImage.subtitle}
                    </span>
                  </div>
                  <span className="bg-red-500/15 text-red-400 border border-red-500/30 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    Black Friday
                  </span>
                </div>

                {/* Imagem Principal - Preenche todo o espaço sem abas laterais */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group">
                  <img
                    src={selectedImage.url}
                    alt={`Patinete Elétrico XM-01 350W Da Hora Motos - ${selectedImage.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                {/* Miniaturas da Galeria */}
                <div className="mt-4">
                  <p className="text-xs font-semibold text-slate-400 mb-2">Clique para ver os detalhes do patinete:</p>
                  <div className="grid grid-cols-4 gap-2">
                    {patineteImages.map((img) => {
                      const isSelected = selectedImage.id === img.id;
                      return (
                        <button
                          key={img.id}
                          type="button"
                          onClick={() => setSelectedImage(img)}
                          className={`flex flex-col items-center gap-1 p-1.5 rounded-xl border transition-all text-left ${
                            isSelected
                              ? 'border-dahora-emerald bg-slate-800 shadow-md ring-1 ring-dahora-emerald'
                              : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 opacity-70 hover:opacity-100'
                          }`}
                          aria-label={`Ver foto ${img.title}`}
                        >
                          <div className="w-full aspect-square rounded-lg overflow-hidden bg-slate-900 border border-slate-800">
                            <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-[10px] font-bold text-slate-200 truncate w-full text-center">
                            Foto {img.id.replace('img-', '')}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Destaque de Entrega */}
                <div className="mt-4 p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-200 flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-emerald-300 font-bold">Entrega Pronta para Uso:</strong>
                    Entregamos o patinete 100% regulado, testado e com a bateria carregada com Frete Grátis até 150 km!
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. VANTAGENS DO PATINETE XM-01 */}
      <section className="py-16 bg-slate-900/60 border-y border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="container-dahora">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400">
              Economia Real & Mobilidade Descomplicada
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
              Por que o Patinete XM-01 é o Mais Vendido da Categoria?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Desenvolvido para quem quer se locomover com velocidade, estilo e zero custo de combustível ou IPVA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Minimize2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Dobra em 3 Segundos</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sistema de trava rápida com alta segurança. Pesa aproximadamente 12 kg: cabe no porta-malas do carro, debaixo da mesa de trabalho ou no canto do quarto.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-dahora-emerald/15 text-dahora-emerald flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Painel Digital LCD Integrado</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Mostrador no guidão com velocímetro digital em tempo real, nível de carga da bateria e seleção dos modos Eco e Sport com um toque.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Freio a Disco + Freio Motor E-ABS</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Frenagem rápida e progressiva com disco ventilado na roda traseira e auxílio eletrônico antibloqueio na roda dianteira motriz.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">R$ 0,50 por Recarga Completa</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Basta plugar o carregador inteligente bivolt na tomada comum de casa. Uma recarga completa consome menos de R$ 0,50 e roda até 25 km.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Suporta até 100 kg</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Chassi em alumínio aeroespacial de alta resistência. Indicado tanto para adolescentes quanto para adultos no deslocamento diário.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Oficina & Peças em Macatuba</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pneus, câmaras, pastilhas de freio, baterias e carregadores originais a pronta entrega na nossa Loja 1 (Alameda Tiradentes, 348).
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. TABELA COMPARATIVA: DA HORA X INTERNET */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-dahora">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Garantia e Procedência
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Por que Comprar o Patinete na Da Hora Motos?
            </h2>
            <p className="text-slate-400 text-sm">
              Cuidado com patinetes de vendedores anônimos na internet que desaparecem quando você precisa de suporte ou peças.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/80">
                    <th className="py-4 px-4 sm:px-6 font-bold text-slate-300">Diferencial / Benefício</th>
                    <th className="py-4 px-4 sm:px-6 font-black text-dahora-emerald bg-dahora-emerald/10 text-center">
                      Da Hora Motos Elétricas
                    </th>
                    <th className="py-4 px-4 sm:px-6 font-bold text-slate-400 text-center">
                      Marketplaces e Importadores Anônimos
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-200">
                      Condição de Entrega
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center font-bold text-dahora-emerald bg-dahora-emerald/5">
                      <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> 100% Montado, Testado e Regulado</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center text-red-400">
                      Desmontado na caixa por sua conta e risco
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-200">
                      Frete Regional (até 150 km)
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center font-bold text-dahora-emerald bg-dahora-emerald/5">
                      <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> Frete Grátis na Porta</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center text-slate-400">
                      Fretes caros e demorados de R$ 180 a R$ 350
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-200">
                      Oficina e Peças de Reposição
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center font-bold text-dahora-emerald bg-dahora-emerald/5">
                      <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> Loja 1 Física em Macatuba</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center text-red-400">
                      Inexistente (quando quebra, perde o produto)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-200">
                      Test-ride Presencial
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center font-bold text-dahora-emerald bg-dahora-emerald/5">
                      <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> Disponível no Showroom (Loja 2)</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center text-red-400">
                      Sem chance de testar antes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 7. LOGÍSTICA: FRETE GRÁTIS ATÉ 150 KM & RETIRADA */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="container-dahora">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[100px] pointer-events-none rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 bg-dahora-emerald/15 text-dahora-emerald text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  <Truck className="w-4 h-4" /> Logística Rápida Black Friday
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  Frete Grátis em até 150 km com Veículo Pronto
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Entregamos na sua porta em <strong>Macatuba, Lençóis Paulista, Bauru, Jaú, Botucatu, Barra Bonita, Agudos, Pederneiras, Igaraçu do Tietê</strong> e todas as cidades num raio de até 150 km!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-dahora-emerald" /> Entrega em Domicílio Gratuita
                    </h4>
                    <p className="text-xs text-slate-400">
                      Entregamos montado, revisado e pronto para ligar e andar na porta da sua casa.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400" /> Retirada Imediata no Showroom (Loja 2)
                    </h4>
                    <p className="text-xs text-slate-400">
                      Prefere retirar hoje mesmo? Passe no nosso Showroom na Rua José Cruzerá, 241, Jardim Planalto e leve o seu na hora.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 text-center p-6 bg-slate-950 rounded-2xl border border-red-500/30 space-y-4 shadow-xl">
                <span className="text-xs text-red-400 uppercase tracking-widest font-black">Lote Promocional Black Friday</span>
                <div className="text-4xl font-black text-white">Apenas 11 Unidades</div>
                <p className="text-xs text-slate-300">
                  Economia de R$ 591 garantida apenas enquanto durar este lote de pronta entrega.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-black text-sm py-3.5 px-4 rounded-xl shadow-lg transition-transform hover:scale-105"
                  aria-label="Garantir Patinete no WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                  <span>GARANTIR NO WHATSAPP</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. DEPOIMENTOS DE CLIENTES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-dahora">
          
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-dahora-emerald">
              Clientes Satisfeitos
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              O que Dizem Quem Usa o Patinete XM-01
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-300 italic">
                "Uso o patinete todo dia para ir ao trabalho e à faculdade em Bauru. Dobro ele e levo para dentro da sala de aula. Economizo mais de R$ 350 por mês que gastava com gasolina e estacionamento."
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Lucas Fernandes</span>
                <span className="text-slate-500">Bauru/SP</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-300 italic">
                "Comprei para o meu filho adolescente de 15 anos. Ele usa para ir para a escola e cursos aqui em Lençóis. A velocidade é perfeita e o freio a disco dá muita segurança."
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Carla Vasconcellos</span>
                <span className="text-slate-500">Lençóis Paulista/SP</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-300 italic">
                "Excelente compra! O pessoal da Da Hora entregou na minha casa em Macatuba no mesmo dia já revisado e com a bateria carregada. Atendimento muito transparente e profissional."
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Marcos Vinícius</span>
                <span className="text-slate-500">Macatuba/SP</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. FAQ - PERGUNTAS FREQUENTES */}
      <section className="py-16 bg-slate-900/60 border-t border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="container-dahora max-w-3xl">
          
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400">
              Dúvidas Frequentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Perguntas e Respostas sobre o Patinete XM-01
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Precisa de CNH ou emplacamento para andar de patinete?',
                a: 'Não! O Patinete Elétrico XM-01 é classificado como veículo autopropelido de mobilidade individual segundo a Resolução do CONTRAN. Não necessita de CNH, nem emplacamento, nem IPVA.',
              },
              {
                q: 'Qual é a velocidade máxima e autonomia da bateria?',
                a: 'Alcança velocidade máxima de até 25 km/h e possui autonomia de até 25 km com uma única carga completa (variando conforme o peso do condutor e o relevo da pista).',
              },
              {
                q: 'Qual é o peso máximo suportado pelo patinete?',
                a: 'Suporta condutores de até 100 kg com estabilidade e desempenho mantidos graças à estrutura em alumínio reforçado.',
              },
              {
                q: 'Como funciona o Frete Grátis em até 150 km?',
                a: 'Entregamos gratuitamente em qualquer cidade em um raio de até 150 km de Macatuba/SP (inclui Macatuba, Bauru, Lençóis Paulista, Jaú, Botucatu, Barra Bonita, Agudos, Pederneiras, etc.). O veículo é transportado montado e testado.',
              },
              {
                q: 'Como é feita a recarga?',
                a: 'Acompanha carregador inteligente bivolt (110V e 220V). Você liga em qualquer tomada comum de casa. O tempo de recarga é de cerca de 4 a 6 horas e gasta menos de R$ 0,50 de luz.',
              },
              {
                q: 'Vocês têm peças e oficina para assistência?',
                a: 'Sim! Nossa Loja 1 (Alameda Tiradentes, 348 em Macatuba) é dedicada à Assistência Técnica própria, com estoque de pneus, câmaras de ar, pastilhas de freio, baterias e carregadores.',
              },
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-4 px-6 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-dahora-emerald shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. RODAPÉ INSTITUCIONAL */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 px-4 sm:px-6 lg:px-8">
        <div className="container-dahora space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <span className="text-base font-black text-white block">
                DA HORA <span className="text-dahora-emerald">MOTOS ELÉTRICAS</span>
              </span>
              <p className="text-slate-400 text-xs leading-relaxed">
                Concessionária digital de veículos elétricos leves, scooters, patinetes e triciclos em Macatuba e região central de SP.
              </p>
              <div className="text-xs text-slate-300 font-semibold">
                WhatsApp Vendas: (14) 99887-7886
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">Nossas 2 Unidades em Macatuba/SP:</h4>
              <p className="text-slate-300">
                <strong className="text-white">Loja 1 (Vendas, Oficina & Peças):</strong><br />
                Alameda Tiradentes, 348 – Centro, Macatuba/SP
              </p>
              <p className="text-slate-300 pt-1">
                <strong className="text-white">Loja 2 (Showroom & Vendas):</strong><br />
                Rua José Cruzerá, 241 – Jardim Planalto, Macatuba/SP
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">Segurança & Garantia:</h4>
              <p className="text-slate-400 leading-relaxed">
                Veículos revisados e com garantia legal. Pagamento facilitado em até 12x sem juros no cartão ou desconto no Pix.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <Link to="/" className="text-dahora-emerald hover:underline font-semibold">
                  Ir para Loja Principal
                </Link>
                <span>•</span>
                <Link to="/politica-de-privacidade" className="text-slate-400 hover:underline">
                  Privacidade
                </Link>
                <span>•</span>
                <Link to="/termos-de-uso" className="text-slate-400 hover:underline">
                  Termos
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-900 text-center text-slate-600 text-[11px]">
            © {new Date().getFullYear()} Da Hora Motos Elétricas. Todos os direitos reservados. Macatuba/SP.
          </div>

        </div>
      </footer>

      {/* 11. STICKY MOBILE CONVERSION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 sm:hidden shadow-2xl">
        <div className="flex items-center justify-between gap-3">
          <div className="leading-tight">
            <span className="text-[10px] text-slate-400 block line-through">De R$ 2.490</span>
            <span className="text-base font-black text-white">R$ 1.899 <span className="text-[10px] text-red-400 font-bold">Pix</span></span>
            <span className="text-[10px] text-slate-400 block">ou 12x R$ 166,58</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#20ba59] text-slate-950 font-black text-xs py-3 px-4 rounded-xl shadow-glow-emerald"
            aria-label="Garantir Patinete no WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 text-slate-950" />
            <span>GARANTIR NA BLACK FRIDAY</span>
          </a>
        </div>
      </div>
    </div>
  );
}
