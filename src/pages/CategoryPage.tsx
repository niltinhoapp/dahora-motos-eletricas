import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { getCategoryBySlug, getProductsByCategory } from '../services/productService';
import { ProductCard } from '../components/product/ProductCard';

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;
  const products = slug ? getProductsByCategory(slug) : [];

  useEffect(() => {
    if (category) {
      document.title = `${category.name} | Da Hora Motos Elétricas`;
    }
  }, [category]);

  if (!category) {
    return (
      <div className="container-dahora py-20 text-center space-y-4">
        <h1 className="font-display font-bold text-2xl text-dahora-text">
          Categoria não encontrada
        </h1>
        <p className="text-sm text-dahora-gray">
          A categoria solicitada não existe ou foi desativada.
        </p>
        <Link to="/veiculos" className="btn-primary text-xs py-2.5 px-6 inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao catálogo</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-dahora-ice min-h-screen py-8">
      <div className="container-dahora">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-dahora-gray mb-6">
          <Link to="/" className="hover:text-dahora-text">Início</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/veiculos" className="hover:text-dahora-text">Veículos</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-emerald-700 font-bold">{category.name}</span>
        </nav>

        {/* Category Hero Banner */}
        <div className="bg-dahora-midnight text-white rounded-3xl p-8 sm:p-12 mb-10 border border-dahora-border-dark relative overflow-hidden shadow-premium">
          <div className="max-w-2xl relative z-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-dahora-cyan">
              CATEGORIA
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              {category.name}
            </h1>
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              {category.description}
            </p>
            <div className="pt-2 text-xs text-dahora-emerald font-semibold">
              {products.length} {products.length === 1 ? 'modelo cadastrado' : 'modelos cadastrados'}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="bg-white rounded-3xl border border-dahora-border p-12 text-center shadow-card">
            <p className="text-sm text-dahora-gray">
              Nenhum produto cadastrado nesta categoria no momento.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
