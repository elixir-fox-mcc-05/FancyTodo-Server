'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class UserProject extends Model {

  } 

  UserProject.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id"
      },
      onUpdate: "Cascade",
      onDelete: "Cascade"
    },
    ProjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Projects",
        key: "id"
      },
      onUpdate: "Cascade",
      onDelete: "Cascade"
    }
  }, {
    sequelize,
    modelName: "UserProject"
  })

  UserProject.associate = function(models) {
    // associations can be defined here
  };
  return UserProject;
};