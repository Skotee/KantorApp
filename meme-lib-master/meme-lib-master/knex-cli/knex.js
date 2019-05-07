import knex from 'knex'
import knexConfig from './knexfile'
import { Model } from 'objection'

const { NODE_ENV = 'development' } = process.env

const knexConnection = knex(knexConfig[NODE_ENV])

Model.knex(knexConnection)

export default knexConnection
