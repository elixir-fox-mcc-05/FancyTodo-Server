'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model{}

  Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: DataTypes.DATEONLY,
    UserId : {
      type : DataTypes.INTEGER,
      references : {
        model : 'Users',
        key: 'id'
      },
      onDelete : 'cascade',
      onUpdate : 'cascade'
    }
  }, {
    sequelize,
    modelName : 'Todo'
  });
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User)
  };
  return Todo;
};