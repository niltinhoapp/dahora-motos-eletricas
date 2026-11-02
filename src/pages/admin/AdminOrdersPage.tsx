import { useState } from 'react';
import { ShoppingBag, Search, Eye, CheckCircle2, Clock } from 'lucide-react';
import { formatCurrency } from '../../lib/utils';

export function AdminOrdersPage() {
  const [orders] = useState([
    {
      id: 'DH-K92F1X',
      customerName: 'Cliente Demonstração',
      total: 12900,
      paymentMethod: 'Pix',
      paymentStatus: 'Aguardando validação',
      orderStatus: 'Pendente',
      createdAt: new Date().toLocaleDateString('pt-BR'),
    },
  ]);

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="font-display font-bold text-2xl text-white">
          Gestão de Pedidos
        </h1>
        <p className="text-xs text-gray-400 mt-1">
          Acompanhe pedidos recebidos, confirmação bancária e despachos com nota fiscal.
        </p>
      </div>

      <div className="bg-dahora-surface-dark border border-dahora-border-dark rounded-2xl overflow-hidden shadow-card">
        <table className="w-full text-xs text-left">
          <thead className="bg-white/5 border-b border-dahora-border-dark text-gray-300">
            <tr>
              <th className="p-4 font-bold">Protocolo</th>
              <th className="p-4 font-bold">Cliente</th>
              <th className="p-4 font-bold">Data</th>
              <th className="p-4 font-bold">Total</th>
              <th className="p-4 font-bold">Status Pagamento</th>
              <th className="p-4 font-bold text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dahora-border-dark/60 text-gray-300">
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-mono font-bold text-dahora-cyan">{o.id}</td>
                <td className="p-4 text-white font-medium">{o.customerName}</td>
                <td className="p-4 text-gray-400">{o.createdAt}</td>
                <td className="p-4 font-bold text-dahora-emerald tabular-nums">
                  {formatCurrency(o.total)}
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full">
                    <Clock className="w-3 h-3" />
                    {o.paymentStatus}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => alert(`Detalhes do pedido ${o.id}`)}
                    className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
                    title="Ver detalhes"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
