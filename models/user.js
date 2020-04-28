'use strict';
const { generatePassword } = require('../helpers/bcrypt.js');

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {};

  User.init({
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already in use'
      },
      validate : {
        notEmpty : {
          args: true,
          msg: 'E-mail must not empty'
        },
        isEmail : {
          args: true,
          msg: 'E-mail must be in e-mail format "youremail@mail.com"'
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Password already in use'
      },
      validate : {
        notEmpty : {
          args: true,
          msg: 'Password must not empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user) => {
        user.password = generatePassword(user.password)
      }
    }
  })
  
  User.associate = function(models) {
    User.hasMany(models.Todo, {foreignKey: 'UserId'});
  };
  return User;
};