import Connection from '../database/connection'

export async function createPodcast (id, title, link, createdAt): Promise<any[]> {
  const data = await Connection('Podcast').insert({ id, title, link, createdAt })
  return data
}

export async function updatePodcast (id, title, link, createdAt): Promise<any> {
  const data = await Connection('Podcast').where({ id }).update({ title, link, createdAt })
  return data
}

export async function deletePodcast (id): Promise<any> {
  const data = await Connection('Podcast').where({ id }).delete()
  return data
}
export async function readPodcast (id): Promise<any[]> {
  const data = await Connection('Podcast').where({ id })
  return data
}

export async function readPodcasts (): Promise<any[]> {
  const data = await Connection('Podcast')
  return data
}
