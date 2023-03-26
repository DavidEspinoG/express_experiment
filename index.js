const express = require('express');
const app = express();
const port = 3000;
const User = require('./services/userService');
const errorHandler = require('./middlewares/errorHandler');
const user = new User;

app.use(express.json());
app.use(function(req, res, next) {
  console.log('Hello middleware')
  next()
});

app.use(function(err, req, res, next) {
  res.status(501)
});

app.get('/', (req, res) => {
  res.send('Welcome to my first API')
})

app.get('/users', (req, res ) => {
  res.json(user.getAll());
})

app.get('/users/:id', (req, res) => {
  res.json(user.getOne(req.params.id))
})

app.post('/users', (req, res) => {
  res.json(user.add(req.body))
})

app.delete('/users/:id', (req, res) => {
  const id = req.params.id
  res.json(user.delete(id));
})

app.get('/error', (req, res) => {
  res.json(user.error());
})

app.use(function(err, req, res, next) {
  console.log(err.message)
  res.status(501)
  res.json({
    message: err.message
  })
  next(err);
});

app.listen(port, () => {
  console.log('Corriendo desde el puerto: ', port)
})