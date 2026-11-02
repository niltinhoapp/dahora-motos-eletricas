// ============================================================
// Da Hora Motos Elétricas — Cart Context
// Persists cart to localStorage, provides add/remove/update
// ============================================================

import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';
import type { CartItem, Product } from '../types';

// ---- State ----

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

// ---- Actions ----

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; variantId?: string; quantity?: number }
  | { type: 'REMOVE_ITEM'; productId: string; variantId?: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; variantId?: string; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'SET_CART_OPEN'; isOpen: boolean }
  | { type: 'LOAD_CART'; items: CartItem[] };

// ---- Reducer ----

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) =>
          item.product.id === action.product.id &&
          item.variantId === action.variantId
      );

      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + (action.quantity || 1),
        };
        return { ...state, items: newItems };
      }

      const unitPrice =
        action.product.promotionalPrice || action.product.price;
      return {
        ...state,
        items: [
          ...state.items,
          {
            product: action.product,
            variantId: action.variantId,
            quantity: action.quantity || 1,
            unitPrice,
          },
        ],
      };
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            !(
              item.product.id === action.productId &&
              item.variantId === action.variantId
            )
        ),
      };
    }

    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) =>
              !(
                item.product.id === action.productId &&
                item.variantId === action.variantId
              )
          ),
        };
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.productId &&
          item.variantId === action.variantId
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    }

    case 'CLEAR_CART':
      return { ...state, items: [] };

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'SET_CART_OPEN':
      return { ...state, isOpen: action.isOpen };

    case 'LOAD_CART':
      return { ...state, items: action.items };

    default:
      return state;
  }
}

// ---- Context ----

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  addItem: (product: Product, variantId?: string, quantity?: number) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

const CART_STORAGE_KEY = 'dahora-cart';

function loadCartFromStorage(): CartItem[] {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Ignore parse errors
  }
  return [];
}

function saveCartToStorage(items: CartItem[]): void {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Ignore storage errors
  }
}

// ---- Provider ----

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const items = loadCartFromStorage();
    if (items.length > 0) {
      dispatch({ type: 'LOAD_CART', items });
    }
  }, []);

  // Persist to localStorage on changes
  useEffect(() => {
    saveCartToStorage(state.items);
  }, [state.items]);

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const contextValue: CartContextType = {
    items: state.items,
    isOpen: state.isOpen,
    itemCount,
    subtotal,
    addItem: (product, variantId, quantity) =>
      dispatch({ type: 'ADD_ITEM', product, variantId, quantity }),
    removeItem: (productId, variantId) =>
      dispatch({ type: 'REMOVE_ITEM', productId, variantId }),
    updateQuantity: (productId, quantity, variantId) =>
      dispatch({ type: 'UPDATE_QUANTITY', productId, variantId, quantity }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    toggleCart: () => dispatch({ type: 'TOGGLE_CART' }),
    setCartOpen: (isOpen) => dispatch({ type: 'SET_CART_OPEN', isOpen }),
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
