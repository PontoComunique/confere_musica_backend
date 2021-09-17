import Connection from '../database/connection'

const tableName = 'publication'

export async function createPublication (id: string, title: string, author: string, content: string, createdAt: Date): Promise<any[]> {
  const data = await Connection(tableName).insert({ id, title, author, content, createdAt })
  return data
}

export async function updatePublication (id, title, author, content, createdAt): Promise<any> {
  const data = await Connection(tableName).where({ id }).update({ title, author, content, createdAt })
  return data
}

export async function deletePublication (id): Promise<any> {
  const data = await Connection(tableName).where({ id }).delete()
  return data
}
export async function readPublication (id): Promise<any[]> {
  const data = await Connection(tableName).where({ id })
  return data
}

export async function readPublications (): Promise<any[]> {
  const data = await Connection(tableName)
  return data
}
