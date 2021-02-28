const { SQLDataSource } = require('datasource-sql');
const { MonsterTypeApi } = require('./MonsterTypeApi');

const { createConnection } = require('./connection')

// TODO: refactor this elsewhere?
const databaseConnection = createConnection();
class DataSource extends SQLDataSource {}
const db = new DataSource(databaseConnection).db;

function dataSources() {
  return {
    monsterTypeApi: new MonsterTypeApi(db),
  }
}
module.exports = {
  dataSources,
};