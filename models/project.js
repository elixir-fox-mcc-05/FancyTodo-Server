'use strict';
module.exports = (sequelize, DataTypes) => {
  class Project extends sequelize.Sequelize.Model{}
  Project.init({
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    TodoId: DataTypes.INTEGER
  },{
    sequelize,
    modelName:"Project"
  })
  
  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsTo(models.User)
    Project.belongsTo(models.Todo)
  };
  return Project;
};