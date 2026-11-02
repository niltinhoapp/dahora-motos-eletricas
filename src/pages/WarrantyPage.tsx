import { useEffect } from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WarrantyPage() {
  useEffect(() => {
    document.title = 'Termos de Garantia | Da Hora Motos Elétricas';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dahora-ice min-h-screen py-12">
      <div className="container-dahora max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-dahora-emerald">
            SEGURANÇA E PÓS-VENDA
          </span>
          <h1 className="font-display font-extrabold text-3xl text-dahora-text">
            Política de Garantia e Revisão
          </h1>
          <p className="text-sm text-dahora-gray max-w-lg mx-auto">
            Entenda como funciona a cobertura de fábrica, garantia legal e orientações preventivas.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-dahora-border p-8 sm:p-12 shadow-card space-y-8 text-sm text-dahora-text leading-relaxed">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-lg text-dahora-text flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-dahora-emerald" />
              <span>Garantia Legal e Contratual</span>
            </h2>
            <p>
              Todos os veículos comercializados pela <strong>Da Hora Motos Elétricas</strong> contam com a garantia legal de 90 dias prevista pelo Código de Defesa do Consumidor (CDC), acrescida da garantia contratual concedida pelo fabricante ou importador homologado.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h3 className="font-display font-bold text-base text-dahora-text">
              O que a garantia cobre:
            </h3>
            <ul className="space-y-2 text-xs text-dahora-gray">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dahora-emerald shrink-0" />
                <span>Defeitos de fabricação no motor elétrico e chicote principal</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dahora-emerald shrink-0" />
                <span>Anomalias de retenção de carga na bateria (respeitado o ciclo de vida e manuais)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dahora-emerald shrink-0" />
                <span>Falhas de componentes eletrônicos (módulo controlador, painel digital, carregador)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dahora-emerald shrink-0" />
                <span>Trincas estruturais no chassi por vício de solda ou fabricação</span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Itens de desgaste natural e exclusões</span>
            </div>
            <p>
              A garantia não abrange componentes com desgaste natural por atrito (pastilhas de freio, pneus, câmaras de ar, lâmpadas) nem danos causados por acidentes, imersão em água, sobrecarga de peso ou adulterações nas especificações elétricas originais do motor.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
            <span className="text-dahora-gray">Dúvidas sobre a garantia do seu modelo?</span>
            <Link to="/contato" className="btn-primary text-xs py-2 px-4">
              Consultar Suporte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
