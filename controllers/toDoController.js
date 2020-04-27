const {User,Todo} = require('../models')

class ToDoController{

    static list(req,res){
        Todo
            .findAll()
            .then(data => {
                res.status(200).json({todos : data})
            })
            .catch(err => {
                res.status(400).json({error : err})
            })
    }

    static createToDo(req,res){
        
        let {title , description, due_date} = req.body
        // let newToDo = {title, description} 

        Todo    
            .create({title,description, due_date})
            .then(data => res.status(201).json({todos : data}))
            .catch(err => {
                if(err.message){
                    res.status(400).json({err : err.message})
                }else{
                    res.status(500).json({error : err})
                }
            })
    }

    static updateToDo(req,res){

        let { title, description , due_date} = req.body
        // let newToDo = {title, description, due_date}

        Todo
            .update({
                'title' : title,
                'description' : description,
                'due_date' : due_date
            }, {where : {id : req.params.id}})
            .then(data => {
                res.status(200).json({todos : data})
            })
            .catch(err => {
                res.status(404).json({err : err})
            })
    }

    static getId(req,res){

        Todo
            .findByPk(req.params.id)
            .then(data => {
                res.status(200).json({todos : data})
            })
            .catch(err => {
                res.status(404).json({error : err})
            })
    }

    static deleteToDo(req,res){

        // const p1 = Todo 
        //                 .findByPk(req.params.id)
        //                 .then(data => {return data})

        Todo
            .destroy({where : {id : req.params.id},returning : true})
            .then(data => {
                res.status(200).json({todos :data})
            })
            .catch(err => {
                res.status(404).json({error : err})
            })

        // Promise.all([p1,p2]).then(data => {
        //     let deleteddata = data[0]
        //     res.status(200).json({todos :data})
        // })

    }


    // static register(req,res){

    //     let {first_name, last_name, username, password, email} = req.body
    //     let newUser = {first_name, last_name, username, password, email}

    //     User
    //         .create(newUser)
    //         .then(data => res.status(201).json({id :data.id,
    //                                             email : data.email,
    //                                             password : data.password
    //                                             }))
        

    // }

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