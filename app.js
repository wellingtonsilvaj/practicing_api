//Incluir as bibliotecas
//Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require('express');
//Incluir o módulo para gerenciar diretórios e caminhos
const path = require("path");
//Importar biblioteca para permitir conexão externa
const cors = require('cors');
// Chamar a função express
const app = express();

//Criar o middleware para receber os dados no corpo da requisição
app.use(express.json());

//Criar o middleware para permitir requisição externa
app.use((req, res, next) =>{
  //Qualquer indereço pode fazer requisição "*"
  res.header("Acess-Control-Origin", "*");
  //Tipos de método que a API aceita
  res.header("Acess-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  //Permitir o envio de dados para API
  res.header("Access-Control-Allow-Headers", "Content-Type");
  //Executar o cors
  app.use(cors());
  next();

});
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