// ============================================================
// Da Hora Motos Elétricas — Dados Reais da Empresa e Catálogo
// Extraídos do acervo oficial: https://asantanaa3.wixstudio.com/dahoramotoseletricas
// Sede: Macatuba, São Paulo, Brasil
// ============================================================

import type { Product, Category, Banner, FAQItem, Review, StoreSettings, PhysicalStore } from '../types';

// ---- As 2 Lojas Físicas Oficiais em Macatuba/SP ----

export const macatubaStores: PhysicalStore[] = [
  {
    id: 'loja-1-assistencia',
    name: 'Loja 1 — Assistência Técnica & Peças',
    tag: 'Loja 1 • Assistência Técnica & Oficina',
    street: 'Alameda Tiradentes',
    number: '348',
    complement: 'Assistência Técnica Especializada, Oficina e Peças',
    neighborhood: 'Jardim Capri / Rodoviária',
    city: 'Macatuba',
    state: 'SP',
    cep: '17290-000',
    phone: '(14) 99887-7886',
    whatsapp: '5514998877886',
    hours: 'Segunda a Sexta: 08h às 18h | Sábados: 08h às 12h',
    googleMapsUrl: 'https://maps.google.com/?q=Alameda+Tiradentes+348+Macatuba+SP',
    isMain: true,
  },
  {
    id: 'loja-2-vendas',
    name: 'Loja 2 — Showroom de Vendas & Novos',
    tag: 'Loja 2 • Showroom de Vendas & Novos',
    street: 'Rua José Cruzerá',
    number: '241',
    complement: 'Showroom Comercial, Vendas e Pronta Entrega',
    neighborhood: 'Jardim Planalto',
    city: 'Macatuba',
    state: 'SP',
    cep: '17290-000',
    phone: '(14) 99887-7886',
    whatsapp: '5514998877886',
    hours: 'Segunda a Sexta: 08h às 18h | Sábados: 08h às 13h',
    googleMapsUrl: 'https://maps.google.com/?q=Rua+Jose+Cruzera+241+Jardim+Planalto+Macatuba+SP',
    isMain: false,
  },
];

// ---- Configurações Globais da Empresa ----

export const defaultStoreSettings: StoreSettings = {
  name: 'Da Hora Motos Elétricas',
  cnpj: '65.283.458/0001-40', // Daniel Nunes Comercio de Autopropelidos - ME
  phone: '(14) 99887-7886',
  whatsapp: '5514998877886',
  email: 'contato@dahoramotos.com.br',
  stores: macatubaStores,
  announcementBar: {
    text: '⚡ ENTREGA GRÁTIS EM ATÉ 150 KM DE MACATUBA/SP • LOJA 1: ASSISTÊNCIA TÉCNICA • LOJA 2: VENDAS',
    isActive: true,
  },
};

// ---- Categorias Oficiais ----

export const demoCategories: Category[] = [
  {
    id: 'cat-motos',
    slug: 'motos-eletricas',
    name: 'Motos Elétricas',
    description: 'Motos elétricas potentes de alta performance e grande autonomia para trajetos urbanos e rodoviários.',
    image: 'https://static.wixstatic.com/media/acc37b_236b7762a73a4c7c85b51059c02394e2~mv2.jpeg/v1/fit/w_800,h_800,q_90/file.jpg',
    productCount: 8,
    order: 1,
    isActive: true,
  },
  {
    id: 'cat-scooters',
    slug: 'scooters-eletricas',
    name: 'Scooters Elétricas',
    description: 'Scooters elétricas ágeis, confortáveis e com custo zero de combustível para o dia a dia.',
    image: 'https://static.wixstatic.com/media/acc37b_eb9c73247f034b52962348510d92947f~mv2.jpeg/v1/fit/w_800,h_800,q_90/file.jpg',
    productCount: 11,
    order: 2,
    isActive: true,
  },
  {
    id: 'cat-triciclos',
    slug: 'triciclos-eletricos',
    name: 'Triciclos Elétricos',
    description: 'Triciclos com estabilidade máxima para transporte, carga, trabalho ou lazer seguro.',
    image: 'https://static.wixstatic.com/media/acc37b_a80b268c792f4f1683c721de0b880486~mv2.jpg/v1/fit/w_800,h_800,q_90/file.jpg',
    productCount: 2,
    order: 3,
    isActive: true,
  },
  {
    id: 'cat-patinetes',
    slug: 'patinetes-eletricos',
    name: 'Patinetes & Drift',
    description: 'Patinetes elétricos portáteis e karts drift para mobilidade compacta e lazer esportivo.',
    image: 'https://static.wixstatic.com/media/acc37b_95c4cbea1ed04aaea084b4f435e052e6~mv2.webp/v1/fit/w_800,h_800,q_90/file.webp',
    productCount: 2,
    order: 4,
    isActive: true,
  },
];

// ---- Os 23 Veículos Reais do Catálogo Da Hora Motos Elétricas ----

export const demoProducts: Product[] = [
  {
    "id": "5dbf1285-dff8-4362-afe8-6b3fc23f8f11",
    "slug": "moto-elétrica-e80-speed",
    "name": "MOTO ELÉTRICA E80 SPEED",
    "shortDescription": "MOTO ELÉTRICA E80 SPEED — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "MOTO ELÉTRICA E80 SPEED oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-motos",
    "brand": "Speed",
    "model": "MOTO ELÉTRICA E80 SPEED",
    "price": 10900,
    "pixPrice": 10355,
    "installments": {
      "count": 12,
      "value": 908.33,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-0-0",
        "url": "https://static.wixstatic.com/media/acc37b_236b7762a73a4c7c85b51059c02394e2~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "MOTO ELÉTRICA E80 SPEED - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-0-1",
        "url": "https://static.wixstatic.com/media/acc37b_0531cc4edadd441c9e2b4a920a8df13c~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "MOTO ELÉTRICA E80 SPEED - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      },
      {
        "id": "img-0-2",
        "url": "https://static.wixstatic.com/media/acc37b_5df0bab516b54e00aeab3849fc421489~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "MOTO ELÉTRICA E80 SPEED - Da Hora Motos Elétricas Macatuba",
        "order": 3,
        "isMain": false
      },
      {
        "id": "img-0-3",
        "url": "https://static.wixstatic.com/media/acc37b_45f0382a8af04eae858d917fdfc101d3~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "MOTO ELÉTRICA E80 SPEED - Da Hora Motos Elétricas Macatuba",
        "order": 4,
        "isMain": false
      },
      {
        "id": "img-0-4",
        "url": "https://static.wixstatic.com/media/acc37b_c4683478dfb344419168b4050a871271~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "MOTO ELÉTRICA E80 SPEED - Da Hora Motos Elétricas Macatuba",
        "order": 5,
        "isMain": false
      },
      {
        "id": "img-0-5",
        "url": "https://static.wixstatic.com/media/acc37b_1b19fe28be614347afd09e99ea522834~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "MOTO ELÉTRICA E80 SPEED - Da Hora Motos Elétricas Macatuba",
        "order": 6,
        "isMain": false
      },
      {
        "id": "img-0-6",
        "url": "https://static.wixstatic.com/media/acc37b_1042716e4bd7401d952bed3dcc653a7d~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "MOTO ELÉTRICA E80 SPEED - Da Hora Motos Elétricas Macatuba",
        "order": 7,
        "isMain": false
      },
      {
        "id": "img-0-7",
        "url": "https://static.wixstatic.com/media/acc37b_97d7da7f2f93448c87864ac1f60ad51f~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "MOTO ELÉTRICA E80 SPEED - Da Hora Motos Elétricas Macatuba",
        "order": 8,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "2000W - 3000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 60km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "75km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": true,
    "isNew": true,
    "power": "2000W - 3000W",
    "range": "Até 60km*",
    "maxSpeed": "75km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "speed",
      "motos"
    ],
    "createdAt": "2026-11-02T14:52:26.950Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "ac97eb02-f7cb-49b1-8ad0-1f1152bf0814",
    "slug": "moto-elétrica-e60",
    "name": "MOTO ELÉTRICA E60",
    "shortDescription": "MOTO ELÉTRICA E60 — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "MOTO ELÉTRICA E60 oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-motos",
    "brand": "Da Hora",
    "model": "MOTO ELÉTRICA E60",
    "price": 10900,
    "pixPrice": 10355,
    "installments": {
      "count": 12,
      "value": 908.33,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-1-0",
        "url": "https://static.wixstatic.com/media/acc37b_ee4a2fca9086475daace67350c938f12~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "MOTO ELÉTRICA E60 - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-1-1",
        "url": "https://static.wixstatic.com/media/acc37b_18771559f12a41f8925a59e26e1beb78~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "MOTO ELÉTRICA E60 - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      },
      {
        "id": "img-1-2",
        "url": "https://static.wixstatic.com/media/acc37b_b5cb0ecf70744db2800cff27214bf5c6~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "MOTO ELÉTRICA E60 - Da Hora Motos Elétricas Macatuba",
        "order": 3,
        "isMain": false
      },
      {
        "id": "img-1-3",
        "url": "https://static.wixstatic.com/media/acc37b_5285a1970ef8435fa8dde6ade9ebf416~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "MOTO ELÉTRICA E60 - Da Hora Motos Elétricas Macatuba",
        "order": 4,
        "isMain": false
      },
      {
        "id": "img-1-4",
        "url": "https://static.wixstatic.com/media/acc37b_520d500a84544976b5a1d8a22b993a6c~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "MOTO ELÉTRICA E60 - Da Hora Motos Elétricas Macatuba",
        "order": 5,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1500W - 2000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 60km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "75km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": true,
    "isNew": false,
    "power": "1500W - 2000W",
    "range": "Até 60km*",
    "maxSpeed": "75km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "da hora",
      "motos"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "c84c0561-6eca-4451-a6b3-ffd28e87fe51",
    "slug": "patinete-xm-01-350w",
    "name": "PATINETE XM-01 350W",
    "shortDescription": "PATINETE XM-01 350W — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "PATINETE XM-01 350W oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-patinetes",
    "brand": "Da Hora",
    "model": "PATINETE XM-01 350W",
    "price": 1999,
    "pixPrice": 1899,
    "installments": {
      "count": 12,
      "value": 166.58,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-2-0",
        "url": "https://static.wixstatic.com/media/acc37b_95c4cbea1ed04aaea084b4f435e052e6~mv2.webp/v1/fit/w_800,h_800,q_90/file.webp",
        "alt": "PATINETE XM-01 350W - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-2-1",
        "url": "https://static.wixstatic.com/media/acc37b_be6f605317604e73a629eed38dcf8991~mv2.webp/v1/fit/w_800,h_800,q_90/file.webp",
        "alt": "PATINETE XM-01 350W - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      },
      {
        "id": "img-2-2",
        "url": "https://static.wixstatic.com/media/acc37b_2fe8ad0b1fec47479ae7f656945c7052~mv2.webp/v1/fit/w_800,h_800,q_90/file.webp",
        "alt": "PATINETE XM-01 350W - Da Hora Motos Elétricas Macatuba",
        "order": 3,
        "isMain": false
      },
      {
        "id": "img-2-3",
        "url": "https://static.wixstatic.com/media/acc37b_42fdbdeb344948b8949c4f8c8c8dc8e3~mv2.webp/v1/fit/w_800,h_800,q_90/file.webp",
        "alt": "PATINETE XM-01 350W - Da Hora Motos Elétricas Macatuba",
        "order": 4,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "350W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 25km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "25km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": true,
    "isNew": false,
    "power": "350W",
    "range": "Até 25km*",
    "maxSpeed": "25km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "da hora",
      "patinetes"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "83a72589-1189-427d-abbb-795ff1a19475",
    "slug": "drift-201-mini-350w",
    "name": "DRIFT 201 MINI 350W",
    "shortDescription": "DRIFT 201 MINI 350W — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "DRIFT 201 MINI 350W oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-patinetes",
    "brand": "Da Hora",
    "model": "DRIFT 201 MINI 350W",
    "price": 1999,
    "pixPrice": 1899,
    "installments": {
      "count": 12,
      "value": 166.58,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-3-0",
        "url": "https://static.wixstatic.com/media/acc37b_5a4cb2df3d02449e8eaacbef968de5f5~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "DRIFT 201 MINI 350W - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-3-1",
        "url": "https://static.wixstatic.com/media/acc37b_a516ab446c0741e6bd08647d7a0a19b8~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "DRIFT 201 MINI 350W - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      },
      {
        "id": "img-3-2",
        "url": "https://static.wixstatic.com/media/acc37b_95253c25cebe4f28b2d3df61c7ff3db9~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "DRIFT 201 MINI 350W - Da Hora Motos Elétricas Macatuba",
        "order": 3,
        "isMain": false
      },
      {
        "id": "img-3-3",
        "url": "https://static.wixstatic.com/media/acc37b_f734cc74da5c46cfac42df90fa0e1446~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "DRIFT 201 MINI 350W - Da Hora Motos Elétricas Macatuba",
        "order": 4,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "350W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 25km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "25km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": true,
    "isNew": false,
    "power": "350W",
    "range": "Até 25km*",
    "maxSpeed": "25km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "da hora",
      "patinetes"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "4bbe5ad5-d5d3-4fdb-923d-777e79930704",
    "slug": "scooter-1822-bolin",
    "name": "SCOOTER 1822 BOLIN",
    "shortDescription": "SCOOTER 1822 BOLIN — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "SCOOTER 1822 BOLIN oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-scooters",
    "brand": "Bolin",
    "model": "SCOOTER 1822 BOLIN",
    "price": 6900,
    "pixPrice": 6555,
    "installments": {
      "count": 12,
      "value": 575,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-4-0",
        "url": "https://static.wixstatic.com/media/acc37b_04c1297617a24b0191544853c1692dd7~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "alt": "SCOOTER 1822 BOLIN - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-4-1",
        "url": "https://static.wixstatic.com/media/acc37b_3c974733edd54e08bad3123c4fd93440~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER 1822 BOLIN - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 45km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "40km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": true,
    "isNew": false,
    "power": "1000W",
    "range": "Até 45km*",
    "maxSpeed": "40km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "bolin",
      "scooters"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "0b789d70-be50-46c4-bcfa-e19caa3536b4",
    "slug": "scooter-1962-bolin",
    "name": "SCOOTER 1962 BOLIN",
    "shortDescription": "SCOOTER 1962 BOLIN — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "SCOOTER 1962 BOLIN oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-scooters",
    "brand": "Bolin",
    "model": "SCOOTER 1962 BOLIN",
    "price": 6900,
    "pixPrice": 6555,
    "installments": {
      "count": 12,
      "value": 575,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-5-0",
        "url": "https://static.wixstatic.com/media/acc37b_4a1633b2a0e340188d122e2f9d445266~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER 1962 BOLIN - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-5-1",
        "url": "https://static.wixstatic.com/media/acc37b_22b27cd4934f484db220b87c2f0cfc41~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER 1962 BOLIN - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      },
      {
        "id": "img-5-2",
        "url": "https://static.wixstatic.com/media/acc37b_0f0f8c74615641de902c0f3ec51483ad~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "alt": "SCOOTER 1962 BOLIN - Da Hora Motos Elétricas Macatuba",
        "order": 3,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 45km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "40km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": true,
    "isNew": false,
    "power": "1000W",
    "range": "Até 45km*",
    "maxSpeed": "40km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "bolin",
      "scooters"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "a0788eb3-ac51-43fd-b336-596d51c3a13d",
    "slug": "scooter-e40-bolin",
    "name": "SCOOTER E40 BOLIN",
    "shortDescription": "SCOOTER E40 BOLIN — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "SCOOTER E40 BOLIN oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-scooters",
    "brand": "Bolin",
    "model": "SCOOTER E40 BOLIN",
    "price": 10900,
    "pixPrice": 10355,
    "installments": {
      "count": 12,
      "value": 908.33,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-6-0",
        "url": "https://static.wixstatic.com/media/acc37b_ce3ac517cff646e6b5408bb4b6da02ca~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER E40 BOLIN - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-6-1",
        "url": "https://static.wixstatic.com/media/acc37b_1ac1595745ac4e3587ef75c033e8f20c~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER E40 BOLIN - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1500W - 2000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 60km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "75km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": true,
    "isNew": false,
    "power": "1500W - 2000W",
    "range": "Até 60km*",
    "maxSpeed": "75km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "bolin",
      "scooters"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "5237e332-55c7-4d75-9fec-286e0d6b7dba",
    "slug": "scooter-e30-bolin",
    "name": "SCOOTER E30",
    "shortDescription": "SCOOTER E30 — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "SCOOTER E30 oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-scooters",
    "brand": "Da Hora",
    "model": "SCOOTER E30",
    "price": 10900,
    "pixPrice": 10355,
    "installments": {
      "count": 12,
      "value": 908.33,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-7-0",
        "url": "https://static.wixstatic.com/media/acc37b_9020565aa56e4f0da62ea87374ccecb9~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER E30 - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1200W - 1500W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 45km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "40km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": true,
    "isNew": false,
    "power": "1200W - 1500W",
    "range": "Até 45km*",
    "maxSpeed": "40km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "da hora",
      "scooters"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "0041d331-2dc3-4996-b950-90aec0efecd6",
    "slug": "scooter-e20-bolin",
    "name": "SCOOTER E20 BOLIN",
    "shortDescription": "SCOOTER E20 BOLIN — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "SCOOTER E20 BOLIN oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-scooters",
    "brand": "Bolin",
    "model": "SCOOTER E20 BOLIN",
    "price": 10500,
    "pixPrice": 9975,
    "installments": {
      "count": 12,
      "value": 875,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-8-0",
        "url": "https://static.wixstatic.com/media/acc37b_ee3eead82e1f42088c1b87fa983ff804~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER E20 BOLIN - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-8-1",
        "url": "https://static.wixstatic.com/media/acc37b_0005fd5f53e646adbc696150c7cb0bac~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER E20 BOLIN - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      },
      {
        "id": "img-8-2",
        "url": "https://static.wixstatic.com/media/acc37b_242e8b9dd8dd4a6fa1ea66da94c2aa24~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER E20 BOLIN - Da Hora Motos Elétricas Macatuba",
        "order": 3,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1200W - 1500W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 45km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "40km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": false,
    "isNew": false,
    "power": "1200W - 1500W",
    "range": "Até 45km*",
    "maxSpeed": "40km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "bolin",
      "scooters"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "49228ecb-a6bc-4628-b31f-31ce8cdbb9a1",
    "slug": "scooter-tank-irun",
    "name": "SCOOTER TANK IRUN",
    "shortDescription": "SCOOTER TANK IRUN — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "SCOOTER TANK IRUN oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-scooters",
    "brand": "Irun",
    "model": "SCOOTER TANK IRUN",
    "price": 12900,
    "pixPrice": 12255,
    "installments": {
      "count": 12,
      "value": 1075,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-9-0",
        "url": "https://static.wixstatic.com/media/acc37b_eb9c73247f034b52962348510d92947f~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER TANK IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-9-1",
        "url": "https://static.wixstatic.com/media/acc37b_c2a1e98da2374b11b90de6e35a6edc35~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER TANK IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      },
      {
        "id": "img-9-2",
        "url": "https://static.wixstatic.com/media/acc37b_de77ef47da9444319cedff9b36d8ff9d~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER TANK IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 3,
        "isMain": false
      },
      {
        "id": "img-9-3",
        "url": "https://static.wixstatic.com/media/acc37b_8122b59af0d84cec8f605fbf5ce7e7f1~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER TANK IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 4,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "2000W - 3000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 60km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "75km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": true,
    "isNew": true,
    "power": "2000W - 3000W",
    "range": "Até 60km*",
    "maxSpeed": "75km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "irun",
      "scooters"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "983bd747-6aac-4a0a-b4fc-bb1ec3f21253",
    "slug": "triciclo-t3-bolin",
    "name": "TRICICLO T3 BOLIN",
    "shortDescription": "TRICICLO T3 BOLIN — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "TRICICLO T3 BOLIN oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-triciclos",
    "brand": "Bolin",
    "model": "TRICICLO T3 BOLIN",
    "price": 10900,
    "pixPrice": 10355,
    "installments": {
      "count": 12,
      "value": 908.33,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-10-0",
        "url": "https://static.wixstatic.com/media/acc37b_a80b268c792f4f1683c721de0b880486~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "TRICICLO T3 BOLIN - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-10-1",
        "url": "https://static.wixstatic.com/media/acc37b_9aff183aa1c4469aa0f57cd65a2ff197~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "TRICICLO T3 BOLIN - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      },
      {
        "id": "img-10-2",
        "url": "https://static.wixstatic.com/media/acc37b_b545352705dd457db7cb1eef1d316ca5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "TRICICLO T3 BOLIN - Da Hora Motos Elétricas Macatuba",
        "order": 3,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 45km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "40km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": true,
    "isNew": false,
    "power": "1000W",
    "range": "Até 45km*",
    "maxSpeed": "40km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "bolin",
      "triciclos"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "a871a866-4a57-4acc-ae60-e4608bd9f87a",
    "slug": "triciclo-t1-bolin",
    "name": "TRICICLO T1 BOLIN",
    "shortDescription": "TRICICLO T1 BOLIN — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "TRICICLO T1 BOLIN oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-triciclos",
    "brand": "Bolin",
    "model": "TRICICLO T1 BOLIN",
    "price": 10900,
    "pixPrice": 10355,
    "installments": {
      "count": 12,
      "value": 908.33,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-11-0",
        "url": "https://static.wixstatic.com/media/acc37b_675228c7b17740fb81d43e2e5519f908~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "alt": "TRICICLO T1 BOLIN - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-11-1",
        "url": "https://static.wixstatic.com/media/acc37b_a923447891514eb096ceea12d6bc0eea~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "TRICICLO T1 BOLIN - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 45km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "40km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": false,
    "isNew": false,
    "power": "1000W",
    "range": "Até 45km*",
    "maxSpeed": "40km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "bolin",
      "triciclos"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "72b653f3-ec8f-4c55-beb6-4a7e4cc799a4",
    "slug": "cavalleta-c12",
    "name": "CAVALLETA C12",
    "shortDescription": "CAVALLETA C12 — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "CAVALLETA C12 oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-motos",
    "brand": "Da Hora",
    "model": "CAVALLETA C12",
    "price": 10900,
    "pixPrice": 10355,
    "installments": {
      "count": 12,
      "value": 908.33,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-12-0",
        "url": "https://static.wixstatic.com/media/acc37b_96c1da3370a9471885d99bfa18350f8e~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "alt": "CAVALLETA C12 - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-12-1",
        "url": "https://static.wixstatic.com/media/acc37b_91797e7ad8964ee48f81d7d6404f19ff~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "alt": "CAVALLETA C12 - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      },
      {
        "id": "img-12-2",
        "url": "https://static.wixstatic.com/media/acc37b_ead7d3ba340a4ec5a2f23866032614ad~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "alt": "CAVALLETA C12 - Da Hora Motos Elétricas Macatuba",
        "order": 3,
        "isMain": false
      },
      {
        "id": "img-12-3",
        "url": "https://static.wixstatic.com/media/acc37b_31b77fb0176840c7b015140f488269fc~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "alt": "CAVALLETA C12 - Da Hora Motos Elétricas Macatuba",
        "order": 4,
        "isMain": false
      },
      {
        "id": "img-12-4",
        "url": "https://static.wixstatic.com/media/acc37b_1d6520a46a3844d28fc473565743a48f~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "alt": "CAVALLETA C12 - Da Hora Motos Elétricas Macatuba",
        "order": 5,
        "isMain": false
      },
      {
        "id": "img-12-5",
        "url": "https://static.wixstatic.com/media/acc37b_a54d8590f6dc4b6d8036a5654ac8269c~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "alt": "CAVALLETA C12 - Da Hora Motos Elétricas Macatuba",
        "order": 6,
        "isMain": false
      },
      {
        "id": "img-12-6",
        "url": "https://static.wixstatic.com/media/acc37b_5eb9b9412a514713b2c5c743eab523ca~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "alt": "CAVALLETA C12 - Da Hora Motos Elétricas Macatuba",
        "order": 7,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 45km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "40km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": false,
    "isNew": false,
    "power": "1000W",
    "range": "Até 45km*",
    "maxSpeed": "40km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "da hora",
      "motos"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "9153bc20-24f6-4e50-aeed-754e4a70b0bd",
    "slug": "scooter-z1-800w",
    "name": "SCOOTER Z1 800W",
    "shortDescription": "SCOOTER Z1 800W — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "SCOOTER Z1 800W oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-scooters",
    "brand": "Da Hora",
    "model": "SCOOTER Z1 800W",
    "price": 6900,
    "pixPrice": 6555,
    "installments": {
      "count": 12,
      "value": 575,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-13-0",
        "url": "https://static.wixstatic.com/media/acc37b_ac814a3ddd4a44baa6a181c11edc4da9~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER Z1 800W - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-13-1",
        "url": "https://static.wixstatic.com/media/acc37b_443d51e6fa7f416b892e7a34275fbd0f~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER Z1 800W - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      },
      {
        "id": "img-13-2",
        "url": "https://static.wixstatic.com/media/acc37b_30236e585d2342b695a5b66d40fdcd61~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER Z1 800W - Da Hora Motos Elétricas Macatuba",
        "order": 3,
        "isMain": false
      },
      {
        "id": "img-13-3",
        "url": "https://static.wixstatic.com/media/acc37b_e81c8fdfe1744c5987ce022d383277d9~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER Z1 800W - Da Hora Motos Elétricas Macatuba",
        "order": 4,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "800W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 35km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "35km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": false,
    "isNew": false,
    "power": "800W",
    "range": "Até 35km*",
    "maxSpeed": "35km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "da hora",
      "scooters"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "8796c6b0-b4c1-49d1-8cf0-e8a96d3d79ac",
    "slug": "scooter-q1-panda",
    "name": "SCOOTER Q1 PANDA",
    "shortDescription": "SCOOTER Q1 PANDA — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "SCOOTER Q1 PANDA oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-scooters",
    "brand": "Panda",
    "model": "SCOOTER Q1 PANDA",
    "price": 7900,
    "pixPrice": 7505,
    "installments": {
      "count": 12,
      "value": 658.33,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-14-0",
        "url": "https://static.wixstatic.com/media/acc37b_c1d91c61dc3b470f85532723ef9607f1~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "alt": "SCOOTER Q1 PANDA - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 45km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "40km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": false,
    "isNew": false,
    "power": "1000W",
    "range": "Até 45km*",
    "maxSpeed": "40km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "panda",
      "scooters"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "0105f5ea-5539-4888-96e8-0f8d300c6e29",
    "slug": "scooter-cb-800",
    "name": "SCOOTER CB 800",
    "shortDescription": "SCOOTER CB 800 — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "SCOOTER CB 800 oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-scooters",
    "brand": "Da Hora",
    "model": "SCOOTER CB 800",
    "price": 7900,
    "pixPrice": 7505,
    "installments": {
      "count": 12,
      "value": 658.33,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-15-0",
        "url": "https://static.wixstatic.com/media/acc37b_3f2a021bbb024d1b9d8ecd53a0f829b8~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "alt": "SCOOTER CB 800 - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "800W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 35km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "35km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": false,
    "isNew": false,
    "power": "800W",
    "range": "Até 35km*",
    "maxSpeed": "35km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "da hora",
      "scooters"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "3d60d815-9af1-42f1-8a31-957babe860f7",
    "slug": "wd-2-super-1000w",
    "name": "WD-2 SUPER 1000W",
    "shortDescription": "WD-2 SUPER 1000W — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "WD-2 SUPER 1000W oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-scooters",
    "brand": "Da Hora",
    "model": "WD-2 SUPER 1000W",
    "price": 7900,
    "pixPrice": 7505,
    "installments": {
      "count": 12,
      "value": 658.33,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-16-0",
        "url": "https://static.wixstatic.com/media/acc37b_ee08a017b4c646a59ddd863d706e0f0e~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "WD-2 SUPER 1000W - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-16-1",
        "url": "https://static.wixstatic.com/media/acc37b_9af4d464091d4d10be15a0261d76dd5a~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "WD-2 SUPER 1000W - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 45km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "40km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": false,
    "isNew": false,
    "power": "1000W",
    "range": "Até 45km*",
    "maxSpeed": "40km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "da hora",
      "scooters"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "cb8ce75f-5c69-45ea-a3f6-6eefe5bba284",
    "slug": "cb-1000-irun",
    "name": "CB 1000 IRUN",
    "shortDescription": "CB 1000 IRUN — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "CB 1000 IRUN oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-motos",
    "brand": "Irun",
    "model": "CB 1000 IRUN",
    "price": 7900,
    "pixPrice": 7505,
    "installments": {
      "count": 12,
      "value": 658.33,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-17-0",
        "url": "https://static.wixstatic.com/media/acc37b_1bbfb6db7cd54b07ac9a0179dffa5dbe~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "CB 1000 IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-17-1",
        "url": "https://static.wixstatic.com/media/acc37b_8fe603517ebd447eadc6d3581a004a69~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "CB 1000 IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      },
      {
        "id": "img-17-2",
        "url": "https://static.wixstatic.com/media/acc37b_a8424cccb6594bcd8e83a1d294f957fa~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "CB 1000 IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 3,
        "isMain": false
      },
      {
        "id": "img-17-3",
        "url": "https://static.wixstatic.com/media/acc37b_d561e9f8c1d4411288999cc8dd0d1e91~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "CB 1000 IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 4,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 45km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "40km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": false,
    "isNew": false,
    "power": "1000W",
    "range": "Até 45km*",
    "maxSpeed": "40km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "irun",
      "motos"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "fbe00fde-818c-4fde-8d84-78626e4773fc",
    "slug": "cyber-1000-irun",
    "name": "CYBER 1000 IRUN",
    "shortDescription": "CYBER 1000 IRUN — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "CYBER 1000 IRUN oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-motos",
    "brand": "Irun",
    "model": "CYBER 1000 IRUN",
    "price": 10900,
    "pixPrice": 10355,
    "installments": {
      "count": 12,
      "value": 908.33,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-18-0",
        "url": "https://static.wixstatic.com/media/acc37b_9e0ce6af5a7e4c488672b20e8715f72d~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "CYBER 1000 IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-18-1",
        "url": "https://static.wixstatic.com/media/acc37b_e817f0ee237842e79da1ab172f86e388~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "CYBER 1000 IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 45km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "40km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": false,
    "isNew": true,
    "power": "1000W",
    "range": "Até 45km*",
    "maxSpeed": "40km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "irun",
      "motos"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "e0d11cb4-109a-4a2e-ade8-3173221a3e00",
    "slug": "r17-prime",
    "name": "R17 PRIME IRUN",
    "shortDescription": "R17 PRIME IRUN — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "R17 PRIME IRUN oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-motos",
    "brand": "Irun",
    "model": "R17 PRIME IRUN",
    "price": 11900,
    "pixPrice": 11305,
    "installments": {
      "count": 12,
      "value": 991.67,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-19-0",
        "url": "https://static.wixstatic.com/media/acc37b_1b5fdb4eb2c94a5ebea0c4c99db1b274~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "R17 PRIME IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-19-1",
        "url": "https://static.wixstatic.com/media/acc37b_2256647a4ddc4c9bbd84fb44134f1597~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "R17 PRIME IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 45km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "40km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": false,
    "isNew": false,
    "power": "1000W",
    "range": "Até 45km*",
    "maxSpeed": "40km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "irun",
      "motos"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "8f3a8fd1-7026-4a0e-afc3-dc8de025fe72",
    "slug": "r13-prime",
    "name": "R13 PRIME IRUN",
    "shortDescription": "R13 PRIME IRUN — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "R13 PRIME IRUN oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-motos",
    "brand": "Irun",
    "model": "R13 PRIME IRUN",
    "price": 11900,
    "pixPrice": 11305,
    "installments": {
      "count": 12,
      "value": 991.67,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-20-0",
        "url": "https://static.wixstatic.com/media/acc37b_077bac40c7634c28aacfc961f4bc23c4~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "R13 PRIME IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-20-1",
        "url": "https://static.wixstatic.com/media/acc37b_1905edb6d49545579fe322e9d9f13052~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "R13 PRIME IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      },
      {
        "id": "img-20-2",
        "url": "https://static.wixstatic.com/media/acc37b_b075736fa2cf4cba920e4713711d00c2~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "R13 PRIME IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 3,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 45km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "40km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": false,
    "isNew": false,
    "power": "1000W",
    "range": "Até 45km*",
    "maxSpeed": "40km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "irun",
      "motos"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "e788cd68-4168-40bc-9d47-2eae422a6e25",
    "slug": "modelo-x13",
    "name": "SCOOTER X13",
    "shortDescription": "SCOOTER X13 — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "SCOOTER X13 oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-scooters",
    "brand": "Da Hora",
    "model": "SCOOTER X13",
    "price": 10900,
    "pixPrice": 10355,
    "installments": {
      "count": 12,
      "value": 908.33,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-21-0",
        "url": "https://static.wixstatic.com/media/acc37b_ea46cbef3a994e9ebef21e7d2d46465b~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "alt": "SCOOTER X13 - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-21-1",
        "url": "https://static.wixstatic.com/media/acc37b_ae5bf36ce2904e33a7f53b9d1ccc10e6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "SCOOTER X13 - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 45km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "40km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": false,
    "isNew": false,
    "power": "1000W",
    "range": "Até 45km*",
    "maxSpeed": "40km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "da hora",
      "scooters"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  },
  {
    "id": "19d0d724-dd26-45f1-82a8-3cb1d9e29872",
    "slug": "scooter-r20-prime",
    "name": "R20 PRIME IRUN",
    "shortDescription": "R20 PRIME IRUN — Veículo elétrico leve disponível no Showroom Da Hora em Macatuba/SP.",
    "description": "R20 PRIME IRUN oferece excelente dirigibilidade, economia comprovada no deslocamento diário e baixo custo de recarga em tomadas convencionais de 110V ou 220V. Veículo entregue revisado pela Da Hora Motos Elétricas com garantia e assistência técnica.",
    "categoryId": "cat-motos",
    "brand": "Irun",
    "model": "R20 PRIME IRUN",
    "price": 10900,
    "pixPrice": 10355,
    "installments": {
      "count": 12,
      "value": 908.33,
      "hasInterest": false
    },
    "images": [
      {
        "id": "img-22-0",
        "url": "https://static.wixstatic.com/media/acc37b_3dc8d220afed4b63b5445ce89b74b823~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "R20 PRIME IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 1,
        "isMain": true
      },
      {
        "id": "img-22-1",
        "url": "https://static.wixstatic.com/media/acc37b_79f5e928245e4f8498b6ece85c2d8d2b~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "R20 PRIME IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 2,
        "isMain": false
      },
      {
        "id": "img-22-2",
        "url": "https://static.wixstatic.com/media/acc37b_ea890622618544d2ab096e4325457f84~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "alt": "R20 PRIME IRUN - Da Hora Motos Elétricas Macatuba",
        "order": 3,
        "isMain": false
      }
    ],
    "variants": [],
    "specifications": [
      {
        "key": "motor",
        "label": "Motorização",
        "value": "1000W",
        "group": "Desempenho"
      },
      {
        "key": "autonomia",
        "label": "Autonomia Estimada",
        "value": "Até 45km*",
        "group": "Desempenho"
      },
      {
        "key": "velocidade",
        "label": "Velocidade Máxima Declarada",
        "value": "40km/h*",
        "group": "Desempenho"
      },
      {
        "key": "recarga",
        "label": "Tempo de Recarga",
        "value": "4 a 8 horas",
        "group": "Bateria"
      },
      {
        "key": "garantia",
        "label": "Garantia",
        "value": "Garantia legal de 90 dias + garantia de fábrica",
        "group": "Geral"
      }
    ],
    "stock": 3,
    "isAvailable": true,
    "isFeatured": false,
    "isNew": false,
    "power": "1000W",
    "range": "Até 45km*",
    "maxSpeed": "40km/h*",
    "batteryType": "Lítio ou Chumbo Especial (Consulte versão)",
    "chargingTime": "4-8h",
    "warranty": "Garantia legal + fábrica",
    "tags": [
      "irun",
      "motos"
    ],
    "createdAt": "2026-11-02T14:52:26.952Z",
    "updatedAt": "2026-11-02T14:52:26.952Z"
  }
];

// ---- Banners ----

export const demoBanners: Banner[] = [
  {
    id: 'banner-1',
    title: 'Uma nova forma de se movimentar.',
    subtitle: 'DA HORA MOTOS ELÉTRICAS',
    description: 'Descubra motos, scooters, triciclos e veículos elétricos leves para transformar sua rotina com economia e tecnologia.',
    ctaPrimary: {
      text: 'EXPLORAR VEÍCULOS',
      link: '/veiculos',
    },
    ctaSecondary: {
      text: 'FALAR COM UM ESPECIALISTA',
      link: '#whatsapp',
    },
    image: 'https://static.wixstatic.com/media/acc37b_236b7762a73a4c7c85b51059c02394e2~mv2.jpeg/v1/fit/w_1200,h_800,q_90/file.jpg',
    order: 1,
    isActive: true,
  },
];

// ---- Dúvidas Frequentes ----

export const demoFAQItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Onde ficam as lojas físicas da Da Hora em Macatuba?',
    answer: 'Contamos com 2 unidades em Macatuba/SP: a Loja 1 (Assistência Técnica & Peças) fica na Alameda Tiradentes, nº 348 (ao lado da Rodoviária), e a Loja 2 (Showroom de Vendas & Novos) fica na Rua José Cruzerá, nº 241, Jardim Planalto.',
    category: 'Showroom',
    order: 1,
  },
  {
    id: 'faq-2',
    question: 'Como funciona a entrega dos veículos para outras cidades?',
    answer: 'Enviamos para todo o Brasil através de transportadoras especializadas em veículos. Cada veículo passa por aperto, checagem elétrica e revisão completa antes do embarque, acompanhado de Nota Fiscal eletrônica.',
    category: 'Entrega',
    order: 2,
  },
  {
    id: 'faq-3',
    question: 'Quais são as formas de pagamento disponíveis?',
    answer: 'Aceitamos Pix (com desconto especial à vista), cartão de crédito em até 12x e condições de financiamento sob consulta.',
    category: 'Pagamento',
    order: 3,
  },
  {
    id: 'faq-4',
    question: 'Os veículos possuem garantia?',
    answer: 'Sim! Todos os nossos veículos possuem garantia legal de 90 dias conforme o CDC, além da garantia de fábrica para chassi, motor e bateria.',
    category: 'Garantia',
    order: 4,
  },
  {
    id: 'faq-5',
    question: 'Como recarrego a bateria?',
    answer: 'A recarga é simples e pode ser feita em qualquer tomada residencial padrão de 110V ou 220V. O tempo de recarga média varia de 4 a 8 horas com custo aproximado de apenas R$ 1,50 a R$ 2,50 por carga completa.',
    category: 'Bateria',
    order: 5,
  },
  {
    id: 'faq-6',
    question: 'Preciso de CNH para conduzir?',
    answer: 'A exigência legal depende da classificação do modelo segundo a Resolução Contran nº 996/2023. Patinetes autopropelidos e bicicletas elétricas com pedal assistido não exigem CNH nem placa. Já ciclomotores (scooters de até 50km/h com acelerador) e motos exigem habilitação (ACC ou CNH A) e emplacamento.',
    category: 'Legislação',
    order: 6,
  },
];

export const demoReviews: Review[] = [];
