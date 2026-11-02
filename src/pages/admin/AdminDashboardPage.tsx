import { Link } from 'react-router-dom';
import {
  Package,
  ShoppingBag,
  TrendingUp,
  Boxes,
  Clock,
  CheckCircle2,
  Truck,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { getAllProducts } from '../../services/productService';
import { formatCurrency } from '../../lib/utils';

export function AdminDashboardPage() {
  const products = getAllProducts();
  const availableProducts = products.filter((p) => p.isAvailable);
  const totalCatalogValue = products.reduce(
    (sum, p) => sum + (p.promotionalPrice || p.price) * p.stock,
    0
  );

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Title */}
      <div>
        <h1 className="font-display font-bold text-2xl text-white">
          Visão Geral do E-commerce
        </h1>
        <p className="text-xs text-gray-400 mt-1">
          Métricas calculadas em tempo real com base no catálogo e nas operações ativas.
        </p>
      </div>

      {/* Metrics 4-Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-dahora-surface-dark border border-dahora-border-dark p-5 rounded-2xl space-y-3">
          <div className="flex items-center justify-between text-gray-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Total de Modelos</span>
            <Package className="w-5 h-5 text-dahora-emerald" />
          </div>
          <div className="text-3xl font-extrabold text-white tabular-nums">
            {products.length}
          </div>
          <p className="text-[11px] text-dahora-emerald font-semibold">
            {availableProducts.length} disponíveis para compra
          </p>
        </div>

        <div className="bg-dahora-surface-dark border border-dahora-border-dark p-5 rounded-2xl space-y-3">
          <div className="flex items-center justify-between text-gray-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Estoque Total</span>
            <Boxes className="w-5 h-5 text-dahora-cyan" />
          </div>
          <div className="text-3xl font-extrabold text-white tabular-nums">
            {products.reduce((acc, p) => acc + p.stock, 0)}
          </div>
          <p className="text-[11px] text-gray-400">
            Unidades físicas alocadas
          </p>
        </div>

        <div className="bg-dahora-surface-dark border border-dahora-border-dark p-5 rounded-2xl space-y-3">
          <div className="flex items-center justify-between text-gray-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Patrimônio Catálogo</span>
            <TrendingUp className="w-5 h-5 text-dahora-emerald" />
          </div>
          <div className="text-xl font-extrabold text-dahora-emerald tabular-nums">
            {formatCurrency(totalCatalogValue)}
          </div>
          <p className="text-[11px] text-gray-400">
            Valor de estoque cadastrado
          </p>
        </div>

        <div className="bg-dahora-surface-dark border border-dahora-border-dark p-5 rounded-2xl space-y-3">
          <div className="flex items-center justify-between text-gray-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Status Logístico</span>
            <Truck className="w-5 h-5 text-dahora-cyan" />
          </div>
          <div className="text-3xl font-extrabold text-white tabular-nums">
            100%
          </div>
          <p className="text-[11px] text-dahora-cyan font-semibold">
            Revisão técnica pré-embarque
          </p>
        </div>
      </div>

      {/* Operational Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Products */}
        <div className="bg-dahora-surface-dark border border-dahora-border-dark rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-dahora-border-dark pb-3">
            <h2 className="font-display font-bold text-sm text-white">
              Veículos no Catálogo Ativo
            </h2>
            <Link to="/admin/produtos" className="text-xs text-dahora-cyan hover:underline font-semibold flex items-center gap-1">
              <span>Gerenciar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-dahora-border-dark/60 text-xs">
            {products.slice(0, 5).map((p) => (
              <div key={p.id} className="py-3 flex items-center justify-between">
                <div>
                  <p className="font-bold text-white">{p.name}</p>
                  <p className="text-[11px] text-gray-400">{p.power} • {p.range}</p>
                </div>
                <div className="text-right">
                  <p className="font-extrabold text-dahora-emerald">
                    {formatCurrency(p.promotionalPrice || p.price)}
                  </p>
                  <span className={`text-[10px] ${p.isAvailable ? 'text-dahora-emerald' : 'text-gray-500'}`}>
                    {p.isAvailable ? 'Disponível' : 'Sob consulta'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links & Short cuts */}
        <div className="bg-dahora-surface-dark border border-dahora-border-dark rounded-2xl p-6 space-y-4">
          <div className="border-b border-dahora-border-dark pb-3">
            <h2 className="font-display font-bold text-sm text-white">
              Ações Rápidas de Gestão
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <Link
              to="/admin/produtos"
              className="p-4 rounded-xl bg-dahora-midnight border border-dahora-border-dark hover:border-dahora-emerald transition-colors space-y-1 block"
            >
              <Package className="w-5 h-5 text-dahora-emerald mb-2" />
              <h3 className="font-bold text-white">Cadastrar Veículo</h3>
              <p className="text-gray-400 text-[11px]">Adicione fotos e especificações</p>
            </Link>

            <Link
              to="/admin/pedidos"
              className="p-4 rounded-xl bg-dahora-midnight border border-dahora-border-dark hover:border-dahora-cyan transition-colors space-y-1 block"
            >
              <ShoppingBag className="w-5 h-5 text-dahora-cyan mb-2" />
              <h3 className="font-bold text-white">Consultar Pedidos</h3>
              <p className="text-gray-400 text-[11px]">Acompanhe status e envios</p>
            </Link>

            <Link
              to="/admin/estoque"
              className="p-4 rounded-xl bg-dahora-midnight border border-dahora-border-dark hover:border-dahora-emerald transition-colors space-y-1 block"
            >
              <Boxes className="w-5 h-5 text-dahora-emerald mb-2" />
              <h3 className="font-bold text-white">Controle de Estoque</h3>
              <p className="text-gray-400 text-[11px]">Ajuste quantidades disponíveis</p>
            </Link>

            <Link
              to="/admin/configuracoes"
              className="p-4 rounded-xl bg-dahora-midnight border border-dahora-border-dark hover:border-dahora-cyan transition-colors space-y-1 block"
            >
              <TrendingUp className="w-5 h-5 text-dahora-cyan mb-2" />
              <h3 className="font-bold text-white">Configurações Gerais</h3>
              <p className="text-gray-400 text-[11px]">WhatsApp, frete e loja</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
