'use strict';
module.exports = (sequelize, DataTypes) => {
  class Project extends sequelize.Sequelize.Model{}

  Project.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {args : false, msg : 'project name must not empty'},
        len : {args : [3], msg : 'project name must more than 3 letters'}
      }
    }
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