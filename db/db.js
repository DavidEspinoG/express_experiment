const pgp = require('pg-promise')();

const db = pgp('postgres://david:admin@localhost:5432/my_db')


module.exports = db;