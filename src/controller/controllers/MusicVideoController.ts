import type { RequestHandler } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { createMusicVideo, updateMusicVideo, deleteMusicVideo, readMusicVideo, readMusicVideos } from '../../model/MusicVideoModel'
import View from '../../view/View'

interface Controller {
  Create: RequestHandler
  Update: RequestHandler
  Delete: RequestHandler
  Read: RequestHandler
  ReadAll: RequestHandler
}

const MusicVideoController: Controller = {
  async Create (req, res) {
    const id = uuidv4()
    const { title, author, link, description } = req.body
    try {
      await createMusicVideo(id, title, author, link, description, new Date())
      View.Created(res, 'MusicVideo created!')
    } catch (error) {
      View.InternalServerError(res)
    }
  },
  async Update (req, res) {
    const { id } = req.params
    const { title, author, link, description } = req.body
    try {
      await updateMusicVideo(id, title, author, link, description, new Date())
      View.Success(res, 'MusicVideo updated!')
    } catch (error) {
      View.InternalServerError(res)
    }
  },
  async Delete (req, res) {
    const { id } = req.params
    try {
      await deleteMusicVideo(id)
      View.Success(res, 'MusicVideo deleted!')
    } catch (error) {
      View.InternalServerError(res)
    }
  },
  async Read (req, res) {
    const { id } = req.params
    try {
      const data = await readMusicVideo(id)
      View.Success(res, 'Success!', data)
    } catch (error) {
      View.InternalServerError(res)
    }
  },
  async ReadAll (_, res) {
    try {
      const data = await readMusicVideos()
      View.Success(res, 'Success!', data)
    } catch (error) {
      View.InternalServerError(res)
    }
  }
}

export default MusicVideoController
