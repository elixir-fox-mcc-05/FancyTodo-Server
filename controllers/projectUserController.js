const { Project_User } = require("../models/index.js")

class ProjectUserController {
    static findAll (req, res, next) {
        Project_User.findAll()
        .then(result => {
            res.status(200).json({
                message:"All Projects and Users are successfully read",
                allProjectUser: result
            })
        })
        .catch(error => {
            res.status(500).json({
                message:"Internal Server Error",
                error
            })
        })
    }
    static addNewProjectUser(req,res,next) {
        let newProjectUser = {
            ProjectId: req.body.ProjectId,
            UserId: req.body.UserId
        }
        Project_User.create(newProjectUser)
            .then(result => {
                res.status(200).json({
                    message: 'New ProjectUser successfully added',
                    newProjectUser: result
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Internal Server Error',
                    error
                })
            })
    }
    static editOneProjectUser(req,res,next){
        let selectedId = req.params.id
        let updatedProjectUser = {
            ProjectId: req.body.ProjectId,
            UserId: req.body.UserId
        }
        Project_User.update(updatedProjectUser, {
            where:{
                id:selectedId
            }
        })
        .then(result => {
            res.status(201).json({
                message: "ProjectUser details successfully updated",
                updatedProjectUser: result
            })
        })
        .catch(error =>{
            res.status(500).json({
                message: 'Internal Server Error',
                error
            })
        }) 
    }
    static deleteOneProjectUser(req,res,next){
        let selectedId = req.params.id
        Project_User.destroy({where: {
            id:selectedId
        }})
        .then(result =>{
            res.status(200).json({
                message: 'ProjectUser successfully deleted',
                deletedProjectUser : result
            })
        })
        .catch(error => {
            res.status(500).json({
                message: "Internal server error",
                error
            })
        })

    }
}

module.exports = ProjectUserController