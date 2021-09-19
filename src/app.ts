import express from 'express'
import PublicationRoutes from './controller/routes/publicationRoutes'
import AdminRoutes from './controller/routes/adminRoutes'
import PodcastRoutes from './controller/routes/podcastRoutes'
import LiveRoutes from './controller/routes/liveRoutes'
import ImageRoutes from './controller/routes/imageRoutes'

const app = express()

app.disable('x-powered-by')
app.use(express.json())

app.use('/podcast', PodcastRoutes)
app.use('/publication', PublicationRoutes)
app.use('/admin', AdminRoutes)
app.use('/live', LiveRoutes)
app.use('/image', ImageRoutes)

export default app
