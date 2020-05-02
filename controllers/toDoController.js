const {User,Todo} = require('../models')
// const {compare} = require('../helpers/bcrypt')
// const generateToken = require('../helpers/jwt')
// const Axios = require('axios')

require('cors')

class ToDoController{

    static list(req,res){

        Todo
            .findAll({order : [['id','ASC']], where : {UserId : req.LoginId},include : [User]})
            .then(data => {
                res.status(200).json({todos : data})
            })
            .catch(err => {
                res.status(500).json({error : err})
            })
    }

    static createToDo(req,res){
        
        let {title , description, due_date} = req.body
        let UserId = req.LoginId

        Todo    
            .create({title,description, due_date, UserId})
            .then(data => res.status(201).json({todo : data}))
            .catch(err => {
               
                    res.status(400).json({err : err.message.split(',')})

            })

    }

    static updateToDo(req,res){
        let { title, description, status, due_date} = req.body
        // console.log(title, description, status)
        Todo
            .update({
                'title' : title,
                'description' : description,
                'status' : status,
                'due_date' : due_date
            }, {where : {id : req.params.id}})
            .then(data => {
                //console.log(data)
                return Todo.findByPk(req.params.id)
            })
            .then(data => {
                //console.log(data)
                if (data == null){
                    res.status(404).json({err : "id not found"})
                }else {
                    res.status(200).json({todo : data})
                }    
            })
            .catch(err => {
                // console.log(err.message)
                res.status(400).json({err : err.message.split(',')})
            })
    }

    static getId(req,res){

        Todo
            .findByPk(req.params.id)
            .then(data => {
                if (data == null){
                    res.status(404).json({error : "id not found"})
                }else {
                    res.status(200).json({todo : data})
                }

            })
            .catch(err => {
                res.status(400).json({error : err.message})
            })
    }

    static deleteToDo(req,res){
        let results;

        Todo
                    .findByPk(req.params.id)
                    .then(data1 => {
                                results = Object.assign(data1)
                                return Todo.destroy({where : {id : req.params.id},returning : true})
                             })
                    .then(data2 => {
                        res.status(200).json({todo : results})
                    })
                    .catch(err => res.status(404).json({error : err.message}))
        // const p1 = Todo
        //             .findByPk(req.params.id)
        //             .then(data1 => {
        //                         results = Object.assign(data1)
        //                         return results
        //                      })
        //             .catch(err => res.status(404).json({error : err.message}))

        // const p2 = Todo
        //             .destroy({where : {id : req.params.id},returning : true})
        //             .then(data => {return data})
        //             .catch(err => res.status(404).json({error : err}))


        // Promise.all([p1,p2]).then(data => {
        //                             res.status(200).json({todo : results})
        //                      })
        //                     .catch(err => res.status(404).json({error : err}))
        
    }

}

module.exports = ToDoController