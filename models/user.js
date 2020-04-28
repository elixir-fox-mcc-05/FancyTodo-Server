'use strict';

const { generatePassword } = require("../helpers/bcrypt.js");

module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init({
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          args : true,
          msg : "Please insert correct Email format!"
        }
      },
      unique : {
        args : true,
        msg : "Email address already in use!"
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "Please insert password"
        }
      }
    }
  },
  {
    sequelize,
    hooks : {
      beforeCreate : (user) => {
        user.password = generatePassword(user.password);
      }
    }
  })

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.ToDo)
  };
  return User;
};