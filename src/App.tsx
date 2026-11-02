import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ComparePage } from './pages/ComparePage';
import { EconomySimulatorPage } from './pages/EconomySimulatorPage';
import { AboutPage } from './pages/AboutPage';
import { ShowroomPage } from './pages/ShowroomPage';
import { DeliveryPage } from './pages/DeliveryPage';
import { WarrantyPage } from './pages/WarrantyPage';
import { DocumentationPage } from './pages/DocumentationPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderTrackingPage } from './pages/OrderTrackingPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ReturnsPage } from './pages/ReturnsPage';

// Admin Pages
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminProductsPage } from './pages/admin/AdminProductsPage';
import { AdminCategoriesPage } from './pages/admin/AdminCategoriesPage';
import { AdminOrdersPage } from './pages/admin/AdminOrdersPage';
import { AdminCustomersPage } from './pages/admin/AdminCustomersPage';
import { AdminInventoryPage } from './pages/admin/AdminInventoryPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';

export function App() {
  return (
    <AdminAuthProvider>
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
    </AdminAuthProvider>
  );
}

export default App;
