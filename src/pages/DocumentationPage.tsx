import { useEffect } from 'react';
import { Scale, FileText, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DocumentationPage() {
  useEffect(() => {
    document.title = 'Legislação e Documentação de Veículos Elétricos | Da Hora Motos';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dahora-ice min-h-screen py-12">
      <div className="container-dahora max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-dahora-cyan">
            REGULAMENTAÇÃO OFICIAL DO CONTRAN
          </span>
          <h1 className="font-display font-extrabold text-3xl text-dahora-text">
            Legislação, Habilitação e Emplacamento
          </h1>
          <p className="text-sm text-dahora-gray max-w-xl mx-auto">
            Entenda como a Resolução Contran nº 996/2023 classifica veículos autopropelidos, bicicletas elétricas, ciclomotores e motocicletas elétricas no Brasil.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-dahora-border p-8 sm:p-12 shadow-card space-y-8 text-sm text-dahora-text leading-relaxed">
          {/* Key Warning */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm">Aviso de Responsabilidade e Segurança Jurídica</h3>
              <p className="mt-1">
                <strong>Não afirme que todo veículo elétrico é livre de CNH ou emplacamento.</strong> A exigência legal varia estritamente conforme a potência em Watts, velocidade máxima homologada e presença de acelerador manual ou pedal assistido.
              </p>
            </div>
          </div>

          {/* Classification Table */}
          <div className="space-y-4">
            <h2 className="font-display font-bold text-lg text-dahora-text">
              Classificação das 4 Categorias de Veículos Elétricos
            </h2>

            <div className="space-y-4">
              {/* Category 1 */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-dahora-text">
                    1. Equipamentos de Mobilidade Individual Autopropelidos (Patinetes / Monociclos)
                  </h3>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                    Sem CNH / Sem Placa
                  </span>
                </div>
                <p className="text-xs text-dahora-gray">
                  Velocidade máxima de fabricação de até 32 km/h. Circulação permitida em ciclovias e ciclofaixas respeitando a velocidade regulamentada pela via local.
                </p>
              </div>

              {/* Category 2 */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-dahora-text">
                    2. Bicicletas Elétricas (Pedelec / Pedal Assistido)
                  </h3>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                    Sem CNH / Sem Placa
                  </span>
                </div>
                <p className="text-xs text-dahora-gray">
                  Motor auxiliar de até 1000W que funciona apenas quando o condutor pedala (pedal assistido, sem acelerador manual), com velocidade máxima assistida de 32 km/h.
                </p>
              </div>

              {/* Category 3 */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-dahora-text">
                    3. Ciclomotores Elétricos (Scooters com acelerador)
                  </h3>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2.5 py-0.5 rounded-full">
                    Exige ACC ou CNH A / Registro Detran
                  </span>
                </div>
                <p className="text-xs text-dahora-gray">
                  Veículos de 2 ou 3 rodas com motor de até 4000W (4kW) e velocidade máxima de até 50 km/h. Exigem Autorização para Conduzir Ciclomotores (ACC) ou CNH categoria A, registro e emplacamento no Detran conforme o cronograma oficial.
                </p>
              </div>

              {/* Category 4 */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-dahora-text">
                    4. Motocicletas e Triciclos Elétricos Potentes
                  </h3>
                  <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2.5 py-0.5 rounded-full">
                    Exige CNH Categoria A / Emplacamento Total
                  </span>
                </div>
                <p className="text-xs text-dahora-gray">
                  Veículos com potência superior a 4000W ou velocidade máxima superior a 50 km/h. Sujeitos a todas as regras do Código de Trânsito Brasileiro para motocicletas.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-dahora-gray">
              Tem dúvidas sobre qual a categoria exata do modelo que você deseja comprar?
            </span>
            <Link to="/contato" className="btn-primary text-xs py-2 px-4 whitespace-nowrap">
              Consultar Especialista
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
