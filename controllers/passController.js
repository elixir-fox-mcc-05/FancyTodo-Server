const {Pass,Project} = require('../models')

class PassController{

    static list(req,res){
        Pass
            .findAll({where : {UserId : req.LoginId},include : [Project]})
            .then(data => {
                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                res.status(500).json({
                    err : 'internal server error'
                })
            })
    }

    static invite(req,res){
        let {name,ProjectId,UserId} = req.body
        // let UserId = req.LoginId

        Pass
            .create({name,UserId,ProjectId})
            .then(data => {
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

    static delete (req,res){
        let results;

        Pass
            .findByPk(req.params.id)
            .then(data1 => {
                        results = Object.assign(data1)
                        return Pass.destroy({where : {id : req.params.id},returning : true})
                        })
            .then(data2 => {
                res.status(200).json({todo : results})
            })
            .catch(err => res.status(404).json({error : err.message}))
    }

}

module.exports = PassController