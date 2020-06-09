# Very Useful Tools to Remember - VUTTR

## Bossabox - Backend

Garanta que tenha instalado node e mongodb em sua maquina.

Caso não tenha instalado acesse:

* [Node download](https://nodejs.org/en/download/)
* [MongoDB download](https://docs.mongodb.com/guides/server/install/)

Caso não queira instalar o mongodb utilize a versão em nuvem fornecida pela
[mongoDB Atlas](https://www.mongodb.com/), você pode mudar essa url em
`src/database/connection.ts`
```ts
mongoose.connect("mongodb://localhost/tools"
```
```ts
Exemplo:
mongoose.connect("mongodb+srv://<username>:<password>@cluster0-fukiy.mongodb.net/<dbname>?retryWrites=true&w=majority"
```

## Executando o projeto

Instale todas as dependecias utilizando `yarn` ou `npm install`

Apost ad depencias intaladas utilize `yarn dev` ou `npm run dev` para iniciar o servidor.

## Utilizando o insomnia
