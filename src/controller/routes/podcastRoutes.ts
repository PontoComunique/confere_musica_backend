import express from 'express'
import Controller from '../controllers/PodcastConstroller'
import * as Validator from '../validators/validator/PodcastValidator'
import verifyToken from '../auth/verifyToken'

const PodcastRoutes = express.Router()

PodcastRoutes.post('/podcast', verifyToken, Validator.createPodcast, Controller.Create)
PodcastRoutes.put('/podcast/:id', Controller.Update)
PodcastRoutes.get('/podcast/:id', Controller.Read)
PodcastRoutes.delete('/podcast/:id', Controller.Delete)
PodcastRoutes.get('/podcast', Controller.ReadAll)

export default PodcastRoutes
