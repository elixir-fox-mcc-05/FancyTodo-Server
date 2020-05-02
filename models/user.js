'use strict';
const { hashPassword } = require('../helpers/bcrypt.js');

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class User extends Model{}
  User.init({
    fullname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: 'cannot be empty'}
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {args: true, msg: 'Email already registered'},
      validate: {
        notEmpty: {args: true, msg: 'cannot be empty'},
        isEmail: {args: true, msg: 'Please input valid email'}
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: 'cannot be empty'}
      }
    }
  }, {
    hooks: {
      beforeCreate(user) {
        user.password = hashPassword(user.password);
      }
    },
    sequelize
  });

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo);
    User.belongsToMany(models.Project, {
      through : models.UserProject
    })
  };
  return User;
};