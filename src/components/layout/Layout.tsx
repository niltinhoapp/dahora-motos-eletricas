import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-dahora-ice text-dahora-text selection:bg-dahora-emerald/20 selection:text-dahora-black">
      <ScrollToTop />
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
