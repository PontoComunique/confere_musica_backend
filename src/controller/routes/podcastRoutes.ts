import express from 'express'
import Controller from '../controllers/PodcastConstroller'
import * as Validator from '../validators/validator/PodcastValidator'
import { idValidator } from '../validators/validator/IdValidator'
import verifyToken from '../auth/verifyToken'

const PodcastRoutes = express.Router()

PodcastRoutes.post('/', verifyToken, Validator.createPodcast, Controller.Create)
PodcastRoutes.put('/:id', verifyToken, Validator.updatePodcast, idValidator, Controller.Update)
PodcastRoutes.get('/:id', idValidator, Controller.Read)
PodcastRoutes.delete('/:id', verifyToken, idValidator, Controller.Delete)
PodcastRoutes.get('/', Controller.ReadAll)

export default PodcastRoutes
