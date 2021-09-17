import type { RequestHandler } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { createPublication } from '../../model/PublicationModel'
import pushImage from '../../utils/pushImage'
import { AmazonStorage } from '../../utils/AmazonStorage'
import removeFile from '../../utils/removeFile'
import View from '../../view/View'

interface Controller {
  Create: RequestHandler
}

const PublicationController: Controller = {
  async Create (req, res) {
    if (!req.file) return View.BadRequest(res, 'Image was not received')
    const id = uuidv4()
    const { title, author, content } = req.body
    try {
      await pushImage(req.file, new AmazonStorage())
      await createPublication(id, title, author, content, new Date(), req.file.filename)
      removeFile(req.file)
      return View.Success(res, 'Publication created!')
    } catch (error) {
      return View.InternalServerError(res)
    }
  }
}

export default PublicationController
