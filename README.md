# BuzzCardVel - Virtual Card App

### Aplicação back-end que criar e ermazenar páginas de cartões virtuais.

## Pré-requisitos

**Node.js** versão v16.16.0

### Para rodar essa aplicação:

1. Faça o clone do repositório e no terminal navegue até a pasta buzzcardvel-backend;
2. Instale as dependências do projeto com `npm i`;
3. Configure o seu arquivo ***.env*** conforme ***.env.example*** na raiz do projeto;
4. Configure o banco de dados postgres utilizando o prisma ORM:

      a. Crie o database buzzcardvel.
      
      b. Faça a migração do banco com o comando `npx prisma migrate dev`;
5. Rode o servidor de desenvolvimento com `npm run dev`;

<details>
  <summary>Se preferir, você pode rodar manualmente os scripts sql de criação das tabelas presentes na pasta /primsa/migrations. </summary>

```
-- Scripts para criação do banco


```
</details>


### URL:
 O *endpoint* do serviço estará disponível em http://localhost:4000


### Rotas e métodos da API : 

```
GET

    /:name
    /card-page/all

POST

    /create
      parâmetros: body {
        name: string,
        linkedinURL: string,
        gitHubURL: string
      }

```

### Em breve:


Link do Deploy:


Link para o Projeto Front-end que consumirá está linda API: