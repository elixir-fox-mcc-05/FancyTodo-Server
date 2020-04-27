class TodoController{
    static showAll(req, res){
        res.status(200).json({msg : 'success'});
    }
}

module.exports = TodoController