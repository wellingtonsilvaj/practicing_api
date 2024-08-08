'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //Cadastrar o registro na tabela "ContentsContacts"
    return queryInterface.bulkInsert('ContentsContacts', [
      {
        titleContact:'Contato',
        descContact:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.',
        iconCompany:'FaRegUser',
        titleCompany:'Empresa',

        desCompany:'Eco Eletrica',
        iconAddress:'MdOutlineLocationOn',
        titleAddress:'Endereço',

        descAddress:'Camocim de são felix',
        iconEmail:'FaRegEnvelope',
        titleEmail:'E-mail',
        descEmail:'eco@eletrica.com.br',

        titleForm:'Mensagem de Contato',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface) {
   
    await queryInterface.bulkDelete('ContentsContacts', null, {});
    
  }
};
