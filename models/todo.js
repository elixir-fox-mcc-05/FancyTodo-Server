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
      defaultValue: 'NOT YET',
      allowNull: false,

    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        check(value) {
          if (value == '') {
            throw new Error('due_date required')
          } else {
            if (new Date() > value) { throw new Error ('you must set date at least one day before') }
          }
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
  },
  {
    sequelize,
    modelName: "Todo"
  })
  Todo.associate = function(models) {
    Todo.belongsTo(models.User)
  };
  return Todo;
};