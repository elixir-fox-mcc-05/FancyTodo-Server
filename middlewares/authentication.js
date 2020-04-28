const { User } = require('../models');
const { verifyToken } = require('../helpers/jwt.js');

module.exports = {
    authenticateUser: (req, res, next) => {
        let token = req.headers.token;

        try {
            let decoded = verifyToken(token);
            let { id } = decoded;
            User
            .findByPk(id)
            .then(result => {
                if(result) {
                    req.userId = id;
                    next();
                } else {
                    res.status(401).json({
                        msg: 'Unauthorized user'
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    error: err.message
                })    
            })
        } catch(err) {
            res.status(500).json({
                error: err
            })
        }
    }
}