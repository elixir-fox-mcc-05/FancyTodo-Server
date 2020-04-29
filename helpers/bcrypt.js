const bcrypt = require('bcryptjs');

function generatePassword(password){
    let salt = bcrypt.genSaltSync(process.env.BRCYPT_ROUND);
    let hash = bcrypt.hashSync(password, salt);
    return hash;
}

function checkPassword(password, hash){
    return bcrypt.compareSync(password, hash); 
}

module.exports = { 
    generatePassword,
    checkPassword
};