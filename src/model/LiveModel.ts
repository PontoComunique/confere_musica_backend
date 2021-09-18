import Connection from '../database/connection'

const tableName = 'live'

export async function updateLive (
  title: string,
  link: string,
  lecturer1: string | null,
  lecturer1Subtitle: string | null,
  lecturer2: string | null,
  lecturer2Subtitle: string | null,
  lecturer3: string | null,
  lecturer3Subtitle: string | null,
  mediator1: string | null,
  mediator2: string | null
): Promise<any> {
  const data = await Connection(tableName).update({
    title,
    link,
    lecturer1,
    lecturer1Subtitle,
    lecturer2,
    lecturer2Subtitle,
    lecturer3,
    lecturer3Subtitle,
    mediator1,
    mediator2
  })
  return data
}

export async function getLive (): Promise<any> {
  const data = await Connection(tableName)
  return data
}
