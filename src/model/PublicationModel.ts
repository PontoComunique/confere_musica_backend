import Connection from '../database/connection'

export async function createPublication (id: string, title: string, author: string, content: string, createdAt: Date): Promise<any[]> {
  const data = await Connection('publication').insert({ id, title, author, content, createdAt })
  return data
}
