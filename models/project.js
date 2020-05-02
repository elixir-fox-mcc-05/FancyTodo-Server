'use strict';
module.exports = (sequelize, DataTypes) => {
  let { Model } = sequelize.Sequelize
  class Project extends Model {}
  Project.init({
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {sequelize});
  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsToMany(models.User, { through: 'UserProject' })
  };
  return Project;
};