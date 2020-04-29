const { verifyToken } = require('../helpers/jwt.js');
const { User } = require('../models/index.js');

function authentication(req, res, next){
    let token = req.headers.token;
    try {
        let decoded = verifyToken(token);
        let { id } = decoded
        User.findByPk(Number(id))
            .then(result => {
                if(result) {
                    req.currentUserId = Number(id);
                    return next()  // agar lanjut ke selanjutnya(setelah fungsi ini dipanggil)
                }
                else {
                    return next({
                        name: 'NotFound',
                        errors: [{ 
                            msg: 'User not found' 
                        }]
                    })
                }
            })
            .catch (err => {
                return next ({
                    name: `Unauthorized`,
                    errors: [{
                        msg: 'User Unauthenticated' 
                    }]
                })
            })
      } catch(err) {
        next(err)
      }

}

module.exports = authentication;