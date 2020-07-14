'use strict';
const { encrypt } = require('../helpers/encrypt.js');

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {

  }

  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Email required`
        },
        isEmail: {
          args: true,
          msg: `Must be an email`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Password required`
        },
        notEmpty: {
          args: true,
          msg: `Password cannot empty`
        },
        checkLength(value) {
          if(value.length < 6) {
            throw `Password at least 6 characters`
          }
        },
        hasNumber(value) {
          if(!/\d/.test(value)) {
            throw `Password must contain at least 1 number`;
          }
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (user) => {
        user.password = encrypt(user.password);
        return new Promise((resolve, reject) => {
          User.findOne({
            where: {
              email: user.email
            }
          })
            .then(result => {
              if(result) {
                const err = `Email Already Exists`;
                reject(err);
              } else {
                resolve(user);
              }
            })
            .catch(err => {
              reject(err);
            });
        });
      }
    },
    sequelize,
    modelName: "User"
  });

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo);
    User.belongsToMany(models.Project, {
      through: 'UserProjects'
    });
  };
  return User;
};