'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  //Cadastrar o registro na tabela "ContactsMsgs"
  return queryInterface.bulkInsert('ContactsMsgs', [
    {
      name: 'Wellington',
      email:'wellington@wellington.com.br',
      subject:'Assunto da mensagem 1',
      content:'conteudo da mensagem 1',

      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
