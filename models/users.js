'use strict';

const {encrypt} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class User extends Model{

    get fullname() {
      return `${this.first_name} ${this.last_name}`
    }

  }
  User.init({
    first_name:{ 
      type : DataTypes.STRING,
      validate : {
        len : {args : [3], msg : 'first name must more than 3 letters'},
        notEmpty : {args : true, msg : 'first name must not empty'}
      }
    },
    last_name: {
      type :DataTypes.STRING,
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        len: {args : [3], msg : 'password must more than 3 letters'},
        notEmpty : {args : true, msg : 'passowrd must no empty'}
      }
    },
    email: {
      type : DataTypes.STRING,
      unique: { args : true, msg : 'email is already used'}
      ,
      validate : {
        isEmail : {args : true, msg : `email must with @ and .`}
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
    // User.hasMany(models.Project)
    User.belongsToMany(models.Project,{through : "Passes"})
    // associations can be defined here
  };
  return User;
};