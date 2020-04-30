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
        let today = new Date()
        let check = new Date(this.due_date)
        if (check.getFullYear() < today.getFullYear() || check.getMonth() < today.getMonth || check.getDate() < today.getDate()){
          throw new Error('due_date must after time today');
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