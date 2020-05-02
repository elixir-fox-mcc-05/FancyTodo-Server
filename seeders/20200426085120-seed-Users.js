'use strict';
let { encryptPassword } = require('../helpers/bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'tina',
        email: 'tina@contoh.com',
        password: encryptPassword('123456'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'tini',
        email: 'tini@contoh.com',
        password: encryptPassword('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'tono',
        email: 'tono@contoh.com',
        password: encryptPassword('qwerty'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
    
  }
};
