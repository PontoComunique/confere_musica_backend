import express from 'express'

import Controller from '../controllers/ImageController'
import verifyToken from '../auth/verifyToken'
import { imageParser } from '../../middlewares/imageParser'

const PublicationRoutes = express.Router()

PublicationRoutes.post('/', verifyToken, imageParser, Controller.Create)
PublicationRoutes.put('/', verifyToken, imageParser, Controller.Update)
PublicationRoutes.delete('/:id', verifyToken, Controller.Delete)

export default PublicationRoutes
