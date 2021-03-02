const express = require('express');
const router = express.Router();

const users = require('./users');

router.get('/:id', (req, res) => events.getById(req, res));
router.get('/', (req, res) => events.getAll(req, res));

module.exports = router;