const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
  methods: ['POST', 'GET', 'PATCH']
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cors({corsOptions}))

const t3 = require('./mlp.js')

app.post('/get-result', (req, res) => {
  res.json({ Result: t3.t3(req.body.array) })
})

app.listen(port)
console.log(`Server is up on port ${port}`)
