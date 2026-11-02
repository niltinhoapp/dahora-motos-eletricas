import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { demoFAQItems } from '../../data/demo';

export function FAQSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // Keep first open by default
  });

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container-dahora">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-dahora-emerald mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>ESCLARECIMENTOS</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-dahora-gray mt-2">
            Tire suas principais dúvidas sobre entrega, formas de pagamento, garantia, documentação e manutenção.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto divide-y divide-gray-100 rounded-3xl border border-dahora-border bg-gray-50/50 p-2 sm:p-4 shadow-sm">
          {demoFAQItems.map((item) => {
            const isOpen = !!openIds[item.id];
            return (
              <div key={item.id} className="py-2 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full py-4 px-4 flex items-center justify-between text-left gap-4 hover:bg-white rounded-2xl transition-colors focus-visible:outline-dahora-cyan"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs bg-gray-200/80 text-dahora-gray font-semibold px-2.5 py-0.5 rounded-full shrink-0">
                      {item.category}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-dahora-text">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-dahora-emerald' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-dahora-gray leading-relaxed animate-fade-in">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help footer */}
        <div className="text-center mt-10 text-xs text-dahora-gray">
          <span>Ainda com dúvidas específicas? </span>
          <a
            href="#whatsapp"
            className="text-dahora-emerald font-semibold hover:underline inline-flex items-center gap-1"
          >
            Fale diretamente com nossa equipe no WhatsApp &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
