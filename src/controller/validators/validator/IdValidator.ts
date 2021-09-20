import { RequestHandler } from 'express'
import { validate, version } from 'uuid'
import View from '../../../view/View'

export const idValidator: RequestHandler = (req, res, next) => {
  const { id } = req.params
  if (!id) {
    return View.BadRequest(res, 'No id was provided')
  }
  if (!validate(id)) {
    return View.BadRequest(res, 'Provided id is not a uuid')
  }
  if (version(id) !== 4) {
    return View.BadRequest(res, 'Provided uuid is not of the correct version')
  }
  next()
}
