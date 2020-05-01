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
        },
        isIn: {
          args : [['true', 'false']],
          msg : "Please true or false only"
        }
      }
    },
    due_date: { 
      type : DataTypes.DATE,
      validate : {
        notEmpty : {
          args : true,
          msg : "Please insert due date!"
        },
        isDate: {
          args : true,
          msg : "Please insert correct date format!"
        },
        isNotBefore(value) {
          
          if (value < new Date()) {
            throw new Error("Hey, due date minimum is tomorrow")
          }
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