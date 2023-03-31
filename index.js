const express = require('express');
const app = express();
const port = process.env.PORT;
const routerApi = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

routerApi(app);

app.use(errorHandler);
console.log(port)
app.listen(port, () => {
  console.log('Corriendo desde el puerto: ', port)
})
