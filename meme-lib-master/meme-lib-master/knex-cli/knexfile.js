const config = require('../config/config')

module.exports = {
  development: {
    client: 'pg',
    connection: config.DB_CONNECTION_STRING
  },
  staging: {
    client: 'pg',
    connection: config.DB_CONNECTION_STRING
  },
  production: {
    client: 'pg',
    connection: config.DB_CONNECTION_STRING
  }
}
