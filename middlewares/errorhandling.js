function errorHandling(err,req,res,next){
res.status(500).json({
    pesan :err
})
}
module.exports=errorHandling