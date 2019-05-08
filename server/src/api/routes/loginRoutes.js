import express from 'express'
import LoginController from '../../app/controller/LoginController'
import validator from 'express-joi-validation'
import asyncMiddleware from '../middleware/asyncMiddleware'
import { userLoginValidator } from '../validator/userValidators'

const router = express.Router()
const validate = validator({ passError: true })

/**
 * Express routes
 */
router
  .route('/')

  .post(validate.body(userLoginValidator), asyncMiddleware(LoginController.login))

export default router
