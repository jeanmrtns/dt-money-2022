# DT-Money

O DT Money é uma aplicação para controle de suas finanças, exibindo todas as entradas e saídas que houveram e apresentando um resumo de todas elas.

Para rodar a aplicação, é necessário rodar os seguintes comandos:

- Instalação

```bash
npm i #or
yarn
```

- Servidor

```bash
  npx json-server server.json -p 3333 -w -d 500
  # Params:
  # -p is the port the server will run.
  # -w is to watch all modifications
  # -d is a delay that json-server can use to deliver our requests.
  # You can change it as you want
```

- Aplicação

```bash
npm run dev #or
yarn dev
```

O servidor do json-server é uma API completa (para desenvolvimento), onde permite todas as operações de uma API tradicional, como get, post, putch, delete, patch. Também há a possibilidade de filtragem e ordenação.

Você pode pesquisar mais no repositório deles ([Github json-server](https://github.com/typicode/json-server)).

Toda a aplicação foi desenvolvida em Typescript, permitindo assim um maior controle sobre o código escrito (além da IDE dar aquela ajudinha extra).

Tecnologias utilizadas:

- Typescript
- Styled-components
- Axios
- JSON server (desenvolvimento)
- Eslint
- Context selector
