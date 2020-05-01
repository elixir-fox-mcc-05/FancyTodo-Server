'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model{}
  // console.log(new Date().getDate()-1);
  
  function appendLeadingZeroes(n){
    if(n <= 9){
      return "0" + n;
    }
    return n
  }
  let datenow = new Date();

  let startdate = datenow.getFullYear() + "-" + appendLeadingZeroes(datenow.getMonth() + 1) + "-" + appendLeadingZeroes(datenow.getDate()-1) 
 
  Todo.init({
    title: {
      type:DataTypes.STRING,     
      allowNull:false,
      validate:{
        notNull:{
          args:true,
          msg:"title is required"
        },
        notEmpty:{
          args:true,
          msg:"title is required"
        }
      }
    },   
    description:{
     type: DataTypes.STRING,
     allowNull:false,
      validate:{
        notNull:{
          args:true,
          msg:"description is required"
        },
        notEmpty:{
          args:true,
          msg:"description is required"
        }
      }
    },
    status: DataTypes.BOOLEAN,
    due_date: {
      type: DataTypes.DATE,
      validate:{
        isAfter:{
          args : startdate,
          msg :" Invalid Date"
        }         
        
      }
    }
  },{
    sequelize,
    modelName:'Todo'
    
  })

  Todo.associate = function(models) {
    // associations can be defined here
    // Todo.belongsTo(models.User)
    Todo.belongsToMany(models.User,{through:models.Project})
    Todo.hasMany(models.Project)
  };
  return Todo;
};