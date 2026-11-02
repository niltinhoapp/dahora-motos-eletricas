import { useParams, Link } from 'react-router-dom';
import {
  PackageCheck,
  CheckCircle,
  Clock,
  Truck,
  ShieldCheck,
  ArrowLeft,
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/utils';
import { env } from '../config/env';
import { defaultStoreSettings } from '../data/demo';

export function OrderTrackingPage() {
  const { id } = useParams<{ id: string }>();

  const whatsappNumber = env.WHATSAPP_NUMBER || defaultStoreSettings.whatsapp || '5514999999999';
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    `Olá! Gostaria de informações e acompanhamento do meu pedido ${id} na Da Hora Motos Elétricas.`
  );

  const steps = [
    { title: 'Pedido Recebido', desc: 'Registro formal no sistema', done: true },
    { title: 'Confirmação de Pagamento', desc: 'Aguardando validação bancária', current: true },
    { title: 'Preparação & Revisão', desc: 'Checagem técnica e aperto de peças' },
    { title: 'Transporte & Envio', desc: 'Despacho com nota fiscal' },
    { title: 'Entregue', desc: 'Recebimento e entrega técnica' },
  ];

  return (
    <div className="bg-dahora-ice min-h-screen py-12">
      <div className="container-dahora max-w-2xl">
        <div className="bg-white rounded-3xl border border-dahora-border p-8 sm:p-10 shadow-card space-y-8">
          {/* Header */}
          <div className="text-center space-y-2 border-b border-gray-100 pb-6">
            <div className="w-14 h-14 rounded-2xl bg-dahora-emerald/15 text-dahora-emerald flex items-center justify-center mx-auto mb-3">
              <PackageCheck className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-dahora-gray">
              Acompanhamento de Pedido
            </span>
            <h1 className="font-display font-extrabold text-2xl text-dahora-text">
              Protocolo: <span className="text-dahora-cyan font-mono">{id || 'DH-000000'}</span>
            </h1>
            <p className="text-xs text-dahora-gray">
              Atualização em tempo real do status operacional do seu veículo.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      step.done
                        ? 'bg-dahora-emerald text-white'
                        : step.current
                        ? 'bg-dahora-black text-white ring-4 ring-dahora-emerald/20 animate-pulse'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step.done ? <CheckCircle className="w-4 h-4" /> : idx + 1}
                  </div>
                  {idx < steps.length - 1 && (
                    <div
                      className={`w-0.5 h-10 my-1 ${
                        step.done ? 'bg-dahora-emerald' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
                <div>
                  <h3
                    className={`text-sm font-bold ${
                      step.current ? 'text-dahora-emerald-dark' : 'text-dahora-text'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-dahora-gray mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Support Box */}
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-dahora-gray">
              <HelpCircle className="w-4 h-4 text-dahora-cyan shrink-0" />
              <span>Precisa de suporte sobre este pedido?</span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp py-2 px-4 text-xs inline-flex items-center gap-1.5 shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Back Button */}
          <div className="text-center pt-2">
            <Link
              to="/"
              className="text-xs text-dahora-emerald font-semibold hover:underline inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar à página inicial</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
