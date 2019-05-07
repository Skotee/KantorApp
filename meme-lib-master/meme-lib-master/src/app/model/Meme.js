import { Model } from 'objection'

export default class Meme extends Model {
  static get tableName() {
    return 'memes'
  }

  static get idColumn() {
    return 'id'
  }

  static get memeUrl() {
    return 'url'
  }
}
