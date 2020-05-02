'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;

  class Project extends Model {}

  Project.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Project name can\'t be empty"
        }
      }
    },
    total_member: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Project'
  });
  Project.associate = function(models) {
    Project.hasMany(models.Todo);
    Project.belongsToMany(models.User, { through: models.UserProject });
  };
  return Project;
};