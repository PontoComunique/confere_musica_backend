import express from 'express'
import Controller from '../controllers/VideoController'
import * as Validator from '../validators/validator/VideoValidator'
import verifyToken from '../auth/verifyToken'

const PodcastRoutes = express.Router()

PodcastRoutes.post('/create', verifyToken, Validator.createVideo, Controller.Create)
PodcastRoutes.get('/readOne/:id', verifyToken, Validator.createVideo, Controller.ReadOne)
PodcastRoutes.get('/readAll', verifyToken, Validator.createVideo, Controller.ReadAll)
PodcastRoutes.put('/update/:id', verifyToken, Validator.createVideo, Controller.Update)
PodcastRoutes.delete('/delete/:id', verifyToken, Validator.createVideo, Controller.DeleteOne)

export default PodcastRoutes
