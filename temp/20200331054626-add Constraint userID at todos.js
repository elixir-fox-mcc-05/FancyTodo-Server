'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Todos',['UserId'], { 
      type:'foreign key',
      name:'FK-Todos-User',
      references:{
        table:'Users',
        field:'id'
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Todos','FK-Todos-User');
    
  }
};
