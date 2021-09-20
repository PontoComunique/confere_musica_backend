import Connection from '../database/connection'

const tableName = 'live'

export async function createLive (
  id: string,
  title: string,
  link: string,
  lecturer1: string | null,
  lecturer1Subtitle: string | null,
  lecturer1PhotoUrl: string | null,
  lecturer2: string | null,
  lecturer2Subtitle: string | null,
  lecturer2PhotoUrl: string | null,
  lecturer3: string | null,
  lecturer3Subtitle: string | null,
  lecturer3PhotoUrl: string | null,
  mediator1: string | null,
  mediator1PhotoUrl: string | null,
  mediator2: string | null,
  mediator2PhotoUrl: string | null
): Promise<any> {
  const data = await Connection(tableName).insert({
    id,
    title,
    link,
    lecturer1,
    lecturer1Subtitle,
    lecturer1PhotoUrl,
    lecturer2,
    lecturer2Subtitle,
    lecturer2PhotoUrl,
    lecturer3,
    lecturer3Subtitle,
    lecturer3PhotoUrl,
    mediator1,
    mediator1PhotoUrl,
    mediator2,
    mediator2PhotoUrl
  })
  return data
}

export async function updateLive (
  id: string,
  title: string,
  link: string,
  lecturer1: string | null,
  lecturer1Subtitle: string | null,
  lecturer1PhotoUrl: string | null,
  lecturer2: string | null,
  lecturer2Subtitle: string | null,
  lecturer2PhotoUrl: string | null,
  lecturer3: string | null,
  lecturer3Subtitle: string | null,
  lecturer3PhotoUrl: string | null,
  mediator1: string | null,
  mediator1PhotoUrl: string | null,
  mediator2: string | null,
  mediator2PhotoUrl: string | null
): Promise<any> {
  const data = await Connection(tableName).where({ id }).update({
    title,
    link,
    lecturer1,
    lecturer1Subtitle,
    lecturer1PhotoUrl,
    lecturer2,
    lecturer2Subtitle,
    lecturer2PhotoUrl,
    lecturer3,
    lecturer3Subtitle,
    lecturer3PhotoUrl,
    mediator1,
    mediator1PhotoUrl,
    mediator2,
    mediator2PhotoUrl
  })
  return data
}

export async function deleteLive (id: string): Promise<any> {
  const data = await Connection(tableName).where({ id }).delete().returning(['lecturer1PhotoUrl', 'lecturer2PhotoUrl', 'lecturer3PhotoUrl', 'mediator1PhotoUrl', 'mediator2PhotoUrl'])
  return data
}

export async function getLive (id: string): Promise<any> {
  const data = await Connection(tableName).where({ id })
  return data
}

export async function getAllLive (): Promise<any> {
  const data = await Connection(tableName)
  return data
}
