// Update with your config settings.
import path from 'path';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.resolve(__dirname,'src','database','migrations')
    },
    seeds: {
      tableName: 'knex_seeds',
      directory: path.resolve(__dirname,'src','database','seeds')
    }
  },
};
