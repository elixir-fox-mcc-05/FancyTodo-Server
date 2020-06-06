'use strict';
module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.Sequelize.Model

  class Todo extends Model {}

  Todo.init({
    title: {
      type: DataTypes.STRING
    },
    description: DataTypes.STRING,
    due_date: {
      type : DataTypes.STRING,
      validate : {
        isDate : {
          args : true,
          msg : 'please input valid date'
        },
        isAfter : {
          args : `${new Date()}`,
          msg : 'please input due date after this day'
        }
      }
    },
    status : {
      type : DataTypes.BOOLEAN
    },
    UserId : {
      type : DataTypes.INTEGER
    }
  }, {
    sequelize,
  })

  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};