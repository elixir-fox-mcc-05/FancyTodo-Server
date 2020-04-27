'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Todo extends Model {

  }
  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Title cannot be empty"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Description cannot be empty"
        }
      }
    },
    status: DataTypes.STRING,
    due_date: {
      type: DataTypes.DATE,
      validate: {

      }
    }
  }, {
    validate: {
      checkEmpty() {
        if(!this.title) {
          throw new Error('Title is required');
        }
        if(!this.description) {
          throw new Error('Description is required');
        }
        if(!this.status) {
          this.status = "pending";
        }
        if(this.due_date) {
          this.due_date = new Date(this.due_date);
          let today = new Date();
          today.setHours(0,0,0,0);
          if(this.due_date <= today) {
            throw new Error('Due Date cannot be less than today');
          }
        }
      }
    },
    sequelize,
    modelName: "Todo"
  })
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};