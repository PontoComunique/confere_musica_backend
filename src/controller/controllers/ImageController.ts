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
      View.Created(res, 'Image was created!', { imageUrl: `https://${process.env.BUCKET_NAME ?? ''}.s3.${process.env.AWS_DEFAULT_REGION ?? ''}.amazonaws.com/${req.file.filename}` })
    } catch (error) {
      console.log(error)
      View.InternalServerError(res)
    }
  },

  async Delete (req, res) {
    const { imageUrl } = req.body
    if (!imageUrl) return View.BadRequest(res, 'Image storage key was not received')
    const urlParser = /https:\/\/.+\.s3\..+\.amazonaws\.com\/(.+)/g
    try {
      const result = urlParser.exec(imageUrl)
      if (!result) return View.BadRequest(res, 'Invalid image URL')
      await ImageHandler.deleteImage(result[1], new AmazonStorage())

      View.Success(res, 'Image was deleted!')
    } catch (error) {
      console.log(error)
      View.InternalServerError(res)
    }
  },
  async Update (req, res) {
    const { imageUrl } = req.body
    if (!req.file) return View.BadRequest(res, 'Image was not received')
    if (!imageUrl) return View.BadRequest(res, 'Image storage key was not receiver')
    const urlParser = /https:\/\/.+\.s3\..+\.amazonaws\.com\/(.+)/g

    try {
      const result = urlParser.exec(imageUrl)
      if (!result) return View.BadRequest(res, 'Invalid image URL')
      await ImageHandler.deleteImage(result[1], new AmazonStorage())

      await ImageHandler.pushImage(req.file, new AmazonStorage())
      removeFile(req.file.path)
      View.Success(res, 'Image was updated!', { imageUrl: `https://${process.env.BUCKET_NAME ?? ''}.s3.${process.env.AWS_DEFAULT_REGION ?? ''}.amazonaws.com/${req.file.filename}` })
    } catch (error) {
      console.log(error)
      View.InternalServerError(res)
    }
  }
}

export default ImageController
