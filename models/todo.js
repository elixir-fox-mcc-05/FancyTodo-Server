'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Todo extends Model {

  }
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Title is required`
        },
        notEmpty: {
          args: true,
          msg: "Title cannot be empty"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Description is required`
        },
        notEmpty: {
          args: true,
          msg: "Description cannot be empty"
        }
      }
    },
    status: {
      type: DataTypes.ENUM('done', 'pending'),
      validate: {
        isIn: {
          args: [['done', 'pending']],
          msg: "Status must be either 'pending' or 'done' "
        }
      },
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isDate: true
      }
    },
    UserId: DataTypes.STRING
  }, {
    validate: {
      checkEmpty() {
        if(!this.status) {
          this.status = "pending";
        }
        if(this.due_date) {
          this.due_date = new Date(this.due_date);
          let today = new Date();
          today.setHours(0,0,0,0);
          if(this.due_date <= today) {
            throw "Due Date Cannot Less than today";
          }
        }
      }
    },
    sequelize,
    modelName: "Todo"
  })
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User, {
      foreignKey: "UserId",
      targetKey: "id"
    });
  };
  return Todo;
};