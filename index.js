const express = require('express');
const leapYear = require('./challenges/leap-year');
const app = express();
const { config } = require('./config');
const { moviesApi } = require('./routes/movies');
const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');

// Middleware body parser
app.use(express.json());

moviesApi(app);

app.use(logErrors);
app.use(errorHandler);

app.get('/leapyear/:year', (req, res) => {
  leapYear(req, res);
});

app.listen(config.port, () => {
  console.log(`Listening http://localhost${config.port}`);
});
