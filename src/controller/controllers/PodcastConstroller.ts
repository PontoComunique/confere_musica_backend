import type { RequestHandler } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { createPodcast, updatePodcast, readPodcast, readPodcasts, deletePodcast } from '../../model/PodcastModel'
import View from '../../view/View'

interface Controller {
  Create: RequestHandler
  Update: RequestHandler
  Delete: RequestHandler
  Read: RequestHandler
  ReadAll: RequestHandler
}

const PodcastController: Controller = {
  async Create (req, res) {
    const id = uuidv4()
    const { title, link } = req.body
    try {
      await createPodcast(id, title, link, new Date())
      View.Success(res, 'Podcast created!')
    } catch (error) {
      console.log(error)
      View.InternalServerError(res)
    }
  },

  async Update (req, res) {
    const { id } = req.params
    const { title, link } = req.body
    try {
      await updatePodcast(id, title, link, new Date())
      View.Success(res, 'Podcast updated!')
    } catch (error) {
      console.log(error)
      View.InternalServerError(res)
    }
  },
  async Delete (req, res) {
    const { id } = req.params
    try {
      await deletePodcast(id)
      View.Success(res, 'Podcast deleted!')
    } catch (error) {
      console.log(error)
      View.InternalServerError(res)
    }
  },
  async Read (req, res) {
    const { id } = req.params
    try {
      const data = await readPodcast(id)
      View.Success(res, 'Success!', data)
    } catch (error) {
      console.log(error)
      View.InternalServerError(res)
    }
  },
  async ReadAll (_, res) {
    try {
      const data = await readPodcasts()
      View.Success(res, 'Success!', data)
    } catch (error) {
      console.log(error)
      View.InternalServerError(res)
    }
  }
}

export default PodcastController
