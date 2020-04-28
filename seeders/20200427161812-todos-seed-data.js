'use strict';

const data = require('../seed-data/todos.json')
const todos = data.map(todo => {
  todo.createdAt = new Date(),
  todo.updatedAt = new Date()
  return todo
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', todos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
