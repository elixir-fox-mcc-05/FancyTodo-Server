  
'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class User extends Model{}

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {sequelize, modelName: "User"});

  User.associate = function(models) {
    Model.hasMany(models.Todo);
  };
  
  return User;
};