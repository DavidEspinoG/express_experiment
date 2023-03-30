const pgp = require('pg-promise')();

const db = pgp('postgres://david:admin@localhost:5432/my_db')

const query = (queryString) => {
  db.query(queryString)
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
}

module.exports = query;