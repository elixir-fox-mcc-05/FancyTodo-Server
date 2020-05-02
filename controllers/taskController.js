const {Task, User, Project} = require("../models/index.js")

class taskController {
    static findAll(req,res,next) {
        Task.findAll({
          where: { UserId : req.currentUserId },
          include: [ User, Project ],
          order: [['updatedAt', 'DESC']]
        })
          .then(result =>{
            res.status(200).json({
              message: "All tasks succesfully read",
              tasks: result
            })
          })
          .catch(error =>{
            res.status(500).json({
              message: 'Internal Server Error',
              error
            })
          })
    }
    static findOne(req,res,next){
        let selectedId = req.params.id
        Task.findByPk(selectedId)
          .then(result => {
            res.status(200).json({
              message: 'Selected task successfully read',
              task: result
            })
          })
          .catch(error =>{
            res.status(500).json({
                message:'Internal Server Error',
                error
            })
          })
    }
    static addTask(req,res,next) {
        //add title, description, status, due_date, userId
        let taskPayload = { 
          title: req.body.title, 
          description : req.body.description, 
          due_date: req.body.due_date,
          // status: req.body.status, //Status dibuat undefined karena defaultValue adalah false
          UserId: req.currentUserId,
          ProjectId: req.body.ProjectId
        }
        Task.create(taskPayload)
          .then(result => {
            res.status(201).json({
                message: 'New task successfully added',
                newTask: result
            })
          })
          .catch(error =>{
            console.log(error)
            res.status(500).json({
                message:'Internal Server Error',
                error
            })
          })
    }
    static updateTaskDetails ( req, res, next ){
        let selectedId = req.params.id
        let updatedTaskPayload = { 
          title: req.body.title, 
          description : req.body.description, 
          due_date: req.body.due_date,
          status: req.body.status,
          userId: req.currentUserId,
          ProjectId: req.body.ProjectId
        }
        Task.update(updatedTaskPayload, {
            where:{
                id: selectedId
            },
            returning: true
        })
          .then(result =>{
            console.log(result)
            res.status(200).json({
                message:'Task successfully updated',
                updatedTask: result
            })
          })
          .catch(error =>{
            console.log(error)
            res.status(500).json({
                message: 'Internal Server Error',
                error:error
            })
          })
    }
    static completeTaskStatus (req,res,next){
        let selectedId = req.params.id
        Task.findByPk(selectedId)
          .then(result => {
            let completedTaskPayload = {
                title : result.title, 
                description : result.description, 
                status: true, 
                due_date: result.due_date,
                UserId: req.currentUserId,
                ProjectId: result.ProjectId
            }
            return Task.update(completedTaskPayload, {
                where:{
                    id: selectedId
                },
                returning: true
            })
              .then(result => {
                console.log(result)
                res.status(200).json({
                    message: 'Task status is now completed',
                    updatedTask: result
                })
              })
              .catch(error => {
                res.status(500).json({
                    message: 'Internal Server Error',
                    error
                })
              })
          })
          .catch(error =>{
            res.status(500).json({
              message: 'Internal Server Error',
              error
            })
          })
    }
    static uncompleteTaskStatus (req,res,next){
        let selectedId = req.params.id
        Task.findByPk(selectedId)
          .then(result => {
            let completedTaskPayload = {
                title : result.title, 
                description : result.description, 
                status: false, 
                due_date: result.due_date,
                UserId: req.currentUserId,
                ProjectId: result.ProjectId
            }
            return Task.update(completedTaskPayload, {
                where:{
                    id: selectedId
                },
                returning: true
            })
              .then(result => {
                console.log(result)
                res.status(200).json({
                    message: 'Task status is now uncompleted',
                    updatedTask: result
                })
              })
              .catch(error => {
                res.status(500).json({
                    message: 'Internal Server Error',
                    error
                })
              })
          })
          .catch(error =>{
            res.status(500).json({
              message: 'Internal Server Error',
              error
            })
          })
    }
    static deleteTask (req,res,next) { 
        let selectedId = req.params.id
        Task.destroy({
          where:{
            id: selectedId
          }
        })
          .then(result => {
            res.status(200).json({
              message: 'Task succesfully deleted',
              deletedTask : result
            })
          })
          .catch(error => {
            res.status(500).json({
              message: 'Internal Server Error',
              error
            })
          })
    }
}

module.exports = taskController