const { config } = require('../../config');

/*
  Por defecto express tiene un manejador de errores que funciona de manera sincrona,
  podemos reemplazar este manejador de errores con un middleware usando el parametro next, 
  este puede ser sincrono o asincrono, pero si el error es de manera asincrona, 
  debemos pasar el error a la funcion next para hacer el manejo del error.  
*/

function withErrorStack(err, stack) {
  if (config.dev) {
    return { err, stack };
  }
  return err;
}

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

//eslint-disable-next-line
function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.json(withErrorStack(err.message, err.stack));
}

module.exports = { logErrors, errorHandler };
