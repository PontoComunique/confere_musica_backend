import { Knex } from 'knex'

const tableName = 'live'

export async function up (knex: Knex): Promise<void> {
  return await knex.schema.createTable(tableName, (table) => {
    table.string('link').primary()
    table.string('title').notNullable()
    table.string('lecturer1') // conferecionista
    table.string('lecturer1Subtitle') // conferecionista
    table.string('lecturer2') // conferecionista
    table.string('lecturer2Subtitle') // conferecionista
    table.string('lecturer3') // conferecionista
    table.string('lecturer3Subtitle') // conferecionista
    table.string('mediator1') // conferecionista
    table.string('mediator2') // conferecionista
  })
}

export async function down (knex: Knex): Promise<void> {
  return await knex.schema.dropTable(tableName)
}
