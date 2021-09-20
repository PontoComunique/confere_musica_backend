/* eslint-disable @typescript-eslint/space-before-function-paren */
import Connection from '../database/connection'

export async function getAdmin(username: string, password: string): Promise<any[]> {
  const data = await Connection('admin').where({ username, password })
  return data
}
