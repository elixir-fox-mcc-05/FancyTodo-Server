'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pass = sequelize.define('Pass', {
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Pass"
  });
  Pass.associate = function(models) {
    Project.belongsTo(models.Project)
    Project.belongsTo(models.User)
  };
  return Pass;
};