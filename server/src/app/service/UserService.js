import UserRepository from '../repository/UserRepository'
import HttpStatus from 'http-status'
import SendgridClient from '../../utils/sendgrid/SendgridClient'
import Crypto from '../../utils/Crypto'
import verifyEmailTemplate from '../../utils/sendgrid/templates/verifyEmailTemplate'
import config from '../../../config/config'
import CustomError from '../../utils/error/CustomError'
import DataManager from '../../utils/DataManager'

export default class UserService {
  static async register({ username, email, password }) {
    const userExists = await UserRepository.getBy({ email, username })
    if (userExists) throw new CustomError('EMAIL_OR_USERNAME_USED')

    password = await Crypto.getHashedPassword(password)

    const user = await UserRepository.create({ username, email, password })
    const verificationCode = await Crypto.getVerificationCode(user)

    await SendgridClient.sendMail({
      to: email,
      subject: 'Verify your email',
      html: verifyEmailTemplate({ username, email, verificationCode, serverURL: config.SERVER_URL })
    })

    return {
      data: user,
      status: HttpStatus.CREATED
    }
  }

  static async login({ username, email, password }) {
    const user = await UserRepository.getBy({ email, username })
    if (!user) throw new CustomError('UNAUTHORIZED')

    const passwordsMatch = await Crypto.checkIfPasswordsMatch({ password, hashedPassword: user.password })
    if (!passwordsMatch) throw new CustomError('UNAUTHORIZED')

    const userPublicData = DataManager.getUserPublicData(user)
    const token = Crypto.getLoginToken(userPublicData)

    return {
      data: token,
      status: HttpStatus.OK
    }
  }

  static getAll() {
    return {
      data: UserRepository.getAll(),
      status: HttpStatus.OK
    }
  }
}
