import UserService from '../service/UserService'

export default class LoginController {
  static login(req) {
    const { username, password, email } = req.body
    return UserService.login({ username, email, password })
  }
}
