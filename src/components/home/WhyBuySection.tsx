import { useState, useEffect, useRef } from 'react';
import {
  ShieldCheck,
  Wrench,
  FileText,
  BadgeCheck,
  Scale,
  HeadphonesIcon,
  Truck,
  Sparkles
} from 'lucide-react';

export function WhyBuySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      step: '01',
      icon: <HeadphonesIcon className="w-6 h-6 text-emerald-600" />,
      title: 'Atendimento Especializado',
      description:
        'Consultoria atenciosa e esclarecedora para entender sua rotina e indicar o modelo ideal para suas necessidades.',
    },
    {
      step: '02',
      icon: <Wrench className="w-6 h-6 text-cyan-600" />,
      title: 'Veículo Preparado e Revisado',
      description:
        'Cada veículo passa por inspeção técnica, aperto e checagem de bateria antes de ser disponibilizado para entrega.',
    },
    {
      step: '03',
      icon: <FileText className="w-6 h-6 text-emerald-600" />,
      title: 'Nota Fiscal em Seu Nome',
      description:
        'Transparência total. Faturamento formal com emissão de Nota Fiscal Eletrônica e garantia de procedência.',
    },
    {
      step: '04',
      icon: <BadgeCheck className="w-6 h-6 text-cyan-600" />,
      title: 'Garantia de Fábrica',
      description:
        'Cobertura formal de garantia conforme as especificações e condições informadas pelo fabricante de cada veículo.',
    },
    {
      step: '05',
      icon: <Scale className="w-6 h-6 text-emerald-600" />,
      title: 'Orientação sobre Legislação',
      description:
        'Informações claras e fundamentadas sobre a regulamentação de cada categoria perante o Contran e Detran.',
    },
    {
      step: '06',
      icon: <ShieldCheck className="w-6 h-6 text-cyan-600" />,
      title: 'Suporte Pós-Venda Ativo',
      description:
        'Canais diretos por WhatsApp e telefone para tirar dúvidas de operação, recarga e cuidados preventivos.',
    },
    {
      step: '07',
      icon: <Truck className="w-6 h-6 text-emerald-600" />,
      title: 'Entrega Segura',
      description:
        'Envio conforme as regiões atendidas, com embalagem e transporte adequados para veículos montados.',
    },
    {
      step: '08',
      icon: <Sparkles className="w-6 h-6 text-cyan-600" />,
      title: 'Peças e Assistência',
      description:
        'Indicação e suporte na reposição de componentes de desgaste natural como pastilhas, pneus e baterias.',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-white border-b border-dahora-border relative overflow-hidden">
      
      {/* Linha Condutora de Energia Animada de Fundo (Conexão dos Pilares) */}
      <svg
        className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 pointer-events-none opacity-25 select-none hidden lg:block"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,50 C300,10 600,90 900,50 T1800,50"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          className="animate-electric-stream"
        />
      </svg>

      <div className="container-dahora relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>TRANSPARÊNCIA E CREDIBILIDADE</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text">
            8 Pilares de Compromisso Da Hora
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Comprar um veículo elétrico exige confiança e procedência. Conheça as garantias da maior concessionária digital de Macatuba.
          </p>
        </div>

        {/* 8-Card Connected Grid com Linha Conectora e Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms`,
              }}
              className="group p-6 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-dahora-emerald/50 hover:bg-white hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/90 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-glow-emerald/30 group-hover:border-emerald-300 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs font-black text-gray-400 group-hover:text-emerald-600 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-dahora-text group-hover:text-emerald-700 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Barra de Conexão Inferior do Pilar */}
              <div className="w-full h-1 bg-gray-200/60 rounded-full mt-4 overflow-hidden">
                <div className="w-0 group-hover:w-full h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
