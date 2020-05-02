const { Project } = require("../models/index.js")

class projectController {
  static findAll (req, res, next) {
      Project.findAll()
        .then(result => {
            res.status(200).json({
                message:"All projects successfully read",
                projects: result
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Internal Server Error',
                error
            })
        })
    }
    static addNewProject(req, res, next ){
        let newProject = {
            projectName: req.body.projectName
        }
        Project.create(newProject)
          .then(result => {
              res.status(200).json({
                  message: 'New project successfully added',
                  newProject: result
              })
          })
          .catch(error => {
              res.status(500).json({
                  message: 'Internal Server Error',
                  error
              })
          })
    }
    static editOneProject(req,res,next) {
        let selectedId = req.params.id
        let updatedProject = {
            projectName: req.body.projectName
        }
        Project.update(updatedProject, {
            where: {
               id:selectedId
            },
            returning: true
        })
          .then(result => {
              res.status(201).json({
                  message: "Project details successfully updated",
                  updatedTask: result
              })
            })
          .catch(error =>{
              res.status(500).json({
                  message: 'Internal Server Error',
                  error
              })
            })
    } 

    static deleteOneProject(req,res,next){
        let selectedId = req.params.id
        Project.destroy({where: {
            id: selectedId
        }})
          .then(result =>{
              res.status(200).json({
                  message: 'Project successfully deleted',
                  deletedProject : result
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

module.exports = projectController