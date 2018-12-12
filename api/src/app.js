const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const PORT = 8000

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.listen(PORT)