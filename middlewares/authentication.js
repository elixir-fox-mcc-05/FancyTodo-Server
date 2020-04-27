const {verify} = require("../helpers/jwt")
const {User} = require("../models")

function authentication(req,res,next){
    try {
        let decoded = verify(req.headers.token)    
        //  console.log(req.body)
        //const {title} = req.body.title
        User.findOne({
            where:{
                id:decoded.id
            }
        })        
        .then(result=>{
            if(result){
                req.currentUserId = result.id                
               return next()
            } else {
               return res.status(404).json({
                    'type':'Not found',
                    'msg':'User not found'
                })
            }
        })
        .catch(err =>{

            return res.status(404).json({
                'type':'Unauthorized',
                'msg':'Unauthorized'
            })
            
        })

    } catch (err) {
        return res.status(500).json({
            'type':'Internal Server errorrr',
            'msg':{err}
        })
    }
}

module.exports = {authentication}