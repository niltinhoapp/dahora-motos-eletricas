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
  Gift,
  Check,
  ChevronDown,
  Volume2,
  BatteryCharging,
  Gauge,
  Flame,
  Award,
  Lock,
  ThumbsUp,
  MapPin,
  Calendar,
  Layers,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { demoProducts } from '../data/demo';

// Produto principal da campanha
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
    badge: 'Sucesso Infantil',
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

  // Countdown timer para o fim da oferta de Natal / Black Friday
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 42,
    seconds: 19,
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
    `Olá Da Hora Motos! Vi a oferta especial de Black Friday & Natal do TRICICLO ELÉTRICO DRIFT MINI (${selectedColor.name}) por R$ 1.899 no Pix (ou 12x de R$ 166,58). Gostaria de reservar para entrega com Frete Grátis até 150km ou retirada em Macatuba!`
  );
  const whatsappUrl = `https://wa.me/5514998877886?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-dahora-emerald selection:text-slate-950">
      {/* 1. TOPO DA OFERTA / URGÊNCIA */}
      <div className="bg-gradient-to-r from-red-700 via-dahora-navy to-emerald-800 text-white py-2.5 px-4 text-center text-xs md:text-sm font-bold tracking-wide border-b border-red-500/40 shadow-lg">
        <div className="container-custom flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-red-600 text-white px-2 py-0.5 rounded-full text-[11px] uppercase tracking-wider animate-pulse">
            <Flame className="w-3.5 h-3.5" /> Black Friday & Natal 2026
          </span>
          <span>
            🎁 Garanta o presente dos sonhos antes que esgote o lote de fim de ano! <strong>Frete Grátis até 150 km</strong> com veículo 100% montado.
          </span>
        </div>
      </div>

      {/* 2. HEADER SIMPLIFICADO DE ALTA CONVERSÃO */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3.5 px-4">
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" aria-label="Voltar para a página inicial da Da Hora Motos">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-dahora-emerald to-teal-500 flex items-center justify-center shadow-glow-emerald">
              <Zap className="w-5 h-5 text-slate-950 font-black" />
            </div>
            <div>
              <span className="text-base md:text-lg font-black tracking-tight text-white block leading-tight">
                DA HORA <span className="text-dahora-emerald">MOTOS</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-semibold">
                Concessionária Digital • Macatuba/SP
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-xs text-slate-400 font-medium">Dúvidas? Fale com a Loja 2:</span>
              <span className="text-xs font-bold text-dahora-emerald">(14) 99887-7886</span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs md:text-sm py-2 px-4 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95"
              aria-label="Falar com especialista no WhatsApp sobre o Triciclo Infantil"
            >
              <WhatsAppIcon className="w-4 h-4 text-slate-950" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION - EMOÇÃO DA CRIANÇA + SEGURANÇA DOS PAIS */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-dahora-emerald/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Coluna de Texto e Oferta */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 text-red-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Gift className="w-4 h-4 text-red-400" />
                <span>O Maior Sucesso de Natal & Black Friday para Crianças e Jovens</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
                O Presente Inesquecível de Natal: <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dahora-emerald via-teal-300 to-dahora-gold">
                  Triciclo Elétrico Drift 360°
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Pura diversão para seu filho com a tranquilidade que você exige: <strong>3 rodas de estabilidade total (não tomba)</strong>, 
                3 níveis de velocidade com chave limitadora para os pais, farol de LED, som Bluetooth e <strong>bateria recarregável em qualquer tomada comum de casa</strong>.
              </p>

              {/* Box de Preço e Condições */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden max-w-xl mx-auto lg:mx-0">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-red-600 to-amber-600 text-white text-[11px] font-extrabold uppercase py-1 px-4 rounded-bl-xl shadow-md">
                  Economize R$ 591 hoje
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
                  <span className="text-sm text-slate-400 line-through">De R$ 2.490,00</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-dahora-emerald font-semibold uppercase">Por apenas</span>
                    <span className="text-3xl sm:text-4xl font-black text-white">R$ 1.899,00</span>
                    <span className="text-xs font-bold text-dahora-emerald bg-dahora-emerald/10 px-2 py-0.5 rounded-md">à vista no Pix</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 font-medium">
                  Ou parcelado em até <strong className="text-white">12x de R$ 166,58 sem juros</strong> no cartão de crédito.
                </p>

                {/* Contador Regressivo */}
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-semibold text-amber-400">
                    <Clock className="w-4 h-4" /> Lote Promocional Encerra em:
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-white font-bold">
                    <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">{String(timeLeft.days).padStart(2, '0')}d</span> :
                    <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">{String(timeLeft.hours).padStart(2, '0')}h</span> :
                    <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">{String(timeLeft.minutes).padStart(2, '0')}m</span> :
                    <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700 text-red-400">{String(timeLeft.seconds).padStart(2, '0')}s</span>
                  </div>
                </div>

                {/* CTAs de Conversão */}
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-black text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-glow-emerald transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                    aria-label="Garantir Triciclo Elétrico pelo WhatsApp com desconto"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-slate-950" />
                    <span>GARANTIR NO WHATSAPP</span>
                  </a>

                  <Link
                    to="/produto/drift-201-mini-350w"
                    className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm py-3.5 px-6 rounded-xl border border-slate-700 transition-colors"
                  >
                    <span>Ver Ficha Completa</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Selos de Confiança Imediatos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-left">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Truck className="w-4 h-4 text-dahora-emerald shrink-0" />
                  <span><strong>Frete Grátis</strong> até 150 km</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Award className="w-4 h-4 text-dahora-gold shrink-0" />
                  <span><strong>100% Montado</strong> & Pronto</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                  <span><strong>Garantia & Peças</strong> na Loja 1</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Bateria Inclusa</strong> + Carregador</span>
                </div>
              </div>

            </div>

            {/* Coluna da Imagem e Seletor de Cores */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl relative">
                
                {/* Badge da Cor Ativa */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400">
                    Cor Selecionada: <strong className="text-white">{selectedColor.name}</strong>
                  </span>
                  <span className="bg-dahora-emerald/15 text-dahora-emerald border border-dahora-emerald/30 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    {selectedColor.badge}
                  </span>
                </div>

                {/* Imagem Principal */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group">
                  <img
                    src={selectedColor.image}
                    alt={`Triciclo Elétrico Drift Infantil - ${selectedColor.name}`}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-dahora-gold" />
                    <span>Luzes de LED + Som Bluetooth Ativo</span>
                  </div>
                </div>

                {/* Seletor de Cores Miniaturas */}
                <div className="mt-4">
                  <p className="text-xs font-semibold text-slate-400 mb-2">Escolha a cor para o presente:</p>
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

                {/* Aviso de Entrega Montada Especial de Natal */}
                <div className="mt-4 p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-200 flex items-start gap-2.5">
                  <Gift className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-emerald-300 font-bold">Sem dor de cabeça na véspera de Natal:</strong>
                    Nós entregamos o triciclo 100% montado, regulado e com a bateria carregada para o seu filho andar na hora!
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. POR QUE ESTE É O PRESENTE PERFEITO? (DIVERSÃO X SEGURANÇA) */}
      <section className="py-16 bg-slate-900/60 border-y border-slate-800">
        <div className="container-custom">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-dahora-emerald">
              Projetado para Crianças & Aprovado pelos Pais
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
              A Emoção que Seu Filho Quer com a Proteção que Você Precisa
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Ao contrário de brinquedos descartáveis de shopping que quebram na primeira semana, o Triciclo Elétrico Drift possui chassi em aço tubular reforçado e mecânica de verdade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Benefício 1 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-dahora-emerald/15 text-dahora-emerald flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3 Rodas: Estabilidade Máxima</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A geometria triangular com centro de gravidade baixo impede que o triciclo tombe nas curvas. Muito mais seguro do que bicicletas convencionais ou patinetes de 2 rodas.
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3 Modos com Trava dos Pais</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Você define o limite: Modo 1 (iniciante/lento para crianças menores), Modo 2 (passeio) e Modo 3 (velocidade máxima liberada de até 25 km/h para manobras de drift).
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Bluetooth + Farol & LED 360°</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Conecta no celular para tocar as músicas favoritas enquanto passeia. Rodinhas traseiras e carenagem frontal com iluminação LED de alta visibilidade e diversão noturna.
              </p>
            </div>

            {/* Benefício 4 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Carrega na Tomada Comum</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Basta ligar o carregador bivolt incluso em qualquer tomada 110V ou 220V de casa. Custa menos de R$ 0,50 por recarga para até 2 horas de brincadeira sem parar.
              </p>
            </div>

            {/* Benefício 5 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Estrutura Telescópica Ajustável</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                O chassi possui regulagem de comprimento para se ajustar conforme a criança cresce. Acomoda com conforto crianças a partir de 4 anos até adolescentes de até 75 kg.
              </p>
            </div>

            {/* Benefício 6 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-dahora-emerald/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Oficina & Peças em Macatuba</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Se precisar de pneus, rodinhas de reposição, baterias ou revisão, nossa Loja 1 (Assistência Técnica) conta com estoque completo de peças e mecânicos especializados.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. TABELA COMPARATIVA: DA HORA MOTOS X BRINQUEDOS DE SHOPPING/INTERNET */}
      <section className="py-16">
        <div className="container-custom">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-dahora-gold">
              Comparativo Inteligente
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Por que Comprar na Da Hora Motos Elétricas?
            </h2>
            <p className="text-slate-400 text-sm">
              Não arrisque a noite de Natal da sua família comprando de revendedores anônimos de marketplaces sem suporte local.
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
                      Lojas Genéricas da Internet
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-200">
                      Como você recebe o produto?
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center font-bold text-dahora-emerald bg-dahora-emerald/5">
                      <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> 100% Montado, Testado e Carregado</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center text-red-400">
                      Em caixa desmontado (horas de trabalho na véspera)
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
                      Fretes caros de R$ 250 a R$ 450
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-200">
                      Assistência Técnica & Peças
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center font-bold text-dahora-emerald bg-dahora-emerald/5">
                      <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> Loja 1 Própria em Macatuba</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center text-red-400">
                      Inexistente ou apenas via chat robô
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
                      Plástico oco frágil (quebra fácil)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-200">
                      Test-ride antes de comprar
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center font-bold text-dahora-emerald bg-dahora-emerald/5">
                      <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> Disponível no Showroom (Loja 2)</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center text-red-400">
                      Sem possibilidade de teste
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 6. LOGÍSTICA DE NATAL: ENTREGA ATÉ 150 KM & RETIRADA VIP */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="container-custom">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-dahora-emerald/10 blur-[100px] pointer-events-none rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 bg-dahora-emerald/15 text-dahora-emerald text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  <Truck className="w-4 h-4" /> Compromisso de Entrega de Natal
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  Frete Grátis em até 150 km com Veículo Pronto para Andar
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Levamos o triciclo diretamente até sua casa em <strong>Macatuba, Lençóis Paulista, Bauru, Jaú, Botucatu, Barra Bonita, Agudos, Pederneiras, Igaraçu do Tietê</strong> e todas as cidades num raio de até 150 km!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-dahora-emerald" /> Opção 1: Entrega em Casa
                    </h4>
                    <p className="text-xs text-slate-400">
                      Agendamos o melhor dia e horário. Você recebe na porta, confere o funcionamento e seu filho já sai andando.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                      <Gift className="w-4 h-4 text-red-400" /> Opção 2: Retirada Surpresa na Loja 2
                    </h4>
                    <p className="text-xs text-slate-400">
                      Reserve agora e retire no nosso Showroom de Vendas (Rua Lucilo Dellamura) perto da véspera de Natal para manter a surpresa em segredo!
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 text-center p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-4">
                <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Lote Limitado de Natal</span>
                <div className="text-4xl font-black text-dahora-gold">Apenas 18 Unidades</div>
                <p className="text-xs text-slate-300">
                  Garantia de preço promocional da Black Friday mantido para compras antecipadas de Natal.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-sm py-3 px-4 rounded-xl shadow-lg transition-transform hover:scale-105"
                  aria-label="Reservar unidade do Triciclo Infantil no WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                  <span>RESERVAR MINHA UNIDADE</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. DEPOIMENTOS DE PAIS QUE JÁ COMPRARAM */}
      <section className="py-16">
        <div className="container-custom">
          
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-dahora-emerald">
              Avaliações Reais de Famílias
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Quem Comprou, Recomenda
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
                "Comprei para o aniversário do meu filho de 8 anos aqui em Lençóis Paulista. O triciclo já veio montado e pronto para andar! Ele amou o drift e as luzes, e eu fiquei tranquilo porque a velocidade é bem controlada. Atendimento nota 10."
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
                "O que me fez comprar na Da Hora foi saber que eles têm loja física e oficina própria em Macatuba. Brinquedo elétrico estraga se comprar de longe e não tiver peça. Aqui tive certeza de garantia e assistência técnica."
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
                "Presente inesquecível. As crianças não saem de cima do drift. Conecta o bluetooth para colocar música e as rodinhas têm luz de LED à noite. Valeu cada centavo, melhor compra do ano!"
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Cláudio Rezende</span>
                <span className="text-slate-500">Macatuba/SP</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. FAQ - PERGUNTAS FREQUENTES DOS PAIS */}
      <section className="py-16 bg-slate-900/60 border-t border-slate-800">
        <div className="container-custom max-w-3xl">
          
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-dahora-emerald">
              Tire Todas as Suas Dúvidas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Perguntas Frequentes dos Pais
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Para qual faixa de idade e peso o Triciclo é indicado?',
                a: 'O Triciclo Drift 201 Mini 350W é indicado para crianças a partir de 4 anos até adolescentes de até 75 kg. A estrutura telescópica se alonga para acompanhar o crescimento do seu filho.',
              },
              {
                q: 'Ele tomba nas curvas ou durante o drift?',
                a: 'Não! O triciclo possui um centro de gravidade extremamente baixo com 3 apoios largos no chão. Mesmo executando giros e drifts de 360°, o veículo mantém estabilidade absoluta e os pés da criança ficam protegidos nos apoios dianteiros.',
              },
              {
                q: 'Como funciona a entrega com Frete Grátis até 150 km?',
                a: 'Entregamos gratuitamente em um raio de até 150 km de Macatuba/SP (inclui Macatuba, Bauru, Lençóis Paulista, Jaú, Botucatu, Barra Bonita, Pederneiras, etc.). O veículo é transportado montado, com revisão feita e bateria carregada.',
              },
              {
                q: 'Como é feita a recarga da bateria?',
                a: 'Muito simples: acompanha um carregador inteligente bivolt automático (110V e 220V). Você conecta na tomada comum de casa. O tempo de recarga é de cerca de 3 a 5 horas e custa menos de R$ 0,50 na conta de luz.',
              },
              {
                q: 'Vocês têm peças de reposição e assistência técnica?',
                a: 'Sim! Esse é o nosso maior diferencial: a Loja 1 da Da Hora Motos (Alameda Tiradentes, 348 em Macatuba) é dedicada exclusivamente à Assistência Técnica, Oficina e Reposição de Peças (rodinhas de drift, pneus, baterias, freios, carregadores).',
              },
              {
                q: 'Posso reservar agora para retirar bem perto do Natal?',
                a: 'Com certeza! Você pode garantir a compra antecipada com as condições especiais da Black Friday e agendar a retirada no Showroom da Loja 2 (Rua Lucilo Dellamura) na semana do Natal para fazer a surpresa perfeita!',
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

      {/* 9. RODAPÉ INSTITUCIONAL & CREDIBILIDADE DA CONCESSIONÁRIA */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800 text-xs text-slate-400">
        <div className="container-custom space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <span className="text-base font-black text-white block">
                DA HORA <span className="text-dahora-emerald">MOTOS ELÉTRICAS</span>
              </span>
              <p className="text-slate-400 text-xs leading-relaxed">
                A sua concessionária digital de veículos elétricos leves, scooters e triciclos em Macatuba e região central do Estado de SP.
              </p>
              <div className="text-xs text-slate-300 font-semibold">
                WhatsApp Vendas: (14) 99887-7886
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">Nossas 2 Unidades em Macatuba/SP:</h4>
              <p className="text-slate-300">
                🛠️ <strong className="text-white">Loja 1 (Assistência Técnica & Peças):</strong><br />
                Alameda Tiradentes, 348 – Centro, Macatuba/SP
              </p>
              <p className="text-slate-300 pt-1">
                🛵 <strong className="text-white">Loja 2 (Showroom & Vendas):</strong><br />
                Rua Lucilo Dellamura – Macatuba/SP
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">Segurança & Garantia:</h4>
              <p className="text-slate-400 leading-relaxed">
                Todos os veículos possuem garantia legal e verificação pré-entrega. Pagamento facilitado em até 12x no cartão ou desconto especial no Pix.
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
            © {new Date().getFullYear()} Da Hora Motos Elétricas. Todos os direitos reservados. CNPJ: Macatuba/SP.
          </div>

        </div>
      </footer>

      {/* 10. STICKY MOBILE CONVERSION BAR (FIXA NO RODAPÉ DO CELULAR) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 sm:hidden shadow-2xl">
        <div className="flex items-center justify-between gap-3">
          <div className="leading-tight">
            <span className="text-[10px] text-slate-400 block line-through">De R$ 2.490</span>
            <span className="text-base font-black text-white">R$ 1.899 <span className="text-[10px] text-dahora-emerald font-bold">Pix</span></span>
            <span className="text-[10px] text-slate-400 block">ou 12x R$ 166,58</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#20ba59] text-slate-950 font-black text-xs py-3 px-4 rounded-xl shadow-glow-emerald"
            aria-label="Pedir Triciclo Infantil no WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 text-slate-950" />
            <span>GARANTIR NO WHATSAPP</span>
          </a>
        </div>
      </div>
    </div>
  );
}
