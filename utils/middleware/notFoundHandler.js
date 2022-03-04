const Boom = require('@hapi/boom');

function notFoundHandler(req, res) {
  const { output } = Boom.notFound();

  res.status(output.statusCode);
  res.json(output.payload);
}

module.exports = notFoundHandler;
