const {Todo} = require('../models')

function authorization (req,res,next){
    

    Todo
        .findByPk(req.params.id)
        .then(data => {
                    
            //console.log(data)
                    // return results
            if (data){
                if (data.UserId == req.LoginId){
                    //let results = Object.assign(data)
                    //console.log(results)
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