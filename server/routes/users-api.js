
const express = require('express');
const router = express.Router();
const users = require('./users');

router.get('/', (req, res) => users.getAll(req,
res));

module.exports = router;