function errorHandler(err, req, res, next) {
    if(err.name == 'SequelizeValidationError') {
      res
        .status(400)
        .json({ error_name: 'BAD REQUEST', errors: 'Validation Error!, some of your input data, check again field input' })

    } else if (err.name == 'ReferenceError') {
      res
        .status(400)
        .json({ error_name: 'BAD REQUEST', errors: 'invalid input, check again' })

    } else if (err.name == 'JsonWebTokenError') {
      res
        .status(400)
        .json({ error_name: 'BAD REQUEST', errors: 'Miss something, please check your input' })

    } else if (err.name == 'SequelizeUniqueConstraintError'){
      res
        .status(403)
        .json({ error_name: 'FORBIDDEN', errors: `Can't proccess with same email` })

    } else {
      res
        .status(500)
        .json({ name: err.name, errors: err.message })
    }
}

module.exports = errorHandler