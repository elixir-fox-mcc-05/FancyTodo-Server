'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Project extends Model{}
  Project.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: 'cannot be empty'}
      }
    },
    status: {
      type: DataTypes.ENUM('Not Started', 'On Going', 'Finished'),
      validate: {

      }
    },
    due_date: {
      type: DataTypes.DATEONLY,
      validate: {
        notEmpty: {args: true, msg: 'cannot be empty'}
      }
    }
  }, {
    sequelize
  });
  Project.associate = function(models) {
    // associations can be defined here
    Project.hasMany(models.Todo);
    Project.belongsToMany(models.User, {
      through: models.UserProject
    })
  };
  return Project;
};