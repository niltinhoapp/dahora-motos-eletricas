import { useEffect, lazy, Suspense } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategoriesSection } from '../components/home/CategoriesSection';
import { FeaturedProductsSection } from '../components/home/FeaturedProductsSection';
import { WhyBuySection } from '../components/home/WhyBuySection';

// Seções interativas abaixo da dobra carregadas sob demanda para máxima velocidade móvel
const ComparisonSection = lazy(() => import('../components/home/ComparisonSection').then((m) => ({ default: m.ComparisonSection })));
const EconomySimulatorSection = lazy(() => import('../components/home/EconomySimulatorSection').then((m) => ({ default: m.EconomySimulatorSection })));
const ShowroomSection = lazy(() => import('../components/home/ShowroomSection').then((m) => ({ default: m.ShowroomSection })));
const TestimonialsSection = lazy(() => import('../components/home/TestimonialsSection').then((m) => ({ default: m.TestimonialsSection })));
const FAQSection = lazy(() => import('../components/home/FAQSection').then((m) => ({ default: m.FAQSection })));

export function HomePage() {
  useEffect(() => {
    document.title = 'Da Hora Motos Elétricas | Concessionária Digital em Macatuba';
  }, []);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <WhyBuySection />
      <Suspense fallback={<div className="h-20" />}>
        <ComparisonSection />
        <EconomySimulatorSection />
        <ShowroomSection />
        <TestimonialsSection />
        <FAQSection />
      </Suspense>
    </div>
  );
}
