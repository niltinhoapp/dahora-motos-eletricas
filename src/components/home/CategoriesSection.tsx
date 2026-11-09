import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { demoCategories } from '../../data/demo';

export function CategoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.75;
    scrollRef.current.scrollTo({
      left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.round((scrollLeft / maxScroll) * 100));
    }
  };

  return (
    <section className="section-padding bg-dahora-ice relative overflow-hidden">
      {/* Luz ambiente de showroom */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-dahora-emerald/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-dahora-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-dahora relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>SHOWROOM DE CATEGORIAS</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text">
              Vitrine Multicategoria
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              De modelos urbanos para o dia a dia a karts radicais e triciclos estáveis para toda a família.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Setas com micro-animação de empurrão */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                aria-label="Rolar categorias para esquerda"
                className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-emerald-700 hover:border-emerald-300 shadow-sm flex items-center justify-center transition-all duration-200 hover:-translate-x-1 active:scale-90"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                aria-label="Rolar categorias para direita"
                className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-emerald-700 hover:border-emerald-300 shadow-sm flex items-center justify-center transition-all duration-200 hover:translate-x-1 active:scale-90"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Link
              to="/veiculos"
              aria-label="Ver todos os 23 veículos do catálogo"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors ml-2"
            >
              <span>Ver todos os 23 veículos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3D Showcase Horizontal Slider / Grid */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none snap-x snap-mandatory"
          style={{ perspective: '1000px' }}
        >
          {demoCategories.map((category) => (
            <Link
              key={category.id}
              to={`/categoria/${category.slug}`}
              aria-label={`Ver todos os modelos de ${category.name}`}
              className="group flex-none w-[280px] sm:w-[320px] bg-white rounded-3xl border border-dahora-border overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-dahora-emerald/40 flex flex-col justify-between snap-start"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div>
                {/* Real Photographic Header - Imagem 100% limpa sem textos sobrepostos */}
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
                    className="relative z-10 w-full h-full object-contain p-2 group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-display font-bold text-lg text-dahora-text group-hover:text-emerald-700 transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full shrink-0">
                      {category.productCount} {category.productCount === 1 ? 'modelo' : 'modelos'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Action com micro-interação */}
              <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>Ver modelos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-200" />
              </div>
            </Link>
          ))}
        </div>

        {/* Barra sutil de progresso do carrossel no mobile */}
        <div className="w-32 h-1 bg-gray-200 rounded-full mx-auto mt-4 overflow-hidden md:hidden">
          <div
            className="h-full bg-dahora-emerald transition-all duration-150"
            style={{ width: `${Math.max(15, scrollProgress)}%` }}
          />
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
