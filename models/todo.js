'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;
  class Todo extends Model { }

  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title is required'
        }
      }
    },
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isAfter: "2020-04-27"
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  })

  Todo.associate = function (models) {
    Todo.belongsTo(models.User)
  };
  return Todo;
};