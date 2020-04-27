'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Projects', ['TaskId'], {
      type: 'foreign key',
      name: 'custom_fkey_TaskId',
      references: { //Required field
        table: 'Tasks',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Projects', 'custom_fkey_TaskId',{})
  }
};
