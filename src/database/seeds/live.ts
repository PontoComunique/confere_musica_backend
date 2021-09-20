import { Knex } from 'knex'
import { v4 as uuidv4 } from 'uuid'

export async function seed (knex: Knex): Promise<void> {
  const tableName = 'live'
  // Deletes ALL existing entries
  await knex(tableName).del()

  // Inserts seed entries
  await knex(tableName).insert([
    {
      id: uuidv4(),
      title: 'Um titulo',
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      lecturer1: 'Carlos Rezende',
      lecturer1Subtitle: 'Alguém que faz som 1',
      lecturer1PhotoUrl: 'https://confere-musica-image-dump.s3.sa-east-1.amazonaws.com/dbc0dfa61f0a599d4a09b0ccca20ee77test.png',
      lecturer2: 'Maria Cátia',
      lecturer2Subtitle: 'Alguém que faz som 2',
      lecturer2PhotoUrl: 'https://confere-musica-image-dump.s3.sa-east-1.amazonaws.com/dbc0dfa61f0a599d4a09b0ccca20ee77test.png',
      lecturer3: null,
      lecturer3Subtitle: null,
      lecturer3PhotoUrl: null,
      mediator1: 'José de Aleluia',
      mediator1PhotoUrl: 'https://confere-musica-image-dump.s3.sa-east-1.amazonaws.com/dbc0dfa61f0a599d4a09b0ccca20ee77test.png',
      mediator2: 'Márcia Medeiros',
      mediator2PhotoUrl: 'https://confere-musica-image-dump.s3.sa-east-1.amazonaws.com/dbc0dfa61f0a599d4a09b0ccca20ee77test.png'
    }
  ])
};
