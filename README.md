# Task Dashboard

Uma aplicação de gerenciamento de tarefas desenvolvida em React com foco em praticar conceitos fundamentais do ecossistema React, como componentização, gerenciamento de estado, custom hooks e renderização dinâmica.

## Demonstração

🔗 Deploy: https://mfreitas-dev.github.io/task-dashboard/

## Funcionalidades

* Criar tarefas
* Editar tarefas existentes
* Excluir tarefas
* Marcar tarefas como concluídas
* Filtrar tarefas por status
* Filtrar tarefas por prioridade
* Dashboard com estatísticas em tempo real
* Persistência das tarefas em LocalStorage
* Tema claro e escuro (Dark Mode)

## Tecnologias Utilizadas

* React
* JavaScript (ES6+)
* Vite
* CSS3
* Git
* GitHub Pages

## Conceitos Praticados

### React

* useState
* useMemo
* Componentização
* Props
* Renderização condicional
* Eventos
* Formulários controlados
* Custom Hooks
* Context API

### Estrutura

* Separação de responsabilidades
* Organização por componentes
* Reutilização de lógica através de hooks

## Estrutura do Projeto

```text
src
├── components
│   └── tasks
│       ├── TaskCard.jsx
│       ├── TaskFilters.jsx
│       ├── TaskForm.jsx
│       ├── TaskList.jsx
│       └── TaskStats.jsx
│
├── hooks
│   └── useTask.js
│
├── App.jsx
├── App.css
└── index.css
```

## Como Executar Localmente

Clone o repositório:

```bash
git clone https://github.com/mfreitas-dev/task-dashboard.git
```

Entre na pasta:

```bash
cd task-dashboard
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

## Próximas Melhorias

Estas funcionalidades estão planejadas para versões futuras:

* Persistência de dados além do localstorage
* Autenticação de usuários
* Integração com API
* Banco de dados
* Contas individuais por usuário
* Sincronização entre dispositivos

## Objetivo do Projeto

Este projeto foi desenvolvido como parte da minha jornada de aprendizado em React e desenvolvimento Full Stack, com foco em consolidar os fundamentos antes de avançar para autenticação, integração com backend e persistência de dados.

## Autor

Matheus Freitas

GitHub: https://github.com/mfreitas-dev
LinkedIn: https://www.linkedin.com/in/matheus-bomfim-santos-freitas/
