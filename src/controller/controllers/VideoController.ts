/* eslint-disable @typescript-eslint/space-before-function-paren */
import type { RequestHandler } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { createVideo, readVideo, readVideos, updateVideo, deleteVideo } from '../../model/VideoModel'
import View from '../../view/View'

interface Controller {
  Create: RequestHandler
  ReadOne: RequestHandler
  ReadAll: RequestHandler
  Update: RequestHandler
  DeleteOne: RequestHandler
}

const VideoController: Controller = {
  async Create(req, res) {
    const id = uuidv4()
    const { title, link, description } = req.body
    try {
      await createVideo(id, title, link, description, new Date())
      View.Success(res, 'Video added!')
    } catch (error) {
      View.InternalServerError(res)
    }
  },
  async ReadAll(_, res) {
    try {
      const data = await readVideos()
      View.Success(res, 'Done!', data)
    } catch (error) {
      View.InternalServerError(res)
    }
  },
  async ReadOne(req, res) {
    const { id } = req.params
    try {
      const data = await readVideo(id)
      View.Success(res, 'Done!', data)
    } catch (error) {
      View.InternalServerError(res)
    }
  },
  async Update(req, res) {
    const { id } = req.params
    const { link, title, description } = req.body
    try {
      const data = await updateVideo(id, link, title, description)
      View.Success(res, 'Updated!', data)
    } catch (error) {
      View.InternalServerError(res)
    }
  },
  async DeleteOne(req, res) {
    const { id } = req.params
    try {
      const data = await deleteVideo(id)
      View.Success(res, 'Done!', data)
    } catch (error) {
      View.InternalServerError(res)
    }
  }
}
export default VideoController
