import { useEffect } from 'react';
import { Truck, CheckCircle2, ShieldCheck, Zap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { buildWhatsAppUrl } from '../lib/utils';
import { env } from '../config/env';

export function DeliveryPage() {
  const whatsappNumber = env.WHATSAPP_NUMBER || '5514998877886';
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    'Olá! Gostaria de consultar a entrega grátis em até 150 km ou o frete para minha cidade.'
  );

  useEffect(() => {
    document.title = 'Entrega Grátis até 150 km & Envio para Todo o Brasil | Da Hora Motos';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dahora-ice min-h-screen py-12">
      <div className="container-dahora max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            LOGÍSTICA E TRANSPORTE ESPECIALIZADO
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-dahora-text">
            Entrega Grátis até 150 km & Envio para o Brasil
          </h1>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Seu veículo elétrico preparado, montado e entregue com segurança máxima na porta da sua casa.
          </p>
        </div>

        {/* Highlight Card: Frete Grátis até 150 km */}
        <div className="bg-gradient-to-br from-dahora-midnight to-dahora-surface-dark text-white rounded-3xl p-8 sm:p-10 border border-dahora-border-dark shadow-premium relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-dahora-emerald/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dahora-emerald/20 border border-dahora-emerald/40 text-dahora-emerald text-xs font-extrabold uppercase tracking-wider">
              <Zap className="w-4 h-4 fill-dahora-emerald" />
              <span>Condição Especial de Concessionária</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Frete Grátis em até 150 km de Macatuba/SP
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
              Para todas as cidades em um raio de até <strong>150 km da nossa sede em Macatuba</strong>, a Da Hora realiza a entrega com frota própria e <strong>100% gratuita</strong>. O veículo chega na sua casa <strong>totalmente montado, revisado, com bateria carregada</strong> e pronto para acelerar.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200">Macatuba</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200">Lençóis Paulista</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200">Bauru</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200">Jaú</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200">Botucatu</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200">Barra Bonita</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200">Agudos</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200">Pederneiras</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200">Dois Córregos</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200">São Manuel</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200">Igaraçu do Tietê</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200">+ Cidades da Região</span>
            </div>

            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp py-3 px-6 text-xs inline-flex items-center gap-2 shadow-lg"
                aria-label="Confirmar se sua cidade tem frete grátis no WhatsApp oficial"
              >
                <WhatsAppIcon className="w-4 h-4 text-dahora-black" />
                <span>Confirmar Frete Grátis da Minha Cidade</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-dahora-border p-8 sm:p-12 shadow-card space-y-8 text-sm text-dahora-text leading-relaxed">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-lg text-dahora-text flex items-center gap-2">
              <Truck className="w-5 h-5 text-emerald-700" />
              <span>Como Funciona o Envio para Outras Cidades e Estados (+150 km)</span>
            </h2>
            <p>
              Caso você esteja localizado a mais de 150 km de Macatuba, não se preocupe: enviamos para qualquer município do Brasil através de transportadoras parceiras homologadas e especializadas no transporte de veículos leves montados, com seguro total contra avarias durante o trajeto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              <h3 className="font-bold text-xs uppercase tracking-wider">1. Inspeção Técnica Pré-Envio</h3>
              <p className="text-xs text-slate-600">
                Aperto de parafusos, regulagem de freios, verificação de pneus e carga completa da bateria na nossa oficina própria (Loja 1).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <ShieldCheck className="w-5 h-5 text-dahora-cyan" />
              <h3 className="font-bold text-xs uppercase tracking-wider">2. Embalagem de Alta Proteção</h3>
              <p className="text-xs text-slate-600">
                Proteção com plástico bolha de alta gramatura e cantoneiras de reforço para evitar arranhões durante o frete.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <Truck className="w-5 h-5 text-emerald-700" />
              <h3 className="font-bold text-xs uppercase tracking-wider">3. Seguro de Carga Total</h3>
              <p className="text-xs text-slate-600">
                Rastreamento ativo e cobertura securitária completa desde a saída da nossa concessionária até o recebimento.
              </p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-slate-600">Deseja simular o frete para sua localidade antes de comprar?</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs py-2 px-4 inline-flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-dahora-black" />
              <span>Cotar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
