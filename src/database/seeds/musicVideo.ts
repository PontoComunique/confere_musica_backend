import { Knex } from 'knex'
import { v4 as uuidv4 } from 'uuid'

export async function seed (knex: Knex): Promise<void> {
  const tableName = 'MusicVideo'
  await knex(tableName).del()

  await knex(tableName).insert([
    {
      id: uuidv4(),
      title: 'rowValue1',
      author: 'dsacsacsa',
      link: 'dhsaudhasudhasu',
      description: 'dhsaudhasudhasu',
      createdAt: new Date()
    }
  ])
};
