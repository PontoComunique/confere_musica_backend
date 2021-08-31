import { Knex } from 'knex'

const tableName = 'Publication'

export async function up (knex: Knex): Promise<void> {
  return await knex.schema.createTable(tableName, (table) => {
    table.uuid('id').primary()
    table.string('title').notNullable()
    table.string('author').notNullable()
    table.string('created_at').notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return await knex.schema.dropTable(tableName)
}
