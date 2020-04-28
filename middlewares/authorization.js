const {Todo} = require('../models')

function authorization (req,res,next){
    

    Todo
        .findByPk(req.params.id)
        .then(data => {
                    // let results = Object.assign(data1)
                    // return results
            if (data){
                if (data.UserId == req.LoginId){
                    next()
                }else {
                    res.status(401).json({
                        msg : 'Unauthorized to access!'
                    })
                }
                
            }else {
                res.status(404).json({
                    msg : 'not found'
                })
            }
            
            
                })
        // .catch(err => res.status(404).json({error : err.message}))
}

module.exports = authorization