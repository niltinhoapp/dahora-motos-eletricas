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
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <span>Ver todos os 23 veículos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoCategories.map((category) => (
            <Link
              key={category.id}
              to={`/categoria/${category.slug}`}
              className="group bg-white rounded-3xl border border-dahora-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Real Photographic Header */}
                <div className="relative aspect-[4/3] bg-dahora-midnight overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dahora-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold bg-dahora-black/60 text-white backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
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
