// Environment variables type definitions
// All values should be set in .env file (never commit secrets)

export const env = {
  // Supabase (when configured)
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL as string | undefined,
  SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined,

  // WhatsApp
  WHATSAPP_NUMBER: import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined,

  // Google Analytics / Tag Manager
  GA_MEASUREMENT_ID: import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined,
  GTM_ID: import.meta.env.VITE_GTM_ID as string | undefined,

  // Meta Pixel
  META_PIXEL_ID: import.meta.env.VITE_META_PIXEL_ID as string | undefined,

  // Store Info (configurable defaults)
  STORE_NAME: 'Da Hora Motos Elétricas',
  STORE_CITY: 'Macatuba',
  STORE_STATE: 'São Paulo',
  STORE_COUNTRY: 'Brasil',
} as const;
