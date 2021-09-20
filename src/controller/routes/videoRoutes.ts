import express from 'express'
import Controller from '../controllers/VideoController'
import * as Validator from '../validators/validator/VideoValidator'
import verifyToken from '../auth/verifyToken'

const PodcastRoutes = express.Router()

PodcastRoutes.post('/', verifyToken, Validator.createVideo, Controller.Create)
PodcastRoutes.get('/:id', Controller.ReadOne)
PodcastRoutes.get('/', Controller.ReadAll)
PodcastRoutes.put('/:id', verifyToken, Controller.Update)
PodcastRoutes.delete('/:id', verifyToken, Controller.DeleteOne)

export default PodcastRoutes
