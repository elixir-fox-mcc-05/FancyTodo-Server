'use strict';
module.exports = (sequelize, DataTypes) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const newDate = `${year}-${month}-${day}`;
  
  const Model = sequelize.Sequelize.Model;
  class Todo extends Model {}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Title harus diisi`
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Description harus diisi`
        }
      }
    },
    status: DataTypes.BOOLEAN,
    due_date: {
      type: DataTypes.DATE,
      validate : {
        isDate: {
          args: true,
          msg: `Due date harus diisi`
        },
        isAfter: {
          args: newDate,
          msg: `Tanggal tidak boleh hari kemarin / tanggal dahulu`
        }
      }
    },
    
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Todo'
  })

  Todo.associate = function(models) {
    Todo.belongsTo(models.User,{ foreignKey: 'UserId', targetKey: 'id' });
  };
  return Todo;
};