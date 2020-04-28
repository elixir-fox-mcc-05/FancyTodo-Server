module.exports = (err, req, res, next) => {
    console.log(err);

    if (err.name === "SequelizeUniqueConstraintError") {

        res.status(400).json({
            errors : err.message
        })
    }

    if (err.name === "SequelizeValidationError") {

        let errors = err.errors.map(el => ({
            message : el.message
        }))

        res.status(400).json({
            errors
        })
    }

    if (err.name === "JsonWebTokenError") {

        res.status(400).json({
            errors : "Please login first!"
        })
    }

    res.status(err.code || 500).json({
        errors : err
    })
}