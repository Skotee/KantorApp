import s from 'http-status'

const createError = (status, message) => {
  return { status, message }
}

export default {
  EMAIL_OR_USERNAME_USED: createError(s.BAD_REQUEST, 'User with this username or email already exists'),
  UNAUTHORIZED: createError(s.UNAUTHORIZED, 'Wrong login credentials')
}
