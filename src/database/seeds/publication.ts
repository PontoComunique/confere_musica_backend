import { Knex } from 'knex'
import { v4 as uuidv4 } from 'uuid'

export async function seed (knex: Knex): Promise<void> {
  const tableName = 'publication'
  await knex(tableName).del()

  // Inserts seed entries
  await knex(tableName).insert([
    {
      id: uuidv4(),
      title: 'rowValue1',
      author: 'dsacsacsa',
      content: 'dhsaudhasudhasu',
      storageKey: 'dbc0dfa61f0a599d4a09b0ccca20ee77test.png',
      createdAt: new Date()
    }
  ])
};
