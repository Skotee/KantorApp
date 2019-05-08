import User from '../model/User'

export default class UserRepository {
  static create(data) {
    return User.query()
      .insert(data)
      .returning('*')
  }

  static getAll() {
    return User.query()
      .select()
  }

  static async getBy(data) {
    const [user] = await User.query()
      .where(data)
    return user
  }
}
