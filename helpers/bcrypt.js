const bcrypt = require("bcrypt")
require('dotenv').config()

module.exports = {
  encrypt: (password) => {
    const salt = bcrypt.genSaltSync(process.env.SALT);
    // console.log(password)
    return bcrypt.hashSync(password, salt);
  },
  compare: (password, hash) => {
    return bcrypt.compareSync(password, hash);
  }
}