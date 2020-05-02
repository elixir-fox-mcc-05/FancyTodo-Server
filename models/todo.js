'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Todo extends Model {}

  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isDate: {
          msg: "Input must be in ISO format (ISO 8601) YYYY - MM - DD"
        },
        isPast(due_date) {
          let now = new Date()
          if(due_date < now) {
            throw new Error("Due date cannot be set to be in the past")
          }
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      },
      onUpdate: "cascade",
      onDelete: "cascade"
    }
  }, {
    sequelize,
    modelName: "Todo"
  });

  Todo.associate = function(models) {
    Todo.belongsTo(models.User)
  };
  return Todo;
};