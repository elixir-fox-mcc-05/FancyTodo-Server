'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let todos = [
      {
        title: 'Task 1',
        description: 'Menyelesaikan Task 1',
        status: 'Not Started',
        due_date: '2020-05-01'
      },
      {
        title: 'Task 2',
        description: 'Menyelesaikan Task 2',
        status: 'Not Started',
        due_date: '2020-05-02'
      }
    ]
    return queryInterface.bulkInsert('Todos', todos, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
