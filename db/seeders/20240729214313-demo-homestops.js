//Normatizar o cód, ajuda a evitar gambiarras
'use strict';

//Exportar o objeto como modulo
//Como module.exports é possivel exportar funções, objetos, variaveis, etc., para serem usados em outra partes do projeto
/** @type {import('sequelize-cli').Migration} */
module.exports = {

  //Cadastrar o registro na tabela "homestops"
  async up (queryInterface) {
    return queryInterface.bulkInsert('HomesTops', [{
      titleOneTop: 'TEMOS A SOLUÇÃO',
      titleTwoTop:'QUE A SUA EMPRESA PRECISA',
      titleThreeTop:'PODEMOS AJUDAR A SUA EMPRESA!',
      linkBtnTop:'http://localhost:8080/contato',
      textBtnTop:'ENTRE EM CONTATO',
      imageTop:'banner_top_v5.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);

  },

  async down (queryInterface) {
    
     await queryInterface.bulkDelete('HomesTops ', null, {});
     
  }
};
