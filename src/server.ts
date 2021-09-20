import app from './app'
import verifyBreakingEnvVar from './utils/verifyBreakingEnvVar'
import dotenv from 'dotenv'

dotenv.config()
const envVars = ['SECRET', 'BUCKET_NAME', 'AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'AWS_DEFAULT_REGION']
envVars.forEach((envVar) => verifyBreakingEnvVar(envVar))

app.listen(process.env.PORT ?? 3333)
dotenv.config()
