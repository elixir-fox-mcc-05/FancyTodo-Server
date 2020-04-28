'use strict';
const { encryptPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model {}

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [3, 40]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate: {
        notNull: true,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [6, 20]
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user, option) => {
        user.password = encryptPassword(user.password)
      }
    }
  })
  
  User.associate = function(models) {
    User.hasMany(models.Todo)
  };
  return User;
};