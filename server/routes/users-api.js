const express = require('express');
const router = express.Router();

const users = require('./users');


router.get('/:email', (req, res) => users.getById(req, res));
router.get('/', (req, res) => users.getAll(req, res));

module.exports = router