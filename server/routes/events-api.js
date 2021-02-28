const express = require('express');
const router = express.Router();

const events = require('./events');

router.get('/:id', (req, res) => events.getById(req, res));
router.get('/', (req, res) => events.getAll(req, res));

module.exports = router;