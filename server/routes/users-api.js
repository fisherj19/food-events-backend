const express = require('express');
const router = express.Router();

const users = require('./users');

router.get('/:id', (req, res) => users.getById(req, res));
router.get('/', (req, res) => users.getAll(req, res));

router.post('/', (req, res) => users.insert(req, res));

module.exports = router;