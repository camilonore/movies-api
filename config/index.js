require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'PRODUCTION',
  port: process.env.PORT || 3000
}

module.exports = { config }