import Connection from '../database/connection'

export async function getAdmin (username: string, password: string): Promise<any[]> {
  const data = await Connection('Admin').where({ username, password })
  return data
}
