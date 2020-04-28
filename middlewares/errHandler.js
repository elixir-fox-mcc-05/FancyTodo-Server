module.exports = (err, req, res, next) => {
    console.log(err)
    res.status(err.code || 500).json({
        err : err.msg
    })
}