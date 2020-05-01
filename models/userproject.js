'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;

  class UserProject extends Model {}

  UserProject.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    ProjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Projects',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }
  }, {
    hooks : {
      beforeCreate(userProject, option) {
        const { models } = sequelize;
        return models.Project
          .findByPk(userProject.ProjectId)
          .then(project => {
            project.total_member++;
            return models.Project
              .update({
                total_member: project.total_member
              },{
                where: {
                  id: userProject.ProjectId
                }
              })
          })
          .catch(err => {
            throw new Error(err.message);
          })
      }
    },
    sequelize,
    modelName: 'UserProject'
  });
  UserProject.associate = function(models) {
    UserProject.belongsTo(models.User);
    UserProject.belongsTo(models.Project);
  };
  return UserProject;
};