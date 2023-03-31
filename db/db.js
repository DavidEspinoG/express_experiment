const pgp = require('pg-promise')();
const url = 'postgres://david:nSrfH7GcfGHPz3mRU4PaiWWVmwe4h9Lj@dpg-cgjj5se4dadak46b6nm0-a/daviddata'
const db = pgp(url);


module.exports = db;