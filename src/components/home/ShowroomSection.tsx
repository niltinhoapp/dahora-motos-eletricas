import { MapPin, Clock, Phone, MessageSquare, Navigation, Store, ShieldCheck } from 'lucide-react';
import { macatubaStores } from '../../data/demo';
import { env } from '../../config/env';
import { buildWhatsAppUrl } from '../../lib/utils';

export function ShowroomSection() {
  const whatsappNumber = env.WHATSAPP_NUMBER || '5514998877886';

  return (
    <section className="section-padding bg-dahora-midnight text-white border-b border-dahora-border-dark" id="showroom">
      <div className="container-dahora">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-dahora-cyan mb-2">
            <Store className="w-3.5 h-3.5" />
            <span>2 UNIDADES FÍSICAS EM MACATUBA/SP</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
            Conheça Nossas Lojas em Macatuba
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            Venha fazer um test-ride, conhecer de perto nossa linha completa de motos e scooters elétricas e receber consultoria técnica especializada.
          </p>
        </div>

        {/* 2 Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {macatubaStores.map((store) => {
            const scheduleUrl = buildWhatsAppUrl(
              whatsappNumber,
              `Olá! Gostaria de agendar uma visita na ${store.name} em Macatuba.`
            );

            return (
              <div
                key={store.id}
                className="bg-dahora-surface-dark border border-dahora-border-dark rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-premium relative group hover:border-dahora-emerald/50 transition-all duration-300"
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-dahora-emerald/15 text-dahora-emerald border border-dahora-emerald/30 px-3 py-1 rounded-full font-bold">
                      {store.tag}
                    </span>
                    {store.isMain && (
                      <span className="text-[10px] text-dahora-cyan font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Unidade Principal
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-2">
                    {store.name}
                  </h3>

                  {/* Details */}
                  <div className="space-y-3 pt-3 text-xs text-gray-300 border-t border-dahora-border-dark/60">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-dahora-emerald shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-sm">
                          {store.street}, {store.number}
                        </strong>
                        {store.complement && (
                          <span className="text-dahora-cyan block">{store.complement}</span>
                        )}
                        <span className="text-gray-400">
                          {store.neighborhood} • {store.city} - {store.state} • CEP {store.cep}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-dahora-cyan shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-400 block font-semibold">Horários de Atendimento:</span>
                        <span>{store.hours}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-dahora-emerald shrink-0" />
                      <div>
                        <span className="text-gray-400 font-semibold mr-1">Contato:</span>
                        <strong className="text-white">{store.phone}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 mt-6 border-t border-dahora-border-dark flex flex-col sm:flex-row gap-3">
                  <a
                    href={scheduleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 py-2.5 text-xs flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Falar no WhatsApp</span>
                  </a>

                  <a
                    href={store.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2.5 px-4 text-xs text-white border-dahora-border-dark hover:bg-white/5 flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-4 h-4 text-dahora-cyan" />
                    <span>Ver no Mapa</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-5 text-center text-xs text-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-dahora-emerald animate-pulse" />
            <span>Mora em outra cidade ou estado? Enviamos com frete seguro e veículo montado.</span>
          </div>
          <a
            href={buildWhatsAppUrl(whatsappNumber, 'Olá! Gostaria de saber como funciona o envio para minha cidade.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dahora-emerald font-semibold hover:underline inline-flex items-center gap-1"
          >
            <span>Consultar frete para sua localidade &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
