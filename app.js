//Incluir as bibliotecas
//Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require('express');
//Incluir o módulo para gerenciar diretórios e caminhos
const path = require("path");

// Chamar a função express
const app = express();

//Criar o middleware para receber os dados no corpo da requisição
app.use(express.json());
//Testar a conexão com BD
//const db = require("./db/models");

//Local dos arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

//Incluir as CONTROLLERS
const home = require("./controllers/home");
const aboutsCompanies = require("./controllers/aboutsCompanies");
const contentsContacts = require("./controllers/contentsContacts");
const contactMessage = require("./controllers/contactMessage");

//Criar as rotas
app.use('/home', home);
app.use('/about-companies', aboutsCompanies);
app.use('/contents-contacts', contentsContacts);
app.use('/contact-message', contactMessage);



//Iniciar o servidor na porta 8080, criar a função utilizando modelo arrow function para retornar a mensagem de sucesso
app.listen(8080, () =>{
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});