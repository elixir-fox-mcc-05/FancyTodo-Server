'use strict';
const { encryptPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email already exists"
      },
      validate: {
        notNull: {
          args: true,
          msg: 'Email must be inputted'
        },
        isEmail: {
          args: true,
          msg: 'Please enter valid email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Password must be inputted'
        },
        len: {
          args: [3, 10],
          msg: 'Password must be 3 -10 characters'
        }
      }
    } 
  }, {
    sequelize,
    modelName: "User",
    hooks: {
      beforeCreate(user, options){
        user.password = encryptPassword(user.password)
      }
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Todo)
  };
  return User;
};