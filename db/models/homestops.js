//Normatizar o cód, ajuda evitar gambiarras
'use strict';

//Criar a constante do tipo objeto para receber ass MODELS
const {
  Model
} = require('sequelize');

//Exportar a função como modulo
module.exports = (sequelize, DataTypes) => {

  //Criar a classe com o nome da tabela "HomesTops" e usar extends para trabalhar com herança
  class HomesTops extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Criar relacionamento entre as tabelas
    static associate(models) {
      // define association here
    }
  }
  //Criar as colunas que a models pode manipular
  HomesTops.init({
    titleOneTop: DataTypes.STRING,
    titleTwoTop: DataTypes.STRING,
    titleThreeTop: DataTypes.STRING,
    linkBtnTop: DataTypes.STRING,
    textBtnTop: DataTypes.STRING,
    imageTop: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HomesTops',
  });
  return HomesTops;
};