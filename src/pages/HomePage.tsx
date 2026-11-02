import { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategoriesSection } from '../components/home/CategoriesSection';
import { FeaturedProductsSection } from '../components/home/FeaturedProductsSection';
import { ComparisonSection } from '../components/home/ComparisonSection';
import { EconomySimulatorSection } from '../components/home/EconomySimulatorSection';
import { WhyBuySection } from '../components/home/WhyBuySection';
import { ShowroomSection } from '../components/home/ShowroomSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';

export function HomePage() {
  useEffect(() => {
    document.title = 'Da Hora Motos Elétricas | Concessionária Digital em Macatuba';
  }, []);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <ComparisonSection />
      <EconomySimulatorSection />
      <WhyBuySection />
      <ShowroomSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}
