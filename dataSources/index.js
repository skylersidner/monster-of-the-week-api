const { SQLDataSource } = require('datasource-sql');

const { BystanderTypeApi } = require('./BystanderTypeApi');
const { CountdownsApi } = require('./CountdownsApi');
const { LocationTypeApi } = require('./LocationTypeApi');
const { MonsterPowerApi } = require('./MonsterPowerApi');
const { MonsterTypeApi } = require('./MonsterTypeApi');
const { MysteryApi } = require('./MysteryApi');

const { createConnection } = require('./connection')

// TODO: refactor this elsewhere?
const databaseConnection = createConnection();
class DataSource extends SQLDataSource {}
const db = new DataSource(databaseConnection).db;

function dataSources() {
  return {
    bystanderTypeApi: new BystanderTypeApi(db),
    countdownsApi: new CountdownsApi(db),
    locationTypeApi: new LocationTypeApi(db),
    monsterPowerApi: new MonsterPowerApi(db),
    monsterTypeApi: new MonsterTypeApi(db),
    mysteryApi: new MysteryApi(db),
  }
}
module.exports = {
  BystanderTypeApi,
  CountdownsApi,
  LocationTypeApi,
  MonsterPowerApi,
  MonsterTypeApi,
  MysteryApi,
  dataSources,
};