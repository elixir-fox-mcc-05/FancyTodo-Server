'use strict';
let data = require('../data/todos.json').map(element => {
  element.due_date = new Date();
  element.createdAt = new Date();
  element.updatedAt = new Date();
  return element;
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Todos", data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Todos", null, {});
  }
};
