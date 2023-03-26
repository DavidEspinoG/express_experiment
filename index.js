const express = require('express');
const app = express();
const port = 3000;
const User = require('./services/userService');

const user = new User;

app.use(express.json());

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

app.listen(port, () => {
  console.log('Corriendo desde el puerto: ', port)
})