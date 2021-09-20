import { Knex } from 'knex'

const tableName = 'live'

export async function up (knex: Knex): Promise<void> {
  return await knex.schema.createTable(tableName, (table) => {
    table.uuid('id').primary()
    table.string('link').notNullable()
    table.string('title').notNullable()
    table.string('lecturer1')
    table.string('lecturer1Subtitle')
    table.string('lecturer1PhotoUrl')
    table.string('lecturer2')
    table.string('lecturer2Subtitle')
    table.string('lecturer2PhotoUrl')
    table.string('lecturer3')
    table.string('lecturer3Subtitle')
    table.string('lecturer3PhotoUrl')
    table.string('mediator1')
    table.string('mediator1PhotoUrl')
    table.string('mediator2')
    table.string('mediator2PhotoUrl')
  })
}

export async function down (knex: Knex): Promise<void> {
  return await knex.schema.dropTable(tableName)
}
