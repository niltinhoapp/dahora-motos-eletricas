import { Star, MessageSquareQuote, ShieldAlert } from 'lucide-react';
import { demoReviews } from '../../data/demo';

export function TestimonialsSection() {
  const reviews = demoReviews;

  return (
    <section className="section-padding bg-dahora-ice border-b border-dahora-border">
      <div className="container-dahora">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            DEPOIMENTOS E ENTREGAS
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text mt-1">
            Experiência de Nossos Clientes
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Acompanhe entregas reais, avaliações verificadas e a satisfação de quem já escolheu a mobilidade elétrica.
          </p>
        </div>

        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl border border-dahora-border p-6 shadow-card space-y-4"
              >
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'fill-amber-400' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-dahora-text italic leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-dahora-text">{review.customerName}</span>
                  {review.customerCity && (
                    <span className="text-slate-600">{review.customerCity}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Honest Empty State — No fake reviews generated */
          <div className="max-w-xl mx-auto bg-white rounded-3xl border border-dahora-border p-8 sm:p-10 text-center shadow-card space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-emerald-700 mx-auto">
              <MessageSquareQuote className="w-7 h-7" />
            </div>
            <h3 className="font-display font-bold text-lg text-dahora-text">
              Galeria de Entregas e Avaliações Reais
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Valorizamos a transparência absoluta: não publicamos depoimentos fictícios. As primeiras fotos de entregas e avaliações autorizadas de nossos compradores estarão disponíveis aqui e em nossas redes sociais.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                <ShieldAlert className="w-3.5 h-3.5 text-dahora-cyan" />
                <span>Espaço reservado para depoimentos autorizados</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
