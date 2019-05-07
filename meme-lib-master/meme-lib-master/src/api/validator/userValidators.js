import joi from 'joi'

export const userCreateValidator = joi.object()
  .keys({
    username: joi
      .string()
      .min(3)
      .max(255)
      .required(),
    email: joi
      .string()
      .email()
      .max(255)
      .required(),
    password: joi
      .string()
      .min(8)
      .max(255)
      .required()
  })

export const userLoginValidator = joi
  .object()
  .keys({
    username: joi
      .string()
      .min(3)
      .max(255)
      .required(),
    email: joi
      .string()
      .email()
      .max(255)
      .required(),
    password: joi
      .string()
      .min(8)
      .required()
  })
  .xor('email', 'username')
  .required()
