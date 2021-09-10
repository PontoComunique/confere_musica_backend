import express from 'express'
import PublicationRoutes from './controller/routes/publicationRoutes'
import AdminRoutes from './controller/routes/adminRoutes'

const app = express()

app.use(express.json())
app.use(PublicationRoutes)
app.use(AdminRoutes)

export default app
