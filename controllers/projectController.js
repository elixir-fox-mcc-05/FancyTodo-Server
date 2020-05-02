const { Todo, User, Project, UserProject } = require('../models');

class ProjectController {
    static createProject(req, res, next) {
        const { name } = req.body;
        const UserId = req.userId;
        let newProject = {};

        Project
            .create({
                name
            })
            .then(result => {
                let ProjectId = result.id;
                newProject = result;
                return UserProject
                    .create({
                        UserId,
                        ProjectId
                    })
            })
            .then(result => {
                res.status(201).json({
                    project: newProject
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static showProjects(req, res, next) {
        const id = req.userId;

        User
            .findByPk(id, {
                include: [Project]
            })
            .then(user => {
                res.status(200).json({
                    projects: user.Projects
                })
            })
            .catch(err => {
                next(err);
            })
    }   

    static editProject(req, res, next) {
        const { name } = req.body;
        const { id } = req.params;
        
        Project
            .update({
                name
            },{
                where: {
                    id
                }
            })
            .then(() => {
                return Project.findByPk(id)
            })
            .then(project => {
                res.status(200).json({
                    project
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static deleteProject(req, res, next) {
        const { id } = req.params;

        Project
            .destroy({
                where: {
                    id
                }
            })
            .then(() => {
                res.status(200).json({
                    msg: `Success delete project with id ${id}`
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static addMember (req, res, next) {
        const ProjectId = req.params.id;
        const { email } = req.body;
        let UserId = 0;
        let name = '';

        User
            .findOne({
                where: {
                    email
                }
            })
            .then(user => {
                if (!user) {
                    throw {
                        msg: `No user with email ${email}`,
                        code: 404
                    }
                } else {
                    name = user.name;
                    UserId = user.id;
                    return UserProject
                        .findOne({
                            where: {
                                UserId,
                                ProjectId
                            }
                        })
                }
            })
            .then(result => {
                if (result) {
                    throw {
                        msg: `${name} already added to this project`,
                        code: 400
                    }
                } else {
                    return UserProject
                        .create({
                            UserId,
                            ProjectId
                        })
                }
            })
            .then(newMember => {
                res.status(201).json({
                    newMember,
                    name
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static createProjectTodo(req, res, next) {
        const UserId = req.userId;
        const ProjectId = req.params.id;
        console.log(ProjectId);
        const { title, description, due_date } = req.body;

        Todo
            .create({
                title,
                description,
                due_date: new Date(due_date),
                UserId,
                ProjectId
            })
            .then(newTodo => {
                res.status(201).json({
                    todo: newTodo
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static getProjectTodos(req, res, next) {
        const ProjectId = req.params.id;

        Todo
            .findAll({
                where: {
                    ProjectId
                }
            })
            .then(todos => {
                res.status(200).json({
                    todos
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static editProjectTodo(req, res, next) {
        const ProjectId = req.params.project_id;
        const id = req.params.todo_id;
        const { title, description, due_date } = req.body;

        Todo
            .update({
                title,
                description,
                due_date: new Date(due_date)
            },{
                where: {
                    id,
                    ProjectId
                }
            })
            .then(()=> {
                return Todo.findByPk(id)
            })
            .then(todo => {
                res.status(200).json({
                    todo
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static deleteProjectTodo(req, res, next) {
        const ProjectId = req.params.project_id;
        const id = req.params.todo_id;

        Todo
            .destroy({
                where: {
                    id,
                    ProjectId
                }
            })
            .then(() => {
                res.status(200).json({
                    msg: `Succes delete todo with id ${id} from project with id ${ProjectId}`
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static showAllMembers(req, res,next) {
        const { id } = req.params;

        Project
            .findOne({
                include: [User],
                where: {
                        id
                    }
            })
            .then(project => {
                console.log(project);
                res.status(200).json({
                    members: project.Users
                })
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = ProjectController;
