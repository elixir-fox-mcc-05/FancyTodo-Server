'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Todo extends Model{}

  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: 'title cannot be empty'}
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: 'description cannot be empty'}
      }
    },
    status: {
      type: DataTypes.ENUM('Not Started', 'On Going', 'Finished'),
      validate: {
        checkStatus() {
          const list = ['not started', 'on going', 'finished'];
          if(!list.includes(this.status.toLowerCase())){
            throw new Error('Status must be : Not Started, On Going, Finished')
          }
        }
      }
    },
    due_date: {
      type: DataTypes.DATEONLY,
      validate: {
        notEmpty: {args: true, msg: 'due date cannot be empty'},
        checkBackdate(){
          const currentDate = new Date();
          if(Math.floor((new Date(this.due_date) - currentDate) / 86400000) <= 0){
            throw new Error('Cannot set due date to backdate or today');
          }
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'Id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    ProjectId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Projects',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }
  }, {
    hooks:{
      beforeCreate: (todo) => {
        todo.status =  'Not Started';
      },
      beforeBulkUpdate: (todo) => {
        if(!todo.attributes.status){
          todo.attributes.status =  'Not Started';
        }
      }
    },
    sequelize
  });
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User);
    Todo.belongsTo(models.Project);
  };
  return Todo;
};