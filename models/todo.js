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
    title: DataTypes.STRING,
    description: DataTypes.STRING,
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
    validate: {
      valueNotEmpty() {
        if (!this.title || !this.description || !this.due_date) {
          throw new Error (`Semua data harus diisi`);
        }
      }
    },
    modelName: 'Todo'
  })

  Todo.associate = function(models) {
    Todo.belongsTo(models.User,{ foreignKey: 'UserId', targetKey: 'id' });
  };
  return Todo;
};