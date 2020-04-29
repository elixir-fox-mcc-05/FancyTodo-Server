'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;

  class Todo extends Model{}
  
  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "This field cannot be empty"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "This field cannot be empty"
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize, modelName: "Todo"
  });
  
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User);
  };
  return Todo;
};