// ============================================================
// Da Hora Motos Elétricas — Product Data Service
// Abstraction layer over data — currently uses demo data,
// ready to swap for Supabase or any API.
// ============================================================

import { demoProducts, demoCategories, demoFAQItems, demoBanners, demoReviews } from '../data/demo';
import type { Product, Category, ProductFilters, FAQItem, Banner, Review } from '../types';

// ---- Products ----

export function getAllProducts(): Product[] {
  return demoProducts;
}

export function getProductBySlug(slug: string): Product | undefined {
  return demoProducts.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return demoProducts.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return demoProducts.filter((p) => p.isFeatured && p.isAvailable);
}

export function getNewProducts(): Product[] {
  return demoProducts.filter((p) => p.isNew && p.isAvailable);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  // Suporte a rotas legadas e consolidadas
  if (categorySlug === 'motos-eletricas') {
    return demoProducts.filter(
      (p) => p.categoryId === 'cat-motos-ate-1000w' || p.categoryId === 'cat-motos-1001w-a-2000w'
    );
  }
  if (categorySlug === 'triciclos-eletricos') {
    return demoProducts.filter((p) => p.categoryId === 'cat-modelos-especiais');
  }

  const category = demoCategories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return demoProducts.filter((p) => p.categoryId === category.id);
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return demoProducts
    .filter(
      (p) =>
        p.id !== product.id &&
        p.categoryId === product.categoryId &&
        p.isAvailable
    )
    .slice(0, limit);
}

export function filterProducts(filters: ProductFilters): Product[] {
  let results = [...demoProducts];

  if (filters.category) {
    const category = demoCategories.find((c) => c.slug === filters.category);
    if (category) {
      results = results.filter((p) => p.categoryId === category.id);
    }
  }

  if (filters.search) {
    const search = filters.search.toLowerCase();
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(search) ||
        p.brand.toLowerCase().includes(search) ||
        p.shortDescription.toLowerCase().includes(search) ||
        p.tags.some((t) => t.toLowerCase().includes(search)) ||
        (p.power && p.power.toLowerCase().includes(search))
    );
  }

  if (filters.minPrice !== undefined) {
    results = results.filter(
      (p) => (p.promotionalPrice || p.price) >= filters.minPrice!
    );
  }

  if (filters.maxPrice !== undefined) {
    results = results.filter(
      (p) => (p.promotionalPrice || p.price) <= filters.maxPrice!
    );
  }

  if (filters.brand) {
    results = results.filter(
      (p) => p.brand.toLowerCase() === filters.brand!.toLowerCase()
    );
  }

  if (filters.availability === 'available') {
    results = results.filter((p) => p.isAvailable);
  }

  // Sorting
  switch (filters.sortBy) {
    case 'price-asc':
      results.sort(
        (a, b) =>
          (a.promotionalPrice || a.price) - (b.promotionalPrice || b.price)
      );
      break;
    case 'price-desc':
      results.sort(
        (a, b) =>
          (b.promotionalPrice || b.price) - (a.promotionalPrice || a.price)
      );
      break;
    case 'name-asc':
      results.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
      break;
    case 'name-desc':
      results.sort((a, b) => b.name.localeCompare(a.name, 'pt-BR'));
      break;
    case 'featured':
    default:
      results.sort((a, b) => {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      });
  }

  return results;
}

export function searchProducts(query: string): Product[] {
  return filterProducts({ search: query, availability: 'available' });
}

// ---- Categories ----

export function getAllCategories(): Category[] {
  return demoCategories.filter((c) => c.isActive);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  if (slug === 'motos-eletricas') {
    return demoCategories.find((c) => c.slug === 'motos-eletricas-ate-1000w');
  }
  if (slug === 'triciclos-eletricos') {
    return demoCategories.find((c) => c.slug === 'modelos-especiais');
  }
  return demoCategories.find((c) => c.slug === slug);
}

// ---- FAQ ----

export function getAllFAQItems(): FAQItem[] {
  return demoFAQItems.sort((a, b) => a.order - b.order);
}

// ---- Banners ----

export function getActiveBanners(): Banner[] {
  return demoBanners.filter((b) => b.isActive).sort((a, b) => a.order - b.order);
}

// ---- Reviews ----

export function getApprovedReviews(): Review[] {
  return demoReviews.filter((r) => r.isApproved);
}

// ---- Brands (derived from products) ----

export function getAllBrands(): string[] {
  const brands = new Set(demoProducts.map((p) => p.brand));
  return Array.from(brands).sort();
}

// ---- Price range ----

export function getPriceRange(): { min: number; max: number } {
  const prices = demoProducts.map((p) => p.promotionalPrice || p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
}
