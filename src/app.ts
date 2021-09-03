import express from 'express'
import PublicationRoutes from './controller/routes/publicationRoutes'

const app = express()

app.use(express.json())
app.use(PublicationRoutes)

export default app
