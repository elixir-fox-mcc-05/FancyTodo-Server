'use strict';
const {HashPassword , CheckPassword} = require('../helpers/bcrypt.js')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {}

  User.init({
    username: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args : true,
        msg: 'Email already exists'
      },
      allowNull : false,
      validate : {
        notNull : {
          args : true,
          msg : 'email is required'
        },
        notEmpty : {
          args : true,
          msg : 'email is required'
        },
        isEmail: {
          args : true,
          msg : 'invalid email format'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        len: {
          args : [5],
          msg : 'Password at least have 6 characters'
        }
      }
    }
  }, {
    sequelize,
    hooks : {
      beforeCreate: (user) => {
        user.password = HashPassword(user.password)
      }
    }
  })
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo, {
      foreignKey : 'userId'
    })
  };
  return User;
};