import express from 'express'

import Controller from '../controllers/LiveController'
import * as Validator from '../validators/validator/LiveValidator'
import verifyToken from '../auth/verifyToken'

const PublicationRoutes = express.Router()

PublicationRoutes.put('/', verifyToken, Validator.updateLive, Controller.Update)

export default PublicationRoutes
