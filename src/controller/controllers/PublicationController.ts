import type { RequestHandler } from 'express'

interface Controller {
  Create: RequestHandler
}

const PublicationController: Controller = {
  async Create (req, res) {
  }
}

export default PublicationController
