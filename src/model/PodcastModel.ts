import Connection from '../database/connection'

const tableName = 'podcast'

export async function createPodcast (id, title, link, createdAt): Promise<any[]> {
  const data = await Connection(tableName).insert({ id, title, link, createdAt })
  return data
}

export async function updatePodcast (id, title, link, createdAt): Promise<any> {
  const data = await Connection(tableName).where({ id }).update({ title, link, createdAt })
  return data
}

export async function deletePodcast (id): Promise<any> {
  const data = await Connection(tableName).where({ id }).delete()
  return data
}
export async function readPodcast (id): Promise<any[]> {
  const data = await Connection(tableName).where({ id })
  return data
}

export async function readPodcasts (): Promise<any[]> {
  const data = await Connection(tableName)
  return data
}
