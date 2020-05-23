const {Project,User} = require('../models')

class ProjectController{

    static list(req,res){

        Project
            .findAll()
            .then(data => {
                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                
                res.status(500).json({
                    err : err.message
                })
            })
    }

    

    static add(req,res){
        let {name,UserId,TodoId} = req.body

        Project
            .create({name,UserId,TodoId})
            .then(data => {
                // req.ProjectId = data.id
                res.status(201).json({
                    data
                })
            })
            .catch(err => {
                res.status(400).json({
                    err: err.message
                })
            })
    }

    static invite(req,res){

        let {selectid,selectprojectid} = req.body

        if(selectprojectid){
            User
                .create({ProjectId : selectprojectid},{where : {id : selectid}})
                .then(data => {
                    res.status(200).json({
                        data
                    })
                })
                .catch(err => {
                    res.status(400).json({
                        err : err.message
                    })
                })
        }else{
            res.status(400).json({
                err: `you haven't create or join project`
            })
        }
    }


}

module.exports = ProjectController