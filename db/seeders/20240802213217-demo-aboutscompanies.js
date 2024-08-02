'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('AboutsCompanies', [
      {
        title: 'Comigo o serviço é feito dentro do prazo, com segurança e qualidade para você e sua família não terem preocupações.',
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
        image: 'premium_v1.jpg',
        situationAboutId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),        
      },
      {
        title: 'Comigo o serviço é feito dentro do prazo, com segurança e qualidade para você e sua família não terem preocupações.',
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
        image: 'premium_v2.jpg',
        situationAboutId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),  
      },
      {
        title: 'Comigo o serviço é feito dentro do prazo, com segurança e qualidade para você e sua família não terem preocupações.',
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
        image: 'premium_v3.jpg',
        situationAboutId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),  
      },
      {
        title: 'Comigo o serviço é feito dentro do prazo, com segurança e qualidade para você e sua família não terem preocupações.',
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
        image: 'premium_v3.jpg',
        situationAboutId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),  
      },
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('AboutsCompanies', null, {});
  }
};
