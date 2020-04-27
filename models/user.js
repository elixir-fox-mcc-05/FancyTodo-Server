'use strict';
const {encryptPassword} = require("../helpers/bcrypt")
module.exports = (sequelize, DataTypes) => {  

  class User extends sequelize.Sequelize.Model{}

  User.init({
    email: {
     type: DataTypes.STRING,
     allowNull:false,
      validate:{
        notNull:{
          args:true,
          msg:"Email is required"
        },
        notEmpty:{
          args:true,
          msg:"Email is required"
        },
        isEmail:{
          args:false,
          msg:"Email format Error"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          args:true,
          msg:"Password is required"
        },
        notEmpty:{
          args:true,
          msg:"Password is required"
        }
      }
    },
  },{
    sequelize,
    modelName:'User',
    hooks:{
      beforeCreate(user,option){
        user.password = encryptPassword(user.password)
      }
    }
  })

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Project)
    User.belongsToMany(models.Todo,{through:models.Project})
  };
  return User;
};