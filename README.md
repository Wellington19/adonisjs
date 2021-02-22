<h3 align="center">
  Aplicando conceitos do Adonis Js
</h3>

## Sobre o projeto

API Adonis Js aplicando conceitos de CRUD, autenticação JWT, recuperação de senha, reset de senha, envio de email, upload de arquivos, relacionamentos no banco de dados, validator, tratamento de exceções, validação de rotas, internacionalização, paginação, hooks, fila com Redis, Sentry para notificação de exceções, CORS e transactions.

### Rotas da aplicação

- **`POST /users`**: A rota deve receber `username`, `email`, `password`, `password_confirmation` e um array de objetos JSON `addresses` podendo conter vários endereços do usuário dentro do corpo da requisição, este último é opcional.

- **`POST /sessions`**: A rota deve receber `email` e `password` para retornar o token de acesso do usuário algumas rotas que são privadas.

- **`POST /passwords`**: A rota deve receber `email` e `redirect_url` para enviar o email com informações de reset de senha.

* **`PUT /passwords`**: A rota deve receber `token` e `password` para alterar para a nova senha.

* **`POST /files`**: A rota deve receber no corpo da requisição um parâmetro Multipart com nome `file` e um `Bearer Token` do usuário autenticado.

* **`GET /files/:id`**: A rota deve receber um `id` presente nos parâmetros da rota e um `Bearer Token` do usuário autenticado para retornar o arquivo para visualização ou download.

* **`POST /projects`**: A rota deve receber `title` e `description` e um `Bearer Token` do usuário autenticado para criação de um projeto.

* **`GET /projects/:id`**: A rota deve receber um `id` presente nos parâmetros da rota e um `Bearer Token` do usuário autenticado para retornar os dados do projeto.

* **`PUT /projects/:id`**: A rota deve receber um `id` do projeto presente nos parâmetros da rota, `title`, `description`, `user_id` e um `Bearer Token` do usuário autenticado para alteração de um projeto.

* **`DELETE /projects/:id`**: A rota deve receber um `id` do projeto presente nos parâmetros da rota e um `Bearer Token` do usuário autenticado para deletar um projeto.

* **`GET /projects/:projects_id/tasks`**: A rota deve receber um `id` do projeto presente nos parâmetros da rota e um `Bearer Token` do usuário autenticado para retornar as tarefas de um projeto.

* **`POST /projects/:projects_id/tasks`**: A rota deve receber um `id` do projeto presente nos parâmetros da rota, `title`, `due_date` e um `Bearer Token` do usuário autenticado para criação de uma tarefa do projeto.

* **`GET /projects/:projects_id/tasks/:id`**: A rota deve receber um `id` do projeto, e um `id` da tarefa presente nos parâmetros da rota e um `Bearer Token` do usuário autenticado para retornar uma tarefa do projeto.

* **`PUT /projects/:projects_id/tasks/:id`**: A rota deve receber um `id` do projeto, e um `id` da tarefa presente nos parâmetros da rota, `title`, `due_date` e um `Bearer Token` do usuário autenticado para alterar uma tarefa do projeto.

* **`DELETE /projects/:projects_id/tasks/:id`**: A rota deve receber um `id` do projeto, e um `id` da tarefa presente nos parâmetros da rota e um `Bearer Token` do usuário autenticado para deletar uma tarefa do projeto.

### Como rodar o código

Clone ou baixe o projeto e abra com editor de sua prefêrencia, lembre-se de executar o comando `npm install` no seu terminal para instalar todas as dependências.

<h4 align="center">
  ⚠️ Pegar o arquivo `.env.example` renomear para `.env` e configurar a conexão com banco de dados e Redis para fila, serviço para envio de email e o DSN do Sentry para receber notificação de exceções da API ⚠️

  ⚠️ Antes de executar a aplicação você precisa ter o postgres e o redis rodando executar o comando `adonis migration:run` e `adonis kue:listen` para criação do banco de dados e fila respectivamente ⚠️

  ⚠️ Antes de executar a aplicação você precisa ter o postgres rodando executar o comando `adonis migration:run` para criação do banco de dados ⚠️
</h4>

Para rodar a aplicação execute o comando `npm run start`

