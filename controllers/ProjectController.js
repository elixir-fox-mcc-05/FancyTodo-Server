const { Project, UserProject, User, Todo } = require('../models');

class ProjectController {
  static findAll(req, res, next) {
    let UserId = req.UserId;
    User.findByPk(UserId, {
      include: {
        model: Project
      }
    })
      .then(data => {
        res.status(200).json({
          Projects: data.Projects
        });
      })
      .catch(err => {
        return next(err);
      });
  }
  static createProject(req, res, next) {
    let { name, description, status, due_date } = req.body;
    let UserId = req.UserId;
    let newProject;
    Project.create({
      name,
      description,
      status,
      due_date
    })
      .then(data => {
        newProject = data;
        return UserProject.create({
          UserId,
          ProjectId: data.id
        })
      })
      .then(result => {
        res.status(201).json({
          Project: newProject,
          Member: result
        })
      })
      .catch(err => {
        return next(err);
      });
  }
  static getProject(req, res, next) {
    let users;
    let projectId = req.params.projectid;
    User.findAll({
      attributes: ['id', 'email']
    })
      .then(data => {
        users = data;
        return Project.findByPk(projectId, {
          include: {
            model: User,
            attributes: ['id', 'email']
          }
        })
      })
      .then(result => {
        res.status(200).json({
          Project: result,
          Users: users
        });
      })
      .catch(err => {
        return next(err);
      });
  }
  static addMember(req, res, next) {
    let ProjectId = req.params.projectid;
    let UserId = req.body.userid;
    UserProject.create({
      UserId,
      ProjectId
    })
      .then(data => {
        res.status(200).json({
          data
        })
      })
      .catch(err => {
        return next(err);
      })
  }
  static updateProject(req, res, next) {
    let { name, description, status, due_date } = req.body;
    let id = req.params.projectid;
    Project.update({
      name,
      description,
      status,
      due_date
    }, {
      where: {
        id
      },
      returning: true
    })
      .then(data => {
        if(data[0] > 0){
          res.status(200).json({
            data: data[1]
          });
        } else {
          return next({
            code: 404,
            name: "404NotFoundError",
            msg: `Data Not Found`
          });
        }
      })
      .catch(err => {
        return next(err);
      });
  }
  static deleteProject(req, res, next) {
    let { projectid } = req.params;
    let deletedData = {};
    Project.findByPk(projectid)
      .then(result => {
        deletedData = result;
        return Project.destroy({
          where: {
            id: projectid
          }
        })
      })
      .then(data => {
        if(deletedData) {
          res.status(200).json({
            deletedData
          });
        } else {
          return next({
            code: 404,
            name: "404DataNotFoundError",
            msg: `Data Not Found`
          });
        }
      })
      .catch(err => {
        return next(err);
      });
  }
  static findTodoProject(req, res, next) {
    let ProjectId = req.params.projectid;
    Todo.findAll({
      where: {
        ProjectId
      }
    })
      .then(result => {
        res.status(200).json({
          ProjectTodos: result
        });
      })
      .catch(err => {
        return next(err);
      });
  }
}

module.exports = ProjectController;