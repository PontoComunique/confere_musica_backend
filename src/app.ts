import express from 'express'
import cors from 'cors'
import PublicationRoutes from './controller/routes/publicationRoutes'
import AdminRoutes from './controller/routes/adminRoutes'
import PodcastRoutes from './controller/routes/podcastRoutes'
import LiveRoutes from './controller/routes/liveRoutes'
import VideoRoutes from './controller/routes/videoRoutes'
import ImageRoutes from './controller/routes/imageRoutes'

/* const corsOptions = {
  origin: 'https://www.conferemusica.com.br/'
} */

const app = express()

// app.use(cors(corsOptions))
app.use(cors())
app.disable('x-powered-by')
app.use(express.json())

app.use('/podcast', PodcastRoutes)
app.use('/publication', PublicationRoutes)
app.use('/admin', AdminRoutes)
app.use('/live', LiveRoutes)
app.use('/video', VideoRoutes)
app.use('/image', ImageRoutes)

export default app
