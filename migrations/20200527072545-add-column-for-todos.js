'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const p1 = queryInterface.addColumn('Todos', 'UserId', {
      type : Sequelize.INTEGER,
      foreignKey : true,
      references: {
        model: "Users",
        key : 'id'
      },
      onUpdate : 'cascade',
      onDelete : 'cascade'
    })

    const p2 = queryInterface.addColumn('Todos', 'ProjectId', {
      type : Sequelize.INTEGER,
      foreignKey : true,
      references: {
        model: "Projects",
        key : 'id'
      },
      onUpdate : 'cascade',
      onDelete : 'cascade'
    })

    return Promise.all([p1,p2])
  },

  down: (queryInterface, Sequelize) => {
    const p1 = queryInterface.removeColumn('Todos','UserId')
    const p2 = queryInterface.removeColumn('Todos','ProjectId')

    return Promise.all([p1,p2])
  }
};
