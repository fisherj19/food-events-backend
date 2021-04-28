const express = require('express');
const router = express.Router();

const events = require('./sendWeek');

router.get('/', (req, res) => sendWeek.sendWeek(req, res));


module.exports = router;