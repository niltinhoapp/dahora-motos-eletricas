// ============================================================
// Da Hora Motos Elétricas — Utility Functions
// ============================================================

/**
 * Format a number as Brazilian Real currency
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Format a number as a compact currency (e.g., R$ 12.900)
 */
export function formatPrice(value: number): string {
  return formatCurrency(value);
}

/**
 * Calculate installment value
 */
export function calculateInstallment(
  total: number,
  installments: number,
  hasInterest: boolean = false,
  interestRate: number = 0
): number {
  if (!hasInterest || interestRate === 0) {
    return total / installments;
  }
  const rate = interestRate / 100;
  return (total * rate * Math.pow(1 + rate, installments)) /
    (Math.pow(1 + rate, installments) - 1);
}

/**
 * Generate a slug from a string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Build WhatsApp URL with pre-filled message
 */
export function buildWhatsAppUrl(
  phone: string,
  message: string
): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Build WhatsApp message for a specific product
 */
export function buildProductWhatsAppMessage(productName: string, productUrl?: string): string {
  let msg = `Olá! Estou no site da Da Hora Motos Elétricas e gostaria de mais informações sobre o modelo ${productName}.`;
  if (productUrl) {
    msg += `\n\n${productUrl}`;
  }
  return msg;
}

/**
 * Build WhatsApp message for cart/order inquiries
 */
export function buildCartWhatsAppMessage(): string {
  return 'Olá! Gostaria de esclarecer algumas dúvidas sobre meu pedido na Da Hora Motos Elétricas.';
}

/**
 * Truncate text to a maximum length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

/**
 * Debounce a function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  ms: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

/**
 * Class name utility (simple cn alternative)
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Get order status label in Portuguese
 */
export function getOrderStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    pending_payment: 'Aguardando pagamento',
    payment_confirmed: 'Pagamento confirmado',
    processing: 'Em processamento',
    shipped: 'Enviado',
    delivered: 'Entregue',
    cancelled: 'Cancelado',
    refunded: 'Reembolsado',
  };
  return labels[status] || status;
}

/**
 * Get payment status label in Portuguese
 */
export function getPaymentStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    pending: 'Pendente',
    paid: 'Pago',
    failed: 'Falhou',
    refunded: 'Reembolsado',
    cancelled: 'Cancelado',
  };
  return labels[status] || status;
}

/**
 * Validate Brazilian CEP format
 */
export function isValidCEP(cep: string): boolean {
  return /^\d{5}-?\d{3}$/.test(cep);
}

/**
 * Format CEP
 */
export function formatCEP(cep: string): string {
  const digits = cep.replace(/\D/g, '');
  if (digits.length !== 8) return cep;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

/**
 * Format phone number
 */
export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return phone;
}

/**
 * Generate a unique ID
 */
export function generateId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Scroll to top smoothly
 */
export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Check if we're on a mobile device (by screen width)
 */
export function isMobileScreen(): boolean {
  return window.innerWidth < 768;
}

/**
 * Format percentage discount
 */
export function formatDiscount(original: number, discounted: number): string {
  const discount = Math.round(((original - discounted) / original) * 100);
  return `${discount}%`;
}
