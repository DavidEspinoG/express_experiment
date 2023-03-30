
function errorHandler (err, req, res, next) {
  console.log(err.message)
  res.status(501)
  res.json({
    message: err.message, 
  })
  next(err);
}

module.exports = errorHandler;