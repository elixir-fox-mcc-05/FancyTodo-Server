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
          notNull: {
            args: true,
            msg: "Title is required",
          },
          notEmpty: {
            args: true,
            msg: "Title is required",
          },
          len: {
            args: 4,
            msg: "Title must be or more than 4 character",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Description is required",
          },
          notEmpty: {
            args: true,
            msg: "Description is required",
          },
          len: {
            args: 4,
            msg: "Description must be or more than 4 character",
          },
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
          notNull: {
            args: true,
            msg: "Due date is required",
          },
          notEmpty: {
            args: true,
            msg: "Due date is required",
          },
          isAfter: {
            args: `${new Date()}`,
            msg: "Due date must be more than current day and time",
          },
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );

  Todo.associate = function (models) {
    Todo.belongsTo(models.User, { foreignKey: "UserId" });
  };
  return Todo;
};
