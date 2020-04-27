'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;
  class User extends Model {}

  User.init({
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  })

  User.associate = function(models) {
    User.hasMany(models.Todo)
  };
  return User;
};