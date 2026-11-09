import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ProductCard } from '../product/ProductCard';
import { getFeaturedProducts } from '../../services/productService';

export function FeaturedProductsSection() {
  const featured = getFeaturedProducts();
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white border-y border-dahora-border">
      <div className="container-dahora">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VEÍCULOS SELECIONADOS</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text">
              Destaques da Concessionária
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Modelos com excelente custo-benefício, alta autonomia e prontos para entrega.
            </p>
          </div>

          <Link
            to="/veiculos"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <span>Ver todos ({featured.length} em destaque)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid com Revelação Escalonada (Stagger) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <div
              key={product.id}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 90}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 90}ms`,
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/veiculos"
            className="btn-primary btn-electric-arc py-3 px-8 text-sm inline-flex items-center gap-2 shadow-card"
          >
            <span>Ver Todo o Catálogo de Veículos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
