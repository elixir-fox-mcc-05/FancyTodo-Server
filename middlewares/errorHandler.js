
module.exports = {
    errorHandler: (err, req, res, next) => {
        if(err.name === 'JsonWebTokenError') {
            res.status(401).json({
                msg: "You need to login to access this page"
            })
        } else if (Array.isArray(err.errors)) {
            const error = err.errors.map(error => {
                return error.message;
            });
            const errMsg = error.join(', ')
            res.status(400).json({
                error: errMsg
            })
        } else {
            res.status(err.code || 500).json({
                error: err.msg
            });
        }
    }
}