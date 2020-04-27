'use strict';
module.exports = (sequelize, DataTypes) => {

  class Project extends sequelize.Sequelize.Model {}

  Project.init({
    // Model attributes are defined here
    projectTitle: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        allowNull:{
          arg: false,
          msg: 'Please specify a proper project title'
        }
      }
    },
    projectDescription: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        allowNull:{
          arg: false,
          msg: 'Please specify a proper project description'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        allowNull:{
          arg: false,
          msg: 'UserId not properly set'
        }
      }
    },
    TaskId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        allowNull:{
          arg: false,
          msg: 'TaskId not properly set'
        }
      }
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Project' // We need to choose the model name
  });

  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsTo(models.User, {foreignKey: 'UserId'})
    Project.belongsTo(models.Task, {foreignKey: 'TaskId'})
  };
  return Project;
};