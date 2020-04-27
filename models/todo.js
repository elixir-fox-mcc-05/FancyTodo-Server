'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class Todo extends Model{}

  Todo.init({
    title: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        len : [3]
      }
    },
    description: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : false,
        len : [3]
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
      type :  DataTypes.DATE,
      validate : {
        isDate : true,
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
      }
    }
  });
  Todo.associate = function(models) {
    Todo.belongsTo(models.User)
    // associations can be defined here
  };
  return Todo;
};