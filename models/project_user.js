'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Project_User = sequelize.define('Project_User', {
  //   ProjectId: DataTypes.INTEGER,
  //   UserId: DataTypes.INTEGER
  // }, {});

  class Project_User extends sequelize.Sequelize.Model {}

  Project_User.init({

    ProjectId: {
      type: DataTypes.INTEGER
    },
    UserId: {
      type:DataTypes.INTEGER
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Project_User' // We need to choose the model name
  });




  Project_User.associate = function(models) {
    // associations can be defined here
    Project_User.belongsTo(models.Project, {foreignKey: 'ProjectId'})
    Project_User.belongsTo(models.User, {foreignKey: 'UserId'})
  };
  return Project_User;
};