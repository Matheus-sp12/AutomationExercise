# 🧪 Regression Automation Exercise

Este projeto foi desenvolvido com o objetivo de **estudo e prática de testes automatizados de regressão**, utilizando um **e-commerce real de testes** disponibilizado pelo site **Automation Exercise**.

O foco principal foi aplicar conceitos de **QA Automation**, boas práticas de código, organização por **Page Object Model (POM)** e validação de fluxos críticos de um e-commerce.

🔗 **Site testado:** https://automationexercise.com/

---

## 🎯 Objetivo do Projeto

- Praticar automação de testes end-to-end
- Simular uma **regressão completa de e-commerce**
- Aplicar boas práticas de automação com Cypress
- Organizar o projeto com Page Objects
- Validar fluxos críticos de usuário (cadastro, login, carrinho, checkout)

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript**
- **Cypress**
- **Node.js**
- **Page Object Model (POM)**
- **Fixtures (JSON)**
- **Selectors & Assertions**
- **Git / GitHub**

---

## 📂 Estrutura do Projeto

📁 cypress
 ├── 📁 e2e
 │   └── regression.cy.js
 │
 ├── 📁 pages
 │   ├── userRegistration.js
 │   ├── correctLogin.js
 │   ├── verifyAllProduct.js
 │   ├── payment.js
 │   ├── contactUs.js
 │   └── navigator.js
 │
 ├── 📁 fixtures
 │   └── login.json
 │
 ├── 📁 support
 │   ├── commands.js
 │   └── e2e.js
 │
 └── cypress.config.js

## 📂 Cenários de testes


1. Cadastrar usuário  
2. Login do usuário com e-mail e senha corretos  
3. Login do usuário com e-mail e senha incorretos  
4. Fazer logout do usuário  
5. Cadastrar usuário com e-mail existente  
6. Formulário de contato  
7. Página de verificação de casos de teste  
8. Verificar todos os produtos e a página de detalhes do produto  
9. Pesquisar produto  
10. Verificar assinatura na página inicial  
11. Verificar assinatura na página do carrinho  
12. Adicionar produtos ao carrinho  
13. Verificar a quantidade de produtos no carrinho  
14. Fazer pedido: Registrar-se durante o checkout  
15. Fazer pedido: Registrar-se antes de finalizar a compra  
16. Fazer pedido: Fazer login antes de finalizar a compra  
17. Remover produtos do carrinho  
18. Visualizar produtos da categoria  
19. Visualizar e adicionar produtos da marca ao carrinho  
20. Pesquisar produtos e verificar o carrinho após o login  
21. Adicionar avaliação ao produto  
22. Adicionar ao carrinho a partir dos itens recomendados  
23. Verificar os detalhes do endereço na página de finalização da compra  
24. Baixar fatura após a ordem de compra  
25. Verificar a funcionalidade de rolagem para cima usando o botão de seta e rolagem para baixo  
26. Verificar a funcionalidade de rolagem para cima sem o botão de seta e rolagem para baixo

