import express from 'express'
import Controller from '../controllers/VideoController'
import * as Validator from '../validators/validator/VideoValidator'
import verifyToken from '../auth/verifyToken'

const PodcastRoutes = express.Router()

PodcastRoutes.post('/create', verifyToken, Validator.createVideo, Controller.Create)

export default PodcastRoutes
