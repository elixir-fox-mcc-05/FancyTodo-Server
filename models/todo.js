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
          msg: `Title tidak boleh kosong`
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Description tidak boleh kosong`
        }
      }
    },
    status: DataTypes.BOOLEAN,
    due_date: {
      type: DataTypes.DATE,
      validate : {
        isDate: {
          args: true,
          msg: `Due Date harus format tanggal`
        },
        isAfter: {
          args: newDate,
          msg: `Tanggal harus setelah hari ini`
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