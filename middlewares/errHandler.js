module.exports = (err, req, res, next) => {
    console.log(err)
    if(err.name == 'SequelizeValidationError') {
        res.status(400).json({
            msg: 'please input data as required'
        })
    } else if(err.name == 'SequelizeUniqueConstraintError') {
        res.status(400).json({
            msg: 'please make sure your email never registered before'
        })
    } else if(err.name == 'JsonWebTokenError') {
        res.status(400).json({
            msg: 'please login first'
        })
    } else {
        res.status(err.code || 500).json({
            err: err
        })
    }
}