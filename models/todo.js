'use strict';

module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class Todo extends Model{}
  
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {sequelize, modelName: "Todo"});

  Todo.associate = function(models) {
    Todo.belongsTo(models.User);
  };
  
  return Todo;
};