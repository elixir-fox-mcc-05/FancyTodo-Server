'use strict';
module.exports = (sequelize, DataTypes) => {
  let { Model } = sequelize.Sequelize
  class Todo extends Model {}
  Todo.init({
    title: {
      type : DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },

    description: {
      type : DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },

    status: DataTypes.BOOLEAN, //

    due_date: {
      type: DataTypes.STRING,
      validate: {
        isEven() {
          if (due_date < new Date()) {
            throw new Error('Todo Cannot be Past Tense');
          }
        },
        notEmpty: {
          args: true,
          msg: "Due date cant Null"
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    hooks: {
      beforeValidate: (todo) => {
        todo.status = false;
      },
    }
  })
  
  Todo.associate = function(models) {
    Todo.belongsTo(models.User)
  };
  return Todo;
};