'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Task = sequelize.define('Task', {
  //   title: DataTypes.STRING,
  //   description: DataTypes.STRING,
  //   status: DataTypes.STRING,
  //   due_date: DataTypes.DATE,
  //   UserId: DataTypes.INTEGER
  // }, {});

  class Task extends sequelize.Sequelize.Model {}

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          arg: false,
          msg: 'Please specify a task title'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{
          arg:false,
          msg: 'Please specify a task description'
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull:{
          arg:false,
          msg: 'Please specify a due date'
        },
        CheckIfDateExpired(date){
          let currentDate = new Date ()
          var insertedDate = new Date(date); 
          //Jika currentDate lebih baru daripada insertedDate, maka...
          if (currentDate.getTime() > insertedDate.getTime()){
            throw new Error ("The date you put in has passed. Please specify a different date")
          } 
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notNull: {
          arg: false,
          msg: 'UserId not defined'
        }
      }
    },
    ProjectId: {
      type: DataTypes.INTEGER,
      defaultValue: null
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Task' // We need to choose the model name
  });

  Task.associate = function(models) {
    // associations can be defined
    Task.belongsTo(models.Project) 
    Task.belongsTo(models.User)
  };
  return Task;
};