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
      validate : {
        notEmpty : true
      }
    },
    due_date:{
      type :  DataTypes.DATE,
      validate : {
        isDate : true,
        notEmpty : true,

      }
    },
    UserId: {
      type : DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName : "Todo",
    hooks :{ 
      beforeCreate : (todo) => {
        if (!todo.status){
        todo.status = false
        }
      }
    },
    validate : {
      checkdate (){
        if (this.due_date < new Date()){
          throw new Error('due_date must before time today');
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