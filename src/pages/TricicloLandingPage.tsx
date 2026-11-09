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
  Volume2,
  BatteryCharging,
  Gauge,
  Flame,
  Award,
  MapPin,
  Layers,
  Tag,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { demoProducts } from '../data/demo';

const driftProduct = demoProducts.find((p) => p.slug === 'drift-201-mini-350w') || demoProducts[2];

const colorsList = [
  {
    id: 'cyber-black',
    name: 'Cyber Black / Grafite',
    badge: 'Mais Vendido',
    image: 'https://static.wixstatic.com/media/acc37b_5a4cb2df3d02449e8eaacbef968de5f5~mv2.jpeg/v1/fit/w_800,h_800,q_90/file.jpg',
    colorHex: '#1e293b',
  },
  {
    id: 'nitro-red',
    name: 'Vermelho Nitro Spider',
    badge: 'Destaque Black Friday',
    image: 'https://static.wixstatic.com/media/acc37b_a516ab446c0741e6bd08647d7a0a19b8~mv2.jpeg/v1/fit/w_800,h_800,q_90/file.jpg',
    colorHex: '#dc2626',
  },
  {
    id: 'turbo-blue',
    name: 'Azul Eletro Racer',
    badge: 'Edição Especial',
    image: 'https://static.wixstatic.com/media/acc37b_95253c25cebe4f28b2d3df61c7ff3db9~mv2.jpeg/v1/fit/w_800,h_800,q_90/file.jpg',
    colorHex: '#2563eb',
  },
  {
    id: 'graffiti-pop',
    name: 'Graffiti Street Radical',
    badge: 'Visual Exclusivo',
    image: 'https://static.wixstatic.com/media/acc37b_f734cc74da5c46cfac42df90fa0e1446~mv2.jpeg/v1/fit/w_800,h_800,q_90/file.jpg',
    colorHex: '#9333ea',
  },
];

export function TricicloLandingPage() {
  const [selectedColor, setSelectedColor] = useState(colorsList[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Countdown timer para o fim do lote de Black Friday
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
    `Olá Da Hora Motos! Vi a oferta oficial de BLACK FRIDAY do TRICICLO ELÉTRICO DRIFT MINI (${selectedColor.name}) por R$ 1.899 no Pix (ou 12x de R$ 166,58 sem juros). Gostaria de garantir minha unidade com Frete Grátis até 150km!`
  );
  const whatsappUrl = `https://wa.me/5514998877886?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-dahora-emerald selection:text-slate-950">
      
      {/* 1. TOPO DA BLACK FRIDAY / URGÊNCIA */}
      <div className="bg-gradient-to-r from-red-700 via-slate-950 to-red-800 text-white py-2.5 px-4 sm:px-6 lg:px-8 text-center text-xs md:text-sm font-bold tracking-wide border-b border-red-500/50 shadow-lg">
        <div className="container-dahora flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-red-600 text-white px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wider font-black animate-pulse">
            <Flame className="w-3.5 h-3.5 fill-white" /> BLACK FRIDAY OFICIAL 2026
          </span>
          <span>
            Desconto histórico de <strong>R$ 591,00</strong> no Triciclo Drift Infantil • <strong>Frete Grátis até 150 km</strong> • Veículo 100% Montado!
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
                Black Friday • Loja 2 Vendas Macatuba
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-xs text-slate-400 font-medium">Plantão Black Friday:</span>
              <span className="text-xs font-bold text-dahora-emerald">(14) 99887-7886</span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-black text-xs md:text-sm py-2 px-4 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95"
              aria-label="Falar com especialista no WhatsApp sobre a Black Friday"
            >
              <WhatsAppIcon className="w-4 h-4 text-slate-950" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2.1 SWITCHER DE OFERTAS: TRICICLO X DRIFT X PATINETE */}
      <div className="bg-slate-900/80 border-b border-slate-800 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="container-dahora flex flex-wrap items-center justify-center gap-4 text-xs">
          <span className="text-slate-400 font-medium">Outras ofertas de Black Friday:</span>
          <Link
            to="/black-friday/drift"
            className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white font-bold underline transition-colors"
          >
            <span>Kart Drift Trike 360°</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-slate-600">•</span>
          <Link
            to="/black-friday/patinete"
            className="inline-flex items-center gap-1.5 text-teal-300 hover:text-white font-bold underline transition-colors"
          >
            <span>Patinete Dobrável XM-01</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 3. HERO SECTION - BLACK FRIDAY EXCLUSIVA */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Ambient Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-dahora-emerald/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container-dahora relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Coluna de Texto e Oferta */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/40 text-red-400 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5 text-red-400" />
                <span>O Maior Sucesso de Vendas da Black Friday para Menores</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
                Black Friday Oficial: <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-dahora-emerald">
                  Triciclo Elétrico Drift 360°
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Pura diversão para crianças e adolescentes com a segurança e tranquilidade que os pais procuram: 
                <strong> 3 rodas de alta estabilidade (não tomba)</strong>, 3 velocidades com chave limitadora para os pais, 
                farol de LED, som Bluetooth e <strong>bateria recarregável em tomada comum</strong>.
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
                    aria-label="Garantir Triciclo na Black Friday pelo WhatsApp"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-slate-950" />
                    <span>GARANTIR PREÇO BLACK FRIDAY</span>
                  </a>

                  <Link
                    to="/produto/drift-201-mini-350w"
                    className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm py-3.5 px-6 rounded-xl border border-slate-700 transition-colors"
                  >
                    <span>Ficha Técnica</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* 4 Pilares de Confiança com Margem Confortável */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-left">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Truck className="w-4 h-4 text-dahora-emerald shrink-0" />
                  <span><strong>Frete Grátis</strong> até 150 km</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>100% Montado</strong> & Revisado</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                  <span><strong>Garantia & Peças</strong> na Loja 1</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Zap className="w-4 h-4 text-dahora-gold shrink-0" />
                  <span><strong>Bateria Inclusa</strong> Bivolt</span>
                </div>
              </div>

            </div>

            {/* Coluna da Imagem e Seletor de Cores */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl relative">
                
                {/* Badge da Cor Ativa */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400">
                    Cor: <strong className="text-white">{selectedColor.name}</strong>
                  </span>
                  <span className="bg-red-500/15 text-red-400 border border-red-500/30 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    {selectedColor.badge}
                  </span>
                </div>

                {/* Imagem Principal - 100% limpa sem textos sobrepostos */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center group">
                  <img
                    src={selectedColor.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-35 brightness-75 select-none pointer-events-none"
                  />
                  <img
                    src={selectedColor.image}
                    alt={`Triciclo Elétrico Drift Infantil Black Friday - ${selectedColor.name}`}
                    className="relative z-10 w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                {/* Destaque de Recursos posicionado fora da imagem */}
                <div className="mt-3 bg-slate-950/80 px-3.5 py-2 rounded-xl border border-slate-800 text-xs font-semibold text-slate-300 flex items-center justify-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Luzes de LED • Som Bluetooth Ativo</span>
                </div>

                {/* Seletor de Cores Miniaturas */}
                <div className="mt-4">
                  <p className="text-xs font-semibold text-slate-400 mb-2">Escolha sua cor na Black Friday:</p>
                  <div className="grid grid-cols-4 gap-2">
                    {colorsList.map((color) => {
                      const isSelected = selectedColor.id === color.id;
                      return (
                        <button
                          key={color.id}
                          type="button"
                          onClick={() => setSelectedColor(color)}
                          className={`flex flex-col items-center gap-1 p-1.5 rounded-xl border transition-all text-left ${
                            isSelected
                              ? 'border-dahora-emerald bg-slate-800 shadow-md ring-1 ring-dahora-emerald'
                              : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 opacity-70 hover:opacity-100'
                          }`}
                          aria-label={`Selecionar cor ${color.name}`}
                        >
                          <div className="w-full aspect-square rounded-lg overflow-hidden bg-slate-900 border border-slate-800">
                            <img src={color.image} alt={color.name} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-[10px] font-bold text-slate-200 truncate w-full text-center">
                            {color.name.split(' ')[0]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Destaque de Entrega Montada */}
                <div className="mt-4 p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-200 flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-emerald-300 font-bold">Entrega Pronta para Andar:</strong>
                    Entregamos o triciclo 100% montado, regulado e com a bateria carregada para seu filho curtir na hora!
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BENEFÍCIOS TÉCNICOS & SEGURANÇA */}
      <section className="py-16 bg-slate-900/60 border-y border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="container-dahora">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400">
              Engenharia Segura & Diversão Radical
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
              A Adrenalina que a Criança Quer com a Proteção dos Pais
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Ao contrário de brinquedos descartáveis de plástico frágil, o Triciclo Elétrico Drift possui chassi em aço tubular reforçado e mecânica de verdade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-dahora-emerald/15 text-dahora-emerald flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3 Rodas: Estabilidade Absoluta</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Geometria triangular com centro de gravidade rebaixado que impede tombamentos. Muito mais seguro do que bicicletas e patinetes de 2 rodas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3 Modos de Velocidade</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Os pais decidem: Modo 1 (lento para iniciantes/crianças pequenas), Modo 2 (passeio) e Modo 3 (velocidade máxima de até 25 km/h para manobras de drift).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Bluetooth + Farol & Luzes LED</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Conecta no smartphone para tocar as músicas favoritas enquanto passeia. Rodinhas traseiras com iluminação LED de alta visibilidade e diversão.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Carrega na Tomada Comum</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Acompanha carregador inteligente bivolt (110V/220V). Custa menos de R$ 0,50 por recarga para horas de brincadeira contínua.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Chassi Telescópico Ajustável</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Estrutura metálica com regulagem de comprimento que acompanha o crescimento do seu filho (indicado de 4 a 14 anos, suporta até 75 kg).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Oficina & Peças em Macatuba</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Nossa Loja 1 (Alameda Tiradentes, 348) é dedicada à Assistência Técnica própria, garantindo peças de reposição imediatas e suporte técnico vitalício.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. TABELA COMPARATIVA: BLACK FRIDAY DA HORA X INTERNET */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-dahora">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Garantia de Qualidade
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Por que Aproveitar a Black Friday da Da Hora Motos?
            </h2>
            <p className="text-slate-400 text-sm">
              Não compre às cegas em marketplaces distantes sem assistência ou garantia local.
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
                      Lojas Genéricas de Marketplaces
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-200">
                      Montagem e Entrega
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center font-bold text-dahora-emerald bg-dahora-emerald/5">
                      <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> 100% Montado, Regulado e Carregado</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center text-red-400">
                      Na caixa desmontado (manual em chinês)
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
                      Frete caro de R$ 200 a R$ 400
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-200">
                      Assistência Técnica & Peças
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center font-bold text-dahora-emerald bg-dahora-emerald/5">
                      <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> Loja 1 com Oficina Própria em Macatuba</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center text-red-400">
                      Sem peças de reposição ou suporte
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-200">
                      Chassi e Durabilidade
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center font-bold text-dahora-emerald bg-dahora-emerald/5">
                      <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> Aço Tubular Reforçado (Até 75kg)</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center text-slate-400">
                      Plástico frágil (quebra fácil)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-200">
                      Test-ride no Showroom
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center font-bold text-dahora-emerald bg-dahora-emerald/5">
                      <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> Disponível na Loja 2 Macatuba</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center text-red-400">
                      Impossível testar antes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 6. LOGÍSTICA: FRETE GRÁTIS ATÉ 150 KM & RETIRADA */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="container-dahora">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[100px] pointer-events-none rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 bg-dahora-emerald/15 text-dahora-emerald text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  <Truck className="w-4 h-4" /> Entrega Especial Black Friday
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
                      <MapPin className="w-4 h-4 text-dahora-emerald" /> Entrega em Casa com Frete Grátis
                    </h4>
                    <p className="text-xs text-slate-400">
                      Você recebe em mãos o veículo pronto, confere o funcionamento e seu filho já sai andando.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400" /> Retirada no Showroom (Loja 2)
                    </h4>
                    <p className="text-xs text-slate-400">
                      Garanta o preço de Black Friday e retire na nossa loja física (Rua José Cruzerá, 241, Jardim Planalto) no dia que preferir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 text-center p-6 bg-slate-950 rounded-2xl border border-red-500/30 space-y-4 shadow-xl">
                <span className="text-xs text-red-400 uppercase tracking-widest font-black">Lote Promocional Black Friday</span>
                <div className="text-4xl font-black text-white">Apenas 14 Unidades</div>
                <p className="text-xs text-slate-300">
                  Preço histórico garantido enquanto durar a cota de Black Friday.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-black text-sm py-3.5 px-4 rounded-xl shadow-lg transition-transform hover:scale-105"
                  aria-label="Garantir unidade no WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                  <span>GARANTIR MINHA UNIDADE</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. DEPOIMENTOS DE CLIENTES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-dahora">
          
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-dahora-emerald">
              Avaliações Verificadas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              O que Dizem as Famílias da Região
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
                "Comprei para o meu filho de 8 anos aqui em Lençóis Paulista. O triciclo já veio montado e pronto para andar! Ele amou o drift e as luzes, e eu fiquei tranquilo porque a velocidade é bem controlada. Atendimento nota 10."
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Rodrigo Mendes</span>
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
                "O diferencial da Da Hora é saber que eles têm loja física e oficina própria em Macatuba. Brinquedo elétrico estraga se comprar de longe e não tiver peça. Aqui tive certeza de garantia e assistência técnica."
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Mariana Silveira</span>
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
                "As crianças não saem de cima do drift! Conecta o Bluetooth para colocar música e as rodinhas têm luz de LED à noite. Valeu cada centavo, melhor presente que comprei!"
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Cláudio Rezende</span>
                <span className="text-slate-500">Macatuba/SP</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. FAQ - PERGUNTAS FREQUENTES */}
      <section className="py-16 bg-slate-900/60 border-t border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="container-dahora max-w-3xl">
          
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400">
              Dúvidas Frequentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Perguntas e Respostas da Black Friday
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Para qual idade e peso o Triciclo é indicado?',
                a: 'O Triciclo Drift 201 Mini 350W é indicado para crianças e jovens de 4 a 14 anos, suportando até 75 kg. A estrutura telescópica é regulável para acompanhar o crescimento.',
              },
              {
                q: 'Ele tomba nas curvas ou durante as manobras?',
                a: 'Não! O triciclo possui geometria triangular com centro de gravidade baixo e 3 apoios largos no chão. Mesmo em giros de 360°, mantém estabilidade total e segurança para a criança.',
              },
              {
                q: 'Como funciona o Frete Grátis em até 150 km?',
                a: 'Entregamos gratuitamente em qualquer cidade em um raio de até 150 km de Macatuba/SP (inclui Macatuba, Bauru, Lençóis Paulista, Jaú, Botucatu, Barra Bonita, Agudos, Pederneiras, etc.). O veículo é transportado montado, testado e carregado.',
              },
              {
                q: 'Como é feita a recarga da bateria?',
                a: 'Acompanha carregador bivolt automático (110V/220V) para tomada comum residencial. A recarga completa leva de 3 a 5 horas e consome menos de R$ 0,50 de energia elétrica.',
              },
              {
                q: 'Vocês têm peças de reposição e assistência técnica?',
                a: 'Sim! Nossa Loja 1 (Alameda Tiradentes, 348 em Macatuba) é dedicada exclusivamente à Assistência Técnica, Oficina e Reposição de Peças (rodinhas de drift, pneus, freios, baterias e carregadores).',
              },
              {
                q: 'Quais as formas de pagamento na Black Friday?',
                a: 'Você pode pagar à vista com desconto no Pix (R$ 1.899,00) ou parcelar em até 12x de R$ 166,58 sem juros no cartão de crédito.',
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

      {/* 9. RODAPÉ INSTITUCIONAL */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 px-4 sm:px-6 lg:px-8">
        <div className="container-dahora space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <span className="text-base font-black text-white block">
                DA HORA <span className="text-dahora-emerald">MOTOS ELÉTRICAS</span>
              </span>
              <p className="text-slate-400 text-xs leading-relaxed">
                Concessionária digital de veículos elétricos leves, scooters e triciclos em Macatuba e região central de SP.
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
                Veículos com garantia legal e revisão pré-entrega. Pagamento facilitado em até 12x sem juros no cartão ou desconto no Pix.
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

      {/* 10. STICKY MOBILE CONVERSION BAR */}
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
            aria-label="Garantir Triciclo na Black Friday pelo WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 text-slate-950" />
            <span>GARANTIR NA BLACK FRIDAY</span>
          </a>
        </div>
      </div>
    </div>
  );
}
