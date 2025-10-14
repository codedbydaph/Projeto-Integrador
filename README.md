# 🧱 Tela — Construção & Reforma

Site institucional vendável para um pequeno negócio de **construção civil e reformas**.  
Desenvolvido como parte do **Projeto Integrador**, com foco em planejar, prototipar, desenvolver, versionar, publicar e documentar um site estático voltado a um negócio real.

---

## 👥 Dupla

| Integrante | Função no Projeto |
|-------------|------------------|
| Daphine Coelho | Desenvolvedor Front-end / Prototipagem |
| Antonio Zampieri | Desenvolvedor Front-end / Prototipagem |

---

## 🎯 Tema, Objetivo e Público-Alvo

- **Tema:** Construção civil, reformas e manutenções residenciais e comerciais.  
- **Negócio real:** Prestador de serviços locais da área de obras e reformas.  
- **Objetivo do site:** Apresentar a empresa, divulgar os serviços, destacar diferenciais competitivos e facilitar o contato com clientes.  
- **Público-alvo:** Proprietários de imóveis, síndicos e pequenos comerciantes que buscam serviços de reforma e construção confiáveis.

---

## 💡 Potencial de Negócio

O site fortalece a presença online do negócio e ajuda a captar novos clientes de forma profissional e organizada.  
Ele atua como **vitrine digital**, transmitindo confiança e credibilidade, além de permitir **contato direto via WhatsApp** e formulário.

---

## 🖌️ Planejamento Visual e Protótipo

📎 **Link do protótipo detalhado:**  
👉 [Figma — Tela Construção & Reforma](https://www.figma.com/design/n7V3Uc3CAQV7Laz6UD9VEk/Tela?node-id=5-3&t=Isc9Mr3oXiCeOYMm-1)

---

## 🎨 Justificativas de Design

### **Cores**
- **Verde Floresta (#096b16):** Transmite confiança e sustentabilidade.  
- **Verde Musgo (#0d6944):** Reforça seriedade e estabilidade.  
- **Verde Claro (#10bc2a):** Energia e vitalidade.  
- **Branco e Cinza Neutro:** Equilíbrio e legibilidade.

> A paleta foi escolhida com base na **psicologia das cores**, associando tons de verde à segurança e ao crescimento — ideais para o setor da construção.

### **Tipografia**
- **Poppins (Google Fonts):** Limpa, moderna e de alta legibilidade.  
  - Títulos em peso 600.  
  - Textos em peso 400–500.

### **Layout**
- Estrutura em **grid de duas colunas** para seções principais (imagem + texto).  
- **Navbar fixa** com sombra para navegação constante.  
- **Cards** com bordas arredondadas e sombra suave, criando hierarquia e destaque.  
- Espaçamentos amplos e alinhamentos consistentes, reforçando a clareza visual.

### **Ícones e Botões**
- Ícones simples e legíveis, reforçando ações principais.  
- Botões em verde para manter coerência visual com a marca e gerar contraste com o fundo branco.

---

## 🧱 Desenvolvimento do Projeto

O site foi construído com **HTML5 semântico** e **CSS3**, mantendo organização, legibilidade e boas práticas.  
Cada página representa uma seção essencial do negócio.

### Estrutura Final de Pastas
SiteDaTela/
│
├── index.html          ← página inicial
├── sobre.html          ← sobre a empresa
├── contato.html        ← formulário e dados de contato
│
├── css/
│   └── style.css       ← folha de estilo principal
│
├── img/
│   ├── icon.png        ← logo da navbar
│   ├── banner.jpg      ← imagem principal (home)
│   ├── sobre1.png
│   ├── sobre2.png
│   ├── sobre3.png
│   ├── servico1.png
│   ├── servico2.png
│   ├── servico3.png
│   ├── cliente1.jpg
│   ├── cliente2.jpg
│   └── cliente3.jpg
│
├── README.md           ← documentação do projeto
└── assets/
    ├── favicon.ico     ← ícone do site (opcional)
    └── fonts/          ← pasta para fontes locais (se houver)

### Tecnologias Utilizadas
- **HTML5** — estrutura semântica  
- **CSS3** — layout, cores e responsividade  
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

| Etapa | Descrição | Data | Responsável |
|-------|------------|------|--------------|
| Definição do tema e escopo | Escolha do negócio e objetivos | dd/mm | Equipe |
| Criação do protótipo no Figma | Estrutura visual e justificativas | dd/mm | UX Designer |
| Desenvolvimento HTML/CSS | Estruturação e estilização | dd/mm | Dev Front-end |
| Versionamento no GitHub | Controle de versões e commits | dd/mm | Dev Front-end |
| Publicação no GitHub Pages | Deploy final do site | dd/mm | Equipe |

---

## 📐 Justificativas Técnicas

- Uso de **CSS Grid e Flexbox** para layout responsivo.  
- Imagens com `object-fit: cover` para proporções consistentes.  
- Estrutura HTML5 semântica melhora **SEO** e **acessibilidade**.  
- Design responsivo para telas grandes e dispositivos móveis.  

---

## 🧾 Decisões de Design (Resumo)

| Elemento | Escolha | Justificativa |
|-----------|----------|----------------|
| Cores | Verdes, branco e cinza | Associadas à natureza, estabilidade e segurança |
| Tipografia | Poppins | Moderna e legível |
| Layout | Grid 2 colunas | Clareza e equilíbrio visual |
| Navbar fixa | Sim | Navegação constante e usabilidade |
| Cards | Bordas arredondadas e sombra | Hierarquia e modernidade |
| Ícones | Minimalistas | Comunicação imediata |

---

## ♿ Acessibilidade e SEO

- Imagens com `alt` descritivo  
- Hierarquia correta de títulos (`h1`, `h2`, `h3`)  
- Foco visível em links e botões  
- Contraste de cores verificado  
- Meta tags básicas de SEO (`title`, `description`, `og:image`)  

---

## ✅ Próximos Passos

- [ ] Revisar responsividade em telas menores (até 480px)  
- [ ] Implementar formulário funcional (Formspree ou Netlify Forms)  
- [ ] Otimizar imagens para `.webp` e `lazy-loading`  
- [ ] Adicionar favicon e meta tags sociais  
- [ ] Criar seção “Portfólio de Obras” com fotos reais  
- [ ] Testar acessibilidade (leitores de tela e navegação por teclado)

---

## 🧭 Conclusão

O projeto **Tela — Construção & Reforma** cumpre os requisitos da primeira etapa do Projeto Integrador:  
planejamento visual, prototipagem detalhada, justificativas de design, desenvolvimento HTML/CSS, versionamento no GitHub e publicação.  

O resultado é um **site moderno, responsivo e vendável**, que fortalece a marca e gera oportunidades reais para o negócio.

---

## 📄 Licença

Projeto desenvolvido para fins educacionais.  
Imagens e conteúdos são ilustrativos e não possuem fins comerciais.
