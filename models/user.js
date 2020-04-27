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
      validate :{
        isEmail : true,
      }
    },
    password: DataTypes.STRING
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