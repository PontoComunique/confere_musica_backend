import { RequestHandler } from 'express'
import * as ImageHandler from '../../utils/imageHandler'
import { AmazonStorage } from '../../utils/AmazonStorage'
import removeFile from '../../utils/removeFile'
import View from '../../view/View'

interface Controller {
  Create: RequestHandler
  Delete: RequestHandler
  Update: RequestHandler
}

const ImageController: Controller = {
  async Create (req, res) {
    if (!req.file) return View.BadRequest(res, 'Image was not received')

    try {
      await ImageHandler.pushImage(req.file, new AmazonStorage())
      removeFile(req.file.path)
      View.Created(res, 'Image was created!', { storageKey: req.file.filename })
    } catch (error) {
      View.InternalServerError(res)
    }
  },

  async Delete (req, res) {
    const { storageKey } = req.params
    if (!storageKey) return View.BadRequest(res, 'Image storage key was not received')

    try {
      await ImageHandler.deleteImage(storageKey, new AmazonStorage())
      View.Success(res, 'Image was deleted!')
    } catch (error) {
      console.log(error)
      View.InternalServerError(res)
    }
  },
  async Update (req, res) {
    const { storageKey } = req.params
    if (!req.file) return View.BadRequest(res, 'Image was not received')
    if (!storageKey) return View.BadRequest(res, 'Image storage key was not receiver')

    try {
      await ImageHandler.deleteImage(storageKey, new AmazonStorage())
      await ImageHandler.pushImage(req.file, new AmazonStorage())
      removeFile(req.file.path)
      View.Success(res, 'Image was updated!', { storageKey: req.file.filename })
    } catch (error) {
      View.InternalServerError(res)
    }
  }
}

export default ImageController
