import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Gauge,
  BatteryCharging,
  ShoppingCart,
  Check,
  Image as ImageIcon
} from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { useCart } from '../../contexts/CartContext';
import { formatCurrency, formatDiscount, buildWhatsAppUrl, buildProductWhatsAppMessage } from '../../lib/utils';
import { env } from '../../config/env';
import { defaultStoreSettings } from '../../data/demo';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const hasDiscount =
    product.promotionalPrice && product.promotionalPrice < product.price;
  const currentPrice = product.promotionalPrice || product.price;

  const whatsappNumber = env.WHATSAPP_NUMBER || defaultStoreSettings.whatsapp || '5514998877886';
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    buildProductWhatsAppMessage(product.name, `${window.location.origin}/produto/${product.slug}`)
  );

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!product.isAvailable) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const mainImage = product.images?.[0]?.url;

  return (
    <article className="card-product group flex flex-col h-full bg-white relative">
      {/* Visual media container */}
      <Link
        to={`/produto/${product.slug}`}
        aria-label={`Ver detalhes de ${product.name}`}
        className="block relative aspect-[4/3] bg-dahora-midnight overflow-hidden border-b border-dahora-border"
      >
        {mainImage && !imgError ? (
          <img
            src={mainImage}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-dahora-surface-dark to-dahora-midnight flex flex-col items-center justify-center p-6 text-center transition-transform duration-500 group-hover:scale-105">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-dahora-emerald mb-2 shadow-glow-emerald">
              <Zap className="w-8 h-8 fill-dahora-emerald" />
            </div>
            <span className="text-xs font-mono text-gray-400">
              {product.brand} • {product.model}
            </span>
          </div>
        )}

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="bg-dahora-cyan text-dahora-black text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm">
              Lançamento
            </span>
          )}
          {hasDiscount && (
            <span className="badge-promo text-[10px] shadow-sm">
              {formatDiscount(product.price, product.promotionalPrice!)} OFF
            </span>
          )}
        </div>

        {/* Availability Badge */}
        <div className="absolute top-3 right-3 z-10">
          {product.isAvailable ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-dahora-emerald/20 text-dahora-emerald px-2 py-0.5 rounded-full backdrop-blur-md border border-dahora-emerald/40 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-dahora-emerald animate-pulse" />
              Pronta Entrega
            </span>
          ) : (
            <span className="badge-unavailable text-[10px]">
              Sob consulta
            </span>
          )}
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Name */}
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
            {product.categoryId === 'cat-motos' && 'Moto Elétrica'}
            {product.categoryId === 'cat-scooters' && 'Scooter Elétrica'}
            {product.categoryId === 'cat-triciclos' && 'Triciclo Elétrico'}
            {product.categoryId === 'cat-patinetes' && 'Patinete / Drift'}
          </div>

          <h3 className="font-display font-bold text-base text-dahora-text group-hover:text-emerald-700 transition-colors line-clamp-1 mb-2">
            <Link to={`/produto/${product.slug}`} aria-label={`Ver especificações de ${product.name}`}>
              {product.name}
            </Link>
          </h3>

          {/* Quick Specifications */}
          <div className="grid grid-cols-2 gap-2 text-xs text-dahora-gray-light bg-gray-50 p-2.5 rounded-xl border border-gray-100 mb-4">
            {product.power && (
              <div className="flex items-center gap-1.5 text-dahora-text font-medium">
                <Zap className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span className="truncate">{product.power}</span>
              </div>
            )}
            {product.range && (
              <div className="flex items-center gap-1.5 text-dahora-text font-medium">
                <BatteryCharging className="w-3.5 h-3.5 text-dahora-cyan shrink-0" />
                <span className="truncate">{product.range}</span>
              </div>
            )}
            {product.maxSpeed && (
              <div className="flex items-center gap-1.5 text-dahora-text font-medium col-span-2">
                <Gauge className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                <span className="truncate">{product.maxSpeed}</span>
              </div>
            )}
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3 border-t border-dahora-border/60">
          {/* Price display */}
          <div className="mb-3">
            {hasDiscount && (
              <span className="text-xs text-slate-600 line-through block mb-0.5 tabular-nums">
                {formatCurrency(product.price)}
              </span>
            )}
            <div className="text-xl font-extrabold text-dahora-text tracking-tight tabular-nums">
              {formatCurrency(currentPrice)}
            </div>

            {product.pixPrice && (
              <div className="text-xs font-bold text-emerald-700 mt-0.5">
                {formatCurrency(product.pixPrice)} à vista no Pix
              </div>
            )}

            {product.installments && (
              <div className="text-[11px] text-slate-600 font-medium mt-0.5">
                ou {product.installments.count}x de {formatCurrency(product.installments.value)} sem juros
              </div>
            )}
          </div>

          {/* Actions: Add to Cart + WhatsApp */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddToCart}
              disabled={!product.isAvailable}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs transition-all duration-200 flex items-center justify-center gap-1.5 ${
                added
                  ? 'bg-dahora-emerald text-dahora-black font-extrabold shadow-sm'
                  : 'btn-primary'
              }`}
              aria-label={`Comprar ${product.name}`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Adicionado!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  <span>Comprar</span>
                </>
              )}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-gray-200 text-gray-700 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-colors focus-visible:outline-[#25D366]"
              title="Tirar dúvidas no WhatsApp"
              aria-label={`Falar sobre ${product.name} no WhatsApp`}
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="card-product flex flex-col h-full bg-white">
      <div className="aspect-[4/3] bg-gray-200 animate-pulse" />
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="w-20 h-3 bg-gray-200 rounded animate-pulse" />
          <div className="w-3/4 h-5 bg-gray-200 rounded animate-pulse" />
          <div className="w-full h-12 bg-gray-100 rounded-xl animate-pulse mt-3" />
        </div>
        <div className="pt-3 border-t border-gray-100 space-y-2">
          <div className="w-24 h-6 bg-gray-200 rounded animate-pulse" />
          <div className="w-full h-10 bg-gray-200 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
