const {User,Todo} = require('../models')

class ToDoController{

    static list(req,res){
        Todo
            .findAll()
            .then(data => {
                res.status(200).JSON({data : data})
            })
            .catch(err => {
                res.status(400).JSON({error : err})
            })
    }

    static createToDo(req,res){
        
        let {title , description} = req.body
        let newToDo = {title, description} 

        Todo    
            .create(newToDo)
            .then(data => res.status(201).JSON({data : data}))
            .catch(err => {
                if(err.message){
                    res.status(400).JSON({err : err.message})
                }else{
                    res.status(500).JSON({error : err})
                }
            })
    }

    static updateToDo(req,res){

        let { title, description , status} = req.body
        let newToDo = {title, description, status}

        Todo
            .update(newToDo, {where : {id : req.params.id}})
            .then(data => {
                res.status(200).JSON({data : data})
            })
            .catch(err => {
                res.status(404).JSON({err : err})
            })
    }

    static getId(req,res){

        Todo
            .findByPk(req.params.id)
            .then(data => {
                res.status(200).JSON({data : data})
            })
            .catch(err => {
                res.status(404).JSON({error : err})
            })
    }

    static deleteToDo(req,res){

        Todo
            .destroy({where : {id : req.params.id}})
            .then(data => {
                res.status(200).JSON({data : data})
            })
            .catch(err => {
                res.status(404).JSON({error : err})
            })
    }


    static register(req,res){

        let {first_name, last_name, username, password, email} = req.body
        let newUser = {first_name, last_name, username, password, email}

        User
            .create(newUser)
            .then(data => res.status(201).JSON({id :data.id,
                                                email : data.email,
                                                password : data.password
                                                }))

    }

    // static login(req,res){


    //     User
    //         .findOne({where:{username : req.body.username}})
    //         .then(data => {return data})
    //         .catch(err => {
    //         req.session.error = err.message
    //         res.redirect("/login")
    //     })

    // }
}

module.exports = ToDoController