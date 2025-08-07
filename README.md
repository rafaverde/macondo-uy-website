# Site Institucional - Macondo Marketing & Comunicación

![Pré-visualização do site da Agência Macondo](https://app.macondo.com.uy/wp-content/uploads/2025/08/capa-site-macondo.jpg)

Projeto de desenvolvimento de um site institucional moderno e performático para a agência de marketing e propaganda Macondo, localizada no Uruguai. O site foi construído com uma arquitetura headless, utilizando Next.js para o frontend e WordPress como um CMS desacoplado.

🔗 **Site no Ar:** **[www.macondo.com.uy](https://www.macondo.com.uy)**
🔗 **Backend Headless:** `app.macondo.com.uy`

---

## ✨ Principais Funcionalidades

- **Header Dinâmico:** Header fixo com animação de "encolhimento" no scroll e menu mobile com `Sheet` (gaveta).
- **Conteúdo 100% Dinâmico:** Todas as seções principais (Hero Slider, Produtos, Portfólio) são gerenciadas através do backend WordPress.
- **Galeria de Portfólio:** Grid de imagens com layout **Masonry** para se adaptar a diferentes proporções e funcionalidade de **Lightbox** para visualização.
- **Paginação Assíncrona:** Sistema de "Carregar Mais" na página de portfólio que busca novos jobs sem recarregar a página.
- **Revalidação de Conteúdo On-Demand (ISR):** Atualizações feitas no WordPress são refletidas no site em produção quase instantaneamente, sem a necessidade de um novo deploy, graças a um sistema de webhooks.
- **SEO Otimizado:** Metadados (`title`, `description`, Open Graph) gerados dinamicamente para cada página de produto e portfólio.

---

## 🛠️ Stack Tecnológica

### Frontend

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS (v4)
- **Componentes:** shadcn/ui
- **Comunicação com API:** Apollo Client para GraphQL
- **Animações/UI:** Lucide Icons, Phosphor Icons, react-masonry-css, yet-another-react-lightbox

### Backend

- **CMS:** WordPress (Headless)
- **API:** WPGraphQL
- **Campos Customizados:** Advanced Custom Fields (ACF)

### Infraestrutura & Deploy

- **Frontend Hosting:** Vercel
- **Backend Hosting:** cPanel
- **Versionamento:** Git & GitHub (com fluxo de Feature Branches e Pull Requests)

---

## 🚀 Destaques Técnicos e Arquiteturais

Este projeto foi construído com foco em performance, manutenibilidade e nas melhores práticas do ecossistema Jamstack.

- **Arquitetura Headless:** A clara separação entre o backend (gerenciamento de conteúdo no WordPress) e o frontend (apresentação no Next.js) permite maior segurança, performance e flexibilidade para futuras evoluções.

- **Next.js 14 com App Router:** Utilização massiva de **Server Components** para buscar dados no servidor, resultando em um carregamento inicial de página extremamente rápido e um "bundle" de JavaScript mínimo enviado ao cliente.

- **Geração Estática (SSG) com ISR:** A maioria das páginas (`/produtos/[slug]`, `/portfolio/[slug]`) é gerada estaticamente no momento do build para performance máxima. O conteúdo é mantido atualizado através de **Revalidação On-Demand (ISR)**, que reconstrói páginas específicas quando o conteúdo é alterado no WordPress.

- **Camada de Dados Abstraída:** Toda a lógica de comunicação com a API GraphQL foi abstraída para uma camada de dados (`/lib/data`), mantendo os componentes de UI limpos e focados apenas na apresentação. Isso torna o código mais testável e facilita futuras migrações de backend.

- **SEO Técnico Avançado:** Implementação completa da API de Metadados do Next.js para gerar `title`, `description` e tags `Open Graph` dinamicamente, além da geração automática de `sitemap.xml` e `robots.ts`.

---

## 🏁 Como Rodar o Projeto Localmente

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    - Crie um arquivo `.env.local` na raiz do projeto.
    - Adicione as variáveis necessárias:
      ```
      NEXT_PUBLIC_WORDPRESS_API_URL=[http://seu-backend.local/graphql](http://seu-backend.local/graphql)
      NEXT_PUBLIC_SITE_URL=http://localhost:3000
      # Adicione outras variáveis se houver (GTM, Cookiebot, etc.)
      ```

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.
