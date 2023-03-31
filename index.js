require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

routerApi(app);

app.use(errorHandler);
app.listen(port, () => {
  console.log('Corriendo desde el puerto: ', port)
})
