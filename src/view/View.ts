import { Response } from 'express'

function _ResponseBase (statusNumber: number) {
  return function (res: Response, message?: String | undefined, object?: Record<string, any> | undefined) {
    let result
    if (object) { result = message ? { message, result: object } : { result: object } } else { result = message ? { message } : {} }

    return res.status(statusNumber).json(result)
  }
}

const View = {

  Success: _ResponseBase(200),
  Created: _ResponseBase(201),
  NoContent: _ResponseBase(204),
  BadRequest: _ResponseBase(400),
  Unauthorized: _ResponseBase(401),
  NotFound: _ResponseBase(404),
  InternalServerError: _ResponseBase(500)
}

export default View
