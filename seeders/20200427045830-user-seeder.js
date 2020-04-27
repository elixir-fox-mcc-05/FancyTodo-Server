'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'john@gmail.com',
        password: 123456,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jessica',
        email: 'jessica@gmail.com',
        password: 123456,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gracia',
        email: 'gracia@gmail.com',
        password: 123456,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null);
  }
};
