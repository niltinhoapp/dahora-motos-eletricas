import { useState } from 'react';
import { Boxes, Plus, Minus } from 'lucide-react';
import { getAllProducts } from '../../services/productService';

export function AdminInventoryPage() {
  const [products, setProducts] = useState(getAllProducts());

  const handleAdjustStock = (id: string, delta: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, stock: Math.max(0, p.stock + delta) } : p
      )
    );
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="font-display font-bold text-2xl text-white">
          Controle de Estoque Físico
        </h1>
        <p className="text-xs text-gray-400 mt-1">
          Ajuste as unidades em pronta entrega no showroom e depósito.
        </p>
      </div>

      <div className="bg-dahora-surface-dark border border-dahora-border-dark rounded-2xl overflow-hidden shadow-card">
        <table className="w-full text-xs text-left">
          <thead className="bg-white/5 border-b border-dahora-border-dark text-gray-300">
            <tr>
              <th className="p-4 font-bold">Veículo</th>
              <th className="p-4 font-bold">Categoria</th>
              <th className="p-4 font-bold text-center">Unidades em Estoque</th>
              <th className="p-4 font-bold text-right">Ajuste Rápido</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dahora-border-dark/60 text-gray-300">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">{p.name}</td>
                <td className="p-4 text-dahora-cyan font-mono text-[10px]">{p.categoryId}</td>
                <td className="p-4 text-center font-extrabold text-sm text-dahora-emerald tabular-nums">
                  {p.stock}
                </td>
                <td className="p-4 text-right">
                  <div className="inline-flex items-center gap-1 bg-dahora-midnight border border-dahora-border-dark rounded-xl p-1">
                    <button
                      onClick={() => handleAdjustStock(p.id, -1)}
                      className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white"
                      title="Diminuir"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-2 font-mono font-bold">{p.stock}</span>
                    <button
                      onClick={() => handleAdjustStock(p.id, 1)}
                      className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white"
                      title="Aumentar"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
