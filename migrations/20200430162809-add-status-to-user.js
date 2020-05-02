'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'status', { type: Sequelize.BOOLEAN });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'status');
  }
};
