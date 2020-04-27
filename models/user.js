'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;
  class User extends Model { }

  User.init({
    username: {
      type: DataTypes.STRING,
      len: [4]
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    sequelize
  })

  User.associate = function (models) {
    User.hasMany(models.Todo)
  };
  return User;
};