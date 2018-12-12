const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes')

const PORT = 8000
const DB_NAME = 'dockerized_app'
const DB_PORT = '27017'
const API_SERVICE_NAME = 'database'

const app = express()

// Connect DB
mongoose.connect(`mongodb://${API_SERVICE_NAME}:${DB_PORT}/${DB_NAME}`);
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.listen(PORT)