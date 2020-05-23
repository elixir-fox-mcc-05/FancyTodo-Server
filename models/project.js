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
    Project.hasMany(models.Todo)
    Project.belongsToMany(models.User,{through : "Passes"})
    // associations can be defined here
  };
  return Project;
};