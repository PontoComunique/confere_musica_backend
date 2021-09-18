import type { RequestHandler } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { createPublication, updatePublication, deletePublication, readPublication, readPublications, readPublicationImage } from '../../model/PublicationModel'
import * as ImageHandler from '../../utils/imageHandler'
import { AmazonStorage } from '../../utils/AmazonStorage'
import removeFile from '../../utils/removeFile'
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
    const { title, author, content } = req.body
    try {
      await ImageHandler.pushImage(req.file, new AmazonStorage())
      await createPublication(id, title, author, content, new Date(), req.file.filename)
      removeFile(req.file.path)
      return View.Success(res, 'Publication created!')
    } catch (error) {
      return View.InternalServerError(res)
    }
  },
  async Update (req, res) {
    const { id } = req.params
    const { title, author, content } = req.body
    try {
      if (req.file) {
        const data = await readPublicationImage(id)
        if (data.length < 1) { return View.NotFound(res, 'No Publication with that id') }
        await ImageHandler.deleteImage(data[0].storageKey, new AmazonStorage())
        await ImageHandler.pushImage(req.file, new AmazonStorage())
        await updatePublication(id, title, author, content, new Date(), req.file.filename)
        await removeFile(req.file.path)
      } else {
        const data = await updatePublication(id, title, author, content, new Date())
        if (data.length < 1) { return View.NotFound(res, 'No Publication with that id') }
      }
      View.Success(res, 'Publication updated!')
    } catch (error) {
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
      return View.InternalServerError(res)
    }
  },
  async Read (req, res) {
    const { id } = req.params
    try {
      const data = await readPublication(id)
      return View.Success(res, 'Success!', data[0])
    } catch (error) {
      return View.InternalServerError(res)
    }
  },
  async ReadAll (_, res) {
    try {
      const data = await readPublications()
      return View.Success(res, 'Success!', data)
    } catch (error) {
      return View.InternalServerError(res)
    }
  }
}

export default PublicationController
