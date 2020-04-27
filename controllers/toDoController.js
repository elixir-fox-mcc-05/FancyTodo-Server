const {User,Todo} = require('../models')

class ToDoController{

    static list(req,res){

        Todo
            .findAll({order : [['id','ASC']]})
            .then(data => {
                res.status(200).json({todos : data})
            })
            .catch(err => {
                res.status(400).json({error : err})
            })
    }

    static createToDo(req,res){
        
        let {title , description, due_date} = req.body

        Todo    
            .create({title,description, due_date})
            .then(data => res.status(201).json({todos : data}))
            .catch(err => {
                if(err.message){
                    res.status(400).json({err : err.message})
                }else{
                    res.status(500).json({error : err.message})
                }
            })
    }

    static updateToDo(req,res){

        let { title, description , due_date} = req.body

        Todo
            .update({
                'title' : title,
                'description' : description,
                'due_date' : due_date
            }, {where : {id : req.params.id}})
            .then(data => {
                return Todo.findByPk(req.params.id)
            })
            .then(data => {
                if (data == null){
                    res.status(404).json({err : "data not found"})
                }else {
                    res.status(200).json({todos : data})
                }    
            })
            .catch(err => {
                res.status(400).json({err : err.message})
            })
    }

    static getId(req,res){

        Todo
            .findByPk(req.params.id)
            .then(data => {
                if (data == null){
                    res.status(404).json({error : "not found"})
                }else {
                    res.status(200).json({todos : data})
                }

            })
            .catch(err => {
                res.status(400).json({error : err})
            })
    }

    static deleteToDo(req,res){

        const p1 = Todo
                    .findByPk(req.params.id)
                    .then(data1 => {
                                let results = Object.assign(data1)
                                return results
                             })
                    .catch(err => res.status(404).json({error : err.message}))

        const p2 = Todo
                    .destroy({where : {id : req.params.id},returning : true})
                    .then(data => {return data})
                    .catch(err => res.status(404).json({error : err}))


        Promise.all([p1,p2]).then(data => {
                                    res.status(200).json({todos : data[0]})
                             })
                            .catch(err => res.status(404).json({error : err}))
        // Todo
        //     .findByPk(req.params.id)
        //     .then(data1 => {
        //         let results = Object.assign(data1)
        //         return [Todo.destroy({where : {id : req.params.id},returning : true}), results]
        //     })
        //     .then(data => {
        //             res.status(200).json({todos : data[1]})
        //     })
        //     .catch(err => {
        //         res.status(404).json({error : err})
        //     })


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