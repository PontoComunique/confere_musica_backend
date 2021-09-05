import jwt from 'jsonwebtoken'
import verifyVar from '../../utils/verifyBreakingEnvVar'

function generateToken (params: Record<string, any> = {}): string {
  const secret = verifyVar('SECRET')
  return jwt.sign(params, secret, {
    expiresIn: 3600
  })
}

export default generateToken
