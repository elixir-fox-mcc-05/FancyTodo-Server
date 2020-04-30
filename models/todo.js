'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model{}

  Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: {
      type : DataTypes.DATEONLY,
      validate : {
        isAfter : new Date().toISOString().split('T')[0]
      }
    },
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
    hooks : {
      beforeCreate: (todo)=>{
        todo.status = false
      }
    },
    modelName : 'Todo'
  });
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User)
  };
  return Todo;
};