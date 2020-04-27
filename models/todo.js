'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Todo extends Model{}

  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: 'title cannot be empty'}
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: 'description cannot be empty'}
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: 'status cannot be empty'}
      }
    },
    due_date: {
      type: DataTypes.DATEONLY,
      validate: {
        notEmpty: {args: true, msg: 'due date cannot be empty'}
      }
    },
  }, {
    hooks:{
      beforeCreate: (todo) => {
        todo.status =  'Not Started';
      }
    },
    sequelize
  });
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};