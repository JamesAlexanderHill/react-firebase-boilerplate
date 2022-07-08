const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(process.env.DB_FILENAME);
db.serialize(() => {
    const CREATE_USER_TABLE_SQL = 'CREATE TABLE IF NOT EXISTS users (user_uuid text NOT NULL PRIMARY KEY, email varchar(255) NOT NULL)';
    db.run(CREATE_USER_TABLE_SQL);
});

module.exports = db;