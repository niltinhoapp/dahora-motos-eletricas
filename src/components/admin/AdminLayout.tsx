import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  Layers,
  ShoppingBag,
  Users,
  Boxes,
  Settings,
  LogOut,
  Zap,
  ExternalLink
} from 'lucide-react';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

export function AdminLayout() {
  const { logout, isAuthenticated } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    navigate('/admin/login');
    return null;
  }

  const navItems = [
    { label: 'Dashboard', path: '/admin', icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: 'Produtos', path: '/admin/produtos', icon: <Package className="w-4 h-4" /> },
    { label: 'Categorias', path: '/admin/categorias', icon: <Layers className="w-4 h-4" /> },
    { label: 'Pedidos', path: '/admin/pedidos', icon: <ShoppingBag className="w-4 h-4" /> },
    { label: 'Clientes', path: '/admin/clientes', icon: <Users className="w-4 h-4" /> },
    { label: 'Estoque', path: '/admin/estoque', icon: <Boxes className="w-4 h-4" /> },
    { label: 'Configurações', path: '/admin/configuracoes', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-dahora-midnight text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-dahora-surface-dark border-r border-dahora-border-dark flex flex-col justify-between shrink-0">
        <div>
          {/* Logo */}
          <div className="p-6 border-b border-dahora-border-dark flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-dahora-emerald/20 border border-dahora-emerald/40 flex items-center justify-center text-dahora-emerald">
                <Zap className="w-4 h-4 fill-dahora-emerald" />
              </div>
              <div>
                <span className="font-display font-bold text-sm tracking-wide block leading-none">
                  DA HORA
                </span>
                <span className="text-[10px] text-dahora-cyan uppercase font-mono tracking-wider">
                  Admin Panel
                </span>
              </div>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="p-4 space-y-1 text-xs">
            {navItems.map((item) => {
              const active =
                item.path === '/admin'
                  ? location.pathname === '/admin'
                  : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors ${
                    active
                      ? 'bg-dahora-emerald text-white font-bold'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-dahora-border-dark space-y-2">
          <Link
            to="/"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 text-xs text-gray-400 hover:text-dahora-cyan transition-colors"
          >
            <span>Ver Loja Virtual</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => {
              logout();
              navigate('/admin/login');
            }}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-400 hover:bg-red-500/10 rounded-xl transition-colors font-semibold"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sair do Painel</span>
          </button>
        </div>
      </aside>

      {/* Main Administrative Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="h-16 border-b border-dahora-border-dark px-8 flex items-center justify-between bg-dahora-surface-dark/50 backdrop-blur-sm sticky top-0 z-20">
          <h2 className="text-sm font-bold text-gray-200">
            Painel de Gestão da Concessionária
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-xs text-dahora-emerald bg-dahora-emerald/10 border border-dahora-emerald/20 px-2.5 py-1 rounded-full font-semibold">
              Ambiente Seguro
            </span>
          </div>
        </header>

        <main className="flex-1 p-8 bg-dahora-black/50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
