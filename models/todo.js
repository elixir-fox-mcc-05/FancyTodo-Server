'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;
  class Todo extends Model { }

  Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: DataTypes.DATE,
    UserId: DataTypes.Integer
  }, {
    sequelize
  })

  const Todo = sequelize.define('Todo', {
  });
  Todo.associate = function (models) {
    Todo.belongsTo(models.User)
  };
  return Todo;
};