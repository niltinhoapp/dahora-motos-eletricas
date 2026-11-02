import { useEffect } from 'react';

export function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Política de Privacidade | Da Hora Motos Elétricas';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dahora-ice min-h-screen py-12">
      <div className="container-dahora max-w-3xl bg-white rounded-3xl border border-dahora-border p-8 sm:p-12 shadow-card space-y-6 text-sm text-dahora-text leading-relaxed">
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text">
          Política de Privacidade
        </h1>
        <p className="text-xs text-dahora-gray">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>

        <div className="space-y-4 pt-4 border-t border-gray-100 text-xs sm:text-sm text-dahora-gray">
          <h2 className="font-bold text-sm text-dahora-text">1. Compromisso com a LGPD</h2>
          <p>
            A <strong>Da Hora Motos Elétricas</strong> preza pela segurança, sigilo e privacidade dos dados pessoais de seus clientes e visitantes, em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD).
          </p>

          <h2 className="font-bold text-sm text-dahora-text">2. Dados Coletados e Finalidade</h2>
          <p>
            Coletamos exclusivamente os dados necessários para o processamento de compras, cotações de entrega, emissão de Nota Fiscal Eletrônica e contato pelo WhatsApp para suporte pós-venda. Não comercializamos nem compartilhamos dados com terceiros para fins de marketing sem consentimento prévio.
          </p>

          <h2 className="font-bold text-sm text-dahora-text">3. Segurança e Armazenamento</h2>
          <p>
            Os dados de pagamento e senhas trafegam criptografados. Dados completos de cartão de crédito não são armazenados em nossos servidores locais, sendo processados diretamente por gateways de pagamento certificados.
          </p>

          <h2 className="font-bold text-sm text-dahora-text">4. Direitos do Titular</h2>
          <p>
            O titular dos dados tem o direito de solicitar a confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos ou a exclusão de dados desnecessários entrando em contato através de nossos canais oficiais de atendimento.
          </p>
        </div>
      </div>
    </div>
  );
}
