
function errorHandler (err, req, res, next) {
  next();
}

module.exports = errorHandler;