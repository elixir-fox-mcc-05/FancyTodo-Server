const {Todo,Pass} = require('../models')

function authorization (req,res,next){
    let checkProject;

    Todo
        .findByPk(req.params.id)
        .then(data => {
                    
            //console.log(data)
                    // return results
            if (data){
                checkproject = data.ProjectId
                return Pass.findOne({where : {UserId : req.LoginId,ProjectId: checkproject}})

                // if (data.UserId == req.LoginId){
                //     //let results = Object.assign(data)
                //     //console.log(results)
                //     next()
                // }else {
                   
                //     res.status(401).json({
                //         msg : 'Unauthorized to access!'
                //     })
                // }
                
            }else {
                
                res.status(404).json({
                    msg : 'not found'
                })
            }
            
            
                })
        .then(data => {
            
                if (data.UserId == req.LoginId){
                    //let results = Object.assign(data)
                    //console.log(results)
                    next()
                }else {
                   
                    res.status(401).json({
                        msg : 'Unauthorized to access!'
                    })
                }
        })
        // .catch(err => res.status(404).json({error : err.message}))
}

module.exports = authorization