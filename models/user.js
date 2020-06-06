'use strict';
let { hashPassword } = require('../helpers/bcrypt.js')
let env = require('env')


module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.Sequelize.Model
  class User extends Model {}

  User.init({
    email: {
      type : DataTypes.STRING,
      allowNull : {
        args : false,
        msg : "email cannot be empty"
      },
      unique : {
        args : true,
        msg : 'email has already been used'
      },
      validate : {
        isEmail : {
          args : true,
          msg : 'please insert a valid email address'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : {
        args : false,
        msg : "password cannot be empty"
      },
      validate : {
        len : {
          args : [4,30],
          msg : 'password must morethan 4 character '
        }
      }
    }
  },{
    sequelize,
    hooks : {
      beforeCreate : (user) => {
        user.password = hashPassword(user.password)
      }
    }
  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};