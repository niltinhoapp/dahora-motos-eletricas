import { useState } from 'react';
import { Package, Plus, Search, Edit2, Trash2, CheckCircle2, XCircle } from 'lucide-react';
import { getAllProducts } from '../../services/productService';
import { formatCurrency } from '../../lib/utils';
import type { Product } from '../../types';

export function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(getAllProducts());
  const [search, setSearch] = useState('');

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAvailability = (id: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isAvailable: !p.isAvailable } : p))
    );
  };

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-white">
            Gerenciamento de Veículos
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Cadastre novos modelos, altere preços, disponibilidade e especificações técnicas.
          </p>
        </div>

        <button
          onClick={() => alert('Formulário de cadastro completo preparado para integração com Supabase / API.')}
          className="btn-primary text-xs py-2.5 px-4 flex items-center gap-2 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Novo Veículo</span>
        </button>
      </div>

      {/* Search Filter */}
      <div className="bg-dahora-surface-dark border border-dahora-border-dark p-4 rounded-2xl flex items-center gap-3">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filtrar por nome ou marca..."
          className="bg-transparent text-white text-xs w-full focus:outline-none placeholder:text-gray-500"
        />
      </div>

      {/* Products Table */}
      <div className="bg-dahora-surface-dark border border-dahora-border-dark rounded-2xl overflow-hidden shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-white/5 border-b border-dahora-border-dark text-gray-300">
              <tr>
                <th className="p-4 font-bold">Veículo</th>
                <th className="p-4 font-bold">Categoria</th>
                <th className="p-4 font-bold">Preço</th>
                <th className="p-4 font-bold">Estoque</th>
                <th className="p-4 font-bold">Disponibilidade</th>
                <th className="p-4 font-bold text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dahora-border-dark/60 text-gray-300">
              {filtered.map((product) => (
                <tr key={product.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <p className="font-bold text-white">{product.name}</p>
                    <span className="text-[10px] text-gray-500">{product.brand} • {product.power}</span>
                  </td>
                  <td className="p-4">
                    <span className="bg-white/5 px-2 py-0.5 rounded-full text-[10px] text-dahora-cyan font-mono">
                      {product.categoryId}
                    </span>
                  </td>
                  <td className="p-4 font-extrabold text-dahora-emerald tabular-nums">
                    {formatCurrency(product.promotionalPrice || product.price)}
                  </td>
                  <td className="p-4 font-semibold text-white">
                    {product.stock} un.
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => toggleAvailability(product.id)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold cursor-pointer transition-colors ${
                        product.isAvailable
                          ? 'bg-dahora-emerald/15 text-dahora-emerald border border-dahora-emerald/30'
                          : 'bg-gray-800 text-gray-400 border border-gray-700'
                      }`}
                    >
                      {product.isAvailable ? (
                        <>
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Disponível</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3 h-3" />
                          <span>Pausado</span>
                        </>
                      )}
                    </button>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => alert(`Editar ${product.name}`)}
                      className="p-1.5 text-gray-400 hover:text-dahora-cyan rounded-lg hover:bg-white/5"
                      title="Editar"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Remover ${product.name}?`)) {
                          setProducts(products.filter((p) => p.id !== product.id));
                        }
                      }}
                      className="p-1.5 text-gray-400 hover:text-red-400 rounded-lg hover:bg-white/5"
                      title="Excluir"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
