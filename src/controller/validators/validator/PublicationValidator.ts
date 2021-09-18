import { RequestHandler } from 'express'
import { ValidationError } from 'yup'
import View from '../../../view/View'
import * as Schema from '../schema/PublicationSchema'

export const createPublication: RequestHandler = (req, res, next) => {
  try {
    Schema.CreatePublication.validateSync(req.body, { abortEarly: false })
    next()
  } catch (err) {
    if (err instanceof ValidationError) {
      const errors = err.inner.map(value => ({
        name: value.name,
        message: value.message
      }))
      return View.BadRequest(res, 'Validation error', errors)
    }
    return View.InternalServerError(res, 'Unidentified server error')
  }
}

export const updatePublication: RequestHandler = (req, res, next) => {
  try {
    Schema.UpdatePublication.validateSync(req.body, { abortEarly: false })
    next()
  } catch (err) {
    if (err instanceof ValidationError) {
      const errors = err.inner.map(value => ({
        name: value.name,
        message: value.message
      }))
      return View.BadRequest(res, 'Validation error', errors)
    }
    return View.InternalServerError(res, 'Unidentified server error')
  }
}
