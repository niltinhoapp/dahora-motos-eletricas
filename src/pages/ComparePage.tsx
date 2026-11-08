import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Check, ShoppingCart, ArrowLeft, Plus } from 'lucide-react';
import { getAllProducts } from '../services/productService';
import { demoCategories } from '../data/demo';
import { formatCurrency } from '../lib/utils';
import { useCart } from '../contexts/CartContext';
import type { Product } from '../types';

export function ComparePage() {
  const allProducts = getAllProducts();
  const { addItem } = useCart();

  const [selectedIds, setSelectedIds] = useState<string[]>([
    allProducts[0]?.id || '',
    allProducts[1]?.id || '',
    allProducts[2]?.id || '',
  ]);

  const selectedProducts = selectedIds
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  const handleSelect = (index: number, id: string) => {
    const updated = [...selectedIds];
    updated[index] = id;
    setSelectedIds(updated);
  };

  return (
    <div className="bg-dahora-ice min-h-screen py-10">
      <div className="container-dahora">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">
            <Scale className="w-3.5 h-3.5" />
            <span>COMPARADOR COMPLETO</span>
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text">
            Compare Especificações Técnicas Lado a Lado
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Escolha até 3 veículos e avalie potência, autonomia, tempo de recarga e condições comerciais.
          </p>
        </div>

        {/* Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[0, 1, 2].map((idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-dahora-border p-4 shadow-sm">
              <label
                htmlFor={`compare-page-select-${idx}`}
                className="block text-xs font-bold uppercase tracking-wider text-dahora-gray mb-1.5 cursor-pointer"
              >
                Veículo {idx + 1}
              </label>
              <select
                id={`compare-page-select-${idx}`}
                name={`compareVehicle${idx}`}
                value={selectedIds[idx] || ''}
                onChange={(e) => handleSelect(idx, e.target.value)}
                aria-label={`Selecionar veículo ${idx + 1} para comparar`}
                className="w-full input-field text-xs py-2 cursor-pointer font-medium"
              >
                {allProducts.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({formatCurrency(p.promotionalPrice || p.price)})
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-dahora-border shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/70">
                  <th className="p-4 font-bold text-dahora-text w-1/4">Característica</th>
                  {selectedProducts.map((p) => (
                    <th key={p.id} className="p-4 text-center w-1/4">
                      <div className="space-y-2">
                        {p.images?.[0]?.url && (
                          <Link to={`/produto/${p.slug}`} className="block w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-xl overflow-hidden bg-slate-900 border border-dahora-border shadow-sm relative flex items-center justify-center">
                            <img src={p.images[0].url} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover blur-lg scale-125 opacity-35" />
                            <img src={p.images[0].url} alt={p.name} className="relative z-10 w-full h-full object-contain p-1" />
                          </Link>
                        )}
                        <Link
                          to={`/produto/${p.slug}`}
                          className="font-display font-bold text-sm text-dahora-text hover:text-emerald-700 transition-colors block"
                        >
                          {p.name}
                        </Link>
                        <span className="text-xs font-extrabold text-emerald-700 block tabular-nums">
                          {formatCurrency(p.promotionalPrice || p.price)}
                        </span>
                        <button
                          onClick={() => addItem(p)}
                          className="btn-primary text-[11px] py-1.5 px-3 inline-flex items-center gap-1 mt-2"
                        >
                          <ShoppingCart className="w-3 h-3" />
                          <span>Adicionar</span>
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-4 font-semibold text-dahora-gray">Categoria</td>
                  {selectedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-center text-dahora-text font-medium">
                      {demoCategories.find((c) => c.id === p.categoryId)?.name || 'Veículo Elétrico'}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50/40">
                  <td className="p-4 font-semibold text-dahora-gray">Potência do Motor</td>
                  {selectedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-center text-dahora-text font-bold">
                      {p.power || 'Consulte'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dahora-gray">Autonomia Estimada</td>
                  {selectedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-center text-emerald-700 font-bold">
                      {p.range || 'Consulte'}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50/40">
                  <td className="p-4 font-semibold text-dahora-gray">Velocidade Máxima</td>
                  {selectedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-center text-dahora-text">
                      {p.maxSpeed || 'Consulte'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dahora-gray">Bateria</td>
                  {selectedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-center text-dahora-text">
                      {p.batteryType || 'Consulte'}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50/40">
                  <td className="p-4 font-semibold text-dahora-gray">Tempo de Recarga</td>
                  {selectedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-center text-dahora-text">
                      {p.chargingTime || 'Consulte'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dahora-gray">Capacidade de Carga</td>
                  {selectedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-center text-dahora-text">
                      {p.loadCapacity || 'Consulte'}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50/40">
                  <td className="p-4 font-semibold text-dahora-gray">Garantia</td>
                  {selectedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-center text-dahora-text">
                      {p.warranty}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/veiculos"
            className="text-xs text-dahora-emerald-dark font-semibold hover:underline inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao catálogo de veículos</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
