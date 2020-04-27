const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.set('port', process.env.PORT)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => res.json({ msg: 'Dari App.js' }))

app.listen(port, _=> console.log('I love you,', port))