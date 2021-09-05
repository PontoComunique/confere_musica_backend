import Connection from '../database/connection'

export async function createMusicVideo (id, title, author, link, description, createdAt): Promise<any[]> {
  const data = await Connection('MusicVideo').insert({ id, title, author, link, description, createdAt })
  return data
}

export async function updateMusicVideo (id, title, author, link, description, createdAt): Promise<any> {
  const data = await Connection('MusicVideo').where({ id }).update({ title, author, link, description, createdAt })
  return data
}

export async function deleteMusicVideo (id): Promise<any> {
  const data = await Connection('MusicVideo').where({ id }).delete()
  return data
}
export async function readMusicVideo (id): Promise<any[]> {
  const data = await Connection('MusicVideo').where({ id })
  return data
}

export async function readMusicVideos (): Promise<any[]> {
  const data = await Connection('MusicVideo')
  return data
}
