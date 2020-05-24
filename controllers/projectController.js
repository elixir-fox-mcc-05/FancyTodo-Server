const {Project,Pass} = require('../models')

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
        let results;
        let {name} = req.body

        Project
            .create({name})
            .then(data => {
                // req.ProjectId = data.id
                results = Object.assign(data)
                return Pass.create({'name': name,ProjectId : data.id,UserId : req.LoginId})
                
            })
            .then(data1 => {
                res.status(201).json({
                    results
                })
            })
            .catch(err => {
                res.status(400).json({
                    err: err.message
                })
            })
    }

    
    static edit(req,res){

        Project
            .update({
                'name': req.body.name
            }, {where : {id : req.params.id}})
            .then(data => {
                //console.log(data)
                return Project.findByPk(req.params.id)
            })
            .then(data => {
                //console.log(data)
                if (data == null){
                    res.status(404).json({err : "id not found"})
                }else {
                    res.status(200).json({project : data})
                }    
            })
            .catch(err => {
                // console.log(err.message)
                res.status(400).json({err : err.message.split(',')})
            })
    }

    static delete(req,res){
        let results;

        Project
            .findByPk(req.params.id)
            .then(data1 => {
                        results = Object.assign(data1)
                        return Project.destroy({where : {id : req.params.id},returning : true})
                        })
            .then(data2 => {
                return Pass.destroy({where : {ProjectId : results.id},returning : true})
            })
            .then(data2 => {
                res.status(200).json({project : results})
            })
            .catch(err => res.status(404).json({error : err.message}))
    }

}

module.exports = ProjectController