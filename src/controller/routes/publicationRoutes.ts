import express from 'express'

import Controller from '../controllers/PublicationController'

const PublicationRoutes = express.Router()

PublicationRoutes.post('/publication', Controller.Create)
// PublicationRoutes.post('/', auth, validation, Controller.Create, view)

export default PublicationRoutes
