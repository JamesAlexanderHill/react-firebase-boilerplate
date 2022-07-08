const {OAuth2Client} = require('google-auth-library');
const { v4: uuidv4 } = require('uuid');

const db = require('../db');

const client = new OAuth2Client(process.env.GOOGLE_WEB_CLIENT_ID);

const isAuthenticated = (req, res, next) => {
    const jwt = req.token;

    // check if we sent the JWT as a bearer token in the authorization header
    if (!jwt) {return res.status(403).json({error: 'Google JWT not found in authorisation header as a bearer token'})};

    client.verifyIdToken({
        idToken: jwt,
        requiredAudience: process.env.GOOGLE_WEB_CLIENT_ID,
    }).then(({payload}) => {
        // On success get user ID and add the user object to the request and pass forward
        const {email, name, picture, given_name, family_name} = payload;

        // get id of user from data base using email.
        const GET_USER_UUID_BY_EMAIL_SQL = `SELECT user_uuid FROM users WHERE email=$email`;

        db.get(GET_USER_UUID_BY_EMAIL_SQL, {$email: email}, function(err, row) {
            if (err) {
                const err_msg = 'Error getting user uuid from database';
                console.log(err_msg, err)
                return res.status(400).json({error: err_msg});
            }

            if (!row) {
                // create new user in db
                const ADD_NEW_USER_SQL = 'INSERT INTO users VALUES ($uuid, $email)';
                const uuid = uuidv4();
                db.run(ADD_NEW_USER_SQL, {$uuid: uuid, $email: email}, function(err) {
                    if (err) {
                        const err_msg = 'Error adding new user to the database';
                        console.log(err_msg, err)
                        return res.status(400).json({error: err_msg});
                    }
                    // console.log(`Added new user to db: ${uuid}`)
                    req.user = {uuid, email, name, picture, given_name, family_name};
                    next();
                });
            } else {
                const {uuid} = row;
                // console.log(`Retrieved user by uuid from db: ${uuid}`)
                req.user = {uuid, email, name, picture, given_name, family_name};
                next();
            }
        });

        
    }).catch((err) => {
        console.error('Error verifying JWT', err)
        return res.status(403).json({error: 'Error verifying JWT'});
    });
};

module.exports = isAuthenticated;