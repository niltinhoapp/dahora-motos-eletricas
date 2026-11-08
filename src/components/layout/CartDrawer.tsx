import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../lib/utils';

export function CartDrawer() {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  // Close drawer with Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        setCartOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setCartOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Carrinho de compras">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-dahora-surface-dark border-l border-dahora-border-dark text-white flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-dahora-border-dark flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-dahora-emerald" />
              <h2 className="font-display font-bold text-lg">Seu Carrinho</h2>
              <span className="text-xs bg-dahora-emerald/10 text-dahora-emerald border border-dahora-emerald/20 px-2 py-0.5 rounded-full font-medium">
                {itemCount} {itemCount === 1 ? 'item' : 'itens'}
              </span>
            </div>
            <button
              onClick={() => setCartOpen(false)}
              className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus-visible:outline-dahora-cyan"
              aria-label="Fechar carrinho"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 mb-4">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="font-semibold text-base mb-1">Seu carrinho está vazio</h3>
                <p className="text-sm text-gray-400 max-w-xs mb-6">
                  Explore nosso catálogo e encontre o veículo elétrico ideal para você.
                </p>
                <Link
                  to="/veiculos"
                  onClick={() => setCartOpen(false)}
                  className="btn-primary text-sm py-2.5 px-5"
                >
                  Explorar Veículos
                </Link>
              </div>
            ) : (
              <ul className="divide-y divide-dahora-border-dark space-y-4">
                {items.map((item) => (
                  <li key={`${item.product.id}-${item.variantId || 'default'}`} className="pt-4 first:pt-0 flex gap-4">
                    {/* Thumbnail */}
                    <div className="w-20 h-20 rounded-xl bg-dahora-midnight border border-dahora-border-dark flex items-center justify-center shrink-0 overflow-hidden relative group">
                      {item.product.images?.[0]?.url ? (
                        <img
                          src={item.product.images[0].url}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-xs text-center text-dahora-cyan font-mono p-1">
                          {item.product.name.slice(0, 10)}
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <Link
                            to={`/produto/${item.product.slug}`}
                            onClick={() => setCartOpen(false)}
                            className="font-medium text-sm hover:text-dahora-cyan transition-colors line-clamp-1"
                          >
                            {item.product.name}
                          </Link>
                          {item.variantId && (
                            <p className="text-xs text-gray-400">Opção: {item.variantId}</p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.variantId)}
                          className="text-gray-500 hover:text-red-400 p-1 transition-colors"
                          title="Remover item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-dahora-border-dark rounded-lg overflow-hidden bg-dahora-midnight">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.variantId)}
                            className="p-1 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                            aria-label="Diminuir quantidade"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 text-xs font-semibold tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.variantId)}
                            className="p-1 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                            aria-label="Aumentar quantidade"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="text-sm font-bold text-dahora-emerald tabular-nums">
                            {formatCurrency(item.unitPrice * item.quantity)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer / Summary */}
          {items.length > 0 && (
            <div className="p-5 border-t border-dahora-border-dark bg-dahora-midnight/80 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Subtotal estimado</span>
                <span className="font-extrabold text-lg text-white tabular-nums">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Frete e prazos calculados na etapa de finalização da compra.
              </p>

              <div className="space-y-2">
                <Link
                  to="/carrinho"
                  onClick={() => setCartOpen(false)}
                  className="w-full btn-primary py-3 flex items-center justify-center gap-2"
                >
                  <span>Ver Carrinho Completo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/checkout"
                  onClick={() => setCartOpen(false)}
                  className="w-full btn-secondary text-white border-dahora-border-dark hover:bg-white/5 py-2.5 flex items-center justify-center text-sm"
                >
                  Finalizar Compra
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
