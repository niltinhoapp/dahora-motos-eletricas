import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Zap,
  Search,
  ShoppingCart,
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { AnnouncementBar } from './AnnouncementBar';
import { MobileMenu } from './MobileMenu';
import { useCart } from '../../contexts/CartContext';
import { searchProducts, getAllCategories } from '../../services/productService';
import { formatCurrency, buildWhatsAppUrl } from '../../lib/utils';
import { defaultStoreSettings } from '../../data/demo';
import { env } from '../../config/env';
import type { Product } from '../../types';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { itemCount, toggleCart } = useCart();
  const navigate = useNavigate();
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const categoriesDropdownRef = useRef<HTMLDivElement>(null);

  const categories = getAllCategories();
  const whatsappNumber = env.WHATSAPP_NUMBER || defaultStoreSettings.whatsapp || '5514998877886';
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    'Olá! Estou no site da Da Hora Motos Elétricas e gostaria de atendimento.'
  );

  // Scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click to close dropdowns
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setSearchDropdownOpen(false);
      }
      if (
        categoriesDropdownRef.current &&
        !categoriesDropdownRef.current.contains(e.target as Node)
      ) {
        setCategoriesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Live search handler
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setSearchDropdownOpen(false);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const results = searchProducts(searchQuery.trim()).slice(0, 5);
      setSearchResults(results);
      setSearchDropdownOpen(true);
      setIsSearching(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchDropdownOpen(false);
      navigate(`/veiculos?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dahora-midnight/95 backdrop-blur-md shadow-lg border-b border-dahora-border-dark' 
          : 'bg-dahora-midnight border-b border-dahora-border-dark/60'
      }`}>
        <AnnouncementBar />

        <div className="container-dahora">
          <div className="h-20 flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group shrink-0 focus-visible:outline-dahora-cyan"
              aria-label="Da Hora Motos Elétricas — Início"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-dahora-emerald to-dahora-cyan flex items-center justify-center text-dahora-black shadow-glow-emerald group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6 fill-dahora-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight text-white leading-none">
                  DA HORA
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-dahora-cyan leading-tight mt-0.5">
                  Motos Elétricas
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-300">
              <Link
                to="/veiculos"
                className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                Veículos
              </Link>

              {/* Categories Dropdown */}
              <div className="relative" ref={categoriesDropdownRef}>
                <button
                  type="button"
                  onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                  className="flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-dahora-cyan"
                  aria-expanded={categoriesDropdownOpen}
                >
                  <span>Categorias</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${categoriesDropdownOpen ? 'rotate-180 text-dahora-cyan' : ''}`} />
                </button>

                {categoriesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-dahora-surface-dark border border-dahora-border-dark rounded-2xl shadow-premium p-2 animate-scale-in">
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/categoria/${cat.slug}`}
                        onClick={() => setCategoriesDropdownOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        <div>
                          <p className="font-semibold">{cat.name}</p>
                          <p className="text-xs text-gray-400">{cat.description.slice(0, 30)}...</p>
                        </div>
                        <span className="text-xs bg-white/5 px-2 py-0.5 rounded-full text-gray-400">
                          {cat.productCount}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/comparar"
                className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                Comparar
              </Link>

              <Link
                to="/simulador-economia"
                className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5 text-dahora-emerald hover:text-dahora-emerald-light"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Simulador</span>
              </Link>

              <Link
                to="/showroom"
                className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                Showroom
              </Link>

              <Link
                to="/sobre"
                className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                Sobre
              </Link>

              <Link
                to="/black-friday"
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center gap-1.5 border border-red-400/40"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span>Black Friday</span>
              </Link>
            </nav>

            {/* Search Bar (Desktop) */}
            <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm relative" ref={searchContainerRef}>
              <form onSubmit={handleSearchSubmit} className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => {
                      if (searchResults.length > 0) setSearchDropdownOpen(true);
                    }}
                    placeholder="Buscar motos, scooters, triciclos..."
                    className="w-full bg-dahora-surface-dark border border-dahora-border-dark text-white placeholder:text-gray-500 text-xs sm:text-sm pl-10 pr-4 py-2 rounded-xl focus:border-dahora-cyan focus:outline-none focus:ring-1 focus:ring-dahora-cyan transition-colors"
                    aria-label="Buscar produtos no catálogo"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="text-gray-400 hover:text-white absolute right-3 top-1/2 -translate-y-1/2"
                      aria-label="Limpar busca"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </form>

              {/* Live Search Results Dropdown */}
              {searchDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-dahora-surface-dark border border-dahora-border-dark rounded-2xl shadow-premium p-2 z-50 animate-scale-in">
                  {isSearching ? (
                    <div className="p-4 text-center text-xs text-gray-400">
                      Buscando veículos...
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="space-y-1">
                      <div className="px-3 py-1 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                        Resultados encontrados
                      </div>
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          to={`/produto/${product.slug}`}
                          onClick={() => setSearchDropdownOpen(false)}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-lg bg-dahora-midnight border border-dahora-border-dark flex items-center justify-center text-dahora-cyan text-xs font-mono shrink-0">
                            {product.name.slice(0, 6)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white group-hover:text-dahora-cyan transition-colors truncate">
                              {product.name}
                            </p>
                            <p className="text-xs text-dahora-emerald font-semibold">
                              {formatCurrency(product.promotionalPrice || product.price)}
                            </p>
                          </div>
                        </Link>
                      ))}
                      <div className="pt-2 border-t border-dahora-border-dark">
                        <Link
                          to={`/veiculos?q=${encodeURIComponent(searchQuery)}`}
                          onClick={() => setSearchDropdownOpen(false)}
                          className="flex items-center justify-center gap-1.5 py-2 text-xs text-dahora-cyan hover:underline font-medium"
                        >
                          <span>Ver todos os resultados</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 text-center text-xs text-gray-400">
                      Nenhum veículo encontrado para "{searchQuery}".
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Actions: WhatsApp + Cart + Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* WhatsApp Button (Desktop) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-dahora-surface-dark border border-dahora-border-dark text-gray-200 hover:text-white hover:border-[#25D366] transition-all duration-200"
                aria-label="Falar com especialista no WhatsApp oficial"
              >
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Atendimento WhatsApp</span>
              </a>

              {/* Cart Button */}
              <button
                onClick={toggleCart}
                className="relative p-2.5 rounded-xl bg-dahora-surface-dark border border-dahora-border-dark text-gray-200 hover:text-white hover:border-dahora-emerald transition-colors focus-visible:outline-dahora-cyan"
                aria-label={`Abrir carrinho com ${itemCount} itens`}
              >
                <ShoppingCart className="w-5 h-5 text-dahora-emerald" />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-dahora-emerald text-white text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-glow-emerald tabular-nums">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-xl bg-dahora-surface-dark border border-dahora-border-dark text-gray-200 hover:text-white focus-visible:outline-dahora-cyan"
                aria-label="Abrir menu mobile"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
