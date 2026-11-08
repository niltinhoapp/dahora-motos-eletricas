import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X, Scale } from 'lucide-react';
import { getAllProducts } from '../../services/productService';
import { formatCurrency } from '../../lib/utils';
import type { Product } from '../../types';

export function ComparisonSection() {
  const allProducts = getAllProducts();

  // Default to first 3 products
  const [selectedIds, setSelectedIds] = useState<string[]>([
    allProducts[0]?.id || '',
    allProducts[1]?.id || '',
    allProducts[2]?.id || '',
  ]);

  const selectedProducts = selectedIds
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  const handleSelectProduct = (index: number, newId: string) => {
    const updated = [...selectedIds];
    updated[index] = newId;
    setSelectedIds(updated);
  };

  return (
    <section className="section-padding bg-dahora-midnight text-white border-b border-dahora-border-dark">
      <div className="container-dahora">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-dahora-cyan mb-2">
            <Scale className="w-3.5 h-3.5" />
            <span>COMPARADOR INTELIGENTE</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            Encontre o veículo ideal para sua rotina
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Compare especificações técnicas, autonomia e preços lado a lado para tomar a melhor decisão.
          </p>
        </div>

        {/* Product Selector Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[0, 1, 2].map((colIndex) => (
            <div key={colIndex} className="bg-dahora-surface-dark border border-dahora-border-dark p-3 rounded-2xl">
              <label
                htmlFor={`compare-vehicle-select-${colIndex}`}
                className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 cursor-pointer"
              >
                Veículo {colIndex + 1}
              </label>
              <select
                id={`compare-vehicle-select-${colIndex}`}
                name={`compareVehicle${colIndex}`}
                value={selectedIds[colIndex] || ''}
                onChange={(e) => handleSelectProduct(colIndex, e.target.value)}
                aria-label={`Selecionar veículo ${colIndex + 1} para comparar`}
                className="w-full bg-dahora-midnight border border-dahora-border-dark rounded-xl px-3 py-2 text-xs font-medium text-white focus:outline-none focus:border-dahora-cyan"
              >
                {allProducts.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {formatCurrency(p.promotionalPrice || p.price)}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-dahora-border-dark bg-dahora-surface-dark">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-dahora-border-dark bg-white/5">
                <th className="p-4 font-bold text-gray-300 w-1/4">Especificação</th>
                {selectedProducts.map((p) => (
                  <th key={p.id} className="p-4 font-bold text-white w-1/4 text-center">
                    <div className="space-y-2">
                      {p.images?.[0]?.url && (
                        <Link to={`/produto/${p.slug}`} className="block w-20 h-20 mx-auto rounded-xl overflow-hidden bg-slate-950 border border-dahora-border-dark shadow-sm">
                          <img src={p.images[0].url} alt={p.name} className="w-full h-full object-cover" />
                        </Link>
                      )}
                      <Link to={`/produto/${p.slug}`} className="hover:text-dahora-cyan transition-colors block">
                        {p.name}
                      </Link>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-dahora-border-dark/60">
              <tr>
                <td className="p-4 font-semibold text-gray-400">Preço Atual</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-4 text-center font-extrabold text-dahora-emerald text-sm tabular-nums">
                    {formatCurrency(p.promotionalPrice || p.price)}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-gray-400">Motor / Potência</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-4 text-center text-gray-200">
                    {p.power || 'Consulte'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-gray-400">Autonomia estimada</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-4 text-center text-dahora-cyan font-medium">
                    {p.range || 'Consulte'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-gray-400">Velocidade máxima</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-4 text-center text-gray-200">
                    {p.maxSpeed || 'Consulte'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-gray-400">Bateria</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-4 text-center text-gray-200">
                    {p.batteryType || 'Consulte'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-gray-400">Tempo de recarga</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-4 text-center text-gray-200">
                    {p.chargingTime || 'Consulte'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-gray-400">Capacidade de carga</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-4 text-center text-gray-200">
                    {p.loadCapacity || 'Padrão'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-gray-400">Disponibilidade</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-4 text-center">
                    {p.isAvailable ? (
                      <span className="inline-flex items-center gap-1 text-dahora-emerald font-semibold">
                        <Check className="w-3.5 h-3.5" /> Disponível
                      </span>
                    ) : (
                      <span className="text-gray-500">Sob consulta</span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Full Comparison Link */}
        <div className="mt-8 text-center">
          <Link
            to="/comparar"
            className="btn-secondary text-xs py-2.5 px-6 border-white/20 text-white hover:bg-white/5 inline-flex items-center gap-2"
          >
            <span>Abrir Comparador Completo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
