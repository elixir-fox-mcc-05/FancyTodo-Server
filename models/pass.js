'use strict';
module.exports = (sequelize, DataTypes) => {
  class Pass extends sequelize.Sequelize.Model{}

  Pass.init({
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