# 📋 Projeto Tarefas – CLI em Node.js

Aplicação de linha de comando (CLI) desenvolvida em **Node.js**, com foco em aprendizado técnico e boas práticas em **JavaScript moderno**.

O projeto permite **criar, listar, atualizar e remover tarefas**, com persistência local em arquivo JSON e interface interativa no terminal.


## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de **treinar e consolidar conhecimentos técnicos em JavaScript**, explorando conceitos amplamente utilizados no mercado, como:

- Organização modular do código
- Programação assíncrona
- Manipulação de arquivos
- Estruturas de dados eficientes
- Interação com usuário via terminal


## 🧩 Tecnologias Utilizadas

- **Node.js**
- **JavaScript (ES Modules)**
- **@clack/prompts** – menus interativos no terminal
- **chalk** – estilização de textos no terminal
- **fs** e **path** – persistência e manipulação de arquivos


## ⚙️ Funcionalidades

- Criar novas tarefas
- Listar tarefas cadastradas
- Atualizar nome da tarefa
- Alterar status da tarefa
- Excluir tarefas
- Persistência automática em arquivo `tasks.json`


## 🗂 Estrutura do Projeto

src/
├── index.js
├── manager/
│ └── tasks.js
└── menus/
├── main.js
├── create.js
├── list.js
└── update.js


## 🔄 Fluxo de Execução

1. O usuário inicia a aplicação pelo `index.js`
2. O menu principal é exibido no terminal
3. O usuário escolhe uma ação:
   - Criar tarefa
   - Listar tarefas
   - Sair
4. As ações manipulam o `taskManager`
5. Os dados são persistidos no arquivo `tasks.json`
6. O fluxo retorna ao menu até o encerramento


## 📐 Arquitetura (Visão Geral)

index.js
↓
mainMenu()
↓
┌───────────────┬────────────────┬───────────────┐
│ Criar Tarefa │ Listar Tarefas │ Sair │
│ create.js │ list.js │ Encerrar CLI │
└───────┬───────┴───────┬────────┴──────────────┘
↓ ↓
taskManager update.js
↓
tasks.json

## 🧠 Conceitos Técnicos Trabalhados

- JavaScript moderno (ES Modules)
- Programação assíncrona (`async/await`)
- Estrutura de dados `Map`
- Persistência com JSON
- Interfaces CLI
- Separação de responsabilidades
- Controle de fluxo de aplicação


##  Conclusão

Projeto desenvolvido com foco em **aprendizado técnico real**, demonstrando organização, clareza de código e entendimento do funcionamento de uma aplicação CLI em Node.js.

## 📘 Documentação Técnica

A documentação técnica completa do projeto, com detalhamento dos módulos, fluxo de execução e diagrama lógico do sistema, está disponível em:

[📄 Documentação Técnica Completa](docs/documentacao-tecnica-tarefas-v1.0.0.pdf)

## 🤝 Agradecimentos e Créditos

Este projeto foi desenvolvido como um exercício prático para consolidar meus conhecimentos em **Engenharia de Software, Git e Node.js**. 

A base técnica e o modelo de arquitetura foram implementados seguindo a trilha de aprendizado da **[Playlist de Desenvolvimento de Tarefas](https://www.youtube.com/playlist?list=PL9tY_tDo_Q0C0hs1aGgtJbEH1EBlyzZdG)** no YouTube. Através deste conteúdo, pude aplicar na prática:

- **Arquitetura Modular**: Separação de responsabilidades entre lógica (`manager`) e interface (`menus`).
- **Persistência de Dados**: Manipulação e salvamento de estados em arquivos JSON.
- **Git Flow Profissional**: Uso de mensagens de commit padronizadas e versionamento com Tags (`v1.0.0`).



