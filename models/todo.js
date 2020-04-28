'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Model = sequelize.Sequelize.Model;

  class ToDo extends Model {}

  ToDo.init({
    title: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "Please insert title!"
        }
      }
    },
    description: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "Please insert description!"
        }
      }
    },
    status: {
      type : DataTypes.BOOLEAN,
      validate : {
        notEmpty : {
          args : true,
          msg : "Please insert status!"
        }
      }
    },
    due_date: { 
      type : DataTypes.DATE,
      validate : {
        isDate: {
          args : true,
          msg : "Please insert correct date format yyyy-mm-dd!"
        }
      }
    },
    UserId: {
      type : DataTypes.INTEGER
    }
  }, 
  {
    sequelize
  })
  ToDo.associate = function(models) {
    // associations can be defined here
    ToDo.belongsTo(models.User);
  };
  return ToDo;
};