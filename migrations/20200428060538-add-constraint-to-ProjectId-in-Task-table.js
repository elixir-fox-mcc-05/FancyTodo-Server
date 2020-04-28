'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addConstraint('Tasks', ['ProjectId'], {
      type: 'foreign key',
      name: 'custom_fkey_ProjectId',
      references: { //Required field
        table: 'Projects',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.removeConstraint('Tasks', 'custom_fkey_ProjectId',{})

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
