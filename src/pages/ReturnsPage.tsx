import { useEffect } from 'react';

export function ReturnsPage() {
  useEffect(() => {
    document.title = 'Trocas e Devoluções | Da Hora Motos Elétricas';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dahora-ice min-h-screen py-12">
      <div className="container-dahora max-w-3xl bg-white rounded-3xl border border-dahora-border p-8 sm:p-12 shadow-card space-y-6 text-sm text-dahora-text leading-relaxed">
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text">
          Política de Trocas e Devoluções
        </h1>
        <p className="text-xs text-dahora-gray">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>

        <div className="space-y-4 pt-4 border-t border-gray-100 text-xs sm:text-sm text-dahora-gray">
          <h2 className="font-bold text-sm text-dahora-text">1. Direito de Arrependimento (Art. 49 do CDC)</h2>
          <p>
            Em compras realizadas exclusivamente pela internet (fora do estabelecimento comercial físico), o consumidor tem o prazo de 7 (sete) dias corridos, contados a partir da data de recebimento do veículo, para manifestar o arrependimento e solicitar a devolução.
          </p>

          <h2 className="font-bold text-sm text-dahora-text">2. Condições do Veículo para Devolução</h2>
          <p>
            O veículo deve ser devolvido em perfeito estado de conservação, sem avarias estéticas, sem quilometragem excessiva que caracterize uso contínuo, acompanhado de todos os manuais, chaves reservas, ferramentas e carregador original com sua respectiva Nota Fiscal.
          </p>

          <h2 className="font-bold text-sm text-dahora-text">3. Procedimento de Troca por Vício ou Defeito</h2>
          <p>
            Caso seja constatado defeito de fabricação dentro do prazo de garantia legal (90 dias), a concessionária providenciará a assistência técnica ou substituição da peça defeituosa no prazo máximo de 30 dias, conforme preconizado pelo Art. 18 do CDC.
          </p>
        </div>
      </div>
    </div>
  );
}
