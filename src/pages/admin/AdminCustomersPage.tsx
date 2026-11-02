import { Users, Search, Mail, Phone } from 'lucide-react';

export function AdminCustomersPage() {
  const customers = [
    {
      id: 'cust-1',
      name: 'Comprador Teste',
      email: 'contato@cliente.com',
      phone: '(14) 99999-9999',
      city: 'Macatuba, SP',
      ordersCount: 1,
    },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="font-display font-bold text-2xl text-white">
          Base de Clientes
        </h1>
        <p className="text-xs text-gray-400 mt-1">
          Registro de compradores e contatos autorizados para faturamento e suporte.
        </p>
      </div>

      <div className="bg-dahora-surface-dark border border-dahora-border-dark rounded-2xl overflow-hidden shadow-card">
        <table className="w-full text-xs text-left">
          <thead className="bg-white/5 border-b border-dahora-border-dark text-gray-300">
            <tr>
              <th className="p-4 font-bold">Nome</th>
              <th className="p-4 font-bold">Contato</th>
              <th className="p-4 font-bold">Localidade</th>
              <th className="p-4 font-bold">Pedidos</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dahora-border-dark/60 text-gray-300">
            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">{c.name}</td>
                <td className="p-4 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Mail className="w-3 h-3 text-dahora-cyan" />
                    <span>{c.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Phone className="w-3 h-3 text-dahora-emerald" />
                    <span>{c.phone}</span>
                  </div>
                </td>
                <td className="p-4 text-gray-400">{c.city}</td>
                <td className="p-4 font-bold text-dahora-cyan">{c.ordersCount} pedido</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
