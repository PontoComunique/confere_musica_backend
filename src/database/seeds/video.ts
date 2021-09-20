/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/space-before-function-paren */
import { Knex } from 'knex'
import { v4 as uuidv4 } from 'uuid'

export async function seed(knex: Knex): Promise<void> {
    const tableName = 'video'
    // Deletes ALL existing entries
    await knex(tableName).del()

    // Inserts seed entries
    await knex(tableName).insert([
        {
            id: uuidv4(),
            link: 'any',
            title: 'any',
            description: 'any',
            createdAt: new Date()

        }
    ])
};
