import type { RequestHandler } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { createPublication, updatePublication, deletePublication, readPublication, readPublications } from '../../model/PublicationModel'
import * as ImageHandler from '../../utils/imageHandler'
import { AmazonStorage } from '../../utils/AmazonStorage'
import View from '../../view/View'

interface Controller {
  Create: RequestHandler
  Update: RequestHandler
  Delete: RequestHandler
  Read: RequestHandler
  ReadAll: RequestHandler
}

const PublicationController: Controller = {
  async Create (req, res) {
    if (!req.file) return View.BadRequest(res, 'Image was not received')
    const id = uuidv4()
    const { title, author, content, imageUrl } = req.body
    try {
      await createPublication(id, title, author, content, new Date(), imageUrl)
      return View.Success(res, 'Publication created!')
    } catch (error) {
      console.log(error)
      return View.InternalServerError(res)
    }
  },
  async Update (req, res) {
    const { id } = req.params
    const { title, author, content, imageUrl } = req.body
    try {
      const data = await readPublication(id)
      await ImageHandler.deleteImage(data[0].imageUrl, new AmazonStorage())
      await updatePublication(id, title, author, content, new Date(), imageUrl)
      View.Success(res, 'Publication updated!')
    } catch (error) {
      console.log(error)
      View.InternalServerError(res)
    }
  },
  async Delete (req, res) {
    const { id } = req.params
    try {
      const data = await deletePublication(id)

      if (data.length < 1) { return View.NotFound(res, 'No Publication with that id') }

      await ImageHandler.deleteImage(data[0], new AmazonStorage())

      return View.Success(res, 'Publication deleted!')
    } catch (error) {
      console.log(error)
      return View.InternalServerError(res)
    }
  },
  async Read (req, res) {
    const { id } = req.params
    try {
      const data = await readPublication(id)
      return View.Success(res, 'Success!', data[0])
    } catch (error) {
      console.log(error)
      return View.InternalServerError(res)
    }
  },
  async ReadAll (_, res) {
    try {
      const data = await readPublications()
      return View.Success(res, 'Success!', data)
    } catch (error) {
      console.log(error)
      return View.InternalServerError(res)
    }
  }
}

export default PublicationController
