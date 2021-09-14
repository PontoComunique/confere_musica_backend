import { Knex } from 'knex'
import { v4 as uuidv4 } from 'uuid'

export async function seed (knex: Knex): Promise<void> {
  const tableName = 'admin'
  await knex(tableName).del()
  const username = process.env.ADMINUSERNAME ?? 'admin'
  const password = process.env.ADMINPASSWORD ?? 'admin'
  await knex(tableName).insert([
    { id: uuidv4(), username, password }
  ])
};
