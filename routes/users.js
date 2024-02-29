const express = require('express')
const User = require('../models/user')
const { isAuthenticated, hasRoles } = require('../middleware/authenticate');

const router = express.Router()


router.get('/register', hasRoles(['admin', 'user']), (req, res) => {
    res.json({ reza: 'taghavi' });
});

module.exports = router