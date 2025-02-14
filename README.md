# Auth JWT

[Leia em Português](#português) | [Read in English](#english)

## English
This is a back-end project developed with Node.js, using Express, MongoDB, and authentication via JWT. The API allows user registration and login, protecting endpoints with token-based authentication.

### 📝 Features
* Token-based authentication system:
  - User creation.
  - Secure login.
 
### 🚀 Technologies Used
* Node.js: A platform for executing JavaScript on the server side.
* Express: A minimalist web framework for Node.js.
* MongoDB: A NoSQL document-oriented database.
* JWT (JSON Web Token): Used for secure user authentication.

### 📦 Installation
1. Clone the repository
   ```
   gh repo clone edilaine-as/NodeJS-Auth-JWT
   ```
2. Navigate to the project directory
   ```
   cd NodeJS-Auth-JWT
   ```
3. Install dependencies
   ```
   npm i
   ```
4. Configure the .env file
   * Create a .env file in the project root.
   * Define the following variables:
   ```
   DB_USER=
   DB_PASS=
   ```
5. Start the project
   ```
   npm run start
   ```

### 📦 Project Dependencies
* bcrypt (^5.1.1): Used to encrypt passwords before storing them in the database.
* dotenv (^16.4.7): Loads environment variables from a .env file.
* express (^4.21.2): Web framework for creating routes and handling HTTP requests.
* jsonwebtoken (^9.0.2): Responsible for generating and validating JWT tokens for authentication.
* mongoose (^8.10.0): ODM for interacting with MongoDB in a more structured and simple way.

### 📦 Development Dependency
* nodemon (^3.1.9): A tool that automatically restarts the server whenever there are code changes during development.

### 🤝 Contribution
Feel free to contribute! Open an issue or submit a pull request.

### 📄 License
This project is licensed under the MIT license. See the LICENSE file for more details.

## Português
Este é um projeto de back-end desenvolvido com Node.js, utilizando Express, MongoDB e autenticação via JWT. A API permite o registro e login de usuários, protegendo os endpoints com autenticação baseada em tokens.

### 📝 Funcionalidades
* Sistema de autenticação baseado em tokens:
  - Criação de usuário.
  - Login seguro.

### 🚀 Tecnologias Utilizadas
* Node.js: Plataforma para execução de JavaScript no lado do servidor.
* Express: Framework web minimalista para Node.js.
* MongoDB: Banco de dados NoSQL orientado a documentos.
* JWT (JSON Web Token): Para autenticação segura de usuários.

### 📦 Instalação
1. Clone o repositório
   ```
   gh repo clone edilaine-as/NodeJS-Auth-JWT
   ```
2. Navegue até o projeto
   ```
   cd NodeJS-Auth-JWT
   ```
3. Instale as dependências
   ```
   npm i
   ```
4. Configure o arquivo .env
   * Crie um arquivo .env na raiz do projeto
   * Defina as váriaveis abaixo.
   ```
   DB_USER=
   DB_PASS=
   ```
5. Inicie o projeto
   ```
   npm run start
   ```

### 📦 Dependências do Projeto
* bcrypt (^5.1.1): Utilizado para criptografar senhas antes de armazená-las no banco de dados.
* dotenv (^16.4.7): Permite carregar variáveis de ambiente a partir de um arquivo .env.
* express (^4.21.2): Framework web para criar rotas e lidar com requisições HTTP.
* jsonwebtoken (^9.0.2): Responsável por gerar e validar tokens JWT para autenticação.
* mongoose (^8.10.0): ODM para interagir com o MongoDB de forma mais simples e estruturada.

### 📦 Dependência de Desenvolvimento
* nodemon (^3.1.9): Ferramenta que reinicia automaticamente o servidor sempre que há alterações no código durante o desenvolvimento.

### 🤝 Contribuição
Sinta-se à vontade para contribuir! Abra uma issue ou envie um pull request.

### 📄 Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
