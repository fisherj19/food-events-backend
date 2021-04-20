const express = require('express');
const router = express.Router();

const send = require('./send');

router.get('/', (req, res) => send.send(req, res));


module.exports = router;