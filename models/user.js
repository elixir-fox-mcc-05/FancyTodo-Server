'use strict';
const { hashPassword } = require('../helpers/bcrypt.js');

module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;

  class User extends Model {}

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    username: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Invalid email format"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        len: {
          args: [8,],
          msg: "password must contain at least 8 character"
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