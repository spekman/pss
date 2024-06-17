# pss
Pokémon Storage System

![](Front/assets/gif.gif)

### Funcionalidades

- [x] Pesquisa e inserção de Pokémon (1ª geração) na Box
- [x] Função de dar apelido para o Pokémon
- [x] Função de remover Pokémon
- [ ] Múltiplas 'boxes' com nome e papel de parede personalizado
- [ ] Função de mover e visualizar sumário do Pokémon

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Algum aplicativo de banco de dados como o [MySQL Workbench](https://www.mysql.com/).

### Rodando o Back End

```bash
# Clone este repositório
$ git clone <https://github.com/spekman/pss>

# Acesse a pasta do projeto no terminal/cmd
$ cd pss

# Vá para a pasta Back
$ cd Back

# Instale as dependências
$ npm install

# Vá para a pasta sql e crie a database executando os scripts 'schema.sql' e 'pokemon_table.sql' nesta ordem 

# Inicie o servidor da database

# Execute a aplicação
$ node .

# O servidor inciará na porta:4000 - acesse <http://localhost:4000>
```

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [MySQL Workbench](https://www.mysql.com/)
- [mysqljs](https://www.npmjs.com/package/mysql)
- [Express](https://www.npmjs.com/package/express)

# Créditos

https://learn-co-curriculum.github.io/js-pokemon-search-practice-assignment/ Sistema de search
https://blog.rocketseat.com.br/como-fazer-um-bom-readme/ Estrutura do readme