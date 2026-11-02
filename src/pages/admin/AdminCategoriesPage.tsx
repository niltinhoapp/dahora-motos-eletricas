import { useState } from 'react';
import { Layers, Plus, Edit2, Trash2 } from 'lucide-react';
import { demoCategories } from '../../data/demo';

export function AdminCategoriesPage() {
  const [categories, setCategories] = useState(demoCategories);

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-white">
            Categorias de Veículos
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Organize a hierarquia e o catálogo da loja.
          </p>
        </div>
        <button
          onClick={() => alert('Cadastro de categoria pronto para persistência.')}
          className="btn-primary text-xs py-2 px-4 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Nova Categoria</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="p-5 rounded-2xl bg-dahora-surface-dark border border-dahora-border-dark flex items-start justify-between gap-4"
          >
            <div>
              <span className="text-[10px] text-dahora-cyan font-mono block">/{cat.slug}</span>
              <h3 className="font-bold text-sm text-white mt-1">{cat.name}</h3>
              <p className="text-xs text-gray-400 mt-1">{cat.description}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-[11px] bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full text-gray-300">
                  {cat.productCount} veículos
                </span>
                <span className="text-[11px] text-dahora-emerald font-semibold">
                  Ativa no site
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => alert(`Editar ${cat.name}`)}
                className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
