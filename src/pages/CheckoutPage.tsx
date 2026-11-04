import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Check,
  ShieldCheck,
  Truck,
  CreditCard,
  QrCode,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Lock,
  User,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { formatCurrency, isValidCEP, formatCEP, formatPhone } from '../lib/utils';

export function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  // Steps: 1 = Identificação, 2 = Entrega, 3 = Pagamento, 4 = Confirmação
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    cpf: '',
    email: '',
    phone: '',
    // Step 2
    recipientName: '',
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: 'Macatuba',
    state: 'SP',
    // Step 3
    paymentMethod: 'pix' as 'pix' | 'credit_card',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [createdOrderId, setCreatedOrderId] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const validateStep1 = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Informe seu nome completo';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Informe um e-mail válido';
    if (!formData.phone.trim()) errors.phone = 'Informe seu telefone de contato';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = () => {
    const errors: Record<string, string> = {};
    if (!formData.cep.trim() || !isValidCEP(formData.cep)) errors.cep = 'Informe um CEP válido';
    if (!formData.street.trim()) errors.street = 'Informe o logradouro / rua';
    if (!formData.number.trim()) errors.number = 'Informe o número';
    if (!formData.neighborhood.trim()) errors.neighborhood = 'Informe o bairro';
    if (!formData.city.trim()) errors.city = 'Informe a cidade';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (validateStep1()) setCurrentStep(2);
    } else if (currentStep === 2) {
      if (validateStep2()) setCurrentStep(3);
    }
  };

  const handleFinishOrder = () => {
    // Generate order ID
    const orderId = `DH-${Date.now().toString(36).toUpperCase()}`;
    setCreatedOrderId(orderId);
    setCurrentStep(4);
    clearCart();
  };

  if (items.length === 0 && currentStep !== 4) {
    return (
      <div className="container-dahora py-20 text-center space-y-4">
        <h1 className="font-display font-bold text-2xl text-dahora-text">
          Seu carrinho está vazio
        </h1>
        <p className="text-sm text-dahora-gray">
          Adicione ao menos um veículo antes de prosseguir ao checkout.
        </p>
        <Link to="/veiculos" className="btn-primary text-xs py-2.5 px-6 inline-flex items-center gap-2">
          <span>Ver catálogo</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-dahora-ice min-h-screen py-10">
      <div className="container-dahora max-w-5xl">
        {/* Step Indicator */}
        <div className="mb-10">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {[
              { num: 1, label: 'Identificação' },
              { num: 2, label: 'Entrega' },
              { num: 3, label: 'Pagamento' },
              { num: 4, label: 'Confirmação' },
            ].map((step) => {
              const isActive = currentStep === step.num;
              const isPast = currentStep > step.num;
              return (
                <div key={step.num} className="flex flex-col items-center flex-1 relative">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      isPast
                        ? 'bg-dahora-emerald text-white'
                        : isActive
                        ? 'bg-dahora-black text-white ring-4 ring-dahora-emerald/20'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {isPast ? <Check className="w-5 h-5" /> : step.num}
                  </div>
                  <span
                    className={`text-xs mt-2 font-medium ${
                      isActive ? 'text-dahora-text font-bold' : 'text-dahora-gray'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 4: Confirmation */}
        {currentStep === 4 ? (
          <div className="bg-white rounded-3xl border border-dahora-border p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-card space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-dahora-emerald mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-dahora-emerald">
                Pedido Registrado com Sucesso
              </span>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text">
                Obrigado pelo seu pedido!
              </h1>
              <p className="text-sm font-mono font-bold text-dahora-cyan">
                Protocolo: {createdOrderId}
              </p>
            </div>

            {/* Integration Notice */}
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-left text-xs text-dahora-gray space-y-2">
              <div className="flex items-center gap-2 text-dahora-text font-bold">
                <AlertCircle className="w-4 h-4 text-dahora-cyan" />
                <span>Próximas etapas do pedido</span>
              </div>
              <p>
                Os detalhes e dados de faturamento foram registrados em nossa base. Conforme as diretrizes de segurança, o link para pagamento oficial (Pix com QR Code ou boleto bancário validado) será confirmado pela concessionária.
              </p>
              <p>
                Nossa equipe entrará em contato via WhatsApp/telefone para agendar a entrega técnica ou retirada em Macatuba.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                to={`/pedido/${createdOrderId}`}
                className="btn-primary flex-1 py-3 text-xs flex items-center justify-center gap-2"
              >
                <span>Acompanhar Pedido</span>
              </Link>
              <Link
                to="/"
                className="btn-secondary flex-1 py-3 text-xs flex items-center justify-center gap-2"
              >
                <span>Voltar à Página Inicial</span>
              </Link>
            </div>
          </div>
        ) : (
          /* Steps 1, 2, 3 Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-dahora-border p-6 sm:p-8 shadow-card space-y-6">
              {/* STEP 1: Identification */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="border-b border-gray-100 pb-3">
                    <h2 className="font-display font-bold text-lg text-dahora-text flex items-center gap-2">
                      <User className="w-5 h-5 text-dahora-emerald" />
                      <span>Etapa 1: Dados do Comprador</span>
                    </h2>
                    <p className="text-xs text-dahora-gray mt-1">
                      Informe seus dados para a emissão da Nota Fiscal e contato comercial.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label htmlFor="checkout-full-name" className="block text-xs font-semibold text-dahora-text mb-1 cursor-pointer">
                        Nome Completo *
                      </label>
                      <input
                        id="checkout-full-name"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Seu nome completo"
                        aria-label="Nome completo para a Nota Fiscal"
                        className="input-field text-sm"
                      />
                      {formErrors.fullName && (
                        <span className="text-[11px] text-red-500 mt-1 block">{formErrors.fullName}</span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="checkout-cpf" className="block text-xs font-semibold text-dahora-text mb-1 cursor-pointer">
                        CPF (para Nota Fiscal) *
                      </label>
                      <input
                        id="checkout-cpf"
                        name="cpf"
                        type="text"
                        value={formData.cpf}
                        onChange={(e) => handleInputChange('cpf', e.target.value)}
                        placeholder="000.000.000-00"
                        aria-label="CPF para emissão da Nota Fiscal"
                        className="input-field text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="checkout-phone" className="block text-xs font-semibold text-dahora-text mb-1 cursor-pointer">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        id="checkout-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', formatPhone(e.target.value))}
                        placeholder="(14) 99999-9999"
                        aria-label="Telefone ou WhatsApp com DDD"
                        className="input-field text-sm"
                      />
                      {formErrors.phone && (
                        <span className="text-[11px] text-red-500 mt-1 block">{formErrors.phone}</span>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="checkout-email" className="block text-xs font-semibold text-dahora-text mb-1 cursor-pointer">
                        E-mail de Notificação *
                      </label>
                      <input
                        id="checkout-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seuemail@exemplo.com"
                        aria-label="E-mail para confirmação e acompanhamento do pedido"
                        className="input-field text-sm"
                      />
                      {formErrors.email && (
                        <span className="text-[11px] text-red-500 mt-1 block">{formErrors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="btn-primary text-xs py-3 px-8 flex items-center gap-2"
                    >
                      <span>Continuar para Entrega</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Delivery */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="border-b border-gray-100 pb-3">
                    <h2 className="font-display font-bold text-lg text-dahora-text flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-dahora-cyan" />
                      <span>Etapa 2: Endereço de Entrega</span>
                    </h2>
                    <p className="text-xs text-dahora-gray mt-1">
                      Local onde o veículo elétrico montado e revisado será entregue.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="checkout-cep" className="block text-xs font-semibold text-dahora-text mb-1 cursor-pointer">CEP *</label>
                      <input
                        id="checkout-cep"
                        name="cep"
                        type="text"
                        value={formData.cep}
                        onChange={(e) => handleInputChange('cep', formatCEP(e.target.value))}
                        placeholder="00000-000"
                        maxLength={9}
                        aria-label="CEP para entrega"
                        className="input-field text-sm"
                      />
                      {formErrors.cep && (
                        <span className="text-[11px] text-red-500 mt-1 block">{formErrors.cep}</span>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="checkout-street" className="block text-xs font-semibold text-dahora-text mb-1 cursor-pointer">Rua / Logradouro *</label>
                      <input
                        id="checkout-street"
                        name="street"
                        type="text"
                        value={formData.street}
                        onChange={(e) => handleInputChange('street', e.target.value)}
                        placeholder="Rua, Avenida, Praça..."
                        aria-label="Rua ou logradouro para entrega"
                        className="input-field text-sm"
                      />
                      {formErrors.street && (
                        <span className="text-[11px] text-red-500 mt-1 block">{formErrors.street}</span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="checkout-number" className="block text-xs font-semibold text-dahora-text mb-1 cursor-pointer">Número *</label>
                      <input
                        id="checkout-number"
                        name="number"
                        type="text"
                        value={formData.number}
                        onChange={(e) => handleInputChange('number', e.target.value)}
                        placeholder="123"
                        aria-label="Número do endereço"
                        className="input-field text-sm"
                      />
                      {formErrors.number && (
                        <span className="text-[11px] text-red-500 mt-1 block">{formErrors.number}</span>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="checkout-complement" className="block text-xs font-semibold text-dahora-text mb-1 cursor-pointer">Complemento</label>
                      <input
                        id="checkout-complement"
                        name="complement"
                        type="text"
                        value={formData.complement}
                        onChange={(e) => handleInputChange('complement', e.target.value)}
                        placeholder="Apto, Bloco, etc."
                        aria-label="Complemento do endereço (opcional)"
                        className="input-field text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="checkout-neighborhood" className="block text-xs font-semibold text-dahora-text mb-1 cursor-pointer">Bairro *</label>
                      <input
                        id="checkout-neighborhood"
                        name="neighborhood"
                        type="text"
                        value={formData.neighborhood}
                        onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                        placeholder="Centro"
                        aria-label="Bairro de entrega"
                        className="input-field text-sm"
                      />
                      {formErrors.neighborhood && (
                        <span className="text-[11px] text-red-500 mt-1 block">{formErrors.neighborhood}</span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="checkout-city" className="block text-xs font-semibold text-dahora-text mb-1 cursor-pointer">Cidade *</label>
                      <input
                        id="checkout-city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="Macatuba"
                        aria-label="Cidade de entrega"
                        className="input-field text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="checkout-state" className="block text-xs font-semibold text-dahora-text mb-1 cursor-pointer">Estado *</label>
                      <select
                        id="checkout-state"
                        name="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        aria-label="Estado da entrega"
                        className="input-field text-sm cursor-pointer"
                      >
                        <option value="SP">São Paulo (SP)</option>
                        <option value="PR">Paraná (PR)</option>
                        <option value="MG">Minas Gerais (MG)</option>
                        <option value="RJ">Rio de Janeiro (RJ)</option>
                        <option value="SC">Santa Catarina (SC)</option>
                        <option value="RS">Rio Grande do Sul (RS)</option>
                        <option value="MS">Mato Grosso do Sul (MS)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-xs text-dahora-gray hover:text-dahora-text flex items-center gap-1 font-semibold"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Voltar para Identificação</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="btn-primary text-xs py-3 px-8 flex items-center gap-2"
                    >
                      <span>Continuar para Pagamento</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Payment */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="border-b border-gray-100 pb-3">
                    <h2 className="font-display font-bold text-lg text-dahora-text flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-dahora-emerald" />
                      <span>Etapa 3: Método de Pagamento</span>
                    </h2>
                    <p className="text-xs text-dahora-gray mt-1">
                      Escolha como deseja efetuar o pagamento do seu veículo.
                    </p>
                  </div>

                  {/* Payment Tabs */}
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => handleInputChange('paymentMethod', 'pix')}
                      className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                        formData.paymentMethod === 'pix'
                          ? 'border-dahora-emerald bg-emerald-50/50 shadow-sm'
                          : 'border-dahora-border hover:bg-gray-50'
                      }`}
                    >
                      <QrCode className="w-5 h-5 text-dahora-emerald shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-xs text-dahora-text">Pix (À Vista)</h4>
                        <p className="text-[11px] text-dahora-gray mt-0.5">
                          Desconto exclusivo e aprovação instantânea
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleInputChange('paymentMethod', 'credit_card')}
                      className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                        formData.paymentMethod === 'credit_card'
                          ? 'border-dahora-emerald bg-emerald-50/50 shadow-sm'
                          : 'border-dahora-border hover:bg-gray-50'
                      }`}
                    >
                      <CreditCard className="w-5 h-5 text-dahora-cyan shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-xs text-dahora-text">Cartão de Crédito</h4>
                        <p className="text-[11px] text-dahora-gray mt-0.5">
                          Parcelamento em até 12x
                        </p>
                      </div>
                    </button>
                  </div>

                  {/* Integration Notice */}
                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-xs space-y-1">
                    <div className="flex items-center gap-2 font-bold">
                      <Lock className="w-4 h-4 text-amber-700" />
                      <span>Integração de pagamento em produção</span>
                    </div>
                    <p>
                      Ao finalizar este pedido, um protocolo será gerado no sistema. A cobrança é validada via webhook e confirmação direta da loja antes de qualquer débito.
                    </p>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="text-xs text-dahora-gray hover:text-dahora-text flex items-center gap-1 font-semibold"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Voltar para Entrega</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleFinishOrder}
                      className="btn-primary text-xs py-3.5 px-8 flex items-center gap-2 shadow-glow-emerald"
                    >
                      <span>FINALIZAR PEDIDO COM SEGURANÇA</span>
                      <ShieldCheck className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Summary */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-dahora-border p-6 shadow-card space-y-4">
              <h3 className="font-display font-bold text-sm text-dahora-text border-b border-gray-100 pb-3">
                Itens no Pedido ({items.length})
              </h3>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center text-xs">
                    <div>
                      <p className="font-semibold text-dahora-text">{item.product.name}</p>
                      <span className="text-[10px] text-dahora-gray">Qtd: {item.quantity}</span>
                    </div>
                    <span className="font-bold text-dahora-emerald tabular-nums">
                      {formatCurrency(item.unitPrice * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-between items-baseline">
                <span className="text-xs font-semibold text-dahora-gray">Total Final</span>
                <span className="text-xl font-extrabold text-dahora-text tabular-nums">
                  {formatCurrency(subtotal)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
