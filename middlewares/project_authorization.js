const { Project } = require('../models')

function project_authorization(req, res, next) {
    const { id } = req.params
    // console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n', 5678)

    Project.findByPk(id)
        .then(data => {
            if (data) {
                console.log(data)
                next()
            } else {
                res
                  .status(404)
                  .json({ msg: 'NOT FOUND' })
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = project_authorization