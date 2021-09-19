import type { RequestHandler } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { createPublication, updatePublication, deletePublication, readPublication, readPublications } from '../../model/PublicationModel'
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
    const id = uuidv4()
    const { title, author, content } = req.body
    try {
      await createPublication(id, title, author, content, new Date())
      View.Success(res, 'Publication created!')
    } catch (error) {
      View.InternalServerError(res)
    }
  },
  async Update (req, res) {
    const { id } = req.params
    const { title, author, content } = req.body
    try {
      await updatePublication(id, title, author, content, new Date())
      View.Success(res, 'Publication updated!')
    } catch (error) {
      View.InternalServerError(res)
    }
  },
  async Delete (req, res) {
    const { id } = req.params
    try {
      await deletePublication(id)
      View.Success(res, 'Publication deleted!')
    } catch (error) {
      View.InternalServerError(res)
    }
  },
  async Read (req, res) {
    const { id } = req.params
    try {
      const data = await readPublication(id)
      View.Success(res, 'Success!', data)
    } catch (error) {
      View.InternalServerError(res)
    }
  },
  async ReadAll (_, res) {
    try {
      const data = await readPublications()
      View.Success(res, 'Success!', data)
    } catch (error) {
      View.InternalServerError(res)
    }
  }
}

export default PublicationController
