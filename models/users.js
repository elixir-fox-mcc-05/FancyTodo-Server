'use strict';

const {encrypt} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class User extends Model{}
  User.init({
    first_name:{ 
      type : DataTypes.STRING,
      validate : {
        len : [3],
        notEmpty : true
      }
    },
    last_name: {
      type :DataTypes.STRING,
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        len: [3],
        notEmpty : true
      }
    },
    email: {
      type : DataTypes.STRING,
      unique: true,
      validate : {
        isEmail : true
      }
    }
  }, {
    sequelize,
    modelName : 'User',
    hooks : {
      beforeCreate : (user) => {
        if (user.last_name == '') {
          user.last_name = user.first_name
        }
        user.password = encrypt(user.password)
        
      },
      beforeUpdate : (user) => {
        if (user.last_name == '') {
          user.last_name = user.first_name
        }
        user.password = encrypt(user.passsword)
      }
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Todo)
    // associations can be defined here
  };
  return User;
};