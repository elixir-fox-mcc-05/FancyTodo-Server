'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;

  class UserProject extends Model {}

  UserProject.init({
    UserId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'UserProject'
  })

  UserProject.associate = function(models) {
    UserProject.belongsTo(models.User, { foreignKey: 'UserId', targetKey: 'id' });
    UserProject.belongsTo(models.Project, { foreignKey: 'ProjectId', targetKey: 'id' });
  };
  return UserProject;
};