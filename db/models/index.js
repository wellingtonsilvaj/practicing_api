//Normatizar o cód para evitar gambiarras
'use strict';

//Permite trabalhar com o sistema de arquivos do compitador
const fs = require('fs');
//Fornece utilitários para trabalhar com caminhos de arquivos e diretorios
const path = require('path');
//Sequelize é um ORM para Node.js, que tem suporte vários bancos de dados
//ORM mapeamento objeto-relacional, as tabelas do banco de dados são representadas em classes e os registros das tabelas seriam instâncias dessas classes
const Sequelize = require('sequelize');
//Permite obter informações do processo na pagina atual
const process = require('process');
//Permite obter parte do caminho para o arquivo
const basename = path.basename(__filename);
//Verifcar se de deve utilizar a variável global ou 'development'
const env = process.env.NODE_ENV || 'development';
//Incluir o arquivo
const config = require(__dirname + '/../config/database.js')[env];
//Criar a constante com objeto vazio
const db = {};

//Criar a variavel que recebe a conexão com BD
let sequelize;
//Verificar qual configuração de BD você deseja usar
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  //Usar as configurações do arquivo "confing/database.js"
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//Verificar a conexão com BD
sequelize.authenticate()
.then( function(){
  console.log("Conexão com o BANCO DE DADOS realizado com sucesso!");
}).catch(function(error){
  console.log("ERRO: Conexão com o BANCO DE DADOS NÃO realizado com sucesso!", error);
});

//Identificar o MODEL
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//Atribuir a conexão com BD para o objeto db
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Exportar a instrução que está dentro da constante db
module.exports = db;
