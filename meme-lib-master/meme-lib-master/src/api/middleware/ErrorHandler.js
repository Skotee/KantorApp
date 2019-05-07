import httpStatus from 'http-status'

export default class ErrorHandler {
  static handle(error, req, res, next) {
    const { NODE_ENV = 'production' } = process.env
    let errorToThrow = {}

    if (error.error && error.error.isJoi) {
      errorToThrow = {
        message: error.error.message,
        type: 'Validation error',
        status: httpStatus.UNPROCESSABLE_ENTITY
      }
    } else {
      errorToThrow = {
        message: error.message,
        status: error.status || httpStatus.INTERNAL_SERVER_ERROR,
        type: error.type
      }
    }

    if (NODE_ENV === 'production' || errorToThrow.status >= 500) {
      errorToThrow = {
        status: errorToThrow.status,
        type: errorToThrow.type
      }
    }

    if (errorToThrow.status >= 500) console.log(error)

    res.status(errorToThrow.status)
      .send(errorToThrow)
    next()
  }
}
