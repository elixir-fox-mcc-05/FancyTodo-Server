'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class Todo extends Model {}

  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: {
        msg: "title cant be empty"
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: {
        msg: "description cant be empty"
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      notEmpty: {
        msg: "status cant be empty"
      }
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      notEmpty: {
        msg: "due_date cant be empty"
      },
      isDate: {
        msg: "due_date input must be in date format"
      },
      isFuture(date) {
        let today = new Date;
        if (date < today) {
          throw new Error('it\'s either today or future date for due_date');
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }
  }, {
    sequelize,
    modelName: "Todo"
  });

  Todo.associate = function(models) {
    Todo.belongsTo(models.User);
  };
  return Todo;
};