'use strict';

const {generatePassword} = require('../helpers/bcrypt.js');

module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;

  class User extends Model{}
  
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "Email already in use"
      },
      validate: {
        isEmail: true
      },
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [0, 20]
      },
      allowNull: false
    }
  },
  {
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        user.password = generatePassword(user.password);
      }
    },
    modelName: "User"
  });
  
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo);
  };
  return User;
};