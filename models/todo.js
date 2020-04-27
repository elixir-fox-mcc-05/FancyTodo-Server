'use strict';
module.exports = (sequelize, DataTypes) => {
  let model = sequelize.Sequelize
  class Todo extends model {}
  Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: DataTypes.DATE
  }, {sequelize})
  
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};