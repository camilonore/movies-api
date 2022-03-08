const express = require('express');
const debug = require('debug')('app:server');
const leapYear = require('./challenges/leap-year');
const app = express();
const { config } = require('./config');
const moviesApi = require('./routes/movies');
const helmet = require('helmet');
const cors = require('cors');
const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// Middleware body parser
app.use(express.json());
// Middleware for security
app.use(helmet());
const corsOptions = { origin: 'http://localhost:3000' };
app.use(cors(corsOptions));

// Routes
moviesApi(app);
// Catch 404
app.use(notFoundHandler);

// Errors Middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.get('/leapyear/:year', (req, res) => {
  leapYear(req, res);
});

app.listen(config.port, () => {
  debug(`Listening http://localhost${config.port}`);
});
