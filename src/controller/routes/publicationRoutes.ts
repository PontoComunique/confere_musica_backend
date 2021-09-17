import express from 'express'

import Controller from '../controllers/PublicationController'
import * as Validator from '../validators/validator/PublicationValidator'
import verifyToken from '../auth/verifyToken'

const PublicationRoutes = express.Router()

PublicationRoutes.post('/', verifyToken, Validator.createPublication, Controller.Create)
PublicationRoutes.put('/:id', Controller.Update)
PublicationRoutes.get('/:id', Controller.Read)
PublicationRoutes.delete('/:id', Controller.Delete)
PublicationRoutes.get('/', Controller.ReadAll)

export default PublicationRoutes
