'use strict';

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Todo extends Model {};

  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title must not empty'
        },
        len: {
          args: [0,100],
          msg: 'Title max 100 characters'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: ''
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    due_date: {
      type:DataTypes.DATEONLY,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Due Date must not empty'
        },
        isDate: {
          args: true,
          msg: 'Due Date must in sting'
        },
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "Todo"
  });

  Todo.associate = function(models) {
    Todo.belongsTo(models.User, {foreignKey: 'UserId'});
  };
  return Todo;
};