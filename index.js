const express = require('express');
const leapYear = require('./challenges/leap-year');
const app = express();
const { config } = require('./config');
const moviesApi = require('./routes/movies');
const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// Middleware body parser
app.use(express.json());

// Routes
moviesApi(app);
// Catch 404
app.use(notFoundHandler);

// Errors Middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.get('/leapyear/:year', (req, res) => {
  leapYear(req, res);
});

app.listen(config.port, () => {
  console.log(`Listening http://localhost${config.port}`);
});
