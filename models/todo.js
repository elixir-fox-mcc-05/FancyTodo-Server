'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Todo extends Model{}

  Todo.init({
    title: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:true
      } 
    },
    description: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:true
      }
    },
    status: DataTypes.BOOLEAN,
    due_date: {
      type:DataTypes.DATE,
      validate:{
        notEmpty:true
      }
    }
  }, {
    sequelize,
    modelName: 'Todo'
  })

  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};