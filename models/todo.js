'use strict';
module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.Sequelize.Model

  class Todo extends Model {}

  Todo.init({
    title: {
      type: DataTypes.STRING,
      unique : {
        args : true,
        msg : 'title already exists'
      }
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
          msg : 'please input date after this day'
        }
      }
    }
  }, {
    sequelize,
  })

  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};