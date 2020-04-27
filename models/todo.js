'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    descirption: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    dues_date: DataTypes.DATE
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};