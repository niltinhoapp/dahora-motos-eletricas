import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Zap,
  BatteryCharging,
  Gauge,
  Clock,
  ShieldCheck,
  Truck,
  MessageSquare,
  ShoppingCart,
  ChevronRight,
  ArrowLeft,
  Check,
  Plus,
  Minus,
  AlertCircle
} from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../services/productService';
import { useCart } from '../contexts/CartContext';
import { formatCurrency, formatDiscount, buildWhatsAppUrl, buildProductWhatsAppMessage } from '../lib/utils';
import { ProductCard } from '../components/product/ProductCard';
import { env } from '../config/env';
import { defaultStoreSettings } from '../data/demo';

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = slug ? getProductBySlug(slug) : undefined;
  const { addItem } = useCart();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'descricao' | 'especificacoes' | 'legal' | 'entrega'>('descricao');
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Da Hora Motos Elétricas Macatuba`;
      window.scrollTo(0, 0);
      setSelectedImageIndex(0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container-dahora py-24 text-center space-y-4">
        <h1 className="font-display font-bold text-2xl text-dahora-text">
          Veículo não encontrado
        </h1>
        <p className="text-sm text-dahora-gray">
          O modelo que você procura não está cadastrado ou foi removido.
        </p>
        <Link to="/veiculos" className="btn-primary text-xs py-2.5 px-6 inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao catálogo de veículos</span>
        </Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product, 4);
  const currentPrice = product.promotionalPrice || product.price;
  const hasDiscount = product.promotionalPrice && product.promotionalPrice < product.price;

  const whatsappNumber = env.WHATSAPP_NUMBER || defaultStoreSettings.whatsapp || '5514998877886';
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    buildProductWhatsAppMessage(product.name, window.location.href)
  );

  const handleAddToCart = () => {
    if (!product.isAvailable) return;
    addItem(product, undefined, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    if (!product.isAvailable) return;
    addItem(product, undefined, quantity);
    navigate('/checkout');
  };

  const activeImage = product.images?.[selectedImageIndex]?.url || product.images?.[0]?.url;

  return (
    <div className="bg-dahora-ice min-h-screen py-8 pb-24 md:pb-12">
      <div className="container-dahora">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-dahora-gray mb-6">
          <Link to="/" className="hover:text-dahora-text">Início</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/veiculos" className="hover:text-dahora-text">Veículos</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-emerald-700 font-bold">{product.name}</span>
        </nav>

        {/* Top Product Showcase (Two-Column Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-3xl border border-dahora-border p-6 sm:p-10 shadow-card mb-12">
          {/* Left Column: Gallery & Media */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image - Enquadramento completo do veículo */}
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-dahora-border-dark flex items-center justify-center relative overflow-hidden group shadow-inner">
              {activeImage ? (
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-contain p-6 sm:p-8 group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-dahora-emerald">
                  <Zap className="w-12 h-12 fill-dahora-emerald" />
                </div>
              )}

              {/* Status Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                {product.isNew && (
                  <span className="bg-dahora-cyan text-dahora-black text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                    Lançamento
                  </span>
                )}
                {hasDiscount && (
                  <span className="badge-promo text-xs shadow-md">
                    {formatDiscount(product.price, product.promotionalPrice!)} OFF
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {product.images && product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-dahora-emerald ring-2 ring-dahora-emerald/20 scale-105'
                        : 'border-dahora-border hover:border-dahora-gray opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} alt={`Foto ${idx + 1}`} className="w-full h-full object-contain p-1 bg-dahora-midnight" />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Specs Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {product.power && (
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
                  <span className="text-[10px] text-dahora-gray font-bold uppercase block">Potência</span>
                  <strong className="text-xs sm:text-sm text-dahora-text">{product.power}</strong>
                </div>
              )}
              {product.range && (
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
                  <span className="text-[10px] text-slate-600 font-bold uppercase block">Autonomia</span>
                  <strong className="text-xs sm:text-sm text-emerald-700 font-extrabold">{product.range}</strong>
                </div>
              )}
              {product.maxSpeed && (
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
                  <span className="text-[10px] text-slate-600 font-bold uppercase block">Velocidade Máx.</span>
                  <strong className="text-xs sm:text-sm text-dahora-text">{product.maxSpeed}</strong>
                </div>
              )}
              {product.chargingTime && (
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
                  <span className="text-[10px] text-slate-600 font-bold uppercase block">Recarga</span>
                  <strong className="text-xs sm:text-sm text-dahora-text">{product.chargingTime}</strong>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Pricing & Purchase Controls */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Title */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  {product.brand} • MACATUBA/SP
                </span>
                <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text mt-1">
                  {product.name}
                </h1>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Price Box */}
              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                {hasDiscount && (
                  <span className="text-xs text-slate-600 line-through block tabular-nums">
                    De {formatCurrency(product.price)}
                  </span>
                )}
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-slate-600 font-semibold">Por</span>
                  <span className="text-3xl font-extrabold text-dahora-text tabular-nums">
                    {formatCurrency(currentPrice)}
                  </span>
                </div>

                {product.pixPrice && (
                  <div className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 p-2 rounded-xl inline-block">
                    {formatCurrency(product.pixPrice)} à vista com desconto no Pix
                  </div>
                )}

                {product.installments && (
                  <p className="text-xs text-slate-600">
                    ou em até {product.installments.count}x de {formatCurrency(product.installments.value)} sem juros (ou em até 21x no cartão)
                  </p>
                )}
              </div>

              {/* Quantity selector */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-dahora-text">Quantidade:</span>
                <div className="flex items-center border border-dahora-border rounded-xl bg-white overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 text-slate-600 transition-colors"
                    aria-label="Diminuir quantidade"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 text-slate-600 transition-colors"
                    aria-label="Aumentar quantidade"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-xs text-emerald-700 font-bold">
                  Disponível em Macatuba
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <button
                onClick={handleBuyNow}
                disabled={!product.isAvailable}
                className="w-full btn-primary text-sm py-3.5 flex items-center justify-center gap-2 shadow-glow-emerald"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>COMPRAR AGORA</span>
              </button>

              <button
                onClick={handleAddToCart}
                disabled={!product.isAvailable}
                className="w-full btn-secondary text-sm py-3 flex items-center justify-center gap-2 bg-white"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-dahora-emerald" />
                    <span>Adicionado ao Carrinho!</span>
                  </>
                ) : (
                  <>
                    <span>Adicionar ao Carrinho</span>
                  </>
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-xs py-3 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Tirar Dúvidas com Vendedor (WhatsApp)</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-dahora-gray pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-dahora-emerald shrink-0" />
                <span>Revisão técnica pré-embarque</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-dahora-cyan shrink-0" />
                <span>Envio para todo o Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs */}
        <div className="bg-white rounded-3xl border border-dahora-border p-6 sm:p-10 shadow-card mb-16">
          <div className="flex border-b border-gray-200 gap-4 sm:gap-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('descricao')}
              className={`pb-4 text-sm font-bold transition-colors relative whitespace-nowrap ${
                activeTab === 'descricao'
                  ? 'text-dahora-emerald border-b-2 border-dahora-emerald'
                  : 'text-dahora-gray hover:text-dahora-text'
              }`}
            >
              Descrição Geral
            </button>
            <button
              onClick={() => setActiveTab('especificacoes')}
              className={`pb-4 text-sm font-bold transition-colors relative whitespace-nowrap ${
                activeTab === 'especificacoes'
                  ? 'text-dahora-emerald border-b-2 border-dahora-emerald'
                  : 'text-dahora-gray hover:text-dahora-text'
              }`}
            >
              Ficha Técnica
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={`pb-4 text-sm font-bold transition-colors relative whitespace-nowrap ${
                activeTab === 'legal'
                  ? 'text-dahora-emerald border-b-2 border-dahora-emerald'
                  : 'text-dahora-gray hover:text-dahora-text'
              }`}
            >
              Legislação e Documentação
            </button>
            <button
              onClick={() => setActiveTab('entrega')}
              className={`pb-4 text-sm font-bold transition-colors relative whitespace-nowrap ${
                activeTab === 'entrega'
                  ? 'text-dahora-emerald border-b-2 border-dahora-emerald'
                  : 'text-dahora-gray hover:text-dahora-text'
              }`}
            >
              Lojas Físicas & Entrega
            </button>
          </div>

          <div className="pt-8">
            {activeTab === 'descricao' && (
              <div className="prose max-w-none text-sm text-dahora-text leading-relaxed space-y-4">
                <p>{product.description}</p>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-xs text-dahora-gray">
                  <strong>Observação importante:</strong> Os dados de velocidade máxima e autonomia anunciada dependem de fatores externos como peso do condutor, inclinação da via e modo de condução selecionado.
                </div>
              </div>
            )}

            {activeTab === 'especificacoes' && (
              <div className="space-y-4">
                <h3 className="font-display font-bold text-base text-dahora-text mb-4">
                  Especificações Técnicas
                </h3>
                <div className="rounded-2xl border border-gray-200 overflow-hidden">
                  <table className="w-full text-xs text-left">
                    <tbody className="divide-y divide-gray-100">
                      <tr className="bg-gray-50">
                        <td className="p-3 font-semibold text-dahora-gray w-1/3">Motor / Potência</td>
                        <td className="p-3 font-medium text-dahora-text">{product.power || 'Consulte'}</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-dahora-gray">Bateria</td>
                        <td className="p-3 font-medium text-dahora-text">{product.batteryType || 'Consulte'}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 font-semibold text-dahora-gray">Autonomia Estimada</td>
                        <td className="p-3 font-medium text-dahora-text">{product.range || 'Consulte'}</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-dahora-gray">Velocidade Máxima Declarada</td>
                        <td className="p-3 font-medium text-dahora-text">{product.maxSpeed || 'Consulte'}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 font-semibold text-dahora-gray">Tempo de Recarga</td>
                        <td className="p-3 font-medium text-dahora-text">{product.chargingTime || 'Consulte'}</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-dahora-gray">Garantia</td>
                        <td className="p-3 font-medium text-dahora-text">{product.warranty}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'legal' && (
              <div className="space-y-4">
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">Classificação Legal (Resolução Contran 996/2023)</h4>
                    <p className="mt-1 leading-relaxed">
                      A regulamentação brasileira define requisitos específicos de habilitação (ACC ou CNH A), registro e emplacamento conforme a potência e velocidade do veículo.
                    </p>
                    <p className="mt-2 font-semibold">
                      Antes da compra, consulte nossa equipe comercial para orientações detalhadas sobre a classificação exata deste modelo em sua localidade.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'entrega' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-dahora-text">
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                  <h4 className="font-bold text-sm text-dahora-text flex items-center gap-2">
                    <Truck className="w-4 h-4 text-dahora-emerald" />
                    <span>Envio Montado e Revisado</span>
                  </h4>
                  <p className="text-dahora-gray leading-relaxed">
                    Você pode optar por retirar diretamente em nosso showroom em Macatuba ou receber em sua cidade com veículo inspecionado e pronto para uso.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                  <h4 className="font-bold text-sm text-dahora-text flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-dahora-cyan" />
                    <span>Suporte Local em Macatuba</span>
                  </h4>
                  <p className="text-dahora-gray leading-relaxed">
                    Dispomos de 2 unidades físicas em Macatuba (Alameda Tiradentes, 348 e Rua José Cruzerá, 241, Jardim Planalto) para compra de veículos 0km, test-ride, assistência técnica especializada, peças de reposição e oficina mecânica própria.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <h2 className="font-display font-bold text-xl text-dahora-text">
              Veículos Semelhantes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Mobile Purchase Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-dahora-border p-3 z-40 shadow-2xl safe-bottom flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-dahora-gray block leading-none">Preço à vista</span>
          <span className="text-base font-extrabold text-dahora-text tabular-nums leading-tight">
            {formatCurrency(currentPrice)}
          </span>
        </div>
        <button
          onClick={handleBuyNow}
          className="btn-primary py-2.5 px-6 text-xs font-bold"
        >
          COMPRAR
        </button>
      </div>
    </div>
  );
}
