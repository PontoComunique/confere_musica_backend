/* eslint-disable @typescript-eslint/space-before-function-paren */
import Connection from '../database/connection'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
export async function createVideo(id: string, title: string, link: string, description: string, createdAt: Date): Promise<any[]> {
  const data = await Connection('Video').insert({ id, title, link, description, createdAt })
  return data
}
export async function readVideo(id): Promise<any[]> {
  const data = await Connection('Video').where({ id })
  return data
}
export async function readVideos(): Promise<any[]> {
  const data = await Connection('Video')
  return data
}

export async function updateVideo(id, link, title, description): Promise<any> {
  const data = await Connection('Video').where({ id }).update({ link, title, description })
  return data
}

export async function deleteVideo(id): Promise<any> {
  const data = await Connection('Video').where({ id }).delete()
  return data
}
