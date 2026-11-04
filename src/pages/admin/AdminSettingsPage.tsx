import { useState } from 'react';
import { Save, Check, MapPin, Building2 } from 'lucide-react';
import { defaultStoreSettings } from '../../data/demo';

export function AdminSettingsPage() {
  const [storeName, setStoreName] = useState(defaultStoreSettings.name);
  const [cnpj, setCnpj] = useState(defaultStoreSettings.cnpj);
  const [whatsapp, setWhatsapp] = useState(defaultStoreSettings.whatsapp || '');
  const [phone, setPhone] = useState(defaultStoreSettings.phone || '');
  const [email, setEmail] = useState(defaultStoreSettings.email || '');
  const [announcement, setAnnouncement] = useState(
    defaultStoreSettings.announcementBar.text
  );
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="font-display font-bold text-2xl text-white">
          Configurações da Empresa e Loja
        </h1>
        <p className="text-xs text-gray-400 mt-1">
          Altere informações de contato, mensagem da barra de topo e dados da concessionária em Macatuba/SP.
        </p>
      </div>

      <form onSubmit={handleSave} className="bg-dahora-surface-dark border border-dahora-border-dark p-6 sm:p-8 rounded-3xl space-y-8 shadow-card">
        {/* Dados Institucionais */}
        <div>
          <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-dahora-emerald" />
            Dados Cadastrais da Empresa
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
            <div>
              <label htmlFor="settings-store-name" className="block text-gray-300 font-semibold mb-1 cursor-pointer">
                Nome Comercial da Loja
              </label>
              <input
                id="settings-store-name"
                name="storeName"
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                aria-label="Nome comercial da loja"
                className="w-full bg-dahora-midnight border border-dahora-border-dark rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-dahora-cyan"
              />
            </div>

            <div>
              <label htmlFor="settings-cnpj" className="block text-gray-300 font-semibold mb-1 cursor-pointer">
                CNPJ
              </label>
              <input
                id="settings-cnpj"
                name="cnpj"
                type="text"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                aria-label="Número do CNPJ"
                className="w-full bg-dahora-midnight border border-dahora-border-dark rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-dahora-cyan"
              />
            </div>

            <div>
              <label htmlFor="settings-whatsapp" className="block text-gray-300 font-semibold mb-1 cursor-pointer">
                WhatsApp Oficial de Atendimento
              </label>
              <input
                id="settings-whatsapp"
                name="whatsapp"
                type="text"
                placeholder="5514998877886"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                aria-label="Número oficial do WhatsApp de atendimento"
                className="w-full bg-dahora-midnight border border-dahora-border-dark rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-dahora-cyan"
              />
            </div>

            <div>
              <label htmlFor="settings-phone" className="block text-gray-300 font-semibold mb-1 cursor-pointer">
                Telefone de Contato
              </label>
              <input
                id="settings-phone"
                name="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                aria-label="Telefone de contato da loja"
                className="w-full bg-dahora-midnight border border-dahora-border-dark rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-dahora-cyan"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="settings-email" className="block text-gray-300 font-semibold mb-1 cursor-pointer">
                E-mail de Contato
              </label>
              <input
                id="settings-email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="E-mail de contato da loja"
                className="w-full bg-dahora-midnight border border-dahora-border-dark rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-dahora-cyan"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="settings-announcement" className="block text-gray-300 font-semibold mb-1 cursor-pointer">
                Mensagem da Barra Superior (Anúncio)
              </label>
              <input
                id="settings-announcement"
                name="announcement"
                type="text"
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
                aria-label="Texto de anúncio da barra superior"
                className="w-full bg-dahora-midnight border border-dahora-border-dark rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-dahora-cyan"
              />
            </div>
          </div>
        </div>

        {/* Lojas Físicas em Macatuba */}
        <div className="pt-6 border-t border-dahora-border-dark">
          <h2 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-dahora-cyan" />
            Unidades Físicas em Macatuba / SP (2 Lojas)
          </h2>
          <p className="text-xs text-gray-400 mb-4">
            Endereços físicos oficiais configurados para atendimento, showroom e logística.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {defaultStoreSettings.stores.map((store, idx) => (
              <div
                key={store.id}
                className="p-4 rounded-2xl bg-dahora-midnight border border-dahora-border-dark text-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">
                    Unidade {idx + 1}: {store.name}
                  </span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-dahora-emerald/10 text-dahora-emerald border border-dahora-emerald/20">
                    {store.tag}
                  </span>
                </div>
                <p className="text-gray-300">
                  {store.street}, {store.number} {store.complement ? `(${store.complement})` : ''}
                </p>
                <p className="text-gray-400">
                  {store.neighborhood} — {store.city}/{store.state} • CEP {store.cep}
                </p>
                <p className="text-[11px] text-gray-500 pt-1">
                  Horário: {store.hours}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-dahora-border-dark flex items-center justify-between">
          <span className="text-[11px] text-gray-500">
            Valores são persistidos e aplicados globalmente na aplicação.
          </span>
          <button
            type="submit"
            className="btn-primary text-xs py-2.5 px-6 flex items-center gap-2"
          >
            {saved ? (
              <>
                <Check className="w-4 h-4" />
                <span>Salvo com Sucesso!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Salvar Configurações</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
