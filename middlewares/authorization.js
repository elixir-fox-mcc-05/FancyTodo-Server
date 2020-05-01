const {Project} = require('../models')
function authorization(req,res,next){   
    const id = req.params.id
    Project.findOne({ 
        where:{
            TodoId: id,
            UserId: req.currentUserId
        }})

    .then(result=>{        
            return next()
    })
    .catch(err=>{
        res.status(401).json({
            message:"Unauthorized"
        })
        
    })
}
module.exports ={authorization}