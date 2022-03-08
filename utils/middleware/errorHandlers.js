const { config } = require('../../config');
const boom = require('@hapi/boom');
const debug = require('debug')('app:error');

/*
  Por defecto express tiene un manejador de errores que funciona de manera sincrona,
  podemos reemplazar este manejador de errores con un middleware usando el parametro next, 
  este puede ser sincrono o asincrono, pero si el error es de manera asincrona, 
  debemos pasar el error a la funcion next para hacer el manejo del error.  
*/

function withErrorStack(err, stack) {
  if (config.dev) {
    return { ...err, stack };
  }
  return err;
}

function logErrors(err, req, res, next) {
  debug(err);
  next(err);
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
}

//eslint-disable-next-line
function errorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload },
  } = err;

  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = { logErrors, wrapErrors, errorHandler };
