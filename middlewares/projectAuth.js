const { UserProject } = require('../models');

const projectAuth = (req, res, next) => {
  let { projectid } = req.params;

  UserProject.findOne({
    where: {
      UserId: req.UserId,
      ProjectId: projectid
    }
  })
    .then(result => {
      if(result) {
        console.log(result);
        next();
      } else {
        return next({
          code: 401,
          name: "Unauthorized Error",
          msg: `You cannot access this service`
        });
      }
    })
    .catch(err => {
      console.log(err);
      return next(err);
    })
}

module.exports = projectAuth;