import config from '../../config/config'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default class Crypto {
  static getHashedPassword(password) {
    return bcrypt.hash(password, parseInt(config.BCRYPT_SALT, 10))
  }

  static getVerificationCode(user) {
    return jwt.sign({ id: user.id }, config.JWT_VERIFICATION_SECRET)
  }

  static checkIfPasswordsMatch({ password, hashedPassword }) {
    return bcrypt.compare(password, hashedPassword)
  }

  static getLoginToken(user) {
    return jwt.sign(user, config.JWT_LOGIN_SECRET)
  }
}
