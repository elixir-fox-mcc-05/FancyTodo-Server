const { Project } = require('../models');
const { UserProject } = require('../models');
const { User } = require('../models');

class ProjectController {
    static create(req, res, next) {
        let { name } = req.body;

        const values = {
            name
        }
        Project.create(values)
            .then(project => {
                let ProjectId = project.id;
                let UserId = req.currentUserId;
                const values = {
                    ProjectId,
                    UserId
                }
                return UserProject.create(values);
            })
            .then(data => {
                res.status(201).json({ Projects: data });
            })
            .catch(err => {
                next(err);
            })
    }

    static addMember(req, res, next) {
        let { id } = req.body;
        let UserId = Number(id);
        let ProjectId = req.params.id;
        ProjectId = Number(ProjectId);
        const values = {
            UserId,
            ProjectId
        }
        UserProject.create(values)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = ProjectController;