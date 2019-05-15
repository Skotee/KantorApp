const config = require('../config/config')

console.log(config)

const dbConfig = {
  // development: {
  //   client: 'pg',
  //   connection: config.DB_CONNECTION_STRING
  // }, if needed database
  production: {
    client: 'pg',
    connection: config.DB_CONNECTION_STRING
  }
}
module.exports.dbConfig = dbConfig

const env = process.env.NODE_ENV || 'production'

module.exports = dbConfig[env]
