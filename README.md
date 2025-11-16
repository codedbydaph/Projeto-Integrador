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
  
## ✔ Desenvolvimento do Projeto

Desenvolvido com **HTML5**, **CSS3** e **JavaScript**, seguindo boas práticas de semântica, responsividade e usabilidade.  
O JavaScript foi integrado para trazer **interatividade real** ao projeto.

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

## 🌐 Versionamento e Publicação

1. Projeto inicializado com **Git**  
2. Commit inicial com estrutura HTML e CSS  
3. Repositório criado e conectado ao GitHub  
4. Publicado via **GitHub Pages**  
5. Link do site:  
   🔗 https://codedbydaph.github.io/Projeto-Integrador

---

## 📅 Etapas Realizadas

| Etapa | Descrição | Data |
|-------|------------|------|
| Definição do tema e escopo | Escolha do negócio e objetivos | 08/10 |
| Criação do protótipo no Figma | Estrutura visual e justificativas | 08/10 |
| Desenvolvimento HTML/CSS | Estruturação e estilização | 12/10 |
| Adição de JavaScript | Interatividade (Desafios 1 e 3) | 26/10 |
| Versionamento no GitHub | Controle de versões e commits | 27/10 |
| Publicação no GitHub Pages | Deploy final do site | 27/10 |
  
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
- Hierarquia correta de títulos (`h1`, `h2`, `h3`)  
- Foco visível em links e botões  
- Contraste de cores verificado  

---

## 🧭 Conclusão

O projeto **Tela — Construção & Reforma** cumpre os requisitos da primeira etapa do Projeto Integrador:  
planejamento visual, prototipagem detalhada, justificativas de design, desenvolvimento HTML/CSS, versionamento no GitHub e publicação.  

O resultado é um **site moderno e vendável**, que fortalece a marca e gera oportunidades reais para o negócio.

---

## 📄 Licença

Projeto desenvolvido para fins educacionais.  
Imagens e conteúdos são ilustrativos e não possuem fins comerciais.
