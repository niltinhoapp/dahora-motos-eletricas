import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AdminAuthProvider } from './contexts/AdminAuthContext';

// Lazy loading customer pages (reduces initial JS bundle size dramatically)
const CatalogPage = lazy(() => import('./pages/CatalogPage').then((m) => ({ default: m.CatalogPage })));
const CategoryPage = lazy(() => import('./pages/CategoryPage').then((m) => ({ default: m.CategoryPage })));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then((m) => ({ default: m.ProductDetailPage })));
const ComparePage = lazy(() => import('./pages/ComparePage').then((m) => ({ default: m.ComparePage })));
const EconomySimulatorPage = lazy(() => import('./pages/EconomySimulatorPage').then((m) => ({ default: m.EconomySimulatorPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ShowroomPage = lazy(() => import('./pages/ShowroomPage').then((m) => ({ default: m.ShowroomPage })));
const DeliveryPage = lazy(() => import('./pages/DeliveryPage').then((m) => ({ default: m.DeliveryPage })));
const WarrantyPage = lazy(() => import('./pages/WarrantyPage').then((m) => ({ default: m.WarrantyPage })));
const DocumentationPage = lazy(() => import('./pages/DocumentationPage').then((m) => ({ default: m.DocumentationPage })));
const CartPage = lazy(() => import('./pages/CartPage').then((m) => ({ default: m.CartPage })));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage').then((m) => ({ default: m.CheckoutPage })));
const OrderTrackingPage = lazy(() => import('./pages/OrderTrackingPage').then((m) => ({ default: m.OrderTrackingPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const ReturnsPage = lazy(() => import('./pages/ReturnsPage').then((m) => ({ default: m.ReturnsPage })));
const TricicloLandingPage = lazy(() => import('./pages/TricicloLandingPage').then((m) => ({ default: m.TricicloLandingPage })));

// Lazy loading Admin Pages
const AdminLayout = lazy(() => import('./components/admin/AdminLayout').then((m) => ({ default: m.AdminLayout })));
const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage').then((m) => ({ default: m.AdminLoginPage })));
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage').then((m) => ({ default: m.AdminDashboardPage })));
const AdminProductsPage = lazy(() => import('./pages/admin/AdminProductsPage').then((m) => ({ default: m.AdminProductsPage })));
const AdminCategoriesPage = lazy(() => import('./pages/admin/AdminCategoriesPage').then((m) => ({ default: m.AdminCategoriesPage })));
const AdminOrdersPage = lazy(() => import('./pages/admin/AdminOrdersPage').then((m) => ({ default: m.AdminOrdersPage })));
const AdminCustomersPage = lazy(() => import('./pages/admin/AdminCustomersPage').then((m) => ({ default: m.AdminCustomersPage })));
const AdminInventoryPage = lazy(() => import('./pages/admin/AdminInventoryPage').then((m) => ({ default: m.AdminInventoryPage })));
const AdminSettingsPage = lazy(() => import('./pages/admin/AdminSettingsPage').then((m) => ({ default: m.AdminSettingsPage })));

function PageLoadingFallback() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center py-16" aria-busy="true" aria-label="Carregando conteúdo...">
      <div className="w-10 h-10 border-3 border-dahora-emerald border-t-transparent rounded-full animate-spin mb-3" />
      <span className="text-xs text-slate-500 font-medium">Carregando...</span>
    </div>
  );
}

export function App() {
  return (
    <AdminAuthProvider>
      <Suspense fallback={<PageLoadingFallback />}>
        <Routes>
          {/* Public Concessionária Digital Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="veiculos" element={<CatalogPage />} />
            <Route path="categoria/:slug" element={<CategoryPage />} />
            <Route path="produto/:slug" element={<ProductDetailPage />} />
            <Route path="comparar" element={<ComparePage />} />
            <Route path="simulador-economia" element={<EconomySimulatorPage />} />
            <Route path="sobre" element={<AboutPage />} />
            <Route path="showroom" element={<ShowroomPage />} />
            <Route path="entrega" element={<DeliveryPage />} />
            <Route path="garantia" element={<WarrantyPage />} />
            <Route path="documentacao" element={<DocumentationPage />} />
            <Route path="carrinho" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="pedido/:id" element={<OrderTrackingPage />} />
            <Route path="contato" element={<ContactPage />} />
            <Route path="politica-de-privacidade" element={<PrivacyPolicyPage />} />
            <Route path="termos-de-uso" element={<TermsPage />} />
            <Route path="trocas-e-devolucoes" element={<ReturnsPage />} />
            {/* Fallback 404 */}
            <Route path="*" element={<CatalogPage />} />
          </Route>

          {/* Dedicated Landing Pages (High-Conversion Paid Traffic & Campaigns) */}
          <Route path="lp/triciclo-infantil" element={<TricicloLandingPage />} />
          <Route path="black-friday" element={<TricicloLandingPage />} />
          <Route path="natal-triciclo" element={<TricicloLandingPage />} />

          {/* Administrative Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="produtos" element={<AdminProductsPage />} />
            <Route path="categorias" element={<AdminCategoriesPage />} />
            <Route path="pedidos" element={<AdminOrdersPage />} />
            <Route path="clientes" element={<AdminCustomersPage />} />
            <Route path="estoque" element={<AdminInventoryPage />} />
            <Route path="configuracoes" element={<AdminSettingsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </AdminAuthProvider>
  );
}

export default App;
