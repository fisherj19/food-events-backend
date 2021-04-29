const express = require('express');
const router = express.Router();

const events = require('./sendDay');

router.get('/', (req, res) => sendDay.sendDay(req, res));


module.exports = router;