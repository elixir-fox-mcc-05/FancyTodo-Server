'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', [
      {
        title: 'Kerjakan tugas',
        description: 'kerjakan tugas hacktiv',
        status: false,
        due_date: "2020-04-30",
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'install insomnia',
        description: 'install insomnia di dalam laptom',
        status: false,
        due_date: "2020-04-30",
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'buat dokumentasi API',
        description: 'buat dokumentasi API dalam repo yang sudah disediakan',
        status: false,
        due_date: "2020-05-30",
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'masak sayur',
        description: 'masak sayur di dapur',
        status: false,
        due_date: "2020-06-30",
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'belanja bulanan',
        description: 'belanja bulanan ke hypermart',
        status: false,
        due_date: "2020-06-01",
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'beli sapu',
        description: 'beli sapu ke warung',
        status: false,
        due_date: "2020-05-08",
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'main CS',
        description: 'main CS di laptop',
        status: false,
        due_date: "2020-05-02",
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'service motor',
        description: 'service motor di bengkel',
        status: false,
        due_date: "2020-05-02",
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'ganti bohlam',
        description: 'ganti bohlam kamar tidur',
        status: false,
        due_date: "2020-05-01",
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
