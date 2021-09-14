import type { RequestHandler } from 'express'
import { updateLive } from '../../model/LiveModel'
import View from '../../view/View'

interface Controller {
  Update: RequestHandler
}

const LiveController: Controller = {
  async Update (req, res) {
    const {
      title,
      link,
      lecturer1,
      lecturer1Subtitle,
      lecturer2,
      lecturer2Subtitle,
      lecturer3,
      lecturer3Subtitle,
      mediator1,
      mediator2
    } = req.body
    try {
      await updateLive(
        title,
        link,
        lecturer1,
        lecturer1Subtitle,
        lecturer2,
        lecturer2Subtitle,
        lecturer3,
        lecturer3Subtitle,
        mediator1,
        mediator2
      )
      View.Success(res, 'Live updated!')
    } catch (error) {
      View.InternalServerError(res)
    }
  }
}

export default LiveController
