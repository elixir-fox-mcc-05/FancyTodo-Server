'use strict';

module.exports = (sequelize, DataTypes) => {
  /*const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  */
  const { generatePass } = require("../helpers/bcrypt")
  class User extends sequelize.Sequelize.Model {}

  User.init 
  (
    {
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "email has been used"
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: 'Password Required.'
            },
            len: {
                args: [8, 72],
                msg: 'Password length must between 8 or 72 Characters.'
            }
        }
    }
    },
    {
      sequelize,
      modelName : "User",
      hooks: {
        beforeCreate: (user, options) => {
            user.password = generatePass(user.password);
        }
      }
    }
  )
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo)
  };
  return User;
};