const express = require('express')
const bearerToken = require('express-bearer-token');

const db = require('../db');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router()

router.use(express.json());
router.use(bearerToken());

router.get('/user/profile', isAuthenticated, (req, res) => {
    return res.json({...req.user});
});

module.exports = router