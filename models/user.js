'use strict';
module.exports = (sequelize, DataTypes) => {

  const { plainToHash } = require(`../helpers/bcrypt`)
  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init({
    nickname: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : `nickname cannot be empty`
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          msg : `re-check your email formatting`
        },
        notEmpty : {
          msg : `email cannot be empty`
        }
      },
      unique : {
        msg : `Email has already been registered`
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : `password cannot be empty`
        },
        len : {
          args : [4,8],
          msg : `password must be between 4 to 8 characters`
        }
      }
    }
  },
  {
    sequelize,
    modelName : `User`,
    hooks : {
      afterValidate : (user, options) => {
        user.password = plainToHash(user.password)
      }
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Todo)
  };
  return User;
};