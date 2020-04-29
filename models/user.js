'use strict';
const Helper = require('../helper/helper')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model { }

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: `Email already exists`
      },
      validate: {
        notEmpty: {
          args: true,
          msg: `Email Required`
        }
      },
      validate: {
        isEmail: {
          args: true,
          msg: `Need input valid Email`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `Password Required`
        },
        len: {
          args: [8, 20],
          msg: `Password must be more than 8 character and less than 20 character`
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        user.password = Helper.passwordHash(user.password)
      }
    }
  })

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Todo)
  };
  return User;
};