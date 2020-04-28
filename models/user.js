"use strict";
const { generatePassword } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "name cannot be empty" },
          len: [4, 50],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { args: true, msg: "email already in use" },
        validate: {
          notEmpty: { args: true, msg: "email cannot be empty" },
          len: [4, 50],
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "password cannot be empty" },
          len: [3, 50],
        },
      },
    },
    {
      sequelize,
      hooks: {
        beforeCreate: (user) => {
          user.password = generatePassword(user.password);
        },
      },
    }
  );

  User.associate = function (models) {
    User.hasMany(models.Todo, { foreignKey: "UserId" });
  };
  return User;
};
