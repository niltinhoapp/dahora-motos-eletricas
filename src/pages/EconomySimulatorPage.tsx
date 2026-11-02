import { useEffect } from 'react';
import { EconomySimulatorSection } from '../components/home/EconomySimulatorSection';

export function EconomySimulatorPage() {
  useEffect(() => {
    document.title = 'Simulador de Economia | Da Hora Motos Elétricas';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-6">
      <EconomySimulatorSection />
    </div>
  );
}
