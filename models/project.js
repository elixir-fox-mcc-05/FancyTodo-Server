'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;

  class Project extends Model {}

  Project.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project'
  });

  Project.associate = function(models) {
    Project.belongsToMany(models.User, { through: 'UserProjects' });
  };
  return Project;
};