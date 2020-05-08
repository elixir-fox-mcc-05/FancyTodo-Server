'use strict';

module.exports = (sequelize, DataTypes) => {
  /*
  const todo = sequelize.define('todo', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: DataTypes.DATE
  }, {});
  */
  class Todo extends sequelize.Sequelize.Model {}

  Todo.init
  (
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      due_date:{
        type: DataTypes.DATE,
        validate :
        {
          makes_sense(value) {
            if(value < new Date()) {
              throw new Error("That time is already passed")
            }
          }
        }
      },
      UserId: DataTypes.INTEGER
    },
    {
      validate:
      {
        notNull() 
        {
          if(this.title == "" || this.description == "" || this.due_date == null )
            throw new Error("All data must be filled")
        }
        
      },
      sequelize,
      modelName : "Todo",
      hooks:
      {
        beforeCreate: (data, option) =>
        {
          data.status = "Unfinished";
        }
      }
    }
  )

  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User)
  };
  return Todo;
};