import express from 'express'
import config from './config/config'
import httpServer from 'http'
import './knex-cli/knex'
import routes from './src/api/routes/index'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import ErrorHandler from './src/api/middleware/ErrorHandler'

const app = express()
const server = httpServer.createServer(app)

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(routes)
app.use(ErrorHandler.handle)

server.listen(config.PORT, () => {
  console.log(`Server runs on http://localhost:${config.PORT}/`)
})
