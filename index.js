const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const query = require('./db/firstQuery');
app.use(express.json());

routerApi(app);

app.use(errorHandler);

app.listen(port, () => {
  console.log('Corriendo desde el puerto: ', port)
})

query("SELECT * FROM users;")