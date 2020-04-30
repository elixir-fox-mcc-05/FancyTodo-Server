const bcrypt = require('bcryptjs')

function generate_password(password){
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt)
    return hash
}

function compare_password(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = { generate_password, compare_password  }

let hashed = generate_password('hi!google')
let pass = compare_password('hi!google', hashed)

console.log(
    hashed,
    '\n',
    pass
    )