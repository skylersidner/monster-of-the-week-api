const knex = require('knex');
function createConnection() {
  return knex({
    client: 'pg',
    connection: {
      // TODO: put this in .env
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
    },
    timezone: 'UTC+0'
  })
}

module.exports = { createConnection };