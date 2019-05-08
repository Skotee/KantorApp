import knex from 'knex'
import { dbConfig } from './knexfile'
import { Model } from 'objection'

const { NODE_ENV = 'production' } = process.env

const knexConnection = knex(dbConfig[NODE_ENV])

Model.knex(knexConnection)

export default knexConnection
