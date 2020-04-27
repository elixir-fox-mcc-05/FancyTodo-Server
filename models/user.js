'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Invalid email format"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 32],
          msg: "Password must be minimum 8 characters & maximum 32 characters"
        }
      }
    }
  }, {
    sequelize,
    modelName: "User",
    hooks: {
      beforeCreate(user) {
        // user.password = generateHash(user.password)
      }
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Todo)
  };
  return User;
};