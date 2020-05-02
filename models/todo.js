'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;

  class Todo extends Model{}
  
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Title is required"
        },
        notEmpty: {
          args: true,
          msg: "This field cannot be empty"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Description is required"
        },
        notEmpty: {
          args: true,
          msg: "This field cannot be empty"
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        notNull: {
          args: true,
          msg: "Status is required"
        },
        notEmpty: {
          args: true,
          msg: "This field cannot be empty"
        },
        isIn: {
          args: [['true', 'false']],
          msg: "This field is true or false only"
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Due_date is required"
        },
        notEmpty: {
          args: true,
          msg: "This field cannot be empty"
        },
        isDate: {
          args: true,
          msg: "This field is date format yyyy-mm-dd"
        },
        isDueDate(value){
          if (value < new Date()){
            throw new Error("Due date is after today")
          }
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "UserId is required"
        },
        notEmpty: {
          args: true,
          msg: "This field cannot be empty"
        }
      }
    }
  },
  {
    sequelize, modelName: "Todo"
  });
  
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User);
  };
  return Todo;
};