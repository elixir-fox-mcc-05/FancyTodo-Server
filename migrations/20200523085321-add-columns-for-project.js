'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const p1 = queryInterface.addColumn('Projects', 'UserId', {
      type : Sequelize.INTEGER,
      foreignKey : true,
      references: {
        model: "Users",
        key : 'id'
      },
      onUpdate : 'cascade',
      onDelete : 'cascade'
    })

    const p2 = queryInterface.addColumn('Projects', 'TodoId', {
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
    const p1 = queryInterface.removeColumn('Projects','UserId')
    const p2 = queryInterface.removeColumn('Projects','TodoId')

    return Promise.all([p1,p2])
  }
};
