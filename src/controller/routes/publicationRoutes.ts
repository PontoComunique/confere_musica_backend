import express from 'express'

import Controller from '../controllers/PublicationController'
import * as Validator from '../validators/validator/PublicationValidator'

const PublicationRoutes = express.Router()

PublicationRoutes.post('/publication', Validator.createPublication, Controller.Create)
// PublicationRoutes.post('/', auth, validation, Controller.Create, view)

export default PublicationRoutes
