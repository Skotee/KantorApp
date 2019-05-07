import { Model } from 'objection'

export default class User extends Model {
  static get tableName() {
    return 'users'
  }

  static get idColumn() {
    return 'id'
  }
}
