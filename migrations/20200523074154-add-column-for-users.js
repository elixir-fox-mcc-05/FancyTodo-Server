'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'ProjectId', {
      type : Sequelize.INTEGER,
      foreignKey : true,
      references: {
        model: "Projects",
        key : 'id'
      },
      onUpdate : 'cascade',
      onDelete : 'cascade'
    })


  },

  down: (queryInterface, Sequelize) => {
    const p2 = queryInterface.removeColumn('Users','ProjectId')
  }
};
