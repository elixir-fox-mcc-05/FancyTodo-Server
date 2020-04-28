'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;
  class Todo extends Model {}

  Todo.init({
    title: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : `title cannot be empty`
        }
      }
    },
    description: DataTypes.STRING,
    status: {
      type : DataTypes.STRING,
      defaultValue : `queued`
    },
    due_date: {
      type : DataTypes.DATE,
      validate : {
        isAfter : {
          args : new Date(),
          msg : `due date cannot be in the past`
        }
      }
    },
    UserId : DataTypes.INTEGER
  },
  {
    sequelize,
    modelName : `Todo`
  })

  Todo.associate = function(models) {
    Todo.belongsTo(models.User)
  };
  return Todo;
};