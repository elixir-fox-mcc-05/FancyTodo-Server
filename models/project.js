'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Project extends Model {

  }

  Project.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Project Name is required`
        },
        notEmpty: {
          args: true,
          msg: `Project Name cannot be empty`
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          args: true,
          msg: `Project Description is required`
        },
        notEmpty: {
          args: true,
          msg: `Project Description cannot be empty`
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isAfter: {
          args: new Date().toISOString().split('T')[0],
          msg: `Due Date cannot less than today`
        }
      }
    }
  }, {
    sequelize,
    modelName: "Project"
  })

  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsToMany(models.User, {
      through: 'UserProjects'
    });
  };
  return Project;
};