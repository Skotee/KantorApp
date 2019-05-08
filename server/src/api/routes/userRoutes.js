import express from 'express'
import UserController from '../../app/controller/UserController'
import validator from 'express-joi-validation'
import { userCreateValidator } from '../validator/userValidators'
import asyncMiddleware from '../middleware/asyncMiddleware'

const router = express.Router()
const validate = validator({ passError: true })

/**
 * Express routes
 */
router
  .route('/')

  .post(validate.body(userCreateValidator), asyncMiddleware(UserController.register))

  .get(asyncMiddleware(UserController.getAll))

export default router
