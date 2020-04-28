module.exports = (err, req, res, next) => {
    if(err.name == 'SequelizeValidationError'){
        res.status(400).json({
            error: `validation error`
        })
    }
    res.status(err.code || 500).json({
        error: err
    })
}