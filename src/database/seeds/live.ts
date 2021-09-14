import { Knex } from 'knex'

export async function seed (knex: Knex): Promise<void> {
  const tableName = 'live'
  // Deletes ALL existing entries
  await knex(tableName).del()

  // Inserts seed entries
  await knex(tableName).insert([
    {
      title: 'Um titulo',
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      lecturer1: 'Carlos Rezende',
      lecturer1Subtitle: 'Alguém que faz som',
      lecturer2: null,
      lecturer2Subtitle: null,
      lecturer3: null,
      lecturer3Subtitle: null,
      mediator1: 'José de Aleluia',
      mediator2: null
    }
  ])
};
