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
    },
    due_date: {
      type: DataTypes.DATEONLY,
      validate: {
        notEmpty: {args: true, msg: 'due date cannot be empty'},
        checkBackdate(){
          const currentDate = new Date();
          if(Math.floor((currentDate - new Date(this.due_date)) / 86400000) <= 0){
            throw new Error('Cannot set due date to backdate or today');
          }
        }
      }
    },
  }, {
    hooks:{
      beforeCreate: (todo) => {
        todo.status =  'Not Started';
      },
      beforeBulkUpdate: (todo) => {
        console.log(todo);
        if(!todo.attributes.status){
          todo.attributes.status =  'Not Started';
        }
        console.log(todo);
      }
    },
    sequelize
  });
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};