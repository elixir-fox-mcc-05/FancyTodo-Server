'use strict';
module.exports = (sequelize, DataTypes) => {

  class Todo extends sequelize.Sequelize.Model {}

  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        len: [3, 40]
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        len: [3, 40]
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      validate: {
        notNull: true
      }
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        notNull: true,
        isAfter: new Date()
      }
    }
  }, {
    sequelize
  })
  
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};