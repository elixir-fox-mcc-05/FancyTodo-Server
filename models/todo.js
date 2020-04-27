'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model{}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Input Title'
        }
      }
    },
    description: DataTypes.STRING,
    status: {
      type:  DataTypes.BOOLEAN,
      defaultValue: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Input Due Date'
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "Todo",
    validate: {
      checkDate(){
        if(new Date(this.due_date) < new Date()){
          throw new Error ("Input date in the future")
        }

      },
      checkDescription(){
        if(this.description == '' || this.description == null ){
          this.description = this.title
        }
      }
    }
  })

  Todo.associate = function(models) {
    Todo.belongsTo(models.User, { foreignKey: "UserId"})
  };
  return Todo;
};