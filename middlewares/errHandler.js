module.exports = (err, req, res, next) => {
    if (err.name == 'JsonWebTokenError') {
        res.status(401).json({
            msg: 'please login'
        })
    }
    else if (err.name == 'SequelizeValidationError') {
        res.status(401).json({
            msg: 'Please Input Your Data Correctly'
        })
    }
    
    res.status(err.code || 500).json({
        err : err
    })
}
