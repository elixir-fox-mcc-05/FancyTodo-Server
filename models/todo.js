'use strict';
module.exports = (sequelize, DataTypes) => {
  let { Model } = sequelize.Sequelize
  class Todo extends Model {}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: true,
          notNull: true
      }
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: true,
          notNull: true
      }
    },
    status: DataTypes.BOOLEAN, //

    due_date: {
      type: DataTypes.STRING,
      validate: {
        isValid(due_date) {
          console.log('object');
          if (new Date(due_date) < new Date()) {
            throw new Error('due date must be atleast now');
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
      beforeCreate: (todo) => {
        todo.status = false;
      },
    }
  })
  
  Todo.associate = function(models) {
    Todo.belongsTo(models.User)
  };
  return Todo;
};