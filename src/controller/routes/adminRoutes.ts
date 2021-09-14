import express from 'express'

import Controller from '../controllers/AdminController'
import * as Validator from '../validators/validator/AdminValidator'

const AdminRoutes = express.Router()

AdminRoutes.post('/login', Validator.Login, Controller.Login)
// PublicationRoutes.post('/', auth, validation, Controller.Create, view)

export default AdminRoutes
