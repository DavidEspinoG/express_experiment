const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes');
const errorHandler = require('./middlewares/errorHandler');


app.use(express.json());

routerApi(app);

app.use(function(err, req, res, next) {
  console.log(err.message)
  res.status(501)
  res.json({
    message: err.message, 
  })
  next(err);
});

app.use(errorHandler);

app.listen(port, () => {
  console.log('Corriendo desde el puerto: ', port)
})