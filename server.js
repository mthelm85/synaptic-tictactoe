const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const t3 = require('./mlp.js')

app.post('/config', (req, res) => {
  res.json({ Result: t3.t3(req.body.config) })
})

app.listen(port)
console.log(`Server is up on port ${port}`)
