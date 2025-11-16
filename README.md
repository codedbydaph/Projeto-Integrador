# 🧱 Tela — Construção & Reforma  
Site institucional moderno, acessível e modularizado, desenvolvido como parte do **Projeto Integrador – Parte 2**.  
O objetivo foi criar um site **vendável para um pequeno negócio real**, seguindo boas práticas de design, código, acessibilidade, responsividade e documentação.

---

# 👥 Equipe

| Integrante | Função |
|------------|--------|
| **Daphine Milani** | Desenvolvimento Front-end • Prototipação • Documentação |
| **Antonio Zampieri** | Desenvolvimento Front-end • Interatividade JS • Modularização |

---

# 🎯 Tema, Objetivo e Público-Alvo

- **Tema:** Serviços de construção civil, reformas e manutenções.  
- **Objetivo:** Criar a presença digital de um pequeno negócio, oferecendo informações claras sobre serviços, diferenciais e canais de contato.  
- **Público-alvo:** Proprietários de imóveis, síndicos, comerciantes e clientes que buscam serviços confiáveis de reforma.  
- **Entrega esperada:** um site funcional, modularizado, acessível, responsivo e documentado.

---

# 📝 Figma — Protótipo  
🔗 **https://www.figma.com/design/n7V3Uc3CAQV7Laz6UD9VEk/Tela**

Inclui:
- Layout completo de todas as páginas  
- Identidade visual  
- Paleta de cores  
- Estrutura de navegação  
- Hierarquia dos componentes  

---

# 🔍 Diagnóstico Inicial (Parte 1 → Parte 2)

Antes de iniciar a Parte 2, foi feita uma revisão completa do projeto da Parte 1.  
As principais observações foram registradas e guiadas para melhorias:

### ✔ Pontos que já funcionavam:
- Layout consistente e esteticamente agradável  
- Carrossel funcional na página inicial  
- Estrutura HTML semântica  
- Conteúdo claro e orientado ao negócio  

### ❗ Pontos que precisavam melhorar:
- **Repetição de header e footer** em todas as páginas  
- Ausência de modularização  
- Layout quebrando em telas pequenas  
- Formulário sem validação e sem labels  
- Falta de foco visível para navegação por teclado  
- Ausência de integrações externas úteis para o negócio  

Esses itens foram **corrigidos totalmente na Parte 2** (documentados abaixo).

---

# 🧱 Parte 2 — Evoluções Implementadas

## ✔ 1. Modularização de Componentes
Criamos uma pasta `/componentes` contendo:
<pre>
componentes/
├── header.html
└── footer.html
</pre>
Esses arquivos são carregados dinamicamente em todas as páginas utilizando o arquivo js/componentes.js, que faz a inclusão automática dos componentes na estrutura HTML.

### Por que essa abordagem foi escolhida?
- Evita repetição de código
- Facilita manutenção e atualização
- Padroniza e centraliza header e footer
- Segue boas práticas de projetos web
- Cumpre o requisito central da Parte 2 do Projeto Integrador

## 🌐 2. Acessibilidade
Melhorias aplicadas com base no checklist da Parte 2:
- Uso de HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Apenas um `<h1>` por página, com hierarquia adequada entre títulos
- Textos alternativos `alt` em imagens relevantes
- Campos do formulário com `required`
- Mensagem de envio usando `aria-live="polite"`
- Foco visível em links e botões para navegação por teclado
- Navegação funcional com **TAB / Shift+TAB**
- Contraste revisado para garantir boa legibilidade
Essas ações tornam o site mais inclusivo e aderente às boas práticas de acessibilidade.

## 📱 3. Responsividade
O arquivo `responsive.css` foi criado para garantir o comportamento adequado do site em diferentes dispositivos.
### Melhorias realizadas:
- Abordagem mobile-first
- Ajustes para 375px, 768px, 1024px e 1280px
- Navbar reorganizada e corrigida para evitar quebra de layout
- Cards reorganizados em layout de coluna no mobile
- Imagens fluidas (max-width: 100%)
- Correção de overflow horizontal
- Seções reorganizadas verticalmente em telas menores
O site agora se adapta corretamente a celulares, tablets e desktops.

## ⚙️ 4. Interatividade com JavaScript
Foram implementadas interações usando **JavaScript Vanilla**:
- Carrossel automático na página inicial
- Botão “Solicite seu orçamento” levando ao contato
- Animação nas imagens da página Sobre (efeito de movimento)
- Mensagem de confirmação ao enviar o formulário
- Carregamento dinâmico de header e footer com fetch()
Os scripts foram organizados em:
- `script.js` → interações gerais
- `componentes.js` → modularização
  
---

### 📂 Estrutura final do projeto
<pre>
SiteDaTela/
├── index.html
├── sobre.html
├── contato.html
│
├── componentes/
│   ├── header.html
│   └── footer.html
│
├── css/
│   ├── style.css
│   └── responsive.css
│
├── js/
│   ├── componentes.js
│   └── script.js
│
├── img/
└── README.md
</pre>

### Tecnologias Utilizadas
- **HTML5** — estrutura semântica  
- **CSS3** — layout, cores e responsividade
- **Java Script** — tornou o site mais dinâmico e interativo  
- **Figma** — prototipagem e design system  
- **Git & GitHub** — versionamento e publicação  

---

## 🚀 Versionamento e Publicação

1. Projeto inicializado com **Git**  
2. Commit inicial com estrutura HTML e CSS  
3. Repositório criado e conectado ao GitHub  
4. Modularização, responsividade e acessibilidade aplicadas
5. Deploy no **GitHub Pages**
6. Link do site:  
   🔗 https://codedbydaph.github.io/Projeto-Integrador

---

## 📅 Etapas Realizadas

| Etapa | Descrição | Data |
|-------|------------|------|
| Definição do tema e escopo | Escolha do negócio e objetivos | 08/10 |
| Criação do protótipo no Figma | Estrutura visual e justificativas | 08/10 |
| Desenvolvimento HTML/CSS | Estruturação e estilização | 12/10 |
| Interatividade JS | Carrossel e animações | 26/10 |
| Modularização | Inclusão dinâmica dos componentes | 15/11 |
| Publicação no GitHub Pages | Deploy final do site | 16/11 |
  
---

## 🧾 Decisões de Design (Resumo)

| Elemento | Escolha | Justificativa |
|-----------|----------|----------------|
| Cores | Verdes, branco e cinza | Associadas à natureza, estabilidade e segurança |
| Tipografia | Poppins | Moderna e legível |
| Layout | Grid 2 colunas | Clareza e equilíbrio visual |
| Cards | Bordas arredondadas e sombra | Hierarquia e modernidade |
| Ícones | Minimalistas | Comunicação imediata |

---

## ♿ Acessibilidade

- Imagens com `alt` descritivo
- Navegação por teclado
- Hierarquia correta de títulos (`h1`, `h2`, `h3`)  
- Foco visível em links e botões  
- Contraste de cores verificado
- `aria-live="polite"` no formulário

---

## 🧭 Conclusão

O projeto **Tela — Construção & Reforma** cumpre os requisitos da primeira etapa do Projeto Integrador:  
planejamento visual, prototipagem detalhada, justificativas de design, desenvolvimento HTML/CSS, versionamento no GitHub e publicação.  

O resultado é um **site moderno e vendável**, que fortalece a marca e gera oportunidades reais para o negócio.

---

## 📄 Licença

Projeto desenvolvido para fins educacionais.  
Imagens e conteúdos são ilustrativos e não possuem fins comerciais.
