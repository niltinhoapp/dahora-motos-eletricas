import { useEffect } from 'react';
import { Truck, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DeliveryPage() {
  useEffect(() => {
    document.title = 'Informações de Entrega | Da Hora Motos Elétricas';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dahora-ice min-h-screen py-12">
      <div className="container-dahora max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            LOGÍSTICA E TRANSPORTE
          </span>
          <h1 className="font-display font-extrabold text-3xl text-dahora-text">
            Entrega para Todo o Brasil
          </h1>
          <p className="text-sm text-dahora-gray max-w-lg mx-auto">
            Saiba como seus veículos são preparados, embalados e transportados com segurança.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-dahora-border p-8 sm:p-12 shadow-card space-y-8 text-sm text-dahora-text leading-relaxed">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-lg text-dahora-text flex items-center gap-2">
              <Truck className="w-5 h-5 text-dahora-emerald" />
              <span>Como Funciona o Envio do Seu Veículo</span>
            </h2>
            <p>
              Ao adquirir um veículo elétrico na Da Hora Motos Elétricas, o produto passa por uma etapa rigorosa de preparação antes de ser despachado. Ao contrário de entregas convencionais de caixas lacradas, cuidamos para que o veículo chegue montado ou com montagem facilitada conforme o modelo e a rota de entrega.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-dahora-emerald" />
              <h3 className="font-bold text-xs uppercase tracking-wider">1. Inspeção Técnica</h3>
              <p className="text-xs text-dahora-gray">
                Aperto de parafusos, regulagem de freios, verificação de pneus e carga completa da bateria.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <ShieldCheck className="w-5 h-5 text-dahora-cyan" />
              <h3 className="font-bold text-xs uppercase tracking-wider">2. Embalagem Protegida</h3>
              <p className="text-xs text-dahora-gray">
                Proteção com plástico bolha de alta gramatura e cantoneiras de reforço para evitar arranhões durante o frete.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <Truck className="w-5 h-5 text-dahora-emerald" />
              <h3 className="font-bold text-xs uppercase tracking-wider">3. Transporte Seguro</h3>
              <p className="text-xs text-dahora-gray">
                Parceria com transportadoras especializadas em veículos leves e cargas de alto valor com seguro de carga.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-gray-100">
            <h3 className="font-display font-bold text-base text-dahora-text">
              Prazos e Regiões Atendidas
            </h3>
            <p className="text-xs text-dahora-gray leading-relaxed">
              Os prazos de entrega variam conforme o estado e a cidade de destino. Para o estado de São Paulo e regiões próximas a Macatuba, os prazos médios costumam ser mais ágeis. Para as demais regiões do Brasil, o prazo exato é informado na cotação com a transportadora.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between text-xs">
            <span className="text-dahora-gray">Deseja cotar o frete para sua cidade antes de comprar?</span>
            <Link to="/contato" className="btn-primary text-xs py-2 px-4">
              Falar com Atendimento
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
