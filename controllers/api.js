const axios = require('axios')
class Controller{

    static run(req,res){
        axios.get('https://quote-garden.herokuapp.com/quotes/random')
        .then(result=>{
            // console.log(result);  
            const {data} = result      
            res.status(200).json({
               quotes:data
            })
        })
        .catch(err=>{
            res.status(500).json({
                err
            })
        })
    }
}

module.exports = Controller