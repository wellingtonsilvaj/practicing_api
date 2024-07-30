'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    return queryInterface.bulkInsert('HomesServices', [
      {
        servTitle:'Serviços',
        servIconOne:'PiHouseLineFill',
        servTitleOne:'Serviços elétricos residenciais',
        servDescOne:'Contrary to popular belief, Lorem Ipsum is not simply random',

        servIconTwo:'TbBuildingFactory2',
        servTitleTwo:'Serviços elétricos em empresas',
        servDescTwo:'Contrary to popular belief, Lorem Ipsum is not simply random',

        servIconThree:'PiSolarPanelFill',
        servTitleThree:'Instação de paineis  solares',
        servDescThree:'Contrary to popular belief, Lorem Ipsum is not simply random',

      createdAt: new Date(),
      updatedAt: new Date(),

      }
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('HomesServices ', null, {});
  }
};
