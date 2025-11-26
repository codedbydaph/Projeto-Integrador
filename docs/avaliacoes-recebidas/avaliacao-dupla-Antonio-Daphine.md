# Avaliação – Projeto “Tela — Construção & Reforma”  
Dupla avaliada: **Antonio Zampieri e Daphine Milani**  
Dupla avaliadora: **David soares e Arthur Candido**

---

## 1. Navegação e Exploração

**Nível sugerido:** Avançado (4/4)

A navegação é clara, objetiva e consistente em todas as páginas.  
O menu superior é simples de entender, com links diretos para Home, Sobre e Contato, e o footer reforça caminhos de navegação e informações de contato.  

**Pontos observados:**
- Cabeçalho e rodapé presentes em todas as páginas, mantendo a coerência.
- Links funcionam corretamente e direcionam para seções relevantes.
- Estrutura do conteúdo segue uma lógica de jornada do usuário (home → serviços → credibilidade → contato).

**Sugestão leve:** em uma futura evolução, poderiam adicionar destaque visual na página ativa (ex.: sublinhar ou mudar a cor do link da página atual).

---

## 2. Responsividade

**Nível sugerido:** Proficiente (3/4)

O site se adapta bem a diferentes tamanhos de tela.  
Foi possível perceber que houve um cuidado real com **mobile, tablet e desktop**, e isso também está documentado nos testes em `docs/testes-responsividade/`.

**Pontos positivos:**
- Layout reorganizado em coluna no mobile (cards e seções não “quebram”).
- Imagens configuradas para não estourarem a largura.
- Testes registrados para diferentes resoluções (iPhone, iPad, desktop, etc.).

**Limitações / oportunidades:**
- O menu ainda não tem um padrão tipo “hambúrguer” no mobile (mas funciona).
- O carrossel funciona bem, mas não possui swipe no mobile (o que poderia ser um plus).

Mesmo assim, o resultado geral é muito bom e acima da média.

---

## 3. Design e Identidade Visual

**Nível sugerido:** Avançado (4/4)

O design é moderno, coerente com o segmento de **construção e reforma** e visualmente profissional.

**Pontos fortes:**
- Identidade visual consistente (cores, fontes, ícones).
- Uso adequado de tipografia com Poppins, combinando com o estilo do site.
- Carrossel na home bem integrado visualmente.
- Seções bem definidas, com bom uso de espaçamento e hierarquia de títulos.

O site tem “cara de site real de empresa” e é perfeitamente “vendável”.

---

## 4. Código, Estrutura e Modularização

**Nível sugerido:** Avançado (4/4)

O código está bem organizado, com uma estrutura de pastas clara e separação correta de responsabilidades.

**Pontos positivos:**
- Uso de `/componentes/header.html` e `/componentes/footer.html` com carregamento dinâmico via `js/componentes.js` (bom exemplo de **modularização**).
- HTML semântico (uso de `<main>`, `<section>`, `<header>`, `<footer>`, etc.).
- CSS separado em `style.min.css` e `responsive.css`, mostrando preocupação com organização.
- JavaScript organizado em arquivos distintos (`script.js`, `componentes.js`, `main.min.js`).

**Sugestão pontual:**
- Revisar caminhos como `./js/./js/main.min.js` (funciona, mas pode ficar mais limpo).
- Poderiam acrescentar alguns comentários explicativos no JS para facilitar leitura de terceiros.

---

## 5. Acessibilidade

**Nível sugerido:** Em Desenvolvimento / Proficiente (2,5/4)

Há sinais claros de preocupação com acessibilidade, mas ainda com espaço para evoluir.

**Pontos positivos:**
- Uso de `aria-live="polite"` para a mensagem de retorno do formulário.
- Links de telefone e e-mail clicáveis (`tel:` e `mailto:`), ajudando usuários mobile.
- Estrutura semântica ajuda leitores de tela.

**Oportunidades de melhoria:**
- Campos do formulário usam apenas `placeholder`; seria interessante adicionar **`<label for="">`** associado a cada input.
- Poderiam incluir um foco mais visível nos elementos navegáveis por teclado (links, botões).
- Incluir, se possível, um link “pular para o conteúdo” (“skip to content”) no topo, ajudando quem navega por teclado.

---

## 6. Conteúdo e Alinhamento ao Negócio

**Nível sugerido:** Avançado (4/4)

O conteúdo é **direto, profissional e alinhado à proposta do negócio**.

**Pontos positivos:**
- Textos claros, objetivos, sem excesso de jargão.
- Explicação do que a empresa faz e do diferencial.
- Página de contato com informações concretas (telefone, e-mail, tempo de resposta etc.).

Sugestão leve: no futuro, incluir **cases reais ou exemplos de serviços** (antes/depois, depoimentos, etc.) para aumentar ainda mais a confiança.

---

## 7. Interatividade

**Nível sugerido:** Proficiente (3/4)

O site possui um nível legal de interatividade sem exagero.

**Implementações percebidas:**
- Carrossel automático na página inicial.
- Botão “Solicite seu orçamento” levando ao contato.
- Interações visuais nas imagens e seções (animações suaves).
- Feedback visual ao enviar o formulário (mensagem na área `#ok`).

Poderiam ir além, no futuro, com:
- Validações mais explícitas no formulário (mensagens de erro por campo).
- Pequenas microinterações (hover states mais marcantes, animações em scroll etc.).

---

## 8. Documentação, README e Testes

**Nível sugerido:** Avançado (4/4)

A documentação está **muito bem feita**, o que é um diferencial grande.

**Pontos positivos:**
- README completo: descrição do projeto, equipe, tecnologias, estrutura de pastas, partes do projeto, testes, limitações e conclusão.
- Seções específicas para **testes realizados**, com detalhes de resoluções e bugs corrigidos.
- Pastas `docs/testes-responsividade` e `docs/testes-navegadores` com evidências (prints organizados).

Esse cuidado mostra maturidade e responsabilidade no desenvolvimento.

---

## 9. Devolutiva Construtiva

### 🌟 Pontos Fortes (2–3)

1. **Design profissional e consistente**, com identidade bem definida e visual agradável.
2. **Modularização bem implementada** com componentes de header/footer, demonstrando boa organização de código.
3. **Documentação muito acima da média**, com README completo e testes registrados de forma clara.

### 🔧 Oportunidades de Melhoria (2–3)

1. **Acessibilidade no formulário**: adicionar labels associados aos inputs e reforçar o foco visível para navegação via teclado.
2. **Menu mobile**: considerar implementar um menu tipo “hambúrguer” ou outra solução mais específica para telas pequenas.
3. **Interatividade avançada**: adicionar mensagens de erro específicas por campo, validação visual e talvez mais microinterações.

### 💬 Comentário Final

O projeto **“Tela — Construção & Reforma”** está muito bem construído, com cara de site real de empresa, boa organização técnica e documentação caprichada.  
É um trabalho que demonstra cuidado, estudo e seriedade, tanto no código quanto na experiência do usuário.  

Parabéns à dupla Antonio e Daphine pelo resultado! 
Com pequenos ajustes em acessibilidade e interatividade, o projeto pode facilmente chegar a um nível ainda mais profissional.

