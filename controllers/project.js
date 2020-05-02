let { Todo, User, UserProject, Project} = require('../models/index')
let axios = require('axios')

class ControllerProject {

    static myProject (req, res) {

        UserProject.findAll({
            where: {
                UserId : req.currentUserId
            },
            include: [Project, User]

        })
        .then(data => {

            res.status(200).json({
                UserProject : data
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
    }

    static create (req, res, next) {
        let data = {
            name: req.body.name || '',
        }
        Project.create(data)
        .then(data => {
            console.log(data);
            res.status(201).json({
                Todo : data
            })  
        })
        .catch(err => {
            next(err)
        })
    }

    static edit (req, res, next) {
        let data = {
            name: req.body.name,
            status: req.body.status,
        }
        Project.update(data, 
        {   
            where : {
                id : req.params.id
            },
            returning: true
        })
        .then((result) => {
            result = result[1][0]
            if (result) {
                res.status(200).json({
                    name: req.body.name,
                    status: req.body.status,
                })
            }
            else {
                throw {
                    msg : 'id Not Found',
                    code: 404
                }
            }
        })
        .catch(err => {
            next(err)
        })
    }

    static delete (req, res, next) {
        Project.destroy({ where : {
            id : req.params.id
        }})
        .then(data => {
            if(!data) {
                throw {
                    msg: 'not found',
                    code: 404
                }
            } else {
                res.status(201).json({
                    msg : `data with id ${req.params.id} deleted`
                })  
            }
        })
        .catch(err => {
            next(err)
        })
    }

    static invite (req, res, next) {
        let data = {
            UserId: req.body.UserId || '',
            ProjectId: req.body.ProjectId || '',
        }
        UserProject.create(data)
        .then(data => {
            console.log(data);
            res.status(201).json({
                UserProject : data
            })  
        })
        .catch(err => {
            next(err)
        })
    }

    static check (req, res) {
        console.log(req.params);
        UserProject.findOne({
            where: {
                ProjectId : req.params.project,
                UserId : req.params.user,
            },
        })
        .then(data => {
            // console.log(data);
            res.status(200).json({
                UserProject : data
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
    }
}

module.exports = ControllerProject