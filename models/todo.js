'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Model = sequelize.Sequelize.Model;

  class ToDo extends Model {}

  ToDo.init({
    title: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    },
    description: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    },
    status: {
      type : DataTypes.BOOLEAN
    },
    due_date: { 
      type : DataTypes.DATE,
      validate : {
        isDate: true
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