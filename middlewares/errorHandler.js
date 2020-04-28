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
    else if(err.name == "SequelizeUniqueConstraintError") {
        const errors = err.errors.map(el => ({
            message: el.message
        }))
        return res.status(400).json({
            type: "Bad Request",
            errors
        })
    }
    else if(err.isAxiosError == true){
        return res.status(404).json({
            errors: 'City not found'
        })
    }
}

module.exports = errorHandler
