import app from './app'
import verifyBreakingEnvVar from './utils/verifyBreakingEnvVar'
import dotenv from 'dotenv'

dotenv.config()
verifyBreakingEnvVar('SECRET')

app.listen(3333)
