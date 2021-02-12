const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => res.send('Logged in'));
router.get('/register', (req, res) => res.send('Registered'));

module.exports = router;
