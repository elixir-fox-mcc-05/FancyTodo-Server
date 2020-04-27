'use strict';
const { generatePassword } = require('../helpers/bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model{}

  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [6,25],
        notEmpty: true
      }
    }
  }, {
    hooks: {
      beforeCreate: (user) => {
        user.password = generatePassword(user.password)
      }
    },
    sequelize,
    modelName: 'User'
  })

  
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};