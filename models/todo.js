'use strict';

const Axios = require('axios')
const CALENDARIFIC = process.env.CALENDARIFIC
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class Todo extends Model{}

  Todo.init({
    title: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        len : {args : [3], msg : 'title must more than 3 letters'}
      }
    },
    description: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {args : false, msg : 'description must not empty'},
        len : {args : [3], msg : 'description must more than 3 letters'}
      }
    },
    status: {
      type : DataTypes.BOOLEAN,
      validate : {
        notEmpty : true
      }
    },
    due_date:{
      type :  DataTypes.DATE,
      validate : {
        notEmpty : {args : true, msg : 'due date must not empty'},
        isDate : {args : true, msg : 'please add due date'}
      }
    },
    UserId: {
      type : DataTypes.INTEGER
    },
    ProjectId: {
      type : DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName : "Todo",
    hooks :{ 
      beforeCreate : (todo) => {
        if (!todo.status){
        todo.status = false
        }
      }
    },
    validate : {
      
      checkdate (){
        let today = new Date()
        let check = new Date(this.due_date)
        if (check < today){
          throw new Error('due date must after time today');
        }

       return Axios.get ('https://calendarific.com/api/v2/holidays', {
                        params : {
                                    'api_key' : CALENDARIFIC,
                                    'country' : 'ID',
                                    'year' : today.getFullYear()
                                    }
                    })
                        .then( response => {
                          // console.log( response.data.response.holidays)
                          for (let temp of response.data.response.holidays){
                            // console.log(temp.date.iso)
                            let check = new Date(temp.date.iso)
                            let duedate = new Date(this.due_date)
                            // console.log('test :', this.title.includes('pergi','toko','mall'))
                            // console.log(/pergi|toko|mall/.test(this.title))
                            if ( duedate.getFullYear() == check.getFullYear() && duedate.getMonth() == check.getMonth() && duedate.getDate() == check.getDate()){
                              if(/pergi|toko|mall/.test(this.title)){
                                throw new Error('due date must not on holiday')
                              }
                            }
                          }

                        })
     
      }
    }
  });
  Todo.associate = function(models) {
    Todo.belongsTo(models.User)
    Todo.belongsToMany(models.User,{through : "Projects"})
    // associations can be defined here
  };
  return Todo;
};