'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Todo extends Model { }

  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        check(value) {
          if (value == '') {
            throw new Error('title required')
          }
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        check(value) {
          if (value == '') {
            throw new Error('description required')
          }
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        check(value) {
          if (value == '') {
            throw new Error('due_date required')
          }
        }
      }
    }
  },
  {
    sequelize,
    modelName: "Todo"
  })
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};