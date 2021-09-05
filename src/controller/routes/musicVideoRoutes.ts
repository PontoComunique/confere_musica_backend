import express from 'express'

import Controller from '../controllers/MusicVideoController'
import * as Validator from '../validators/validator/MusicVideoValidator'

const MusicVideoRoutes = express.Router()

MusicVideoRoutes.post('/musicVideo', Validator.createMusicVideo, Controller.Create)
MusicVideoRoutes.put('/musicVideo/:id', Controller.Update)
MusicVideoRoutes.get('/musicVideo/:id', Controller.Read)
MusicVideoRoutes.delete('/musicVideo/:id', Controller.Delete)
MusicVideoRoutes.get('/musicVideo', Controller.ReadAll)
// PublicationRoutes.post('/', auth, validation, Controller.Create, view)

export default MusicVideoRoutes
