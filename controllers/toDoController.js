const {todo} = require('../models')

class ToDoController{

    static list(req,res){
        res.status(200).JSON()
    }

    static createToDo(req,res){
        let {title , description} = req.body
        let newToDo = {title, description} 
    }

    static updateToDo(req,res){

    }

    static getId(req,res){

    }

    static deleteToDo(req,res){

    }


    // static register(req,res){

    // }

    // static login(req,res){

    // }
}

module.exports = ToDoController