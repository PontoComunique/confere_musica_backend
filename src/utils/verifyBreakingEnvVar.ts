import { exit } from 'node:process'

const verifyBreakingEnvVar = (name: string): string => {
  const envVar = process.env[name]
  if (!envVar) {
    console.log(`Required enviroment variable ${name} was not defined`)
    exit()
  }
  return envVar
}

export default verifyBreakingEnvVar
