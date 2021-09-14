import express from 'express'
import Controller from '../controllers/PodcastConstroller'
import * as Validator from '../validators/validator/PodcastValidator'
import verifyToken from '../auth/verifyToken'

const PodcastRoutes = express.Router()

PodcastRoutes.post('/', verifyToken, Validator.createPodcast, Controller.Create)
PodcastRoutes.put('/:id', Controller.Update)
PodcastRoutes.get('/:id', Controller.Read)
PodcastRoutes.delete('/:id', Controller.Delete)
PodcastRoutes.get('/', Controller.ReadAll)

export default PodcastRoutes
