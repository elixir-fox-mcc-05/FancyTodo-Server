function errorHandler (err, req, res, next){
    if(err.name == "SequelizeValidationError") {
        const errors = err.errors.map(el => ({
            message: el.message
        }))
        return res.status(400).json({
            type: "Bad Request",
            errors
        })
    }

}

module.exports = errorHandler
