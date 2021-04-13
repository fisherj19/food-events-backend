const express = require('express');
const router = express.Router();

const events = require('./events');

router.get('/:id', (req, res) => events.getById(req, res));


module.exports = router;