// ============================================================
// Da Hora Motos Elétricas — Core Type Definitions
// ============================================================

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  order: number;
  isMain: boolean;
}

export interface ProductVariant {
  id: string;
  name: string;
  color?: string;
  colorHex?: string;
  priceAdjustment: number;
  sku: string;
  stock: number;
  images?: ProductImage[];
}

export interface LegalInformation {
  classification: string;
  requiresLicense: string;
  registration: string;
  licensing: string;
  plating: string;
  documentsProvided: string;
  observations: string;
  officialSource?: string;
  lastReviewDate?: string;
}

export interface ProductSpecification {
  key: string;
  label: string;
  value: string;
  unit?: string;
  group: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  categoryId: string;
  category?: Category;
  brand: string;
  model: string;
  yearVersion?: string;
  price: number;
  promotionalPrice?: number;
  pixPrice?: number;
  installments?: {
    count: number;
    value: number;
    hasInterest: boolean;
  };
  images: ProductImage[];
  variants: ProductVariant[];
  specifications: ProductSpecification[];
  legalInfo?: LegalInformation;
  stock: number;
  isAvailable: boolean;
  isFeatured: boolean;
  isNew: boolean;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  power?: string;
  range?: string;
  maxSpeed?: string;
  batteryType?: string;
  chargingTime?: string;
  loadCapacity?: string;
  warranty?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  icon?: string;
  productCount: number;
  order: number;
  isActive: boolean;
}

// ---- Physical Store ----

export interface PhysicalStore {
  id: string;
  name: string;
  tag: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  cep: string;
  phone: string;
  whatsapp: string;
  hours: string;
  googleMapsUrl: string;
  isMain: boolean;
}

// ---- Cart ----

export interface CartItem {
  product: Product;
  variantId?: string;
  quantity: number;
  unitPrice: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  couponCode?: string;
}

// ---- Checkout & Orders ----

export interface Address {
  recipientName: string;
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  phone: string;
  email: string;
}

export interface ShippingOption {
  id: string;
  name: string;
  price: number;
  estimatedDays: number;
  description?: string;
}

export type PaymentMethod = 'pix' | 'credit_card' | 'boleto';

export type OrderStatus =
  | 'pending_payment'
  | 'payment_confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded';

export type PaymentStatus =
  | 'pending'
  | 'paid'
  | 'failed'
  | 'refunded'
  | 'cancelled';

export interface Order {
  id: string;
  items: CartItem[];
  address: Address;
  shipping: ShippingOption;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  subtotal: number;
  discount: number;
  shippingCost: number;
  total: number;
  couponCode?: string;
  trackingCode?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// ---- Store Settings ----

export interface StoreSettings {
  name: string;
  cnpj: string;
  phone: string;
  whatsapp: string;
  email?: string;
  stores: PhysicalStore[];
  announcementBar: {
    text: string;
    isActive: boolean;
  };
  logo?: string;
}

// ---- Banner ----

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary: {
    text: string;
    link: string;
  };
  ctaSecondary?: {
    text: string;
    link: string;
  };
  image: string;
  imageMobile?: string;
  order: number;
  isActive: boolean;
}

// ---- Reviews ----

export interface Review {
  id: string;
  customerName: string;
  customerCity?: string;
  productId?: string;
  productName?: string;
  rating: number;
  comment: string;
  photoUrl?: string;
  isApproved: boolean;
  createdAt: string;
}

// ---- FAQ ----

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

// ---- Coupon ----

export interface Coupon {
  id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minOrderValue?: number;
  maxUses?: number;
  usedCount: number;
  isActive: boolean;
  expiresAt?: string;
}

// ---- Filters ----

export interface ProductFilters {
  category?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  brand?: string;
  power?: string;
  range?: string;
  availability?: 'available' | 'all';
  requiresLicense?: string;
  sortBy?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'featured';
}
