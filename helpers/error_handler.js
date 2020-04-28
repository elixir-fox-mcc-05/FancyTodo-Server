function errorHandler(err, req, res, next) {
    console.log('=======>>>>>>>>>>>>>>', err) // read error
    if(err.name == 'SequelizeValidationError') {
        res
          .status(400) // err.code
          .json({ name: 'BAD REQUEST', errors: err.errors.message })  // err.message
    } else {
        res
          .status(500)
          .json({ name: err.name, errors: err.message })
    }
}

module.exports = errorHandler