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
  const benefits = [
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-dahora-emerald" />,
      title: 'Atendimento Especializado',
      description:
        'Consultoria atenciosa e esclarecedora para entender sua rotina e indicar o modelo ideal para suas necessidades.',
    },
    {
      icon: <Wrench className="w-6 h-6 text-dahora-cyan" />,
      title: 'Veículo Preparado e Revisado',
      description:
        'Cada veículo passa por inspeção técnica, aperto e checagem de bateria antes de ser disponibilizado para entrega.',
    },
    {
      icon: <FileText className="w-6 h-6 text-dahora-emerald" />,
      title: 'Nota Fiscal em Seu Nome',
      description:
        'Transparência total. Faturamento formal com emissão de Nota Fiscal Eletrônica e garantia de procedência.',
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-dahora-cyan" />,
      title: 'Garantia de Fábrica',
      description:
        'Cobertura formal de garantia conforme as especificações e condições informadas pelo fabricante de cada veículo.',
    },
    {
      icon: <Scale className="w-6 h-6 text-dahora-emerald" />,
      title: 'Orientação sobre Legislação',
      description:
        'Informações claras e fundamentadas sobre a regulamentação de cada categoria perante o Contran e Detran.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-dahora-cyan" />,
      title: 'Suporte Pós-Venda Ativo',
      description:
        'Canais diretos por WhatsApp e telefone para tirar dúvidas de operação, recarga e cuidados preventivos.',
    },
    {
      icon: <Truck className="w-6 h-6 text-dahora-emerald" />,
      title: 'Entrega Segura',
      description:
        'Envio conforme as regiões atendidas, com embalagem e transporte adequados para veículos montados.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-dahora-cyan" />,
      title: 'Peças e Assistência',
      description:
        'Indicação e suporte na reposição de componentes de desgaste natural como pastilhas, pneus e baterias.',
    },
  ];

  return (
    <section className="section-padding bg-white border-b border-dahora-border">
      <div className="container-dahora">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            TRANSPARÊNCIA E CREDIBILIDADE
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text mt-1">
            Por que comprar na Da Hora?
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Comprar um veículo elétrico pela internet exige confiança e compromisso. Conheça nossos pilares de atendimento.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-dahora-emerald/30 hover:bg-white hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center mb-4 shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-base text-dahora-text mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
