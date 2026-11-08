import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { demoCategories } from '../../data/demo';

export function CategoriesSection() {
  return (
    <section className="section-padding bg-dahora-ice">
      <div className="container-dahora">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              LINHA DE VEÍCULOS
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text mt-1">
              Explore por Categoria
            </h2>
          </div>
          <Link
            to="/veiculos"
            aria-label="Ver todos os 23 veículos do catálogo"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <span>Ver todos os 23 veículos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories 5-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {demoCategories.map((category) => (
            <Link
              key={category.id}
              to={`/categoria/${category.slug}`}
              aria-label={`Ver todos os modelos de ${category.name}`}
              className="group bg-white rounded-3xl border border-dahora-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Real Photographic Header - Veículo 100% visível com fundo ambiente sem abas pretas */}
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden border-b border-dahora-border flex items-center justify-center">
                  <img
                    src={category.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-35 brightness-75 select-none pointer-events-none"
                  />
                  <img
                    src={category.image}
                    alt={category.name}
                    className="relative z-10 w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute top-3 right-3 text-[11px] font-bold bg-slate-900/80 text-emerald-400 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-emerald-500/30 shadow-sm">
                    {category.productCount} {category.productCount === 1 ? 'modelo' : 'modelos'}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-dahora-text group-hover:text-dahora-emerald-dark transition-colors mb-1.5">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>Ver modelos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/veiculos"
            className="btn-secondary w-full py-3 text-sm flex items-center justify-center gap-2"
          >
            <span>Ver todo o catálogo (23 veículos)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
