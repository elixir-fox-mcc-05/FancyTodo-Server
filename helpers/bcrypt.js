const bcrypt = require('bcryptjs')


function HashPassword(password) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    return hash
}

function CheckPassword(password , hash) {
    return bcrypt.compareSync(password, hash);
}


module.exports = {HashPassword, CheckPassword};