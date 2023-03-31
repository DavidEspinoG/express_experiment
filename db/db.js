const pgp = require('pg-promise')();
const url = process.env.DATABASE_URL || 'postgres://david:admin@localhost:5432/my_db'
const db = pgp(url);


module.exports = db;