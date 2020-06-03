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
    User.belongsToMany(models.Project, { through: models.UserProject })
  };
  return User;
};