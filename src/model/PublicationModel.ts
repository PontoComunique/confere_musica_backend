import Connection from '../database/connection'

const tableName = 'publication'

export async function createPublication (id: string, title: string, author: string, content: string, createdAt: Date, imageUrl: string): Promise<any[]> {
  const data = await Connection(tableName).insert({ id, title, author, content, imageUrl, createdAt })
  return data
}

export async function updatePublication (id: string, title: string, author: string, content: string, createdAt: Date, imageUrl: string): Promise<any> {
  const data = await Connection(tableName).where({ id }).update({ title, author, content, createdAt, imageUrl }, 'id')
  return data
}

export async function deletePublication (id: string): Promise<any> {
  const data = await Connection(tableName).where({ id }).delete().returning('imageUrl')
  return data
}

export async function readPublication (id: string): Promise<any[]> {
  const data = await Connection(tableName).where({ id })
  return data
}

export async function readPublications (): Promise<any[]> {
  const data = await Connection(tableName)
  return data
}
