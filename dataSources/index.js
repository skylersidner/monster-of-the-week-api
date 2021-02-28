const { SQLDataSource } = require('datasource-sql');

const { BystanderTypeApi } = require('./BystanderTypeApi')
const { LocationTypeApi } = require('./LocationTypeApi')
const { MonsterTypeApi } = require('./MonsterTypeApi');

const { createConnection } = require('./connection')

// TODO: refactor this elsewhere?
const databaseConnection = createConnection();
class DataSource extends SQLDataSource {}
const db = new DataSource(databaseConnection).db;

function dataSources() {
  return {
    bystanderTypeApi: new BystanderTypeApi(db),
    locationTypeApi: new LocationTypeApi(db),
    monsterTypeApi: new MonsterTypeApi(db),
  }
}
module.exports = {
  BystanderTypeApi,
  LocationTypeApi,
  MonsterTypeApi,
  dataSources,
};