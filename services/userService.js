const db = require('../db/db');

class User {
  constructor() {
    this.users = [];
  }
  getId() {
    if (this.users.length === 0) {
      return 1;
    } else {
      const indexes = this.users.map(element => element.id);
      return Math.max(...indexes) + 1;
    }
  }
  async add(user) {
    const query = `INSERT INTO users (name, mail) VALUES ('${user.name}', '${user.email}')`
    const newUser = await db.query(query);
    return user;
  }
  async getAll() {
    const results =  await db.query("SELECT * FROM users;")
    return results;
  }
  async getOne(id){
    const query = `SELECT * FROM users WHERE id='${id}';`
    const user = await db.query(query)
    console.log(query)
    return user;
  }
  async delete(id) {
    const query = `DELETE FROM users WHERE id='${id}'`
    db.query(query)
    return {
      message: `Deleted element with id ${id}`
    };
  }
  error() {
    throw new Error('ups');
  }
}

module.exports = User;