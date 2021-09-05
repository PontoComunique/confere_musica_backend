import type { RequestHandler } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { createPublication } from '../../model/PublicationModel'
import View from '../../view/View'

interface Controller {
  Create: RequestHandler
}

const PublicationController: Controller = {
  async Create (req, res) {
    const id = uuidv4()
    const { title, author, content } = req.body
    try {
      await createPublication(id, title, author, content, new Date())
      View.Created(res, 'Publication created!')
    } catch (error) {
      View.InternalServerError(res)
    }
  }
}

export default PublicationController
