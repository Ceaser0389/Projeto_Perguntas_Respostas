# 📝 Guia de Perguntas & Respostas


> **Status do Projeto:** Concluído ✅

---

### 💻 Sobre o Projeto

O **Guia de Perguntas & Respostas** é uma aplicação completa de fórum inspirada no *Stack Overflow*. O foco principal foi criar uma experiência de usuário fluida onde a comunicação entre o servidor (Node.js) e o banco de dados (MySQL) acontece de forma eficiente, utilizando o conceito de **SSR (Server Side Rendering)**.

---

## 🚀 Stack Tecnológica

| Camada | Tecnologia |
| :--- | :--- |
| **Backend** | Node.js, Express |
| **Banco de Dados** | MySQL, Sequelize (ORM) |
| **Frontend** | EJS, Bootstrap |
| **Ferramentas** | Axios, JavaScript ES6+ |

---

## ⚙️ Principais Funcionalidades

* 📌 **Criação de Tópicos:** Sistema de postagem com validação de dados.
* 💬 **Interação em Tempo Real:** Respostas vinculadas a perguntas específicas através de relacionamentos no SQL.
* ⚡ **Navegação Dinâmica:** Uso de rotas parametrizadas para acesso individual a cada dúvida.
* 🧩 **Componentização:** Interface modular utilizando `Partials` para facilitar a manutenção.

---

## 📂 Arquitetura do Sistema

```text
├── 🗄️ database/
│   ├── database.js     # Conexão SQL
│   ├── Pergunta.js     # Model de Perguntas
│   └── Resposta.js     # Model de Respostas
├── 🌐 public/          # Assets (CSS, JS, Imagens)
├── 🖼️ views/           # Templates EJS
│   └── partials/       # Componentes (Navbar, Header)
├── 🚀 index.js         # Entry Point
└── 🛡️ .gitignore       # Proteção de dados sensíveis




















