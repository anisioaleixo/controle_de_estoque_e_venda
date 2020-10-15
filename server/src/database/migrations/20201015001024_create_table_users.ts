import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users',table => {
        table.increments('id').primary();
        table.string('first_name', 100).notNullable();
        table.string('last_name', 100).notNullable();
        table.string('login', 100).unique().notNullable();
        table.string('password', 100).notNullable();
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users')
}

