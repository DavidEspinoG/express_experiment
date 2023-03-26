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
  add(user) {
    user.id = this.getId();
    this.users.push(user);
    return user;
  }
  getAll(){
    return this.users;
  }
  getOne(id){
    const element = this.users.filter(element => element.id === parseInt(id) );
    return element;
  }
  delete(id) {
    const index = this.users.findIndex(element => element.index === id);
    this.users.splice(index, 1);
    return {
      message: `Deleted element with id ${id}`
    };
  }
  error() {
    throw new Error('ups');
  }
}

module.exports = User;