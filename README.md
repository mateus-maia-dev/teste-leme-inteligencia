# teste-leme-inteligencia

Esta aplicação irá realizar o cadastro de clientes e pedidos.

#### Snippet da api da aplicação no Insomnia, no arquivo `insomnia.json`

### Para rodar a aplicação
#### Clone do repositório
#### Inicialização do módulos e dependências
- `npm install` ou `yarn install`

### Para rodar as migrations e persistir as tabelas no banco
- `npm run typeorm migration:run`

## Configuração do servidor(pasta backend)
#### Criando o arquivo .env
Essa aplicação utiliza-se de banco de dados relacional através do gerenciador de bancos PostgreSQL. Logo, o exemplo dado para a configuração será no caso do seu uso.
- crie um arquivo .env - `touch .env`
- copie toda a informação de .env.example para .env - `cp .env.example .env`
- Preencha os campos de acordo com as credenciais do seu banco de dados


### Para rodar o servidor
- `npm run dev`

## Configuração do client side(past front)
#### Inicialização do módulos e dependências
- `npm init` ou `yarn install`

### Para rodar a aplicação
- `yarn start`

# Endpoints

## Clientes

Este endpoint possui 5 rotas: registro de clientes, listagem de cliente, recuperação de um cliente, deleção e atualização de cliente.. 

### Point Request

Rota para **cadastro** de um novo cliente.

```markdown
POST http://localhost:5000/api/cliente
```

### JSON Content

```json
{
	"nome": "John",
	"cpf": "12345678910",
	"data_nasc": "12/12/1899",
	"telefone": "999999999",
	"ativo": 140
}
```

### Response Format

```json
{
  "status": "sucess",
  "cliente": {
    "nome": "John",
    "cpf": "12345678910",
    "data_nasc": "12/12/1899",
    "telefone": "999999999",
    "ativo": 140,
    "id": 6
  }
}
```


### Point Request

Rota para listas todos os Clientes.

```markdown
GET http://localhost:5000/api/cliente
```

### Response Format

```json
{
  "status": "sucess",
  "clientes": [
    {
      "id": 3,
      "nome": "Anne",
      "cpf": "11111111111",
      "data_nasc": "2020-03-23T03:00:00.000Z",
      "telefone": "999999999",
      "ativo": 140
    },
    {
      "id": 4,
      "nome": "John",
      "cpf": "11111111111",
      "data_nasc": "2020-03-23T03:00:00.000Z",
      "telefone": "999999999",
      "ativo": 140
    },
    {
      "id": 6,
      "nome": "John",
      "cpf": "12345678910",
      "data_nasc": "1899-12-12T03:06:28.000Z",
      "telefone": "999999999",
      "ativo": 140
    }
  ]
}
```

### Point Request

Rota para retornar apenas um Cliente baseado no ID(Ex: 6)

```markdown
GET http://localhost:5000/api/cliente/6
```

### Response Format

```json
{
  "status": "sucess",
  "cliente": {
    "id": 6,
    "nome": "John",
    "cpf": "12345678910",
    "data_nasc": "1899-12-12T03:06:28.000Z",
    "telefone": "999999999",
    "ativo": 140
  }
}
```

### Point Request

Rota para excluir um Cliente.

```markdown
DELETE http://localhost:5000/api/cliente/1
```

### Response Format

```json
{}
```

### Point Request

Rota para atualizar um Cliente, através do ID.

```markdown
PUT http://localhost:5000/api/cliente/3
```
### Json Content

```json
{
	"nome": "Paul",
	"cpf": "11111111221",
	"data_nasc": "2020-03-23 00:00",
	"telefone": "999889999",
	"ativo": 140
}
```
### Response Format

```json
{
  "status": "sucess",
  "cliente": {
    "id": 3,
    "nome": "Paul",
    "cpf": "11111111221",
    "data_nasc": "2020-03-23 00:00",
    "telefone": "999889999",
    "ativo": 140
  }
}
```

## Pedidos

Este endpoint possui 5 rotas: registro de pedidos, listagem de pedidos, recuperação de um pedido, deleção e atualização de um pedido.. 

### Point Request

Rota para **cadastro** de um novo pedido.

```markdown
POST http://localhost:5000/api/pedido/
```

### JSON Content

```json
{
	"produto": "mouse",
	"valor": 120,
	"data": "2020-03-23 00:00",
	"cliente_id": 3,
	"pedido_status_id": 2,
	"ativo": 144
}
```

### Response Format

```json
{
  "status": "sucess",
  "pedido": {
    "produto": "mouse",
    "valor": 120,
    "data": "2020-03-23 00:00",
    "cliente_id": 3,
    "pedido_status_id": 2,
    "ativo": 144,
    "id": 8
  }
}
```


### Point Request

Rota para listas todos os Pedidos.

```markdown
GET http://localhost:5000/api/pedido/
```

### Response Format

```json
{
  "status": "sucess",
  "pedidos": [
    {
      "id": 5,
      "produto": "mouse",
      "valor": 120,
      "data": "2020-03-23T03:00:00.000Z",
      "ativo": 144
    },
    {
      "id": 7,
      "produto": "mouse",
      "valor": 120,
      "data": "2020-03-23T03:00:00.000Z",
      "ativo": 144
    }
  ]
}
```

### Point Request

Rota para retornar apenas um Pedido baseado no ID(Ex: 7)

```markdown
GET http://localhost:5000/api/pedido/7
```

### Response Format

```json
{
  "status": "sucess",
  "pedido": {
    "id": 7,
    "produto": "mouse",
    "valor": 120,
    "data": "2020-03-23T03:00:00.000Z",
    "ativo": 144
  }
}
```

### Point Request

Rota para excluir um Pedido.

```markdown
DELETE http://localhost:5000/api/pedido/7
```

### Response Format

```json
{}
```

### Point Request

Rota para atualizar um Cliente, através do ID.

```markdown
PUT http://localhost:5000/api/pedido/5
```
### Json Content

```json
{
	"produto": "notebook",
	"valor": 120,
	"data": "2020-03-23 00:00",
	"cliente_id": 3,
	"pedido_status_id": 2,
	"ativo": 144
}
```
### Response Format

```json
{
  "status": "sucess",
  "pedido": {
    "id": 5,
    "produto": "notebook",
    "valor": 120,
    "data": "2020-03-23 00:00",
    "ativo": 144,
    "cliente_id": 3,
    "pedido_status_id": 2
  }
}
```

## Upload de Imagem

### Point Request

```markdown
POST http://localhost:5000/api/upload/
```
![image](https://user-images.githubusercontent.com/79460525/138511184-eddf70b0-61e7-46fb-bb02-af8f33a61625.png)

Não foi feito o upload da imagem da Capa como solicitado no teste.


## Front End

### Tela Home
![image](https://user-images.githubusercontent.com/79460525/138512359-eb2d25a3-02a0-4077-9124-ec221617b802.png)

#### Tela Lista Clientes
![image](https://user-images.githubusercontent.com/79460525/138512663-259d7597-0001-437f-8f22-fb549c2edd23.png)


#### Tela Lista Pedidos
![image](https://user-images.githubusercontent.com/79460525/138513690-407fa465-f39d-4614-9572-b331972e367f.png)


#### Tela Cadastra CLiente
![image](https://user-images.githubusercontent.com/79460525/138516213-7ecdd324-a3dc-4454-9498-abeeb1f1df4e.png)

![image](https://user-images.githubusercontent.com/79460525/138515670-44a760e0-deb7-4519-8b7d-71729dacf627.png)


#### Tela Cadastra Pedidos
![image](https://user-images.githubusercontent.com/79460525/138516186-e467aa05-4918-4345-82e5-a89a6f806440.png)
