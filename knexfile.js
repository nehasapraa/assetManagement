// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USERNAME,
      password: ''
    },
    debug: true,
    seeds: {
          directory: __dirname + '/data/seeds/development'
        }
  },

  test: {
    client: 'postgresql',
      connection: {
        database: process.env.DATABASE_TEST_NAME,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USERNAME,
        password: ''
      },
      debug: true,
      seeds: {
            directory: __dirname + '/data/seeds/development'
          }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
