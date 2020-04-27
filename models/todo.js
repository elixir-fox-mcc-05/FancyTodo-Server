'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class Todo extends Model{}

  Todo.init({
    title: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true,
        isInt : false,
        len : [3, 999]
      }
    },
    description: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true,
        len : [3,999]
      }
    },
    status: {
      type : DataTypes.BOOLEAN,
      unique : true,
      validate : {
        notEmpty : true
      }
    },
    due_date:{
      type :  DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    },
  }, {
    sequelize,
    modelName : "Todo",
    hooks :{ 
      beforeCreate : (todo) => {
        if (!todo.status){
        todo.status = false
        }
      },
      beforeUpdate : (todo) => {
        if (todo.status){
          todo.due_date = new Date()
        }
      }
    }
  });
  Todo.associate = function(models) {
    Todo.belongTo(models.User)
    // associations can be defined here
  };
  return Todo;
};