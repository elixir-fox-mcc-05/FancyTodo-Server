const { Todo } = require('../models')

function authorization (req, res, next) {
    let { id } = req.params

    Todo.findByPk(id)
        .then(todo => {
            if(todo){
                if(todo.userId == req.userId){
                    next()
                }else{
                    res.status(401).json({
                        msg : 'Unauthorized'
                    })
                }
            }else{
                res.status(404).json({
                    msg : 'Todo not Found'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            })
        })
}



module.exports = authorization;