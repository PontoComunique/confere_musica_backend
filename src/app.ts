import express from 'express'
import PublicationRoutes from './controller/routes/publicationRoutes'

const app = express()

app.use(PublicationRoutes)

export default app
