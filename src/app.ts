import express from 'express'
import PublicationRoutes from './controller/routes/publicationRoutes'
import AdminRoutes from './controller/routes/adminRoutes'
import PodcastRoutes from './controller/routes/podcastRoutes'

const app = express()

app.use(express.json())
app.use(PublicationRoutes)
app.use(AdminRoutes)
app.use(PodcastRoutes)

export default app
