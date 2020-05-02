'use strict';
module.exports = (sequelize, DataTypes) => {

  class Project extends sequelize.Sequelize.Model {}

  Project.init({
    // Model attributes are defined here
    projectName: {
      type: DataTypes.STRING,
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Project' // We need to choose the model name
  });

  Project.associate = function(models) {
    // associations can be defined here
    Project.hasMany(models.Task) 
    Project.belongsToMany(models.User, {through: models.Project_User})
  };
  return Project;
};