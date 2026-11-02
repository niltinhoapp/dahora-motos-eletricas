# Da Hora Motos Elétricas — E-Commerce & Concessionária Digital

Plataforma de e-commerce e concessionária digital moderna desenvolvida para a **Da Hora Motos Elétricas**, localizada em **Macatuba, São Paulo**.

---

## 1. Identidade e Visual

- **Direção Visual:** *Dark Luxury + Clean Commercial*
- **Paleta de Cores:**
  - Preto azulado profundo: `#060911`
  - Azul meia-noite: `#090E1A`
  - Verde esmeralda (Ações comerciais): `#10B981`
  - Ciano tecnológico (Indicadores): `#06B6D4`
  - Cinza-gelo (Fundos claros): `#F8FAFC`
  - Branco: `#FFFFFF`
- **Tipografia:** Inter (textos e dados numéricos) e Manrope (títulos e chamadas).

---

## 2. Tecnologias Utilizadas

- **React 19**
- **TypeScript 5.7+**
- **Vite 6**
- **Tailwind CSS 3.4**
- **React Router 7**
- **Lucide React** (ícones consistentes)
- **Context API** para gerenciamento de carrinho e autenticação administrativa

---

## 3. Estrutura de Rotas Implementadas

### Rotas Públicas:
- `/` — Página inicial com Hero, Categorias, Destaques, Comparador, Simulador de Economia, Por que comprar na Da Hora, Showroom Macatuba, Prova social e FAQ.
- `/veiculos` — Catálogo completo com busca em tempo real, filtros por categoria, preço, disponibilidade e ordenação.
- `/categoria/:slug` — Listagem filtrada por categoria.
- `/produto/:slug` — Página individual do veículo com galeria, cálculo de parcelas, variações, ficha técnica, legislação e produtos relacionados.
- `/comparar` — Comparador lado a lado de até 3 modelos.
- `/simulador-economia` — Simulador interativo calculando economia em combustível vs energia elétrica.
- `/sobre` — História da concessionária e compromisso em Macatuba.
- `/showroom` — Showroom físico em Macatuba com mapa, horários e agendamento.
- `/entrega` — Logística e envio de veículos montados e revisados.
- `/garantia` — Termos de garantia de fábrica e revisões.
- `/documentacao` — Classificação legal segundo a Resolução Contran nº 996/2023.
- `/carrinho` — Carrinho de compras com persistência local.
- `/checkout` — Checkout multi-etapas (Identificação, Entrega, Pagamento e Confirmação).
- `/pedido/:id` — Linha do tempo de acompanhamento de pedidos.
- `/contato` — Formulário de contato e links diretos para WhatsApp.
- `/politica-de-privacidade` — Termos de privacidade (LGPD).
- `/termos-de-uso` — Condições de uso e responsabilidades do condutor.
- `/trocas-e-devolucoes` — Política de devolução e direito de arrependimento (CDC).

### Rotas Administrativas (Protegidas):
- `/admin/login` — Login do painel (senha padrão: `admin123`).
- `/admin` — Dashboard operacional com indicadores de modelos, estoque e patrimônio.
- `/admin/produtos` — Gestão, criação e ativação/pausa de veículos.
- `/admin/categorias` — Gestão de categorias do catálogo.
- `/admin/pedidos` — Acompanhamento e atualização de pedidos.
- `/admin/clientes` — Base de compradores cadastrados.
- `/admin/estoque` — Ajuste rápido de unidades em estoque físico.
- `/admin/configuracoes` — Dados de contato, mensagem da barra de topo e configurações da loja.

---

## 4. Instruções de Execução

```bash
# 1. Instalar dependências (caso clonado novamente)
npm install --legacy-peer-deps

# 2. Iniciar servidor de desenvolvimento local
npm run dev

# 3. Compilar projeto para produção (TypeScript + Vite)
npm run build

# 4. Pré-visualizar build de produção localmente
npm run preview
```

---

## 5. Configuração do Banco de Dados (Supabase)

Caso deseje conectar o Supabase como backend em produção, crie as seguintes tabelas relacionais com Row Level Security (RLS) ativado:

1. `products` (id, slug, name, brand, model, price, promotional_price, pix_price, stock, is_available, is_featured, power, range, max_speed, battery_type, charging_time, load_capacity, warranty)
2. `categories` (id, slug, name, description, icon, is_active)
3. `product_images` (id, product_id, url, alt, order_index, is_main)
4. `product_variants` (id, product_id, name, color_hex, sku, stock)
5. `orders` (id, customer_name, customer_email, customer_phone, total, status, payment_method, payment_status, shipping_address)
6. `order_items` (id, order_id, product_id, quantity, unit_price)
7. `store_settings` (key, value)

---

## 6. Integrações Externas Pendentes de Credenciais

Conforme preconizado nas diretrizes de engenharia:
1. **Gateway de Pagamento (Pix / Cartão de Crédito):** Integrar com Asaas, Mercado Pago ou PagBank com webhook de confirmação autenticado.
2. **Cotação de Frete:** Integrar com Melhor Envio, Frenet ou transportadoras parceiras via API de CEP.
3. **Consulta de CEP:** Integrar com ViaCEP ou BrasilAPI para autopreenchimento de logradouro e bairro.
