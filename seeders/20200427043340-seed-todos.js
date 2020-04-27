'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', [
      {
        title: 'Kerjakan tugas',
        description: 'kerjakan tugas hacktiv',
        status: false,
        due_date: "2020-04-27",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'install insomnia',
        description: 'install insomnia di dalam laptom',
        status: false,
        due_date: "2020-04-28",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'buat dokumentasi API',
        description: 'buat dokumentasi API dalam repo yang sudah disediakan',
        status: false,
        due_date: "2020-04-30",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
