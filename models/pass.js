'use strict';
module.exports = (sequelize, DataTypes) => {
  class Pass extends sequelize.Sequelize.Model{}

  Pass.init({
    name: DataTypes.STRING,
    ProjectId: DataTypes.INTEGER,
    UserId: {type :DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: "Pass"
  });
  Pass.associate = function(models) {
    Pass.belongsTo(models.Project)
    Pass.belongsTo(models.User)
  };
  return Pass;
};