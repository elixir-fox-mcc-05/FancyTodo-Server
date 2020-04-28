'use strict';
const { hashPassword } = require('../helpers/bcrypt.js');

module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;

  class User extends Model {}

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "Name cant be left empty"
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: {
        args: true,
        msg: "username already taken"
      },
      validate: {
        notEmpty: {
          msg: "username cant be left empty"
        },
        is: {
          args: /^[\w]+$/gi,
          msg: "username can only contain alphanumeric and underscore"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: {
        args: true,
        msg: "email already registered"
      },
      validate: {
        isEmail: {
          msg: "Invalid email format"
        },
        notEmpty: {
          msg: "password cant be left empty"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        len: {
          args: [8],
          msg: "password must contain at least 8 character"
        },
        notEmpty: {
          msg: "password cant be left empty"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user) {
        user.password = hashPassword(user.password);
      }
    },  
    sequelize,
    modelName: "User"
  });
  User.associate = function(models) {
    User.hasMany(models.Todo);
  };
  return User;
};