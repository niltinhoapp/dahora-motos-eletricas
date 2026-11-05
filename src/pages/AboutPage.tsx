import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ShieldCheck, HeartHandshake, MapPin, ArrowRight } from 'lucide-react';

export function AboutPage() {
  useEffect(() => {
    document.title = 'Sobre a Da Hora | Motos Elétricas em Macatuba, SP';
  }, []);

  return (
    <div className="bg-dahora-ice min-h-screen py-12">
      <div className="container-dahora max-w-4xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            NOSSA HISTÓRIA E COMPROMISSO
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-dahora-text">
            Sobre a Da Hora Motos Elétricas
          </h1>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Nascida em Macatuba, interior de São Paulo, com a missão de transformar o transporte urbano através da mobilidade elétrica acessível e de alta qualidade.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl border border-dahora-border p-8 sm:p-12 shadow-card space-y-8 text-sm text-dahora-text leading-relaxed">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-xl text-dahora-text flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-700" />
              <span>Concessionária Digital de Mobilidade Elétrica</span>
            </h2>
            <p>
              A <strong>Da Hora Motos Elétricas</strong> é especializada na comercialização de veículos elétricos leves — motos, scooters, triciclos e patinetes elétricos. Desenvolvemos este ambiente digital para oferecer ao cliente a mesma transparência, segurança e consultoria especializada de uma concessionária física tradicional.
            </p>
            <p>
              Entendemos que a transição para um veículo elétrico gera dúvidas legítimas sobre autonomia, recarga na tomada convencional de casa, durabilidade da bateria e custos de manutenção. Por isso, nosso atendimento prioriza a clareza técnica e a sinceridade nas orientações.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <ShieldCheck className="w-6 h-6 text-emerald-700" />
              <h3 className="font-bold text-sm">Transparência</h3>
              <p className="text-xs text-slate-600">
                Informações verdadeiras sobre autonomia, especificações e requisitos legais de cada veículo.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <HeartHandshake className="w-6 h-6 text-dahora-cyan" />
              <h3 className="font-bold text-sm">Pós-Venda Ativo</h3>
              <p className="text-xs text-slate-600">
                Acompanhamento contínuo via WhatsApp para cuidados operacionais e dúvidas de manutenção.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <MapPin className="w-6 h-6 text-emerald-700" />
              <h3 className="font-bold text-sm">Presença Local</h3>
              <p className="text-xs text-slate-600">
                Showroom com estrutura física sediada em Macatuba, São Paulo, disponível para visitas e test-ride.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-600">
              Conheça nossa seleção de veículos elétricos disponíveis para pronta entrega.
            </span>
            <Link to="/veiculos" className="btn-primary text-xs py-3 px-6 flex items-center gap-2">
              <span>Ver Catálogo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
