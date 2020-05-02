'use strict';
module.exports = (sequelize, DataTypes) => {

  let { Model } = sequelize.Sequelize
  class UserProject extends Model {}
  UserProject.init({
    UserId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  }, {sequelize});

  UserProject.associate = function(models) {
    UserProject.belongsTo(models.User)
    UserProject.belongsTo(models.Project)
  };
  return UserProject;
};