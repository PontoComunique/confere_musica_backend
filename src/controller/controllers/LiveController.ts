import { v4 as uuidv4 } from 'uuid'
import type { RequestHandler } from 'express'
import { updateLive, getLive, getAllLive, createLive, deleteLive } from '../../model/LiveModel'
import * as ImageHandler from '../../utils/imageHandler'
import { AmazonStorage } from '../../utils/AmazonStorage'
import View from '../../view/View'

interface Controller {
  Create: RequestHandler
  Update: RequestHandler
  Delete: RequestHandler
  ReadAll: RequestHandler
  Read: RequestHandler
}

const LiveController: Controller = {

  async Create (req, res) {
    const id = uuidv4()
    const {
      title,
      link,
      lecturer1,
      lecturer1Subtitle,
      lecturer1PhotoUrl,
      lecturer2,
      lecturer2Subtitle,
      lecturer2PhotoUrl,
      lecturer3,
      lecturer3Subtitle,
      lecturer3PhotoUrl,
      mediator1,
      mediator1PhotoUrl,
      mediator2,
      mediator2PhotoUrl
    } = req.body
    try {
      await createLive(
        id,
        title,
        link,
        lecturer1,
        lecturer1Subtitle,
        lecturer1PhotoUrl,
        lecturer2,
        lecturer2Subtitle,
        lecturer2PhotoUrl,
        lecturer3,
        lecturer3Subtitle,
        lecturer3PhotoUrl,
        mediator1,
        mediator1PhotoUrl,
        mediator2,
        mediator2PhotoUrl
      )
      View.Created(res, 'Live created!')
    } catch (error) {
      View.InternalServerError(res)
    }
  },
  async Update (req, res) {
    const { id } = req.params
    const {
      title,
      link,
      lecturer1,
      lecturer1Subtitle,
      lecturer1PhotoUrl,
      lecturer2,
      lecturer2Subtitle,
      lecturer2PhotoUrl,
      lecturer3,
      lecturer3Subtitle,
      lecturer3PhotoUrl,
      mediator1,
      mediator1PhotoUrl,
      mediator2,
      mediator2PhotoUrl
    } = req.body
    try {
      const data = await getLive(id)
      if (data.length < 1) { return View.NotFound(res, 'No Live with that id') }
      const thrashImages = [data[0].lecturer1PhotoUrl, data[0].lecturer2PhotoUrl, data[0].lecturer3PhotoUrl, data[0].mediator1PhotoUrl, data[0].mediator2PhotoUrl]
      const urlParser = /https:\/\/.+\.s3\..+\.amazonaws\.com\/(.+)/g

      for (const image of thrashImages) {
        const result = urlParser.exec(image)
        if (result) await ImageHandler.deleteImage(result[1], new AmazonStorage())
      }
      await updateLive(
        id,
        title,
        link,
        lecturer1,
        lecturer1Subtitle,
        lecturer1PhotoUrl,
        lecturer2,
        lecturer2Subtitle,
        lecturer2PhotoUrl,
        lecturer3,
        lecturer3Subtitle,
        lecturer3PhotoUrl,
        mediator1,
        mediator1PhotoUrl,
        mediator2,
        mediator2PhotoUrl
      )
      View.Success(res, 'Live updated!')
    } catch (error) {
      console.log(error)
      View.InternalServerError(res)
    }
  },
  async Read (req, res) {
    const { id } = req.params
    try {
      const data = await getLive(id)
      View.Success(res, 'Live retrieved!', data[0])
    } catch (error) {
      console.log(error)
      View.InternalServerError(res)
    }
  },
  async ReadAll (_, res) {
    try {
      const data = await getAllLive()
      View.Success(res, 'Lives retrieved!', data)
    } catch (error) {
      console.log(error)
      View.InternalServerError(res)
    }
  },
  async Delete (req, res) {
    const { id } = req.params
    try {
      const data = await deleteLive(id)
      if (data.length < 1) { return View.NotFound(res, 'No Live with that id') }
      const thrashImages = [data[0].lecturer1PhotoUrl, data[0].lecturer2PhotoUrl, data[0].lecturer3PhotoUrl, data[0].mediator1PhotoUrl, data[0].mediator2PhotoUrl]
      for (const image of thrashImages) {
        const urlParser = /https:\/\/.+\.s3\..+\.amazonaws\.com\/(.+)/g
        const result = urlParser.exec(image)
        if (result) await ImageHandler.deleteImage(result[1], new AmazonStorage())
      }

      View.Success(res, 'Live deleted!')
    } catch (error) {
      console.log(error)
      View.InternalServerError(res)
    }
  }
}

export default LiveController
