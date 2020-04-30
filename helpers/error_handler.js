function errorHandler(err, req, res, next) {
    console.log(err.message)
    if(err.name == 'SequelizeValidationError'
    || err.name == 'JsonWebTokenError'
    || err.name == 'ReferenceError') {
        res
          .status(400)
          .json({ error_name: 'BAD REQUEST', errors: 'Invalid Input, please input with invalid data or check your data before this action' })
    } else if (err.name == 'SequelizeUniqueConstraintError'){
        res
          .status(403)
          .json({ error_name: 'FORBIDDEN', errors: `Can't proccess with same email` })
    }else {
        res
          .status(500)
          .json({ name: err.name, errors: err.message })
    }
}

module.exports = errorHandler