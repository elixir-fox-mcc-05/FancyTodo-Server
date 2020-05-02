const { Project, User } = require('../models')
const { Op } = require('sequelize')
const send = require('../helpers/nodemailer')

class ProjectController {
    static add(req, res, next) {
        const { inviter } = req
        const { project_name, description, status, due_date, member } = req.body
        if (member != inviter) {
            Project.create({ project_name, description, status, due_date, UserId: inviter, member })
                .then(data => {
                    User.findByPk(inviter)
                        .then(user => {
                            res
                              .status(201)
                              .json({ new_data: data }) 
                        })
                        .catch(err => {
                            next(err)
                        })
                })
                .catch(err => { 
                    next(err)
                })
        } else {
            next(err)
        }
    }   
    
    static show(req, res, next) {
        const { inviter } = req
        if (inviter) {
            Project.findAll({ where: { [Op.or]: [{UserId: inviter}, {member: inviter}] } })
            .then(data => {
                if (data) {
                    res
                        .status(200)
                        .json({ data }) 
                } else {
                    next(err)
                }
            })
            .catch(err => { 
                    next(err)
                })
        } else {
            next(err)
        }
    }

    static show_id(req, res, next) {
        const { id } = req.params
        Project.findOne({ where: { id } })
            .then(data => { 
                if (data) {
                    res
                      .status(200)
                      .json({ data }) 
                } else {
                    next(err)
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static delete(req, res, next) {
        const { id } = req.params
        Project.destroy({ where: { id } })
            .then(data => {
                if (data) {
                    res
                      .status(204)
                      .json({ msg: `success delete with id ${id}` })
                } else {
                    next(err)
                }
            })
            .catch(err => { 
                next(err)
        })
    }

    static edit(req, res, next) {
        const { id } = req.params
        const { project_name, description, status, due_date } = req.body
        Project.update({ project_name, description, status, due_date }, { where: { id } })
            .then(data => {
                if (data != 0) {
                    res
                    .status(200)
                    .json({ data: req.body }) 
                } else if (data == 0) {
                    next(err) 
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ProjectController