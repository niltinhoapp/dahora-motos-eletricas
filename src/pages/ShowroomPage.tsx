import { useEffect } from 'react';
import { ShowroomSection } from '../components/home/ShowroomSection';
import { ShieldCheck, CheckCircle2, Wrench, Sparkles, Navigation } from 'lucide-react';

export function ShowroomPage() {
  useEffect(() => {
    document.title = 'Nossas 2 Lojas em Macatuba | Da Hora Motos Elétricas';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-6 space-y-12 bg-dahora-ice min-h-screen">
      <ShowroomSection />

      {/* Experience details */}
      <div className="container-dahora max-w-5xl">
        <div className="bg-white rounded-3xl border border-dahora-border p-8 sm:p-12 shadow-card space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-dahora-emerald">
              ESTRUTURA COMPLETA
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text">
              Por que Macatuba conta com 2 unidades?
            </h2>
            <p className="text-xs sm:text-sm text-dahora-gray">
              Separamos o atendimento comercial e test-ride da nossa área técnica de montagem e estoque para garantir máxima agilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs sm:text-sm text-dahora-text">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-dahora-emerald/15 text-dahora-emerald flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-dahora-text">
                Loja 1: Showroom de Vendas, Oficina & Peças
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                Localizada na Alameda Tiradentes, 348 (ao lado da Rodoviária Municipal de Macatuba), conta com showroom completo para compra de veículos 0km e concentra nossa oficina mecânica e elétrica especializada, montagem técnica, revisões preventivas e estoque de peças de reposição originais.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-dahora-cyan/15 text-dahora-cyan flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-dahora-text">
                Loja 2: Showroom de Vendas & Novos
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                Localizada na Rua José Cruzerá, 241, Jardim Planalto, é o nosso espaço comercial dedicado para você conhecer de perto toda a linha de motos, scooters, triciclos e patinetes elétricos 0km, realizar test-ride e receber consultoria especializada para sua compra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
