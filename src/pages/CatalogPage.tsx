import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, X, ChevronRight, SlidersHorizontal, ArrowUpDown, Search, RotateCcw } from 'lucide-react';
import { ProductCard } from '../components/product/ProductCard';
import { filterProducts, getAllCategories, getAllBrands, getPriceRange } from '../services/productService';
import { formatCurrency } from '../lib/utils';
import type { ProductFilters } from '../types';

export function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Read URL query params
  const categoryParam = searchParams.get('categoria') || '';
  const searchParam = searchParams.get('q') || '';
  const sortParam = (searchParams.get('ordem') || 'featured') as ProductFilters['sortBy'];
  const minPriceParam = searchParams.get('min') ? Number(searchParams.get('min')) : undefined;
  const maxPriceParam = searchParams.get('max') ? Number(searchParams.get('max')) : undefined;
  const brandParam = searchParams.get('marca') || '';
  const availableOnlyParam = searchParams.get('disponivel') === 'true';

  // State for filter inputs
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [selectedSort, setSelectedSort] = useState(sortParam);
  const [selectedBrand, setSelectedBrand] = useState(brandParam);
  const [availableOnly, setAvailableOnly] = useState(availableOnlyParam);
  const [minPrice, setMinPrice] = useState<number | undefined>(minPriceParam);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(maxPriceParam);

  const categories = getAllCategories();
  const brands = getAllBrands();
  const priceLimits = getPriceRange();

  // Sync state with URL params
  useEffect(() => {
    setSelectedCategory(categoryParam);
    setSearchQuery(searchParam);
    setSelectedSort(sortParam);
    setSelectedBrand(brandParam);
    setAvailableOnly(availableOnlyParam);
    setMinPrice(minPriceParam);
    setMaxPrice(maxPriceParam);
  }, [categoryParam, searchParam, sortParam, brandParam, availableOnlyParam, minPriceParam, maxPriceParam]);

  // Apply filters to URL
  const applyFilters = (newParams: Record<string, string | undefined>) => {
    const updated = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, val]) => {
      if (val) {
        updated.set(key, val);
      } else {
        updated.delete(key);
      }
    });
    setSearchParams(updated);
  };

  const handleCategoryChange = (slug: string) => {
    const next = selectedCategory === slug ? undefined : slug;
    setSelectedCategory(next || '');
    applyFilters({ categoria: next });
  };

  const handleClearFilters = () => {
    setSelectedCategory('');
    setSearchQuery('');
    setSelectedSort('featured');
    setSelectedBrand('');
    setAvailableOnly(false);
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setSearchParams(new URLSearchParams());
  };

  // Filter products
  const products = useMemo(() => {
    return filterProducts({
      category: selectedCategory || undefined,
      search: searchQuery || undefined,
      sortBy: selectedSort || 'featured',
      brand: selectedBrand || undefined,
      availability: availableOnly ? 'available' : 'all',
      minPrice,
      maxPrice,
    });
  }, [selectedCategory, searchQuery, selectedSort, selectedBrand, availableOnly, minPrice, maxPrice]);

  useEffect(() => {
    document.title = 'Veículos Elétricos | Da Hora Motos Catálogo Completo';
  }, []);

  const hasActiveFilters = Boolean(
    selectedCategory ||
    searchQuery ||
    selectedBrand ||
    availableOnly ||
    minPrice !== undefined ||
    maxPrice !== undefined
  );

  return (
    <div className="bg-dahora-ice min-h-screen py-8">
      <div className="container-dahora">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-dahora-gray mb-6" aria-label="Navegação estrutural">
          <Link to="/" className="hover:text-dahora-text transition-colors">Início</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-dahora-text font-semibold">Veículos Elétricos</span>
          {selectedCategory && (
            <>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-emerald-700 font-bold capitalize">
                {categories.find((c) => c.slug === selectedCategory)?.name || selectedCategory}
              </span>
            </>
          )}
        </nav>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text">
              {selectedCategory
                ? categories.find((c) => c.slug === selectedCategory)?.name || 'Veículos'
                : 'Catálogo de Veículos Elétricos'}
            </h1>
            <p className="text-xs sm:text-sm text-dahora-gray mt-1">
              {products.length} {products.length === 1 ? 'veículo encontrado' : 'veículos encontrados'}
            </p>
          </div>

          {/* Controls: Sort Dropdown + Mobile Filter Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex-1 btn-secondary text-xs py-2 px-4 flex items-center justify-center gap-2 bg-white"
            >
              <SlidersHorizontal className="w-4 h-4 text-dahora-emerald" />
              <span>Filtros</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-dahora-emerald" />
              )}
            </button>

            <div className="flex items-center gap-2 bg-white border border-dahora-border rounded-xl px-3 py-2 text-xs shadow-sm">
              <ArrowUpDown className="w-3.5 h-3.5 text-dahora-gray" />
              <label htmlFor="sort-select" className="sr-only">Ordenar por</label>
              <select
                id="sort-select"
                value={selectedSort || 'featured'}
                onChange={(e) => {
                  const val = e.target.value as ProductFilters['sortBy'];
                  setSelectedSort(val);
                  applyFilters({ ordem: val });
                }}
                className="bg-transparent font-medium text-dahora-text focus:outline-none cursor-pointer"
              >
                <option value="featured">Relevância / Destaques</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="name-asc">Nome (A - Z)</option>
                <option value="name-desc">Nome (Z - A)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filter Badges */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-white rounded-2xl border border-dahora-border shadow-sm">
            <span className="text-xs font-semibold text-dahora-gray mr-1">Filtros ativos:</span>
            {selectedCategory && (
              <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full font-medium">
                Categoria: {categories.find((c) => c.slug === selectedCategory)?.name}
                <button onClick={() => handleCategoryChange(selectedCategory)} className="hover:text-red-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-dahora-text px-2.5 py-1 rounded-full font-medium">
                Busca: "{searchQuery}"
                <button onClick={() => { setSearchQuery(''); applyFilters({ q: undefined }); }} className="hover:text-red-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {availableOnly && (
              <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
                Apenas Disponíveis
                <button onClick={() => { setAvailableOnly(false); applyFilters({ disponivel: undefined }); }} className="hover:text-red-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={handleClearFilters}
              className="text-xs text-red-600 hover:underline font-semibold ml-auto flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Limpar todos</span>
            </button>
          </div>
        )}

        {/* Main Grid: Sidebar Filters (Desktop) + Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden md:block space-y-6">
            <div className="bg-white rounded-2xl border border-dahora-border p-5 shadow-card space-y-6 sticky top-28">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h3 className="font-display font-bold text-sm text-dahora-text flex items-center gap-2">
                  <Filter className="w-4 h-4 text-dahora-emerald" />
                  <span>Filtrar Veículos</span>
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={handleClearFilters}
                    className="text-[11px] text-dahora-gray hover:text-red-500 transition-colors"
                  >
                    Limpar
                  </button>
                )}
              </div>

              {/* Categories Filter */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-dahora-gray">Categorias</h4>
                <div className="space-y-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.slug)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        selectedCategory === cat.slug
                          ? 'bg-dahora-emerald text-white'
                          : 'text-dahora-text hover:bg-gray-50'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-[10px] ${selectedCategory === cat.slug ? 'text-white' : 'text-dahora-gray'}`}>
                        {cat.productCount}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="space-y-2 pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-dahora-gray">Faixa de Preço</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="filter-min-price" className="text-[10px] text-gray-400 block mb-1 cursor-pointer">Mínimo</label>
                    <input
                      id="filter-min-price"
                      name="minPrice"
                      type="number"
                      placeholder={`R$ ${priceLimits.min}`}
                      value={minPrice ?? ''}
                      onChange={(e) => {
                        const val = e.target.value ? Number(e.target.value) : undefined;
                        setMinPrice(val);
                        applyFilters({ min: val ? String(val) : undefined });
                      }}
                      aria-label="Preço mínimo em Reais"
                      className="input-field text-xs py-1.5 px-2.5"
                    />
                  </div>
                  <div>
                    <label htmlFor="filter-max-price" className="text-[10px] text-gray-400 block mb-1 cursor-pointer">Máximo</label>
                    <input
                      id="filter-max-price"
                      name="maxPrice"
                      type="number"
                      placeholder={`R$ ${priceLimits.max}`}
                      value={maxPrice ?? ''}
                      onChange={(e) => {
                        const val = e.target.value ? Number(e.target.value) : undefined;
                        setMaxPrice(val);
                        applyFilters({ max: val ? String(val) : undefined });
                      }}
                      aria-label="Preço máximo em Reais"
                      className="input-field text-xs py-1.5 px-2.5"
                    />
                  </div>
                </div>
              </div>

              {/* Availability Filter */}
              <div className="pt-4 border-t border-gray-100">
                <label htmlFor="filter-available-only" className="flex items-center gap-2 cursor-pointer text-xs font-medium text-dahora-text">
                  <input
                    id="filter-available-only"
                    name="availableOnly"
                    type="checkbox"
                    checked={availableOnly}
                    onChange={(e) => {
                      setAvailableOnly(e.target.checked);
                      applyFilters({ disponivel: e.target.checked ? 'true' : undefined });
                    }}
                    aria-label="Filtrar somente modelos disponíveis em estoque"
                    className="rounded border-gray-300 text-dahora-emerald focus:ring-dahora-emerald accent-dahora-emerald w-4 h-4"
                  />
                  <span>Somente modelos disponíveis</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid Area */}
          <main className="md:col-span-3">
            {products.length === 0 ? (
              <div className="bg-white rounded-3xl border border-dahora-border p-12 text-center shadow-card space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-dahora-gray mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-lg text-dahora-text">
                  Nenhum veículo encontrado
                </h3>
                <p className="text-xs text-dahora-gray max-w-sm mx-auto">
                  Tente ajustar ou limpar seus filtros de pesquisa para visualizar outros modelos disponíveis.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="btn-primary text-xs py-2 px-5 inline-flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Limpar Filtros</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Slide-in Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden md:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-[85%] w-80 bg-white shadow-2xl p-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-display font-bold text-base text-dahora-text">Filtros de Busca</h3>
                <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-gray-500">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Categories */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-dahora-gray">Categorias</h4>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.slug)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium ${
                        selectedCategory === cat.slug
                          ? 'bg-dahora-emerald text-white'
                          : 'text-dahora-text hover:bg-gray-50'
                      }`}
                    >
                      {cat.name} ({cat.productCount})
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Availability */}
              <div className="pt-4 border-t">
                <label htmlFor="mobile-filter-available" className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                  <input
                    id="mobile-filter-available"
                    name="mobileAvailableOnly"
                    type="checkbox"
                    checked={availableOnly}
                    onChange={(e) => {
                      setAvailableOnly(e.target.checked);
                      applyFilters({ disponivel: e.target.checked ? 'true' : undefined });
                    }}
                    aria-label="Somente modelos disponíveis"
                    className="accent-dahora-emerald w-4 h-4"
                  />
                  <span>Somente modelos disponíveis</span>
                </label>
              </div>
            </div>

            <div className="pt-4 border-t space-y-2">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="btn-primary w-full py-2.5 text-xs"
              >
                Ver {products.length} resultados
              </button>
              {hasActiveFilters && (
                <button
                  onClick={() => { handleClearFilters(); setMobileFiltersOpen(false); }}
                  className="w-full text-center text-xs text-red-600 py-1"
                >
                  Limpar todos os filtros
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
