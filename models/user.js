'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class User extends Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        check(value) {
          if(value == '') {
            throw ('email required')
          }
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        check(value) {
          if(value == '') {
            throw ('password required')
          } else if (value.length < 7) {
            throw ('need strong password')
          }
        }
      }
    },
  },
  {
    sequelize,
    modelName: 'User'
  })
  User.associate = function(models) {
    User.hasMany(models.Todo)
  };
  return User;
};