function errorHandling(err,req,res,next){

    if (err.name == 'SequelizeValidationError') {
        const errors = err.errors.map(el => {
          return {
            message: el.message
          };
        });
        return res.status(400).json({
          errors
        });
      } else if (err.name == 'SequelizeUniqueConstraintError') {
        const errors = err.errors.map(el => {
          return {
            message: el.message
          };
        });
        return res.status(400).json({
          errors
        });
      } else if (err.name == 'SequelizeForeignKeyConstraintError') {    
        return res.status(403).json({
          message: "Delete on table violates foreign key constraint "
        });
      } else if (err.name == 'SequelizeDatabaseError'){
        return res.status(500).json(err.parent.detail);

      } else {
        console.log("error",err);
        
        return res.status(500).json(err);
      }
}
module.exports=errorHandling