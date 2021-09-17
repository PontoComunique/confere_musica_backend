import Connection from '../database/connection'

export async function createPublication (id: string, title: string, author: string, content: string, createdAt: Date, storageKey: string): Promise<any[]> {
  const data = await Connection('publication').insert({ id, title, author, content, storageKey, createdAt })
  return data
}
