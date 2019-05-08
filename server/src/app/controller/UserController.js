import UserService from '../service/UserService'

export default class UserController {
  static register(req) {
    const { username, password, email } = req.body
    return UserService.register({ username, email, password })
  }

  static getAll() {
    return UserService.getAll()
  }
}
