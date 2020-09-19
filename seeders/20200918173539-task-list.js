'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await  queryInterface.bulkInsert('tasks', [{
      description: 'Comprar batatas',
      done: 'true',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Comprar carne moida',
      done: 'false',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
