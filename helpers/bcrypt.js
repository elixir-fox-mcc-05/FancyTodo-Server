let bcrypt = require('bcryptjs');

function hashPassword (password) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash;
}

function comparePassword (pass,hash) {
    let check = bcrypt.compareSync(pass,hash);
    return check
}

module.exports = {
    hashPassword,
    comparePassword
}