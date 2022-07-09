const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(process.env.DB_FILENAME || 'development_sqlite.db');
db.serialize(() => {
    const CREATE_USER_TABLE_SQL = 'CREATE TABLE IF NOT EXISTS users (user_uuid text NOT NULL PRIMARY KEY, email varchar(255) NOT NULL)';
    db.run(CREATE_USER_TABLE_SQL);
});

const queries = {
    GET_USER_UUID_BY_EMAIL_SQL: `SELECT user_uuid FROM users WHERE email=$email`,
    GET_ALL_USERS_DATA_SQL: 'SELECT * FROM users',
    ADD_NEW_USER_SQL: 'INSERT INTO users VALUES ($uuid, $email)',
}

module.exports = {db, ...queries};