import Connection from '../database/connection'

const tableName = 'publication'

export async function createPublication (id: string, title: string, author: string, content: string, createdAt: Date, storageKey: string): Promise<any[]> {
  const data = await Connection(tableName).insert({ id, title, author, content, storageKey, createdAt })
  return data
}

export async function updatePublication (id: string, title: string, author: string, content: string, createdAt: Date): Promise<any> {
  const data = await Connection(tableName).where({ id }).update({ title, author, content, createdAt })
  return data
}

export async function deletePublication (id: string): Promise<any> {
  const data = await Connection(tableName).where({ id }).delete().returning('storageKey')
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
