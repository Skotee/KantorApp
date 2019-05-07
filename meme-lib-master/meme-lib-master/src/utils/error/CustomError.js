import HttpStatus from 'http-status'
import errorMessages from './errorMessages'

const isTemplate = message => typeof message === 'function'

export default class CustomError extends Error {
  constructor(errorName, properties = {}) {
    super()

    const { data } = properties

    if (errorMessages[errorName]) {
      const message = errorMessages[errorName]
      this.message = isTemplate(message) ? message(data) : message
      this.status = errorMessages[errorName].status || HttpStatus.INTERNAL_SERVER_ERROR
    } else {
      this.message = 'Internal server error'
      this.status = HttpStatus.INTERNAL_SERVER_ERROR
    }
  }
}
