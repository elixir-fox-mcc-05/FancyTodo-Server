'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', [{
      title: 'Finishing my Projects',
      description: "Bring all your idea into execution",
      status: false,
      due_date: new Date("10-01-2021"),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Finding a job',
      description: "Be a humble yet strategic job chaser",
      status: false,
      due_date: new Date("10-08-2020"),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
