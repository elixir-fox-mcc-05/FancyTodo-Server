'use strict';
let hash = require('../helpers/bycrypt').bcryptPass
module.exports = (sequelize, DataTypes) => {
  let { Model } = sequelize.Sequelize
  class User extends Model {}
  User.init({

    email: {
      type : DataTypes.STRING,
      
        validate: {
          notEmpty: true
        }
      },

    password: {
      type : DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
    status: {
      type : DataTypes.BOOLEAN,
        validate: {
          notEmpty: true
        }
      },
  }, {
    sequelize,
    hooks: {
      beforeCreate(user) {
        user.password = hash(user.password)
        user.status = true
      }
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Todo)
    User.belongsToMany(models.Project, { through: 'UserProject' })
  };
  return User;
};