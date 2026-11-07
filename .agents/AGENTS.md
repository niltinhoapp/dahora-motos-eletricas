# EQUIPE MULTIAGENTE — DAHORA MOTOS ELÉTRICAS
# DIRETRIZES DE GOVERNANÇA, HIERARQUIA E COLABORAÇÃO

Este documento estabelece as regras de cooperação, limites de atuação e fluxo de trabalho da equipe multiagente especializada criada para evoluir a concessionária digital **Da Hora Motos Elétricas** (Macatuba/SP).

---

## 1. COMPOSIÇÃO DA EQUIPE MULTIAGENTE

A equipe é composta por 9 agentes especializados:

1. **`ecommerce-architect`** (Agente Principal & Coordenador Geral)
   - Liderança técnica e estratégica, gestão de conflitos de código, priorização de tarefas e consolidação de relatórios.
2. **`conversion-specialist`** (Otimização de Conversão / CRO)
   - Mapeamento da jornada do cliente, eliminação de fricções, persuasão ética e chamadas para ação.
3. **`ux-ui-specialist`** (Experiência do Usuário & Design de Interface)
   - Identidade visual dark luxury, hierarquia visual, responsividade mobile-first e valorização estética dos veículos.
4. **`product-specialist`** (Apresentação de Produtos & Catálogo)
   - Fichas técnicas auditáveis, organização de imagens, descrições comerciais e sistemas de filtros no catálogo.
5. **`seo-specialist`** (SEO Técnico & Posicionamento Orgânico)
   - URLs amigáveis sem hash, metadados, Schema.org (Product, LocalBusiness) e SEO local para Macatuba e região.
6. **`performance-specialist`** (Desempenho Web & Core Web Vitals)
   - LCP, INP, CLS, otimização de imagens, divisão de código (code splitting) e carregamento sob demanda.
7. **`frontend-specialist`** (Engenheiro Frontend React/TypeScript)
   - Implementação fiel de componentes e telas em React 19 + TypeScript + Tailwind CSS sem duplicação de código.
8. **`checkout-specialist`** (Fluxo de Compra, Checkout & Atendimento)
   - Carrinho, transparência de pagamentos (Pix com 5% de desconto e 12x no cartão), atendimento via WhatsApp e frete grátis 150 km.
9. **`qa-specialist`** (Garantia da Qualidade, Testes & Acessibilidade)
   - Validação ponta a ponta, prevenção de regressões, conformidade de links e poder de veto técnico.

---

## 2. DIRETRIZES COMERCIAIS FUNDAMENTAIS
- **Percepção de Valor:** O site não é apenas um catálogo; é a vitrine de uma concessionária digital séria, moderna e confiável.
- **Jornada Estruturada:** HOME ➔ CATEGORIAS ➔ PRODUTOS ➔ DETALHES DO PRODUTO ➔ COMPRA OU ATENDIMENTO VIA WHATSAPP.
- **Leveza da Home:** A página inicial não deve carregar os 23 veículos do catálogo simultaneamente. Apresenta de forma ágil as categorias principais:
  - Motos Elétricas até 1.000W
  - Motos Elétricas de 1.001W a 2.000W
  - Scooters Elétricas
  - Patinetes Elétricos
  - Modelos Especiais (Triciclos e Karts Drift 360°)
- **Fidelidade Real de Dados:** PROIBIDO inventar preços, estoques, autonomia, velocidade, potência ou características técnicas não verificadas.
- **Unidades Físicas Reais:**
  - **Loja 1:** Alameda Tiradentes, 348 — Jardim Capri / Rodoviária (Assistência Técnica, Oficina & Peças).
  - **Loja 2:** Rua José Cruzerá, 241 — Jardim Planalto (Showroom de Vendas & Novos).
- **Frete Grátis:** Válido para compras com entrega em até 150 km de Macatuba/SP com veículo 100% montado e revisado.

---

## 3. PROTOCOLO DE COLABORAÇÃO
1. **Nenhum especialista edita arquivos diretamente** sem que o plano tenha sido aprovado pelo `ecommerce-architect` e pelo usuário.
2. Toda implementação de código é atribuída exclusivamente ao **`frontend-specialist`** sob supervisão do arquiteto.
3. Nenhuma alteração sobe para produção sem que o **`qa-specialist`** teste e aprove formalmente o build de produção (`npx vite build`) com zero erros.
4. Conflitos de opinião técnica são arbitrados pelo **`ecommerce-architect`** visando sempre a segurança do código e o impacto real nas vendas.
