import { useEffect } from 'react';

export function TermsPage() {
  useEffect(() => {
    document.title = 'Termos de Uso | Da Hora Motos Elétricas';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dahora-ice min-h-screen py-12">
      <div className="container-dahora max-w-3xl bg-white rounded-3xl border border-dahora-border p-8 sm:p-12 shadow-card space-y-6 text-sm text-dahora-text leading-relaxed">
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text">
          Termos de Uso
        </h1>
        <p className="text-xs text-dahora-gray">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>

        <div className="space-y-4 pt-4 border-t border-gray-100 text-xs sm:text-sm text-dahora-gray">
          <h2 className="font-bold text-sm text-dahora-text">1. Objeto e Aceitação</h2>
          <p>
            Estes Termos de Uso regem a navegação e a realização de compras na plataforma digital da <strong>Da Hora Motos Elétricas</strong>. Ao acessar o site ou solicitar propostas comerciais, o usuário declara concordar com as disposições aqui estabelecidas.
          </p>

          <h2 className="font-bold text-sm text-dahora-text">2. Informações sobre Produtos e Preços</h2>
          <p>
            As fotografias, especificações técnicas, autonomias estimadas e valores anunciados são periodicamente atualizados com base nas informações dos fabricantes. Eventuais divergências de estoque ou cotação serão esclarecidas pela equipe antes do faturamento final.
          </p>

          <h2 className="font-bold text-sm text-dahora-text">3. Responsabilidade na Condução</h2>
          <p>
            O condutor é exclusivamente responsável pelo cumprimento das normas de trânsito vigentes (Resolução Contran nº 996/2023), porte de habilitação apropriada quando aplicável e uso obrigatório de capacete e equipamentos de proteção.
          </p>
        </div>
      </div>
    </div>
  );
}
