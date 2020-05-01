'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class Todo extends Model {}

  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "title can\'t be empty"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: "No description"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        notEmpty: {
          msg: "status can\'t be empty"
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "due_date can\'t be empty"
        },
        isDate: {
          msg: "due_date input must be in date format"
        },
        isFuture(date) {
          console.log(date);
          let today = new Date();
          console.log(today);
          if (date < today) {
            throw new Error('it\'s either today or future date for due_date');
          }
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
    },
    ProjectId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Projects",
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }
  }, {
    hooks: {
      beforeCreate(todo, option) {
        if(!todo.description) {
          todo.description = "No description"
        }
      }
    },
    sequelize,
    modelName: "Todo"
  });

  Todo.associate = function(models) {
    Todo.belongsTo(models.User);
    Todo.belongsTo(models.Project);
  };
  return Todo;
};