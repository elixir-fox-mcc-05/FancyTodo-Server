'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Project extends Model { }

  Project.init({
    project_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,

    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        check(value) {
          if (value == '') {
            throw new Error('due_date required')
          } else {
            if (new Date() > value) { throw new Error ('you must set date at least one day before') }
          }
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    member: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true
      }
    }
  }, {
    sequelize,
    modelName: 'Project'
  });

  Project.associate = function(models) {
    Project.belongsTo(models.User)
  };
  return Project;
};