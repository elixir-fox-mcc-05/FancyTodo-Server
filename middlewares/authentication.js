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
                    next()  // agar lanjut ke selanjutnya(setelah fungsi ini dipanggil)
                }
                else {
                    res.status(401).json({ msg: 'Please login'})
                }
            })
            .catch (err => {
                res.status(500).json({ msg: 'Internal server error' })
            })
      } catch(err) {
        res.status(500).json({ msg: 'Internal server error' })
      }

}

module.exports = authentication;