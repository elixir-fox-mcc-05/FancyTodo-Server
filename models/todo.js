'use strict';
module.exports = (sequelize, DataTypes) => {

  class Todo extends sequelize.Sequelize.Model {}

  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [3, 40]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [3, 150]
      }
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: true,
        isAfter: `${new Date()}`
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (todo, options) => {
        todo.status = false
      }
    }
  })
  
  Todo.associate = function(models) {
    Todo.belongsTo(models.User)
  };
  return Todo;
};