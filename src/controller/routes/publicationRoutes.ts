import express from 'express'

import Controller from '../controllers/PublicationController'
import * as Validator from '../validators/validator/PublicationValidator'
import verifyToken from '../auth/verifyToken'
import { imageParser } from '../../middlewares/imageParser'

const PublicationRoutes = express.Router()

PublicationRoutes.post('/', verifyToken, imageParser, Validator.createPublication, Controller.Create)
PublicationRoutes.put('/:id', Controller.Update)
PublicationRoutes.get('/:id', Controller.Read)
PublicationRoutes.delete('/:id', Controller.Delete)
PublicationRoutes.get('/', Controller.ReadAll)

export default PublicationRoutes
