<h1 Align="Center">Cadastro</h1>

## ℹ️ Descrição:

Este projeto tem como ideia representar um sistema de cadastro de usuários, onde pode adicionar um novo usuário, visualizar as informações, editar-las e também deletar o mesmo.

### 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Postgres](https://www.postgresql.org/download/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando Aplicação (Web)

```bash

# Pelo terminal clone este repositório
$ git clone <https://github.com/Dyeison-Felipe/Cadastro.git>

# Abra o projeto e acesse a pasta frontend do projeto ne pelo terminal do vsCode ou cmd
$ cd frontend

# Execute o seguinte comando
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Logo em seguida é so acessar o link que vai  aparecer no terminal

# Depois de ter executado a aplicação do frontend, voce deve abrir um novo terminal e acesar a pasta backend
$ cd backend

# Logo apos ter acessado a pasta execute os seguintes comandos:
$ npm i express cors
#ou
$ npm i express
$ npm i cors

# Depois de ter feito as instalações, acesse o software postgres e crie uma base de dados com o nome que quiser e então configure o arquivo example.env
# Depois de feito a conexão e criado o database, rode o seguinte comando para criar as tabelas no banco
$ npm run typeorm -- -d ./src/database/data-source.ts migration:run

# Feito isso é so executar o comando para rodar o backend:
$ npm run dev:server  

```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Styled-Components](https://styled-components.com/)
- [React-router-dom](https://reactrouter.com/en/main)
- [React-hook-form](https://www.react-hook-form.com/)
- [React-icons](https://www.npmjs.com/package/react-icons)
- [React-modal](https://mui.com/material-ui/react-modal/)
- [Yup](https://www.alura.com.br/artigos/validacao-yup)
- [Typescript](https://www.typescriptlang.org/download/)
- [TypeORM](https://typeorm.io/)