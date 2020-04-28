"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Todo extends Model {}

  Todo.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "title cannot be empty" },
          len: [4, 50],
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "description cannot be empty" },
          len: [4, 200],
        },
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "not started",
      },
      due_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "due date cannot be empty" },
          checkDate(){
              let currenDate = new Date();
              if(due_date < currentDate) {
                  throw new Error(`cannot set due date before current date`)
              }
          }
        },
      },
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );

  Todo.associate = function (models) {
    // associations can be defined here
  };
  return Todo;
};
