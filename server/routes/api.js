const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.status(404).send({ message: 'Invalid API route' }));
router.get('/core/check_admin', (req, res) => res.status(200).send(
  { is_admin: res.locals._current_user_is_admin || false }
));


module.exports = router;
