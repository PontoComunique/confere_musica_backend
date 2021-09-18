import express from 'express'

import Controller from '../controllers/PublicationController'
import * as Validator from '../validators/validator/PublicationValidator'
import { idValidator } from '../validators/validator/IdValidator'
import verifyToken from '../auth/verifyToken'
import { imageParser } from '../../middlewares/imageParser'

const PublicationRoutes = express.Router()

PublicationRoutes.post('/', verifyToken, imageParser, Validator.createPublication, Controller.Create)
PublicationRoutes.put('/:id', idValidator, imageParser, Controller.Update)
PublicationRoutes.get('/:id', idValidator, Controller.Read)
PublicationRoutes.delete('/:id', idValidator, Controller.Delete)
PublicationRoutes.get('/', Controller.ReadAll)

export default PublicationRoutes
