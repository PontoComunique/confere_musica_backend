import express from 'express'
import MusicVideoRoutes from './controller/routes/musicVideoRoutes'
import PublicationRoutes from './controller/routes/publicationRoutes'

const app = express()

app.use(express.json())
app.use(PublicationRoutes)
app.use(MusicVideoRoutes)

export default app
