const express = require('express')
const bearerToken = require('express-bearer-token');

const {db, GET_ALL_USERS_DATA_SQL} = require('../db');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router()

router.use(express.json());
router.use(bearerToken());

/**
 * This route is used as an example of an unauthenticated route.
 * This should be removed in a production environment.
 */
router.get('/users', (req, res) => {
    db.get(GET_ALL_USERS_DATA_SQL, function(err, row) {
        if (err) {
            const err_msg = 'Error getting users data from database';
            console.log(err_msg, err)
            return res.status(503).json({error: err_msg});
        }

        return res.json(row)
    });
    
})
/**
 * This route is an example of a protected route.
 * A user object is added to the req object
 * containing the users uuid + relevant jwt data
 */
router.get('/user/profile', isAuthenticated, (req, res) => {
    return res.json({...req.user});
});

module.exports = router