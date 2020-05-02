'use strict';
module.exports = (sequelize, DataTypes) => {
  const { encrypt } = require('../helpers/bycrypt.js');

  const Model = sequelize.Sequelize.Model;
  class User extends Model {}

  Model.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: `Email sudah ada terdapat di server. Silangkan menggunakan email lainnya`
      },
      validate: {
        isEmail: {
          args: true,
          msg: `Email harus dalam bentuk format email`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6],
          msg: `password minimal 6 karakter`
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        user.password = encrypt(user.password);
      }
    },
    validate: {
      valueNotEmpty() {
        if (!this.name || !this.email || !this.password) {
          throw new Error(`Seluruh data harus diisi`);
        }
      }
    },
    modelName: 'User'
  });
  
  User.associate = function(models) {
    User.hasMany(models.Todo, {foreignKey: 'UserId', targetKey: 'id' });
  };
  return User;
};