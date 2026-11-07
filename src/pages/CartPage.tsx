import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  Truck,
  Tag,
  ShieldCheck,
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { formatCurrency, formatCEP, isValidCEP, buildWhatsAppUrl, buildCartWhatsAppMessage } from '../lib/utils';
import { env } from '../config/env';
import { defaultStoreSettings } from '../data/demo';

export function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, subtotal, itemCount } = useCart();
  const [cep, setCep] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [shippingFeedback, setShippingFeedback] = useState<string | null>(null);
  const [couponFeedback, setCouponFeedback] = useState<string | null>(null);

  const whatsappNumber = env.WHATSAPP_NUMBER || defaultStoreSettings.whatsapp || '5514998877886';
  const whatsappUrl = buildWhatsAppUrl(whatsappNumber, buildCartWhatsAppMessage());

  const handleCalculateShipping = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidCEP(cep)) {
      setShippingFeedback('Por favor, informe um CEP válido com 8 dígitos.');
      return;
    }
    setShippingFeedback(
      'Entrega Grátis garantida para Macatuba e cidades em até 150 km com o veículo 100% montado, revisado e com suporte técnico! Para outras regiões, o frete especializado é confirmado na etapa seguinte.'
    );
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    setCouponFeedback('Serviço de cupons promocionais em homologação.');
  };

  if (items.length === 0) {
    return (
      <div className="bg-dahora-ice min-h-[70vh] flex items-center justify-center py-16">
        <div className="container-dahora text-center max-w-md bg-white rounded-3xl border border-dahora-border p-10 shadow-card space-y-4">
          <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center text-dahora-gray mx-auto">
            <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
          </div>
          <h1 className="font-display font-extrabold text-2xl text-dahora-text">
            Seu carrinho está vazio
          </h1>
          <p className="text-xs text-dahora-gray leading-relaxed">
            Nenhum veículo elétrico foi adicionado ainda. Explore nossos modelos e encontre o ideal para sua rotina.
          </p>
          <div className="pt-2">
            <Link to="/veiculos" className="btn-primary w-full py-3 text-xs inline-flex items-center justify-center gap-2">
              <span>EXPLORAR CATÁLOGO</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dahora-ice min-h-screen py-10">
      <div className="container-dahora">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text">
              Carrinho de Compras
            </h1>
            <p className="text-xs text-dahora-gray mt-1">
              Revise os veículos selecionados antes de prosseguir para a entrega.
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-xs text-red-600 hover:underline font-semibold"
          >
            Limpar carrinho
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Items List */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-dahora-border p-6 shadow-card space-y-6">
            <div className="divide-y divide-gray-100">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.variantId || 'default'}`}
                  className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  {/* Thumbnail & Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl bg-dahora-midnight border border-dahora-border-dark flex items-center justify-center text-dahora-emerald font-bold text-xs shrink-0">
                      {item.product.name.slice(0, 8)}
                    </div>
                    <div>
                      <Link
                        to={`/produto/${item.product.slug}`}
                        className="font-display font-bold text-sm sm:text-base text-dahora-text hover:text-dahora-emerald-dark transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-dahora-gray mt-0.5">
                        {item.product.power} • {item.product.range}
                      </p>
                      <span className="text-xs font-extrabold text-emerald-700 mt-1 block sm:hidden tabular-nums">
                        {formatCurrency(item.unitPrice)} cada
                      </span>
                    </div>
                  </div>

                  {/* Quantity & Total */}
                  <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-dahora-border rounded-xl bg-gray-50 overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.variantId)}
                        className="p-2 hover:bg-gray-200 text-slate-600 transition-colors"
                        aria-label="Diminuir"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.variantId)}
                        className="p-2 hover:bg-gray-200 text-slate-600 transition-colors"
                        aria-label="Aumentar"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right min-w-[100px]">
                      <div className="text-base font-extrabold text-dahora-text tabular-nums">
                        {formatCurrency(item.unitPrice * item.quantity)}
                      </div>
                      <span className="text-[11px] text-slate-600 font-medium hidden sm:block">
                        {formatCurrency(item.unitPrice)} unid.
                      </span>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.product.id, item.variantId)}
                      className="p-2 text-slate-500 hover:text-red-500 rounded-lg transition-colors"
                      title="Remover"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Back to catalog button */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <Link
                to="/veiculos"
                className="text-xs text-emerald-700 font-bold hover:text-emerald-800 hover:underline inline-flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Continuar comprando</span>
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-[#25D366] inline-flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Dúvidas no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Order Summary & Shipping Calculation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-dahora-border p-6 shadow-card space-y-6">
              <h2 className="font-display font-bold text-base text-dahora-text border-b border-gray-100 pb-3">
                Resumo do Pedido
              </h2>

              {/* Subtotal */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-dahora-gray">Subtotal dos veículos</span>
                <span className="font-bold text-dahora-text tabular-nums">
                  {formatCurrency(subtotal)}
                </span>
              </div>

              {/* Shipping Estimator Form */}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <label htmlFor="cart-cep-input" className="block text-xs font-semibold text-dahora-text flex items-center gap-1.5 cursor-pointer">
                  <Truck className="w-3.5 h-3.5 text-dahora-cyan" />
                  <span>Calcular Frete e Prazo</span>
                </label>
                <form onSubmit={handleCalculateShipping} className="flex gap-2">
                  <input
                    id="cart-cep-input"
                    name="cep"
                    type="text"
                    placeholder="00000-000"
                    maxLength={9}
                    value={cep}
                    onChange={(e) => setCep(formatCEP(e.target.value))}
                    aria-label="Digite seu CEP para calcular frete"
                    className="input-field text-xs py-2"
                  />
                  <button type="submit" className="btn-secondary text-xs px-4 py-2 shrink-0">
                    OK
                  </button>
                </form>
                {shippingFeedback && (
                  <p className="text-[11px] text-dahora-gray bg-gray-50 p-2.5 rounded-xl border border-gray-100 leading-relaxed">
                    {shippingFeedback}
                  </p>
                )}
              </div>

              {/* Coupon Form */}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <label htmlFor="cart-coupon-input" className="block text-xs font-semibold text-dahora-text flex items-center gap-1.5 cursor-pointer">
                  <Tag className="w-3.5 h-3.5 text-dahora-emerald" />
                  <span>Cupom de Desconto</span>
                </label>
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    id="cart-coupon-input"
                    name="couponCode"
                    type="text"
                    placeholder="Código do cupom"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    aria-label="Código do cupom de desconto"
                    className="input-field text-xs py-2 uppercase"
                  />
                  <button type="submit" className="btn-secondary text-xs px-4 py-2 shrink-0">
                    Aplicar
                  </button>
                </form>
                {couponFeedback && (
                  <p className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-xl">
                    {couponFeedback}
                  </p>
                )}
              </div>

              {/* Total Display */}
              <div className="pt-4 border-t border-gray-100 flex justify-between items-baseline">
                <span className="font-bold text-sm text-dahora-text">Total Estimado</span>
                <span className="text-2xl font-extrabold text-emerald-700 tabular-nums">
                  {formatCurrency(subtotal)}
                </span>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className="w-full btn-primary py-3.5 text-sm flex items-center justify-center gap-2 shadow-glow-emerald"
              >
                <span>PROSSEGUIR PARA O CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="text-[11px] text-dahora-gray flex items-center justify-center gap-1.5 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-dahora-emerald shrink-0" />
                <span>Compra segura com validação direta da concessionária</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
