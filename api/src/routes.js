const express = require('express')
const router = express.Router();
const mainController = require('./controllers/mainController')

router.get('/', mainController.getHello)

module.exports = router;