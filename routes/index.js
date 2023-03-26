const User = require('../services/userService');
const user = new User;
const { postUserValidation } = require('../validation');

function routerApi (app) {
  app.get('/', (req, res) => {
    res.send('Welcome to my first API')
  });
  app.get('/users', (req, res ) => {
    res.json(user.getAll());
  })
  
  app.get('/users/:id', (req, res) => {
    res.json(user.getOne(req.params.id))
  })
  
  app.post('/users', 
    (req, res, next) => {
      const data = req.body;
      const { error } = postUserValidation.validate(data)
      if(error){
        next(error)
      }
      next();
    },
    (req, res) => {
    res.json(user.add(req.body))
  })
  
  app.delete('/users/:id', (req, res) => {
    const id = req.params.id
    res.json(user.delete(id));
  })
  app.get('/error', (req, res) => {
    res.json(user.error());
  })
}

module.exports = routerApi;