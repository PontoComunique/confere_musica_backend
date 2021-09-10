import Connection from '../database/connection'

export async function createPublication (id, title, author, content, createdAt): Promise<any[]> {
  const data = await Connection('Publication').insert({ id, title, author, content, createdAt })
  return data
}
