export default class DataManager {
  static getUserPublicData(user) {
    const forbiddenFields = ['created_at', 'updated_at', 'password']
    forbiddenFields.forEach(field => delete user[field])
    return user
  }
}
