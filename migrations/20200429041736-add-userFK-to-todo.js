'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Todos', ['UserId'], {
      type: 'foreign key',
      name: 'custom_fkey_UserId',
      references: {
          table: 'Users',
          field: 'id'
      },
      onDelete: 'cascade',
      OnUpdate: 'cascade'
  })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Todos', 'custom_fkey_UserId')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
