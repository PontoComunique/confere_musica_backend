import { Knex } from 'knex'

const tableName = 'admin'

export async function up (knex: Knex): Promise<void> {
  return await knex.schema.createTable(tableName, (table) => {
    table.uuid('id').primary()
    table.string('username').notNullable()
    table.string('password').notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return await knex.schema.dropTable(tableName)
}
