const User = require('../services/userService');
const user = new User;
const { postUserValidation } = require('../validation');

function routerApi (app) {
  app.get('/', (req, res) => {
    res.send('Welcome to  my first API')
  });
  app.get('/users', async (req, res ) => {
    const response = await user.getAll()
    res.json(response);
  })
  
  app.get('/users/:id', async (req, res) => {
    res.json(await user.getOne(req.params.id))
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
    async (req, res) => {
    res.json(await user.add(req.body))
  })
  
  app.delete('/users/:id', async (req, res) => {
    const id = req.params.id
    res.json(await user.delete(id));
  })
  app.get('/error', (req, res) => {
    res.json(user.error());
  })
}

module.exports = routerApi;