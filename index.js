const express = require('express')
const leapYear = require('./challenges/leap-year')
const app = express()
const {config} = require('./config')
const { moviesApi } = require('./routes/movies')

moviesApi(app)

app.get('/leapyear/:year', (req, res) => {
  leapYear(req, res)
})



app.listen(config.port, () => {
  console.log(`Listening http://localhost${config.port}`)
})