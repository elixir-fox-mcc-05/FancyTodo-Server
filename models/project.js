'use strict';
module.exports = (sequelize, DataTypes) => {
  class Project extends sequelize.Sequelize.Model{}

  Project.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelname: 'Project'
  });
  Project.associate = function(models) {
    Project.belongsTo(models.Todo)
    Project.belongsTo(models.User)
    // associations can be defined here
  };
  return Project;
};