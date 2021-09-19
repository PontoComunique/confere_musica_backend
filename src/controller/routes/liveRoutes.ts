import express from 'express'

import Controller from '../controllers/LiveController'
import * as Validator from '../validators/validator/LiveValidator'
import verifyToken from '../auth/verifyToken'

const PublicationRoutes = express.Router()

PublicationRoutes.post('/', verifyToken, Validator.createLive, Controller.Create)
PublicationRoutes.put('/', verifyToken, Validator.updateLive, Controller.Update)
PublicationRoutes.delete('/:id', verifyToken, Controller.Delete)
PublicationRoutes.get('/', Controller.ReadAll)
PublicationRoutes.get('/:id', Controller.Read)

export default PublicationRoutes
