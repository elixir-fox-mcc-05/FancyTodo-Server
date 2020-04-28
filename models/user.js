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
          notNull: {
            args: true,
            msg: "Name is required",
          },
          notEmpty: {
            args: true,
            msg: "Name is required",
          },
          len: {
            args: 4, 
            msg: "Name must be or more than 4 character"
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Email already in use",
        },
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Email is required",
          },
          notEmpty: {
            args: true,
            msg: "Email is required",
          },
          isEmail: {
            args: true,
            msg: "Invalid email format",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Email is required",
          },
          notEmpty: {
            args: true,
            msg: "Email is required",
          },
          len: {
            args: 4, 
            msg: "Password must be or more than 4 character"
          },
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
